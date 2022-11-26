import { useSession } from "next-auth/react";

const NewPage = () => {
	const { data: session } = useSession();
	return (
		<>
			<div>{session?.user.id}</div>
		</>
	);
};

export default NewPage;
