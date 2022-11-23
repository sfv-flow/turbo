import { protectedProcedure, router } from "../trpc";
import { z } from "zod";

export const workspaceRouter = router({
	createWorkspace: protectedProcedure
		.input(
			z.object({
				workspaceName: z.string(),
				workSpaceSlug: z.string(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { workspaceName, workSpaceSlug } = input;
			// workspace slug that has been passed here is valid that is not being used by any other workspace
			// create workspace
			const workspace = await ctx.prisma.workspace.create({
				data: {
					name: workspaceName,
					slug: workSpaceSlug,
				},
			});
			return workspace;
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
});
