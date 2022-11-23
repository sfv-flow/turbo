import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";

const Home = () => {
	const router = useRouter();
	// if there is session and slug for workspace, redirect to workspace
	//  if there is only session and no slug, redirect to create workspace
	//  if there is no session, show home page
	const { data: session, status } = useSession();
	const { data: workspaces } = trpc.workspace.fetchUserWorkspaces.useQuery(
		{} as unknown as void,
		{ refetchOnWindowFocus: false },
	);
	const { mutate } = trpc.workspace.createWorkspace.useMutation();

	if (status === "loading") return null;

	if (session && workspaces?.length) {
		return router.push(`/${workspaces[0]?.slug}`);
	}

	if (session && !workspaces?.length) {
		return <CreateWorkSpaceComponent />;
	}

	return <div>home page</div>;
};

export const CreateWorkSpaceComponent = () => {
	return (
		<div className="relative flex h-full flex-initial flex-col overflow-auto bg-[#191a23]">
			<div
				className="flex min-h-[540px] flex-auto flex-shrink-0 flex-col items-center justify-center overflow-x-hidden py-12"
				style={{
					WebkitBoxAlign: "center",
					WebkitBoxPack: "center",
				}}
			>
				<span className="mb-6 text-center text-2xl font-medium leading-8 tracking-[-0.01em] text-[#eeeffc]">
					Create a workspace
				</span>
				<span className="mb-8 w-[620px] max-w-[440px] text-center leading-[1.4375rem] text-[#858699]">
					Workspaces are shared environments where teams can work on projects,
					cycles and tasks.
				</span>
				<div className="w-[460px] max-w-[90vw] overflow-hidden bg-[#1d1e2b] p-6 [box-shadow:rgb(0_0_0_/_15%)_0px_5px_20px]">
					<div className="flex flex-initial flex-col">
						{/* create workspace form */}
						<form>
							<div className="mb-6">
								<div className="text-[#eeeffc]">
									<label className="mb-1 block pl-[2px]">
										<span className="text-left text-[0.8125rem] font-medium">
											Workspace Name
										</span>
									</label>
									<input className="transition-color m-0 h-12 w-full rounded-[4px] border border-[#393a4b] bg-[#151621] p-3 text-[0.8125rem] outline-none duration-150 focus:border-[#6C79FF] focus:shadow-none" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
