import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import SideBar from "../SideBar";

const Container = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	// with require being true the user will be directly pushed to the login page if they are not logged in
	const { data: session } = useSession({
		required: true,
	});

	const { data: workspaceData, isFetched: workspaceIsFetched } =
		trpc.workspace.fetchWorkspaceDetails.useQuery(
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			{
				// TODO: better logic
				workspaceSlug: router.isReady ? (router.query.slug as string) : "",
			},
			{
				refetchOnWindowFocus: false,
			},
		);

	if (!workspaceIsFetched) {
		return <div>Loading...</div>;
	}

	if (!workspaceData && session) {
		// TEMP
		return <span>404</span>;
	}

	return (
		<div
			className="fixed flex h-full min-h-full w-full flex-row overflow-hidden pr-[env(safe-area-inset-right,0px)] pl-[env(safe-area-inset-left,0px)] text-[#eeeffc] [border-top:none] lg:static lg:z-auto"
			style={{ WebkitBoxAlign: "stretch" }}
		>
			{session && workspaceData && <SideBar workspace={workspaceData} />}
			<main
				className="relative flex flex-initial flex-grow flex-col place-items-stretch overflow-auto text-black [scrollbar-gutter:auto]"
				style={{ WebkitBoxAlign: "stretch", WebkitBoxFlex: 1 }}
			>
				{session && workspaceData && children}
			</main>
		</div>
	);
};

export default Container;
