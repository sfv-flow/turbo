import { Command } from "cmdk";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

const CommandMenu = ({ label }: { label: string }) => {
	const [open, setOpen] = useState(false);

	// Toggle the menu when ⌘K is pressed
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && e.metaKey) {
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<Command.Dialog
			className={clsx(
				"w-full max-w-[640px] overflow-hidden rounded-xl border border-[#e2e2e2] p-2 shadow-[0_16px_70px_rgb(0_0_0_/_20%)] transition-transform duration-100 ease-in-out",
			)}
			open={open}
			onOpenChange={setOpen}
			label={label}
		>
			<Command.Input className="mb-4 w-full rounded-none border-none border-b-[1px_solid_hsl(0,_0%,_88.7%)] bg-[#e2e2e2] px-2 pt-2 pb-4 text-[17px] outline-none placeholder:text-[#8f8f8f]" />
			{/*  height: min(330px, calc(var(--cmdk-list-height)));
    max-height: 400px;
    overflow: auto;
    overscroll-behavior: contain;
    transition: 100ms ease;
    transition-property: height;
  } */}
			<Command.List className="h-[330px] max-h-[400px] overflow-auto overscroll-contain transition-[height] duration-100 ease-in-out">
				<Command.Empty>No results found.</Command.Empty>

				<Command.Group heading="Letters">
					<Command.Item className="flex h-12 cursor-pointer select-none items-center gap-2 rounded-lg px-4 transition-all transition-none will-change-[background,_color] [content-visibility:auto] aria-selected:bg-[#0000000d] aria-selected:text-[#171717]">
						a
					</Command.Item>
					<Command.Item className="flex h-12 cursor-pointer select-none items-center gap-2 rounded-lg px-4 transition-all transition-none will-change-[background,_color] [content-visibility:auto]">
						a
					</Command.Item>
					<Command.Separator />
					<Command.Item className="flex h-12 cursor-pointer select-none items-center gap-2 rounded-lg px-4 transition-all transition-none will-change-[background,_color] [content-visibility:auto]">
						a
					</Command.Item>
				</Command.Group>

				<Command.Item>Apple</Command.Item>
			</Command.List>
		</Command.Dialog>
	);
};

export default CommandMenu;
