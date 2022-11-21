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
				"max-w-[640px] w-full p-2 rounded-xl overflow-hidden border border-[#e2e2e2] shadow-[0_16px_70px_rgb(0_0_0_/_20%)] transition-transform duration-100 ease-in-out",
			)}
			open={open}
			onOpenChange={setOpen}
			label={label}
		>
			<Command.Input className="border-none w-full text-[17px] px-2 pt-2 pb-4 outline-none bg-[#e2e2e2] border-b-[1px_solid_hsl(0,_0%,_88.7%)] mb-4 rounded-none placeholder:text-[#8f8f8f]" />
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
					<Command.Item className="[content-visibility:auto] cursor-pointer h-12 rounded-lg flex items-center gap-2 px-4 select-none will-change-[background,_color] transition-all transition-none aria-selected:bg-[#0000000d] aria-selected:text-[#171717]">
						a
					</Command.Item>
					<Command.Item className="[content-visibility:auto] cursor-pointer h-12 rounded-lg flex items-center gap-2 px-4 select-none will-change-[background,_color] transition-all transition-none">
						a
					</Command.Item>
					<Command.Separator />
					<Command.Item className="[content-visibility:auto] cursor-pointer h-12 rounded-lg flex items-center gap-2 px-4 select-none will-change-[background,_color] transition-all transition-none">
						a
					</Command.Item>
				</Command.Group>

				<Command.Item>Apple</Command.Item>
			</Command.List>
		</Command.Dialog>
	);
};

export default CommandMenu;
