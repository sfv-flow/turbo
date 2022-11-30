import { trpc } from "../utils/trpc";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const { data: workspace, isFetched: workspaceIsFetched } =
		trpc.workspace.fetchUserWorkspace.useQuery();
	useEffect(() => {
		if (session && workspace) {
			router.push(`/${workspace.slug}`);
		}
		if (session && !workspace) {
			router.push(`/`);
		}
	}, [router, session, workspace]);

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
