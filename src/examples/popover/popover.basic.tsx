"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

function Component() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">열기</Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72">
        <p className="text-sm font-bold">도움말</p>
        <p className="mt-2 text-sm text-natural-600">
          Tooltip 과 달리 클릭으로 열리고, 안에 버튼이나 입력을 넣을 수 있습니다.
        </p>
      </PopoverContent>
    </Popover>
  );
}

const code = `import {
  Popover, PopoverTrigger, PopoverContent,
} from "@/components/ui/popover";

// Tooltip 은 hover 로 열리고 짧은 설명만 담지만,
// Popover 는 클릭으로 열리고 내부에 조작 가능한 요소를 넣을 수 있습니다.
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">열기</Button>
  </PopoverTrigger>
  <PopoverContent align="start" className="w-72">
    <p className="text-sm font-bold">도움말</p>
    <p className="mt-2 text-sm text-natural-600">내용을 넣습니다.</p>
  </PopoverContent>
</Popover>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "클릭하면 떠오르는 작은 패널입니다. hover 로 열리고 짧은 설명만 담는 Tooltip 과 달리, 내부에 버튼·입력 같은 조작 가능한 요소를 넣을 수 있습니다.",
  type: "single",
  code: [{ fileName: "Popover.tsx", language: "tsx", code }],
  component: <Component />,
};
