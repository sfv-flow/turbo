import { Workspace } from "@flow/db";
import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import UserContextMenu from "../menu/userContext";
import WorkspaceContextMenu from "../menu/workspaceContext";
import SearchBar from "./SearchBar";
import AccountSettingsItems from "./AccountSettingsItems";

const SettingSidebar = ({
	workspace,
}: {
	workspace: Workspace | null | undefined;
}) => {
	const router = useRouter();
	const [sideBarOpen, setSideBarOpen] = useState(true);
	const { data: user } = trpc.user.fetchUser.useQuery();

	const { data: workspaces } = trpc.workspace.fetchUserWorkspaces.useQuery(
		{} as unknown as void,
		{ refetchOnWindowFocus: false },
	);

	return (
		<>
			{/* {sideBarOpen && <div className="fixed inset-0 z-[1] bg-transparent" />} */}
			<nav
				className={clsx(
					"absolute top-0 bottom-0 z-[2] box-border flex h-full w-[220px] min-w-[250px] max-w-[362px] flex-shrink-0 select-none flex-col bg-white shadow-[rgba(0,_0,_0,_0.07)_0px_0px_16px] backdrop-filter-none [border-right:1px_solid_#EFF1F4] [transition:left_0.25s_ease-out_0s,box-shadow_0.15s_0s] lg:relative lg:min-w-[220px] lg:max-w-[330px] lg:shadow-none lg:[transition:opacity_0.05s_ease-in-out_0s]",
					!sideBarOpen ? "-left-[362px]" : "left-0",
				)}
			>
				{/* First Section - <- Close Settings button*/}
				<div
					className="flex h-[68px] flex-initial flex-row items-center py-5 pr-8 pl-3"
					style={{
						WebkitBoxAlign: "center",
					}}
				>
					<Link
						href={{
							pathname: "/[slug]",
							query: { slug: router.query.slug },
						}}
						draggable="false"
						className="m-0 flex select-none items-center rounded-sm border-0 bg-transparent p-0 text-left text-[#282a30] transition-colors"
					>
						<svg
							width="11"
							height="18"
							viewBox="0 0 11 18"
							fill="#6B6F76"
							className="ml-[17px] mr-[15px] h-3 flex-shrink-0 fill-[#90959d]"
						>
							<path d="M3.68293 8.63202L3.30966 8.99195L3.68293 9.35188L10.1643 15.6015C10.6051 16.0265 10.6028 16.7325 10.162 17.1712C9.70399 17.6104 8.96011 17.6096 8.5031 17.1689L0.83567 9.77564C0.388109 9.34408 0.388109 8.65592 0.83567 8.22436L8.5031 0.83107C8.96089 0.389643 9.70653 0.389643 10.1643 0.83107C10.6119 1.26263 10.6119 1.95079 10.1643 2.38235L3.68293 8.63202Z"></path>
						</svg>
						<span className="text-[18px] font-medium leading-normal">
							Settings
						</span>
					</Link>
				</div>

				{/* Second Section (only user account for now, add workspaces later) */}
				<div className="flex h-[calc(100%_-_68px)] flex-initial overflow-y-auto px-6 pt-3 pb-6">
					{/*  (only user account for now, add workspaces later) */}
					<div className="mb-6">
						<span className="flex flex-row text-[13px] font-medium text-[#6b6f76]">
							<span className="relative -bottom-[2px] pl-[3px] pr-[13px] text-[13px] font-medium">
								<svg
									width="16"
									height="16"
									viewBox="1 1 14 14"
									fill="#6B6F76"
									className="h-w w-4"
								>
									<path d="M8 4C6.89545 4 6 4.89545 6 6V6.5C6 7.60455 6.89545 8.5 8 8.5C9.10455 8.5 10 7.60455 10 6.5V6C10 4.89545 9.10455 4 8 4Z"></path>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8 15C11.866 15 15 11.866 15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8C1 11.866 4.13403 15 8 15ZM5.12134 10.8787L4.1109 11.8891C3.1156 10.8938 2.5 9.5188 2.5 8C2.5 4.96246 4.96246 2.5 8 2.5C11.0375 2.5 13.5 4.96246 13.5 8C13.5 9.5188 12.8844 10.8938 11.8891 11.8891L10.8787 10.8787C10.316 10.3161 9.55298 10 8.75739 10H7.24261C6.44702 10 5.68396 10.316 5.12134 10.8787Z"
									></path>
								</svg>
							</span>
							Account
						</span>
						<AccountSettingsItems
							title={"Profile"}
							router={router}
							href={"/settings/account/profile"}
						/>
						<AccountSettingsItems
							title={"Preferences"}
							router={router}
							href={"/settings/account/preferences"}
						/>
					</div>
				</div>
				{/* Icon to control nav in mobile view */}
				<button
					style={{ WebkitBoxAlign: "center", WebkitBoxPack: "center" }}
					className="fixed left-[env(safe-area-inset-left,0px)] top-0 m-0 inline-flex h-14 w-[52px] flex-shrink-0 items-center justify-center whitespace-nowrap rounded pl-2 font-medium leading-normal lg:hidden"
					onClick={() => setSideBarOpen(!sideBarOpen)}
				>
					<svg width="14" height="10" viewBox="0 0 14 10" fill="#6B6F76">
						<rect width="14" height="2"></rect>
						<rect y="4" width="14" height="2"></rect>
						<rect y="8" width="14" height="2"></rect>
					</svg>
				</button>
			</nav>
		</>
	);
};

export default SettingSidebar;
