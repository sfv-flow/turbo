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
		<p className="">
			This would be the Settings content Current route: {router.pathname}
		</p>
	);
};

export default AccountPreferences;

AccountPreferences.getLayout = function getLayout(page: ReactElement) {
	return <SettingsContainer>{page}</SettingsContainer>;
};
