"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Transfer } from "@/components/SelectBox/Transfer";
import { ColumnTitle, multiOptions } from "./parts";

function Component() {
  return (
    <div className="flex flex-col gap-4">
      <ColumnTitle>Transfer</ColumnTitle>
      <Transfer initialItems={multiOptions} />
    </div>
  );
}

const code = `import { Transfer } from "@/components/SelectBox/Transfer";

// initialItems 만 넘기면 됩니다. 좌우 이동 상태는 내부에서 관리합니다.
const items = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

<Transfer initialItems={items} />`;

export const transfer: CodeData = {
  title: "좌우 이동 선택 (Transfer)",
  description:
    "항목을 두 목록 사이에서 옮기는 방식입니다. 전체 선택·해제를 지원하며, 이동 상태는 컴포넌트 내부에서 관리하므로 initialItems 만 넘기면 됩니다.",
  type: "single",
  code: [{ fileName: "Transfer.tsx", language: "tsx", code }],
  component: <Component />,
};
