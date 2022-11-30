import Link from "next/link";

const UserContextItem = ({
	title,
	href,
}: {
	title: string;
	href: { pathname: string; query: { slug: string | string[] | undefined } };
}) => {
	return (
		<Link
			href={href}
			className="relative flex h-8 w-full min-w-min max-w-[186px] items-center text-ellipsis whitespace-nowrap bg-transparent text-[#3c4149] [flex:0_0_100%] 
            "
			style={{
				WebkitBoxFlex: 1,
				WebkitBoxAlign: "center",
			}}
		>
			<div
				className="mx-1 flex h-full flex-initial flex-grow flex-row items-center overflow-hidden rounded-md py-0 px-[10px] hover:bg-[#EBECEC]"
				style={{
					WebkitBoxFlex: 1,
					WebkitBoxAlign: "center",
				}}
			>
				<span className="inline-flex flex-grow items-center overflow-hidden text-ellipsis whitespace-nowrap text-left font-medium leading-normal text-[#282a30] ">
					<span
						className="mr-2 flex-shrink-[0.01] flex-grow overflow-hidden text-ellipsis whitespace-nowrap "
						style={{
							WebkitBoxFlex: 1,
						}}
					>
						{title}
					</span>
				</span>
			</div>
		</Link>
	);
};

export default UserContextItem;
