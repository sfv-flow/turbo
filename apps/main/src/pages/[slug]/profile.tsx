import { useRouter } from "next/router";
import { ReactElement } from "react";
import Container from "../../components/container";

const Profile = () => {
	const router = useRouter();

	// with require being true the user will be directly pushed to the login page if they are not logged in
	// const { data: session } = useSession({
	// 	required: true,
	// });

	return (
		<p className="">
			This would be the Profile content Current route: {router.pathname}
		</p>
	);
};

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
	return <Container>{page}</Container>;
};
