import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { trpc } from "../utils/trpc";

const Home = () => {
	const router = useRouter();
	// if there is session and slug for workspace, redirect to workspace
	//  if there is only session and no slug, redirect to create workspace
	//  if there is no session, show home page
	const { data: session, status } = useSession();
	const { data: workspace, isFetching: isFetchingWorkspace } =
		trpc.workspace.fetchUserWorkspace.useQuery({} as unknown as void, {
			refetchOnWindowFocus: false,
		});

	useEffect(() => {
		if (session && workspace) {
			router.push(`/${workspace.slug}`);
			return;
		}
	}, [router, session, status, workspace]);

	if (status === "loading" || isFetchingWorkspace) return <Loading />;

	if (session && !workspace) {
		const CreateWorkSpaceComponent = dynamic(
			() => import("../components/CreateWorkspace"),
			{ ssr: true },
		);
		return <CreateWorkSpaceComponent />;
	} else {
		return <div>home page</div>;
	}
};

export default Home;
