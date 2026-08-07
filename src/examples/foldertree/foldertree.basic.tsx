"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { FolderTree } from "@/components/FolderTree/FolderTree";
import { sampleFolders } from "./data";

function Component() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const checkedIds = Object.keys(checked).filter((id) => checked[id]);

  return (
    <div className="flex flex-col gap-4">
      <FolderTree folders={sampleFolders} checked={checked} setChecked={setChecked} />
      <p className="text-sm text-gray-600">
        선택된 항목 {checkedIds.length}개
        {checkedIds.length > 0 && `: ${checkedIds.join(", ")}`}
      </p>
    </div>
  );
}

const code = `import { FolderTree } from "@/components/FolderTree/FolderTree";
import { useState } from "react";

// 폴더 구조는 id · name · children 으로 중첩합니다.
const folders = [
  {
    id: "1",
    name: "Depth 1",
    children: [
      {
        id: "1-1",
        name: "Depth 2-1",
        children: [{ id: "1-1-1", name: "Depth 3" }],
      },
      { id: "1-2", name: "Depth 2-2" },
    ],
  },
];

// 체크 상태는 { [id]: boolean } 형태로 호출부에서 관리합니다.
// 펼침 상태는 컴포넌트 내부에서 관리하며 처음에는 모두 펼쳐집니다.
const [checked, setChecked] = useState<Record<string, boolean>>({});

<FolderTree folders={folders} checked={checked} setChecked={setChecked} />

// 선택된 id 목록 꺼내기
const checkedIds = Object.keys(checked).filter((id) => checked[id]);`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "id · name · children 으로 중첩된 배열을 넘깁니다. 부모를 체크하면 하위 항목이 함께 선택되고, 체크 상태는 { [id]: boolean } 형태로 호출부에서 관리합니다.",
  type: "single",
  code: [{ fileName: "FolderTree.tsx", language: "tsx", code }],
  component: <Component />,
};
