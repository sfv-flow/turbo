import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SideBar from "../components/SideBar";
import { trpc } from "../utils/trpc";

const Workspace = () => {
	const router = useRouter();

	// with require being true the user will be directly pushed to the login page if they are not logged in
	const { data: session } = useSession({
		required: true,
	});

	const { data: workspaceData } = trpc.workspace.fetchWorkspaceDetails.useQuery(
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		{
			// TODO: better logic
			workspaceSlug: router.query.slug?.length
				? (router.query.slug[0] as string)
				: "",
		},
	);

	if (!session) return null;
	return (
		<div
			className="fixed flex h-full min-h-full w-full flex-row overflow-hidden pr-[env(safe-area-inset-right,0px)] pl-[env(safe-area-inset-left,0px)] text-[#eeeffc] [border-top:none] lg:static lg:z-auto"
			style={{ WebkitBoxAlign: "stretch" }}
		>
			<SideBar workspaceName={workspaceData?.name as string} />
			<main
				className="relative flex flex-initial flex-grow flex-col place-items-stretch overflow-auto [scrollbar-gutter:auto]"
				style={{ WebkitBoxAlign: "stretch", WebkitBoxFlex: 1 }}
			>
				This would be the main content
			</main>
		</div>
	);
};

export default Workspace;
