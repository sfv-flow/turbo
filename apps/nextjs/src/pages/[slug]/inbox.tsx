import { useRouter } from "next/router";
import { ReactElement } from "react";
import Container from "../../components/container";

const Inbox = () => {
	const router = useRouter();

	// with require being true the user will be directly pushed to the login page if they are not logged in
	// const { data: session } = useSession({
	// 	required: true,
	// });

	return (
		<p>This would be the Inbox content Current route: {router.pathname}</p>
	);
};

export default Inbox;

Inbox.getLayout = function getLayout(page: ReactElement) {
	return <Container>{page}</Container>;
};
