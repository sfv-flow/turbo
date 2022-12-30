import clsx from "clsx";
import Link from "next/link";
import type { NextRouter } from "next/router";

const AccountSettingsItems = ({
	router,
	title,
	href,
}: {
	router: NextRouter;
	title: string;
	href: string;
}) => {
	return (
		<div
			className={clsx(
				"m-[1px] ml-[25px] w-full rounded hover:bg-[#f0f3f9]",
				router.pathname === `/[slug]${href}` ? "bg-[#f0f3f9]" : "",
			)}
		>
			<Link
				href={{
					pathname:
						router.pathname === `/[slug]${href}` ? "" : `/[slug]${href}`,
					query: { slug: router.query.slug },
				}}
				className="block rounded"
			>
				<span
					className="flex h-[27px] flex-grow items-center text-ellipsis rounded py-0 pl-[6px] pr-[2px] text-left text-[13px] font-medium text-[#3c4149]"
					style={{ WebkitBoxAlign: "center", WebkitBoxFlex: 1 }}
				>
					{title}
				</span>
			</Link>
		</div>
	);
};

export default AccountSettingsItems;
