import { Workspace } from "@flow/db";
import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import UserContextMenu from "../menu/UserContext";
import WorkspaceContextMenu from "../menu/WorkspaceContext";
import CommandBar from "../commandBar";

const SideBar = ({
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
			{sideBarOpen && <div className="fixed inset-0 z-[1] bg-transparent" />}
			<nav
				className={clsx(
					"absolute top-0 bottom-0 z-[2] box-border flex h-full w-[220px] min-w-[250px] max-w-[362px] flex-shrink-0 select-none flex-col bg-white shadow-[rgba(0,_0,_0,_0.07)_0px_0px_16px] backdrop-filter-none [border-right:1px_solid_#EFF1F4] [transition:left_0.25s_ease-out_0s,box-shadow_0.15s_0s] lg:relative lg:min-w-[220px] lg:max-w-[330px] lg:shadow-none lg:[transition:opacity_0.05s_ease-in-out_0s]",
					!sideBarOpen ? "-left-[362px]" : "left-0",
				)}
			>
				{/* First Section - user workspace and and avatar */}
				<div
					className="mt-10 flex flex-initial flex-shrink-0 flex-col items-stretch py-3 px-5 lg:mt-0"
					style={{ WebkitBoxAlign: "stretch" }}
				>
					<div
						className="-mr-2 -ml-[6px] flex flex-auto flex-row items-center"
						style={{ WebkitBoxAlign: "center" }}
					>
						<div
							className="flex min-w-0 max-w-full flex-auto flex-row items-center"
							style={{ WebkitBoxAlign: "center" }}
						>
							<Popover.Root>
								<Popover.Trigger>
									<div
										className="m-0 flex w-full flex-initial flex-row items-center overflow-hidden text-ellipsis whitespace-nowrap rounded border-0 py-[6px] px-[9px] text-[#3c4149] hover:bg-[#f0f3f9]"
										style={{ WebkitBoxAlign: "center" }}
									>
										<span
											className="relative inline-block h-[18px] w-[18px] flex-shrink-0
								 rounded object-cover text-[11px] leading-[0]"
										>
											<div
												className="flex h-full w-full flex-shrink-0 items-center justify-center rounded bg-black text-white [text-shadow:rgb(0_0_0_/_40%)_0px_1px_2px]"
												style={{
													WebkitBoxAlign: "center",
													WebkitBoxPack: "center",
												}}
											>
												{workspace?.name.slice(0, 2).toUpperCase()}
											</div>
										</span>
										<span className="ml-3 overflow-hidden text-ellipsis whitespace-nowrap text-[13px] font-medium not-italic leading-normal text-[#3c4149]">
											{workspace?.name}
										</span>
									</div>
								</Popover.Trigger>

								<Popover.Content>
									<WorkspaceContextMenu workspaces={workspaces} user={user} />
								</Popover.Content>
							</Popover.Root>
							<div
								className="min-w-2 flex flex-grow flex-row [flex-shrink:initial] [flex-basis:initial]"
								style={{ WebkitBoxFlex: 1 }}
							/>
						</div>

						<div>
							<Popover.Root>
								<Popover.Trigger>
									<div className="duration-0 group flex items-center rounded border-none p-[7px] shadow-none transition-[background] hover:bg-[#f0f3f9]">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<span className="relative flex-shrink-0 text-[9px] leading-[0]">
											{/* eslint-disable-next-line @next/next/no-img-element */}
											{user?.image ? (
												<Image
													src={user.image ?? ""}
													width={18}
													height={18}
													alt={`Avatar of ${user?.name}`}
													className="h-full w-full flex-shrink-0 rounded-[50%]"
												/>
											) : (
												<div
													className="flex h-full w-full flex-shrink-0 items-center justify-center rounded-[50%] bg-emerald-500 text-white"
													style={{
														WebkitBoxAlign: "center",
														WebkitBoxPack: "center",
													}}
												>
													{user?.name?.slice(0, 2).toUpperCase()}
												</div>
											)}
										</span>
									</div>
								</Popover.Trigger>
								<Popover.Content>
									<UserContextMenu />
								</Popover.Content>
							</Popover.Root>
						</div>
					</div>
					<CommandBar />
				</div>
				{/* Second Section */}
				<div
					className="mb-[2px] flex flex-initial flex-grow flex-col overflow-y-auto py-0 px-4 [scrollbar-gutter:auto]"
					style={{ WebkitBoxFlex: 1 }}
				>
					{/* inbox */}
					<div className="m-[1px] rounded">
						<div className="block flex-initial flex-row">
							<Link
								//  if we are on the inbox page, then we don't want to link to the inbox page
								href={{
									pathname:
										router.pathname === "/[slug]/inbox" ? "" : "/[slug]/inbox",
									query: { slug: router.query.slug },
								}}
								className="block rounded text-[#282a30]"
							>
								<span
									className="flex h-[27px] flex-grow items-center overflow-hidden text-ellipsis whitespace-nowrap rounded fill-[#6b6f76] py-0 pr-[2px] pl-[6px] text-[13px] font-medium leading-normal text-[#3c4149]"
									style={{ WebkitBoxAlign: "center", WebkitBoxFlex: 1 }}
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="#6B6F76"
										className="mr-[10px] ml-[1px] h-auto w-4"
									>
										<path d="M10.5914 1C11.9984 1 13.2164 1.97789 13.5205 3.35169L14.8819 9.50233C14.9604 9.85714 15 10.2195 15 10.5829V12.5181C15 13.8888 13.8888 15 12.5181 15H3.48193C2.1112 15 1 13.8888 1 12.5181V10.5829C1 10.2195 1.03962 9.85714 1.11815 9.50233L2.47949 3.35169C2.78356 1.97789 4.00156 1 5.4086 1H10.5914ZM10.5914 2.5H5.4086C4.70508 2.5 4.09608 2.98894 3.94405 3.67584L2.5827 9.82649L2.548 10.01L5.01028 10.0108C5.55851 10.0108 6.00293 10.4552 6.00293 11.0034C6.00293 11.5517 6.44735 11.9961 6.99557 11.9961H9.05948C9.6077 11.9961 10.0521 11.5517 10.0521 11.0034C10.0521 10.4552 10.4965 10.0108 11.0448 10.0108L13.4528 10.0102C13.4426 9.94867 13.4308 9.88742 13.4173 9.82649L12.056 3.67584C11.9039 2.98894 11.2949 2.5 10.5914 2.5Z"></path>
									</svg>
									<div
										className="flex flex-auto flex-row items-center justify-between"
										style={{
											WebkitBoxAlign: "center",
											WebkitBoxPack: "justify",
										}}
									>
										<span>Inbox</span>
									</div>
								</span>
							</Link>
						</div>
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

export default SideBar;
