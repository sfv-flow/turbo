const CommandBar = () => {
	return (
		<div
			className="fixed inset-0 z-[650] flex content-start justify-center px-4 pb-4 pt-[calc(13vh_-_0.36px)]"
			style={{
				WebkitBoxPack: "center",
			}}
		>
			<div className=" [box-shadow: rgb(0_0_0/50%)_0px_16px_70px] relative flex h-[400px] min-w-min max-w-[640px] flex-shrink flex-grow transform-none flex-col overflow-hidden rounded-lg bg-[#1d1e2b7f] opacity-[2] will-change-transform [transform-origin:center_center] [backdrop-filter:blur(20px)_saturate(190%)_contrast(70%)_brightness(80%)] [border:0.5px_solid_rgba(82,82,111,0.44)]">
				<div className="mx-4 mt-4 flex max-w-[calc(100vw-60px)] flex-shrink-0 self-start overflow-hidden text-ellipsis whitespace-nowrap rounded bg-[#7c7ca320] px-2 py-0 leading-[25px] text-[#dcd8fe90]">
					Command Panel
				</div>
				<div>
					<div
						className="relative grid h-[62px] flex-shrink-0 items-center [border-bottom:1px_solid_rgba(82,82,111,0.25)] [grid-template-columns:1fr_auto]"
						style={{
							WebkitBoxAlign: "center",
						}}
					>
						<div
							className="flex items-center"
							style={{
								WebkitBoxAlign: "center",
							}}
						>
							<input className="m-0 h-[62px] w-full appearance-none border-none bg-transparent p-5 text-[#e0e1ec] caret-[rgb(110,94,210)] outline-none [grid-area:1/1/auto/auto]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommandBar;
