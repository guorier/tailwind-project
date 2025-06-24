"use client";
import React, { ReactNode } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { CustomTab } from "@/components/Tabs/CustomTab";
const code = `
`;

const labels = ["size:56", "size:48", "size:44", "size:36",];
const Gridline = () => (
	<div className="flex flex-col gap-4">
		<div className="w-full h-7 flex items-center"><div className="w-full h-px bg-silver-300" /></div>
		{labels.map((label) => (
			<div key={label} className="flex items-center gap-2 h-21">
				{label}
				<div className="w-full h-px bg-silver-400" />
			</div>
		))}
	</div>
);

const Gridtitle = ({ children }: { children: ReactNode }) => (
	<div className="flex justify-center items-center gap-4 w-full">
		<div className="w-full h-px bg-silver-300" />
		<h6 className="flex-none">{children}</h6>
		<div className="w-full h-px bg-silver-300" />
	</div>
);

function Component() {

	const tabsData = [
		{ title: "Tab 1", content: <div>Content for Tab 1</div>, disabled: false },
		{ title: "Tab 2", content: <div>Content for Tab 2</div>, disabled: false },
		{ title: "Tab 3", content: <div>Content for Tab 3</div>, disabled: true },
	];

	return (
		<div className="flex flex-col gap-10 min-h-56">
			<div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
				<Gridline />
				<div className="grid grid-cols-3 gap-4">
					<div className="flex flex-col gap-4">
						<Gridtitle>Default</Gridtitle>
						<div className="h-21"><CustomTab tabsData={tabsData} height={56} /></div>
						<div className="h-21"><CustomTab tabsData={tabsData} height={48} /></div>
						<div className="h-21"><CustomTab tabsData={tabsData} height={44} /></div>
						<div className="h-21"><CustomTab tabsData={tabsData} /></div>
					</div>
					<div className="flex flex-col gap-4">
						<Gridtitle>Line</Gridtitle>
						<div className="h-21"><CustomTab tabsData={tabsData} height={56} kind="line" /></div>
						<div className="h-21"><CustomTab tabsData={tabsData} height={48} kind="line" /></div>
						<div className="h-21"><CustomTab tabsData={tabsData} height={44} kind="line" /></div>
						<div className="h-21"><CustomTab tabsData={tabsData} kind="line" /></div>
					</div>
					<div className="flex flex-col gap-4">
						<Gridtitle>Underline</Gridtitle>
						<div className="h-21"><CustomTab tabsData={tabsData} height={56} kind="underline" /></div>
						<div className="h-21"><CustomTab tabsData={tabsData} height={48} kind="underline" /></div>
						<div className="h-21"><CustomTab tabsData={tabsData} height={44} kind="underline" /></div>
						<div className="h-21"><CustomTab tabsData={tabsData} kind="underline" /></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export const root: CodeData = {
	title: "Tab Examples",
	type: "single",
	code: {
		fileName: "client",
		language: "tsx",
		code,
	},
	githubSlug: "tabs/tabs.root.tsx",
	component: <Component />,
};
