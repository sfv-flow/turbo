const SideBar = () => {
	return (
		<div
			className="flex h-full min-h-full w-full flex-row overflow-hidden pr-[env(safe-area-inset-right,0px)] pl-[env(safe-area-inset-left,0px)] text-[#eeeffc] [border-top:none]"
			style={{ WebkitBoxAlign: "stretch" }}
		>
			<nav className="relative box-border flex h-full w-[220px] min-w-[220px] max-w-[330px] flex-shrink-0 select-none flex-col [transition:opacity_0.05s_ease-in-out_0s] [border-right:1px_solid_#EFF1F4]">
				{/* First Section */}
				<div
					className="flex flex-initial flex-shrink-0 flex-col items-stretch px-3 py-5"
					style={{ WebkitBoxAlign: "stretch" }}
				>
					Put user info here
				</div>
				{/* Second Section */}
				<div
					className="mb-[2px] flex flex-initial flex-grow flex-col overflow-y-auto px-0 py-4 [scrollbar-gutter:auto]"
					style={{ WebkitBoxFlex: 1 }}
				></div>
			</nav>
		</div>
	);
};

export default SideBar;
