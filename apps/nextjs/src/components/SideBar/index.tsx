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
					{/* Search box */}
					<div className="-mx-[6px] mt-[14px] mb-[2px]">
						<div
							className="flex min-w-0 flex-initial flex-grow select-none flex-row"
							style={{ WebkitBoxFlex: 1 }}
						>
							<button
								className="m-0 inline-flex h-9 min-w-[36px] flex-shrink-0 flex-grow select-none items-center justify-between whitespace-nowrap rounded-[4px] border border-[#dfe1e4] px-[9px] py-0 text-xs text-[#3c4149] shadow-[rgb(0_0_0_/_7%)_0px_1px_1px] [transition-property:border,_background-color,_color,_box-shadow,_opacity]"
								draggable="false"
								style={{ WebkitBoxFlex: 1 }}
							>
								<svg
									width="16"
									height="16"
									viewBox="1 1 13 13"
									fill="#6B6F76"
									className=" mr-[10px] inline-flex max-h-[18px] max-w-[18px] items-center justify-center [transition-property:fill,_stroke] "
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M9.5 7C9.5 8.38071 8.38071 9.5 7 9.5C5.61929 9.5 4.5 8.38071 4.5 7C4.5 5.61929 5.61929 4.5 7 4.5C8.38071 4.5 9.5 5.61929 9.5 7ZM9.24822 10.3089C8.60751 10.745 7.83353 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7C11 7.83353 10.745 8.60751 10.3089 9.24822L12.7803 11.7197C13.0732 12.0126 13.0732 12.4874 12.7803 12.7803C12.4874 13.0732 12.0126 13.0732 11.7197 12.7803L9.24822 10.3089Z"
									></path>
								</svg>
								<div
									className="flex flex-initial flex-grow flex-row items-center justify-between"
									style={{
										WebkitBoxAlign: "center",
										WebkitBoxPack: "justify",
										WebkitFlex: 1,
									}}
								>
									{`Search of enter URL`}
								</div>
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
