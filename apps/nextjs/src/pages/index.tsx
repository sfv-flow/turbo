import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

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
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm();

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
							{/* Workspace Name Field */}
							<div className="mb-6">
								<div className="text-[#eeeffc]">
									<label className="mb-1 block pl-[2px]">
										<span className="text-left text-[0.8125rem] font-medium">
											Workspace Name
										</span>
									</label>
									<input
										className="m-0 h-12 w-full rounded-[4px] border border-[#393a4b] bg-[#151621] p-3 text-[0.8125rem] outline-none transition-[border] duration-150 focus:border-[#6C79FF] focus:shadow-none"
										{...register("workspaceName", { required: true })}
									/>
								</div>
							</div>
							<div className="mb-6 text-[#eeeffc]">
								{/* Workspace url field */}
								<label className="mb-1 block pl-[2px]">
									<span className="text-left text-[0.8125rem] font-medium">
										Workspace URL
									</span>
								</label>
								<div>
									<div className="relative items-center">
										{/* placeholder URL */}
										<div className="pointer-events-none absolute top-3 left-3 ">
											<span className="text-left text-[13px] font-medium text-[#858699]">
												{"flowapp.so"}
												{"/"}
											</span>
										</div>
										<input
											autoComplete="off"
											className="m-0 h-12 w-full appearance-none rounded-[4px] border border-[#393a4b] bg-[#151621] p-3 pl-[84.5547px] text-[13px] font-medium outline-none transition-[border] duration-150 focus:border-[#6C79FF] focus:shadow-none"
											{...register("workspaceSlug", { required: true })}
										/>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* logout button */}
			<div
				className="fixed top-6 right-6 inline-flex flex-initial flex-row items-center justify-center"
				style={{ WebkitBoxAlign: "center", WebkitBoxPack: "center" }}
			>
				<button
					onClick={() => {
						signOut();
					}}
					className="m-0 inline-flex h-8 min-w-[32px] flex-shrink-0 select-none items-center justify-center whitespace-nowrap rounded-[4px] border border-transparent py-0 px-3 text-xs font-medium text-[#d2d3e0] shadow-none outline-none duration-150 [transition-property:border,background-color,color,box-shadow,opacity] hover:bg-[#272832] hover:text-[#EEEFFC] hover:duration-[0]"
					draggable="false"
					style={{ WebkitBoxAlign: "center", WebkitBoxPack: "center" }}
				>
					log out
				</button>
			</div>
		</div>
	);
};

export default Home;
