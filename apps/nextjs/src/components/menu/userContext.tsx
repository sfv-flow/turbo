import { useRouter } from "next/router";
import UserContextItem from "./userContextItem";

const UserContextMenu = () => {
	const router = useRouter();
	return (
		<div className="fixed z-[600] m-0 [inset:0px_auto_auto_0px] [transform:translate3d(175px,50px,0px)]">
			<div className="pointer-events-auto rounded-lg border-[0.5px] border-[#dfe1e4] bg-white/50 opacity-[2] shadow-[rgb(0_0_0/9%)_0px_3px_12px] [transform:scale(1)] [transform-origin:0px_0px] [backdrop-filter:blur(12px)_saturate(190%)_contrast(50%)_brightness(130%)]">
				<div
					className="m-0 flex min-w-min flex-shrink flex-grow flex-col overflow-hidden py-1 px-0 text-[13px]"
					style={{
						WebkitBoxFlex: 1,
					}}
				>
					<div className="relative h-[278px] w-[186px] overflow-auto will-change-transform [direction:ltr]">
						<div className="h-[278px] w-full flex-col">
							<div className="absolute top-0 h-8 w-auto min-w-full">
								<UserContextItem
									title="View Profile"
									href={{
										pathname:
											router.pathname === "/[slug]/profile"
												? ""
												: "/[slug]/profile",
										query: { slug: router.query.slug },
									}}
								/>
							</div>
							<div className="absolute top-8 h-8 w-auto min-w-full">
								<UserContextItem
									title="Settings"
									href={{
										pathname:
											router.pathname === "/[slug]/settings"
												? ""
												: "/[slug]/settings",
										query: { slug: router.query.slug },
									}}
								/>
							</div>
							<div className="absolute top-16 h-8 w-auto min-w-full">
								<div className="py-[5px] px-0 ">
									<div className="[border-bottom:0.5px_solid_rgba(0,0,0,0.098)]" />
								</div>
								<UserContextItem
									title="Contact support"
									href={{
										pathname:
											router.pathname === "/[slug]/contact"
												? ""
												: "/[slug]/contact",
										query: { slug: router.query.slug },
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserContextMenu;
