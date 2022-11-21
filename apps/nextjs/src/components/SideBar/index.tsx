import clsx from "clsx";
import { useState } from "react";

const SideBar = () => {
	const [sideBarOpen, setSideBarOpen] = useState(true);
	return (
		<div
			className="fixed flex h-full min-h-full w-full flex-row overflow-hidden pr-[env(safe-area-inset-right,0px)] pl-[env(safe-area-inset-left,0px)] text-[#eeeffc] [border-top:none] lg:static lg:z-auto"
			style={{ WebkitBoxAlign: "stretch" }}
		>
			{sideBarOpen && <div className="fixed inset-0 z-[1] bg-transparent" />}
			<nav
				className={clsx(
					"absolute top-0 bottom-0 z-[2] box-border flex h-full w-[220px] min-w-[250px] max-w-[362px] flex-shrink-0 select-none flex-col shadow-[rgba(0,_0,_0,_0.07)_0px_0px_16px] backdrop-filter-none [border-right:1px_solid_#EFF1F4] [transition:left_0.25s_ease-out_0s,box-shadow_0.15s_0s] lg:relative lg:min-w-[220px] lg:max-w-[330px] lg:shadow-none lg:[transition:opacity_0.05s_ease-in-out_0s]",
					!sideBarOpen ? "-left-[362px]" : "left-0 ",
				)}
			>
				{/* First Section */}
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
							<button
								className="m-0 flex flex-initial flex-row items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-[4px] border-0 py-[6px] px-[9px] text-[#3c4149] hover:bg-[#f0f3f9]"
								style={{ WebkitBoxAlign: "center" }}
							>
								<span
									className="relative inline-block h-[18px] w-[18px] flex-shrink-0
								 rounded-[4px] object-cover text-[11px] leading-[0]"
								>
									<div
										className="flex h-full w-full flex-shrink-0 items-center justify-center rounded-[50%] bg-black text-white [text-shadow:rgb(0_0_0_/_40%)_0px_1px_2px]"
										style={{
											WebkitBoxAlign: "center",
											WebkitBoxPack: "center",
										}}
									>
										FL
									</div>
								</span>
								<span className="ml-3 overflow-hidden text-ellipsis whitespace-nowrap text-[13px] font-medium not-italic leading-normal text-[#3c4149]">
									{`Daniel's workspace`}
								</span>
							</button>
							<div
								className="min-w-2 flex flex-grow flex-row [flex-shrink:initial] [flex-basis:initial]"
								style={{ WebkitBoxFlex: 1 }}
							/>
						</div>
						<div>
							<button className="duration-0 group flex items-center rounded-[4px] border-none p-[7px] shadow-none transition-[background] hover:bg-[#f0f3f9]">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<span className="relative h-[18px] w-[18px] flex-shrink-0 text-[9px] leading-[0]">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src="https://uploads.linear.app/e44c04ef-b970-4d4a-bbec-5fa92ef59fd4/e16385c3-c607-45a7-beaf-ea98896940c0"
										alt="Avatar of aka howl"
										className="h-full w-full flex-shrink-0 rounded-[50%]"
									/>
								</span>
							</button>
						</div>
					</div>
				</div>
				{/* Second Section */}
				<div
					className="mb-[2px] flex flex-initial flex-grow flex-col overflow-y-auto px-0 py-4 [scrollbar-gutter:auto]"
					style={{ WebkitBoxFlex: 1 }}
				></div>
				<button
					style={{ WebkitBoxAlign: "center", WebkitBoxPack: "center" }}
					className="fixed left-[env(safe-area-inset-left,0px)] top-0 m-0 inline-flex h-14 w-[52px] flex-shrink-0 items-center justify-center whitespace-nowrap rounded-[4px] pl-2 font-medium leading-normal lg:hidden"
					onClick={() => setSideBarOpen(!sideBarOpen)}
				>
					<svg width="14" height="10" viewBox="0 0 14 10" fill="#6B6F76">
						<rect width="14" height="2"></rect>
						<rect y="4" width="14" height="2"></rect>
						<rect y="8" width="14" height="2"></rect>
					</svg>
				</button>
			</nav>
		</div>
	);
};

export default SideBar;
