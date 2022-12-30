import { useRouter } from "next/router";
import { ReactElement } from "react";
import SettingsContainer from "../../../../components/container/Settings";

const AccountPreferences = () => {
	const router = useRouter();

	// with require being true the user will be directly pushed to the login page if they are not logged in
	// const { data: session } = useSession({
	// 	required: true,
	// });

	return (
		<>
			<div className="h-16 flex-shrink-0" />
			<div
				className="mx-[40px] mt-0 mb-16 flex flex-col items-center"
				style={{
					WebkitBoxAlign: "center",
				}}
			>
				<div className=" flex w-full max-w-[640px] flex-initial flex-col">
					<div
						className="flex flex-initial flex-row items-center gap-3"
						style={{
							WebkitBoxAlign: "center",
						}}
					>
						<span className="text-2xl font-medium leading-8 tracking-[-0.01em] text-[#282a30]">
							Preferences
						</span>
					</div>
					<div>
						<span className="text-[13px] font-medium text-[#6b6f76]">
							Manage your preferences
						</span>
					</div>
					<div className="my-6 mx-0 [border-top:1px_solid_rgb(239,241,244)]" />
					<div className="my-6 mx-0">
						<span className="mb-4 block text-lg font-medium leading-normal text-[#282a30]">
							Smart Search
						</span>
						<div className="mb-6 flex flex-initial flex-col pb-6 [border-bottom:1px_solid_rgb(239,241,244)]">
							<div
								className="flex flex-initial flex-row items-center gap-3"
								style={{
									WebkitBoxAlign: "center",
								}}
							>
								<div
									className=" flex flex-auto flex-col justify-center gap-2 overflow-hidden"
									style={{
										WebkitBoxPack: "center",
									}}
								>
									<span className="block text-[13px] font-medium leading-normal text-[#282a30]">
										Search with Chegg
									</span>
									<span className="text-xs font-medium leading-normal text-[#6b6f76]">
										The search result will only show results related to
										chegg.com
									</span>
								</div>
								<label className="relative mb-5 inline-flex cursor-pointer items-center">
									<input
										type="checkbox"
										value=""
										className="peer sr-only"
										checked
									/>
									<div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full "></div>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccountPreferences;

AccountPreferences.getLayout = function getLayout(page: ReactElement) {
	return <SettingsContainer>{page}</SettingsContainer>;
};
