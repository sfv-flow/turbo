import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type Search = {
	searchQuery: string;
};

const SearchBar = () => {
	const router = useRouter();
	const { register, handleSubmit, formState } = useForm<Search>();
	const searchHandler = (data: Search) => {
		// check if it's a url or a search query
		// if url, redirect to url
		data.searchQuery = data.searchQuery.trim();
		if (data.searchQuery.startsWith("http")) {
			router.push(data.searchQuery);
		} else {
			const encodedData = encodeURIComponent(data.searchQuery);
			router.push(`https://www.google.com/search?q=${encodedData}`);
		}
	};

	return (
		<form
			className="-mx-[6px] mt-[14px] mb-[2px]"
			onSubmit={handleSubmit(searchHandler)}
		>
			<div
				className="flex min-w-0 flex-initial flex-grow select-none flex-row"
				style={{ WebkitBoxFlex: 1 }}
			>
				<div
					className="m-0 inline-flex h-9 min-w-[36px] flex-shrink-0 flex-grow select-none items-center justify-between whitespace-nowrap rounded border border-[#dfe1e4] px-[9px] py-0 text-xs text-[#3c4149] shadow-[rgb(0_0_0_/_7%)_0px_1px_1px] [transition-property:border,_background-color,_color,_box-shadow,_opacity]"
					draggable="false"
					style={{ WebkitBoxFlex: 1 }}
				>
					<svg
						width="16"
						height="16"
						viewBox="1 1 13 13"
						fill="#6B6F76"
						className=" mr-[10px] inline-flex max-h-[18px] max-w-[18px] items-center justify-center [transition-property:fill,_stroke] "
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.5 7C9.5 8.38071 8.38071 9.5 7 9.5C5.61929 9.5 4.5 8.38071 4.5 7C4.5 5.61929 5.61929 4.5 7 4.5C8.38071 4.5 9.5 5.61929 9.5 7ZM9.24822 10.3089C8.60751 10.745 7.83353 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7C11 7.83353 10.745 8.60751 10.3089 9.24822L12.7803 11.7197C13.0732 12.0126 13.0732 12.4874 12.7803 12.7803C12.4874 13.0732 12.0126 13.0732 11.7197 12.7803L9.24822 10.3089Z"
						></path>
					</svg>
					<input
						className="flex h-full flex-initial flex-grow flex-row items-center justify-between font-medium outline-none"
						style={{
							WebkitBoxAlign: "center",
							WebkitBoxPack: "justify",
							WebkitFlex: 1,
						}}
						placeholder="Search or Enter URL..."
						{...register("searchQuery")}
					/>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
