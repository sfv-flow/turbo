import Link from "next/link";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const WorkspaceContextMenu = () => {
	const router = useRouter();
	const { data: user } = trpc.user.fetchUser.useQuery();
	const { data: workspaces } = trpc.workspace.fetchUserWorkspaces.useQuery(
		{} as unknown as void,
		{ refetchOnWindowFocus: false },
	);

	return (
		<div className="fixed z-[600] m-0 [inset:0px_auto_auto_0px] [transform:translate3d(14px,50px,0px)]">
			<div className="pointer-events-auto rounded-lg bg-[#F3F3F3] opacity-[2] shadow-[rgb(0_0_0/9%)_0px_3px_12px] [transform:scale(1)] [transform-origin:0px_0px] [backdrop-filter:blur(12px)_saturate(190%)_contrast(50%)_brightness(130%)]">
				<div className="flex max-h-[calc(100vh-130px)] w-[250px] max-w-[100vw] flex-initial flex-col overflow-hidden rounded bg-white/[0.03] shadow-[rgb(0_0_0/6%)_0px_7px_24px]">
					<div
						className="flex  flex-grow-0 flex-col pt-3 pr-3 pl-[14px] pb-3"
						style={{ WebkitBoxFlex: 0 }}
					>
						<div className=" mb-3 leading-4">
							<span className="text-[13px] font-medium text-black/[0.44]">
								{user?.email}
							</span>
						</div>
						{workspaces?.map((workspace) => (
							<Link
								key={workspace.id}
								//  if they are on pages that has a pathname, add the query to the href
								href={`/${workspace?.slug}`}
								className="rounded py-[6px] px-3 text-[#282a30] hover:bg-[#00000010]"
							>
								<div
									className="flex flex-row items-center "
									style={{ WebkitBoxAlign: "center" }}
								>
									<span className="leading-0 relative mr-[10px] inline-block h-[18px] w-[18px] flex-shrink-0 rounded object-cover text-[9px]">
										<div
											className="flex h-full w-full flex-shrink-0 items-center justify-center rounded bg-[#5581eb] text-white"
											style={{
												WebkitBoxFlex: 1,
												WebkitBoxAlign: "center",
											}}
										>
											{workspace?.name?.slice(0, 2).toUpperCase()}
										</div>
									</span>
									<span className="mr-1 w-full text-ellipsis text-[13px] font-medium text-[#000000d0]">
										{workspace?.name}
									</span>
									{workspace.slug === router.query.slug && (
										<svg
											width="16"
											height="12"
											viewBox="0 0 16 12"
											fill="#00000070"
											className="w-3 flex-shrink-0 fill-[#6e79d6]"
										>
											<path d="M4.93942 9.69781L1.62578 6.38648C1.25336 6.01431 0.651746 6.01431 0.27932 6.38648C-0.0931065 6.75865 -0.0931065 7.35984 0.27932 7.73201L4.27096 11.7209C4.64339 12.093 5.245 12.093 5.61743 11.7209L15.7207 1.62465C16.0931 1.25248 16.0931 0.651292 15.7207 0.279125C15.3483 -0.0930417 14.7466 -0.0930417 14.3742 0.279125L4.93942 9.69781Z"></path>
										</svg>
									)}
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkspaceContextMenu;
