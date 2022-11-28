import { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { prisma } from "@flow/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	pages: {
		signIn: "/login",
	},
	events: {
		signIn: async (event) => {
			//  check if it's a new user, if it is, send a discord message
			const isNewUser = event.isNewUser;
			if (isNewUser) {
				const form = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						// the username to be displayed
						username: "Flow sign up",
						// embeds to be sent
						embeds: [
							{
								// decimal number colour of the side of the embed of #6366f1
								color: 0x6366f1,
								// embed title
								title: "New user signed up for Flow!",

								fields: [
									{
										name: `Email`,
										value: event.profile?.email,
									},
								],
							},
						],
					}),
				};
				await fetch(
					// send a discord message with the contact info, we will send it as discord embed
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					process.env.DISCORD_WEBHOOK_NEWUSER!,
					form,
				);
			}
		},
	},
	session: {
		maxAge: 24 * 60 * 60, // 24 hours
		updateAge: 24 * 60 * 60, // 24 hours
	},
	adapter: PrismaAdapter(prisma),
	callbacks: {
		session({ session, user }) {
			session.user.id = user.id;
			return session;
		},
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		// ...add more providers here
	],
};
