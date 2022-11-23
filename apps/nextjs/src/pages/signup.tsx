import type { BuiltInProviderType } from "next-auth/providers";
import { signIn } from "next-auth/react";
import { GoogleIcon } from "../components";

const SignUp = () => {
	return (
		<div className="flex h-full flex-auto flex-shrink-0 flex-col bg-gradient-to-b from-[#EFF1F4] to-white/50">
			<SignUpCard />
		</div>
	);
};

const SignUpCard = () => {
	const SignInHandler = (provider: BuiltInProviderType) => {
		signIn(provider, { callbackUrl: "/" });
	};
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
						Sign up for Flow
					</span>
					<button
						onClick={() => SignInHandler("google")}
						className=" m-0 inline-flex h-12 w-[336px] min-w-[32px] flex-shrink-0 select-none items-center justify-center whitespace-nowrap rounded-[4px] border border-[#6e79d6] bg-[#575bc7] py-0 px-[14px] font-medium text-white shadow-[rgb(0_0_0_/_7%)_0px_1px_2px] [transition-property:border,background-color,color,box-shadow,opacity]"
						draggable="false"
						style={{
							WebkitBoxAlign: "center",
							WebkitBoxPack: "center",
						}}
					>
						<GoogleIcon className="mr-3 w-[14px] flex-shrink-0 text-white" />
						Continue with Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
