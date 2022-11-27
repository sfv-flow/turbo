import { useSession } from "next-auth/react";
import Loading from "../components/Loading";

const NewPage = () => {
	const { data: session } = useSession();
	return (
		<>
			<Loading />
		</>
	);
};

export default NewPage;
