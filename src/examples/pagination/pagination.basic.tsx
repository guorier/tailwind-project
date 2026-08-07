"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Pagination } from "@/components/Pagination/Pagination";

function Component() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
      <p className="text-sm text-gray-600">현재 페이지: {page} / 10</p>
    </div>
  );
}

const code = `import { Pagination } from "@/components/Pagination/Pagination";
import { useState } from "react";

// 페이지 상태는 호출부에서 관리합니다.
const [page, setPage] = useState(1);

<Pagination currentPage={page} totalPages={10} onPageChange={setPage} />

// pageRangeDisplayed 로 한 번에 노출할 번호 개수를 조절합니다. (기본값 5)
<Pagination
  currentPage={page}
  totalPages={50}
  onPageChange={setPage}
  pageRangeDisplayed={7}
/>`;

export const basic: CodeData = {
  title: "기본 페이지네이션",
  description:
    "currentPage · totalPages · onPageChange 를 넘겨 사용합니다. 컴포넌트는 상태를 갖지 않으므로 페이지 값은 호출부에서 관리합니다. 현재 페이지를 가운데 두되 양 끝에서는 범위를 안쪽으로 당깁니다.",
  type: "single",
  code: [{ fileName: "Pagination.tsx", language: "tsx", code }],
  component: <Component />,
};
