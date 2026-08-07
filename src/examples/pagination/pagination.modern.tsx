"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { ModernPagination } from "@/components/Pagination/CustomPagination";

function Component() {
  const [page, setPage] = useState(8);

  return (
    <div className="flex flex-col gap-4">
      <ModernPagination currentPage={page} totalPages={20} onPageChange={setPage} />
      <p className="text-sm text-gray-600">현재 페이지: {page} / 20</p>
    </div>
  );
}

const code = `import { ModernPagination } from "@/components/Pagination/CustomPagination";
import { useState } from "react";

const [page, setPage] = useState(8);

// 첫/마지막 페이지 링크와 "..." 생략 기호를 자동으로 넣어 줍니다.
// 페이지 수가 많을 때 사용하세요.
<ModernPagination currentPage={page} totalPages={20} onPageChange={setPage} />`;

export const modern: CodeData = {
  title: "생략 기호가 있는 페이지네이션",
  description:
    "페이지가 많을 때 씁니다. 현재 페이지 기준 5개를 노출하고, 범위 밖에 페이지가 남아 있으면 첫·마지막 페이지 번호와 생략 기호(...)를 자동으로 넣습니다.",
  type: "single",
  code: [{ fileName: "ModernPagination.tsx", language: "tsx", code }],
  component: <Component />,
};
