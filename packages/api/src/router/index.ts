import { workspaceRouter } from "./workspace";
import { router } from "../trpc";
import { postRouter } from "./post";
import { authRouter } from "./auth";

export const appRouter = router({
	post: postRouter,
	auth: authRouter,
	workspace: workspaceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
