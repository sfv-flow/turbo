import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Loading from "../components/Loading";
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
	// 			staleTime: 1000 * 60 * 10, // 10 minutes
	// 	});

	if (status === "loading") return <Loading />;

	const CreateWorkSpaceComponent = dynamic(
		() => import("../components/CreateWorkspace"),
		{ ssr: true },
	);
	return <CreateWorkSpaceComponent />;
};

export default Join;
