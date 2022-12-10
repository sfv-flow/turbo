import { trpc } from "../utils/trpc";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../components/Loading";

const Login = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const {
		data: workspace,
		isFetching: FetchingWorkspace,
		isFetched: workspaceIsFetched,
	} = trpc.workspace.fetchUserWorkspace.useQuery();

	if (!FetchingWorkspace) return <Loading />;

	if (workspace && session) {
		router.replace(`/${workspace.slug}`);
		return null;
	}

	if (!workspace && session) {
		console.log("no workspace");
		router.replace(`/`);
		return null;
	}

	if (!session && workspaceIsFetched) {
		const LoginCard = dynamic(() => import("../components/LoginCard"), {
			ssr: true,
		});

		return (
			<div className="flex h-full flex-auto flex-shrink-0 flex-col bg-gradient-to-b from-[#EFF1F4] to-white/50">
				<LoginCard />
			</div>
		);
	}
};

export default Login;
