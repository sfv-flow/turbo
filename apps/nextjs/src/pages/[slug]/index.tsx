import { useRouter } from "next/router";
import { ReactElement } from "react";
import Container from "../../components/container";

const Workspace = () => {
	const router = useRouter();

	return <p>This would be the main content Current route: {router.pathname}</p>;
};

export default Workspace;

Workspace.getLayout = function getLayout(page: ReactElement) {
	return <Container>{page}</Container>;
};
