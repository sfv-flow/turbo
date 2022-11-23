import { BuiltInProviderType } from "next-auth/providers";
import { signIn } from "next-auth/react";
import { GoogleIcon } from "../icons";

const SignInButton = ({ provider }: { provider: BuiltInProviderType }) => {
	const SignInHandler = (provider: BuiltInProviderType) => {
		signIn(provider, { callbackUrl: "/" });
	};
	return (
		<button
			onClick={() => SignInHandler(provider)}
			className=" m-0 inline-flex h-12 w-[336px] min-w-[32px] flex-shrink-0 select-none items-center justify-center whitespace-nowrap rounded border border-[#6e79d6] bg-[#575bc7] py-0 px-[14px] font-medium text-white shadow-[rgb(0_0_0_/_7%)_0px_1px_2px] [transition-property:border,background-color,color,box-shadow,opacity]"
			draggable="false"
			style={{
				WebkitBoxAlign: "center",
				WebkitBoxPack: "center",
			}}
		>
			<GoogleIcon className="mr-3 w-[14px] flex-shrink-0 text-white" />
			Login with Google
		</button>
	);
};

export default SignInButton;
