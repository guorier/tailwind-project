"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const columns = ["이름", "상태", "등록일"] as const;

function Component() {
  const [visible, setVisible] = useState<string[]>(["이름", "상태"]);

  const toggle = (column: string, checked: boolean) =>
    setVisible((prev) =>
      checked ? [...prev, column] : prev.filter((c) => c !== column)
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">표시할 열</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>표시할 열</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {columns.map((column) => (
          <DropdownMenuCheckboxItem
            key={column}
            checked={visible.includes(column)}
            onCheckedChange={(checked) => toggle(column, checked)}
          >
            {column}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const code = `import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

const [visible, setVisible] = useState(["이름", "상태"]);

// checked / onCheckedChange 로 상태를 직접 관리합니다.
// 표의 열 표시 설정처럼 여러 개를 켜고 끌 때 씁니다.
<DropdownMenuCheckboxItem
  checked={visible.includes(column)}
  onCheckedChange={(checked) => toggle(column, checked)}
>
  {column}
</DropdownMenuCheckboxItem>`;

export const checkbox: CodeData = {
  title: "체크 항목 (CheckboxItem)",
  description:
    "여러 항목을 켜고 끄는 메뉴입니다. 표의 열 표시 설정처럼 선택이 즉시 반영되어야 하는 곳에 씁니다. 상태는 직접 관리합니다.",
  type: "single",
  code: [{ fileName: "DropdownCheckbox.tsx", language: "tsx", code }],
  component: <Component />,
};
