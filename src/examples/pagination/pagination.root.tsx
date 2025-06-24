"use client";
import React, { useState, ReactNode } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Pagination } from "@/components/Pagination/Pagination";
import { ModernPagination } from "@/components/Pagination/CustomPagination";

const code = ``;

const Gridline = () => (
	<div className="flex flex-col gap-4">
		<div className="w-full h-7 flex items-center">
			<div className="w-full h-px bg-silver-300" />
		</div>
		<div className="flex items-center gap-2">
			Default
			<div className="w-full h-px bg-silver-400" />
		</div>
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

	const totalPages = 31;
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	}

	return (
		<div className="flex flex-col gap-10 min-h-56">
			<div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
				<Gridline />
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col gap-4">
						<Gridtitle>Default</Gridtitle>
						<Pagination
							totalPages={totalPages}
							currentPage={currentPage}
							onPageChange={handlePageChange}
						/>
					</div>
					<div className="flex flex-col gap-4">
						<Gridtitle>Modern</Gridtitle>
						<ModernPagination
							totalPages={totalPages}
							currentPage={currentPage}
							onPageChange={handlePageChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const root: CodeData = {
	title: "Pagination Examples",
	type: "single",
	code: {
		fileName: "client",
		language: "tsx",
		code,
	},
	githubSlug: "pagination/pagination.root.tsx",
	component: <Component />,
};
