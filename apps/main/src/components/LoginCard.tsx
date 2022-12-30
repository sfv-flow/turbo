import SignInButton from "./buttons/SignInButton";

const LoginCard = () => {
	return (
		<div
			className="mx-auto mt-[71.5px] mb-auto flex flex-initial flex-col items-center"
			style={{
				WebkitBoxAlign: "center",
			}}
		>
			{/* <LinearIcon className="mb-8 h-[84px] w-[84px] flex-shrink-0" /> */}
			<div className="transform-none transition-all duration-200 ease-in-out">
				<div
					className="flex flex-initial flex-col items-center justify-center"
					style={{
						WebkitBoxAlign: "center",
						WebkitBoxPack: "center",
					}}
				>
					<span className="mb-8 text-left text-xl font-medium tracking-[-0.01rem] text-[#3c4149]">
						Log in for Flow
					</span>
					<SignInButton provider={"google"} />
				</div>
			</div>
		</div>
	);
};

export default LoginCard;
