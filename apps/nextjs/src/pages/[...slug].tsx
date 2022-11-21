import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SideBar from "../components/SideBar";

const Workspace = () => {
	const router = useRouter();
	const { data: session } = useSession({
		required: true,
	});
	// with require being true the user will be directly pushed to the login page if they are not logged in
	// useEffect(() => {
	// 	if (!session) {
	// 		router.push("/");
	// 	}
	// }, [router, session]);

	if (!session) return null;
	return (
		<div
			className="fixed flex h-full min-h-full w-full flex-row overflow-hidden pr-[env(safe-area-inset-right,0px)] pl-[env(safe-area-inset-left,0px)] text-[#eeeffc] [border-top:none] lg:static lg:z-auto"
			style={{ WebkitBoxAlign: "stretch" }}
		>
			<SideBar />
			<main
				className="relative flex flex-initial flex-grow flex-col place-items-stretch overflow-auto [scrollbar-gutter:auto]"
				style={{ WebkitBoxAlign: "stretch", WebkitBoxFlex: 1 }}
			>
				This would be the main content
			</main>
		</div>
	);
};

export default Workspace;
