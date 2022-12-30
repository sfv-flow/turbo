import { ReactElement, useEffect, useRef, useState } from "react";
import Container from "../../components/container";
import clsx from "clsx";

// import { useRouter } from "next/router";

const Workspace = () => {
	// const router = useRouter();
	const inputRef = useRef<HTMLInputElement>(null);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSearchQuery(inputRef.current?.value ?? "");
		}, 500);
		return () => {
			clearTimeout(timeout);
		};
	}, [searchQuery]);

	useEffect(() => {
		// add an event listener for keyboard input of '/' to focus the search input
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "/") {
				e.preventDefault();
				inputRef.current?.focus();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div className="relative mt-10 flex h-full w-full flex-col items-center">
			<div
				role="combobox"
				aria-expanded
				aria-haspopup="listbox"
				aria-controls=""
				className="box-border w-full max-w-[780px] lg:block"
			>
				<div className="relative mr-0 box-border block">
					<div className="box-border block">
						<form className="pointer-events-auto relative mt-0 box-border block">
							<label className="absolute top-[10px] left-3">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
									></path>
								</svg>
							</label>
							<input
								aria-autocomplete="both"
								autoComplete="off"
								autoCapitalize="off"
								autoCorrect="off"
								enterKeyHint="search"
								spellCheck="false"
								maxLength={512}
								autoFocus
								ref={inputRef}
								onChange={(event) => {
									setSearchQuery(event.target.value);
								}}
								className={clsx(
									"m-0 box-border h-[35px] w-full appearance-none rounded-md border-0 bg-[#f3f3f3] p-0 px-[35px] text-[15px] font-medium shadow-none outline-none",
									"focus:[box-shadow:inset_0px_0px_0px_1px_#c7c7c7,0px_0px_0px_1px_#c7c7c7]",
								)}
								style={{
									WebkitTapHighlightColor: "white",
								}}
								placeholder="Search the web"
							/>
							<div className="absolute right-[5px] top-[5px] box-border block">
								<button
									onClick={(event) => {
										event.preventDefault();
										inputRef.current?.focus();
									}}
									className={clsx(
										"box-border inline-flex h-[25px] w-[25px] flex-shrink-0 select-none appearance-none items-center justify-center rounded border-0 border-[#d7dbdf] border-transparent p-0 text-sm text-[#6f6f6f] outline-none [box-shadow:inset_0px_0px_0px_1px_#e2e2e2]",
										"hover:border-[#c1c8cd] hover:bg-[#0025490e]",
									)}
									style={{
										WebkitTapHighlightColor: "transparent",
									}}
								>
									<kbd>/</kbd>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* DropDown */}
			{searchQuery && (
				<div className="pointer-events-auto left-0 right-0 mt-[5px] box-border block h-auto max-h-[80vh] w-full max-w-[780px] scroll-py-[10px] overflow-auto rounded-lg bg-white p-[10px] [box-shadow:#0e121659_0px_10px_38px_-10px,#0e121633_0px_10px_20px_-15px]">
					<section className="box-border block">
						<ul role="listbox" className="m-0 box-border block list-none p-0">
							<li
								// eslint-disable-next-line jsx-a11y/role-has-required-aria-props
								role="option"
								aria-selected
								className="box-border list-item rounded hover:bg-[#f5f2ff]"
							>
								<button className={clsx("block p-[10px] text-left")}>
									<p className="tex-[15px] m-0 mb-[5px] block overflow-hidden text-ellipsis whitespace-nowrap font-medium leading-[17px] text-[#5746af]">
										Flow Database
									</p>
									<p className="font-medium text-[#7f7f7f]">{`Search "${searchQuery}" with Flow Database`}</p>
								</button>
							</li>
							{[
								{
									id: 1,
									label: "Chegg",
									name: "Chegg",
									link: "https://www.chegg.com/search?q={Query}",
								},
								{
									id: 2,
									label: "Quizlet",
									name: "Quizlet",
									link: "https://quizlet.com/search?query={Query}&type=all",
								},
								{
									id: 3,
									label: "Google",
									name: "Google it for me!",
									link: "https://www.google.com/search?q={Query}",
								},
							].map((result) => (
								<li
									key={result.id}
									// eslint-disable-next-line jsx-a11y/role-has-required-aria-props
									role="option"
									className="box-border list-item rounded hover:bg-[#f5f2ff]"
								>
									<a
										href={result.link.replace("{Query}", searchQuery)}
										target="_blank"
										className={clsx("block p-[10px] text-left")}
										rel="noreferrer"
									>
										<p className="tex-[15px] m-0 mb-[5px] block overflow-hidden text-ellipsis whitespace-nowrap font-medium leading-[17px] text-[#5746af]">
											{result.name}
										</p>
										<p className="font-medium text-[#7f7f7f]">{`Search "${searchQuery}" on ${result.label}`}</p>
									</a>
								</li>
							))}
						</ul>
					</section>
				</div>
			)}
		</div>
	);
};

export default Workspace;

Workspace.getLayout = function getLayout(page: ReactElement) {
	return <Container>{page}</Container>;
};
