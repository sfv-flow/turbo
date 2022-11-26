import { protectedProcedure, router } from "../trpc";

export const userRouter = router({
	fetchUser: protectedProcedure.query(async ({ ctx }) => {
		const user = await ctx.prisma.user.findUnique({
			where: {
				id: ctx.session.user.id,
			},
		});
		return user;
	}),
});
