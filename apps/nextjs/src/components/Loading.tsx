const Loading = () => {
	return (
		<div className=" absolute inset-0 z-[100000] flex flex-col items-center justify-center overflow-hidden text-xs font-medium leading-normal text-[#90959d] antialiased [transition:opacity_.1s]">
			<div className="invisible absolute inset-0 flex items-center justify-center opacity-0" />
			{/* <div>
				<div className="relative h-16 w-16">
					<svg
						className="absolute left-0 top-0 flex-shrink-0"
						width="64"
						height="64"
						viewBox="0 0 512 512"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="256" cy="256" r="256" fill="url(#bkg)"></circle>
						<defs>
							<linearGradient
								id="bkg"
								x1="0"
								y1="0"
								x2="0"
								y2="512"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#E0E4EF"></stop>
								<stop offset="1" stop-color="#B0B5C0"></stop>
							</linearGradient>
						</defs>
					</svg>
					<svg
						className="absolute left-0 top-0 flex-shrink-0"
						width="64"
						height="64"
						viewBox="0 0 512 512"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M233.929 387.099L124.901 278.071C134.214 333.8 178.2 377.786 233.929 387.099Z"
							fill="url(#white)"
						></path>
						<path
							d="M123.279 248.6L263.4 388.721C271.712 388.264 279.821 387.045 287.658 385.13L126.87 224.342C124.955 232.179 123.736 240.288 123.279 248.6Z"
							fill="url(#white)"
						></path>
						<path
							d="M133.856 203.479L308.521 378.144C314.874 375.408 320.971 372.192 326.766 368.54L143.46 185.234C139.808 191.029 136.592 197.126 133.856 203.479Z"
							fill="url(#white)"
						></path>
						<path
							d="M155.304 169.228C179.679 140.966 215.75 123.077 256 123.077C329.411 123.077 388.923 182.589 388.923 256C388.923 296.25 371.034 332.321 342.772 356.696L155.304 169.228Z"
							fill="url(#white)"
						></path>
						<defs>
							<linearGradient
								id="white"
								x1="388.923"
								y1="388.721"
								x2="388.923"
								y2="123.077"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="white" stop-opacity="0.85"></stop>
								<stop offset="1" stop-color="white"></stop>
							</linearGradient>
						</defs>
					</svg> 
				</div>
			</div> */}
			<div className="relative top-2 h-0">Loading...</div>
		</div>
	);
};

export default Loading;
