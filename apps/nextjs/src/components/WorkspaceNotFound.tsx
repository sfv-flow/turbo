import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";

const WorkspaceNotFound = () => {
	const { data: session } = useSession({ required: true });
	const { data: workspace } = trpc.workspace.fetchUserWorkspace.useQuery();
	const router = useRouter();

	return (
		<div className="relative flex h-full flex-initial flex-col overflow-auto bg-[#191a23]">
			<div
				className="flex min-h-[540px] flex-auto flex-shrink-0 flex-col items-center justify-center overflow-x-hidden py-12"
				style={{
					WebkitBoxAlign: "center",
					WebkitBoxPack: "center",
				}}
			>
				{/* The text showing no workspace found */}
				<div
					className="mx-auto mt-[86px] mb-auto flex flex-initial flex-col items-center"
					style={{
						WebkitBoxAlign: "center",
					}}
				>
					<div className="mb-8 h-[84px] w-[84px] flex-shrink-0"></div>
					<span className="my-6 mx-0 max-w-[500px] text-center text-lg font-medium leading-normal text-[#eeeffc] ">
						This workspace does not exist.
						{/* text-[#3c4149] */}
					</span>
				</div>
				{/* User Info */}
				<div
					className="fixed top-6 left-6 inline-flex flex-initial flex-row items-center justify-center"
					style={{ WebkitBoxAlign: "center", WebkitBoxPack: "center" }}
				>
					<button
						draggable="false"
						className="over:bg-[#272832] m-0 inline select-none overflow-hidden whitespace-nowrap rounded border-0 bg-transparent p-2 text-left text-[#eeeffc] transition-colors duration-150 hover:bg-[#272832] hover:text-[#EEEFFC] hover:duration-[0]"
					>
						<div className="flex flex-initial flex-col">
							<span className="whitespace-nowrap text-left text-xs text-[#858699] duration-150 [transition-property:color,fill]">
								Logged in as:
							</span>
							<span className="mt-[5px] text-ellipsis text-left text-[0.8175rem] font-medium text-[#d2d3e0] duration-150 [transition-property:color,fill] hover:text-[#eeeffc]">
								{session?.user.email}
							</span>
						</div>
					</button>
				</div>
				{/* Go back to workspace button */}
				<div
					className="fixed top-6 right-6 inline-flex flex-initial flex-row items-center justify-center"
					style={{ WebkitBoxAlign: "center", WebkitBoxPack: "center" }}
				>
					<button
						onClick={() => {
							router.push(`/${workspace?.slug ? workspace.slug : "/"}`);
						}}
						className="m-0 inline-flex h-8 min-w-[32px] flex-shrink-0 select-none items-center justify-center whitespace-nowrap rounded border border-transparent bg-transparent py-0 px-3 text-xs font-medium text-[#d2d3e0] shadow-none outline-none duration-150 [transition-property:border,background-color,color,box-shadow,opacity] hover:bg-[#272832] hover:text-[#EEEFFC] hover:duration-[0]"
						draggable="false"
						style={{ WebkitBoxAlign: "center", WebkitBoxPack: "center" }}
					>
						Go Back To Flow
					</button>
				</div>
			</div>
		</div>
	);
};

export default WorkspaceNotFound;
