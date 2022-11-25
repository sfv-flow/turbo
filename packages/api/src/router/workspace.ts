import { protectedProcedure, router } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const workspaceRouter = router({
	createWorkspace: protectedProcedure
		.input(
			z.object({
				workspaceName: z.string(),
				workspaceSlug: z.string(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { workspaceName, workspaceSlug } = input;
			const isWorkspaceSlugAvailable = await ctx.prisma.workspace.findUnique({
				where: {
					slug: workspaceSlug,
				},
			});
			if (isWorkspaceSlugAvailable == null) {
				// workspace slug that has been passed here is valid that is not being used by any other workspace
				// create workspace
				const workspace = await ctx.prisma.workspace.create({
					data: {
						name: workspaceName,
						slug: workspaceSlug,
						users: {
							connect: {
								id: ctx.session.user.id,
							},
						},
					},
				});
				return workspace;
			} else {
				// workspace slug that has been passed here is not valid that is being used by another workspace
				// throw error
				throw new TRPCError({
					code: "CONFLICT",
					message:
						"This workspace URL is already reserved. Please select another one.",
				});
			}
		}),

	fetchUserWorkspaces: protectedProcedure.query(async ({ ctx }) => {
		const userWorkspaces = await ctx.prisma.workspace.findMany({
			where: {
				users: {
					some: {
						id: ctx.session?.user.id,
					},
				},
			},
		});
		return userWorkspaces;
	}),
	fetchUserWorkspace: protectedProcedure.query(async ({ ctx }) => {
		const userWorkspace = await ctx.prisma.workspace.findFirst({
			where: {
				users: {
					some: {
						id: ctx.session?.user.id,
					},
				},
			},
		});
		return userWorkspace;
	}),
	fetchWorkspaceDetails: protectedProcedure
		.input(
			z.object({
				workspaceSlug: z.string(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const { workspaceSlug } = input;
			const workspaceDetails = await ctx.prisma.workspace.findUnique({
				where: {
					slug: workspaceSlug,
				},
			});
			return workspaceDetails;
		}),
});
