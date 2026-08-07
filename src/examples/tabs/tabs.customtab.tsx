"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { CustomTab } from "@/components/Tabs/CustomTab";

const tabsData = [
  { title: "첫번째 탭", content: <div className="p-4">첫번째 탭 내용입니다.</div>, disabled: false },
  { title: "두번째 탭", content: <div className="p-4">두번째 탭 내용입니다.</div>, disabled: false },
  { title: "비활성 탭", content: <div className="p-4">선택할 수 없습니다.</div>, disabled: true },
];

const kinds = ["base", "line", "underline"] as const;

function Component() {
  return (
    <div className="flex flex-col gap-8">
      {kinds.map((kind) => (
        <div key={kind} className="flex flex-col gap-2">
          <span className="text-sm text-gray-600">kind=&quot;{kind}&quot;</span>
          <CustomTab tabsData={tabsData} kind={kind} height="44" />
        </div>
      ))}
    </div>
  );
}

const code = `import { CustomTab } from "@/components/Tabs/CustomTab";

// 탭 목록을 배열로 넘기는 방식입니다. 활성 탭 상태는 내부에서 관리합니다.
const tabsData = [
  { title: "첫번째 탭", content: <div>첫번째 탭 내용</div>, disabled: false },
  { title: "두번째 탭", content: <div>두번째 탭 내용</div>, disabled: false },
  { title: "비활성 탭", content: <div>선택할 수 없습니다</div>, disabled: true },
];

// kind — "base"(채운 배경) | "line"(박스) | "underline"(밑줄)
// height — 36 | 44 | 48 | 56
<CustomTab tabsData={tabsData} kind="underline" height="44" />`;

export const customTab: CodeData = {
  title: "CustomTab (배열 방식)",
  description:
    "tabsData 배열만 넘기면 탭과 본문이 함께 생성되고 활성 탭은 내부에서 관리됩니다. disabled 를 true 로 두면 선택할 수 없습니다.",
  type: "single",
  code: [{ fileName: "CustomTab.tsx", language: "tsx", code }],
  component: <Component />,
};
