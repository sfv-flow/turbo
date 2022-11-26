import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { trpc } from "../utils/trpc";

const Join = () => {
	// if there is session and slug for workspace, redirect to workspace
	//  if there is only session and no slug, redirect to create workspace
	//  if there is no session, show home page
	const { data: session, status } = useSession({
		required: true,
	});
	// const { data: workspace, isFetching: isFetchingWorkspace } =
	// 	trpc.workspace.fetchUserWorkspace.useQuery({} as unknown as void, {
	// 		refetchOnWindowFocus: false,
	// 	});

	if (status === "loading") return null;

	const CreateWorkSpaceComponent = dynamic(
		() => import("../components/CreateWorkspace"),
		{ ssr: true },
	);
	return <CreateWorkSpaceComponent />;
};

export default Join;
