"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Button } from "@/components/Button/Button";
import { ColumnTitle, heightKeys } from "./parts";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <ColumnTitle>height</ColumnTitle>
        <div className="flex flex-wrap items-end gap-4">
          {heightKeys.map((height) => (
            <div key={height} className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-600">{height}</span>
              <Button height={height}>Button</Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ColumnTitle>width</ColumnTitle>
        <div className="flex flex-col gap-3 max-w-md">
          <Button width="40">width=&quot;40&quot;</Button>
          <Button width="full">width=&quot;full&quot;</Button>
        </div>
      </div>
    </div>
  );
}

const code = `import { Button } from "@/components/Button/Button";

// height — 24 | 28 | 32 | 36 | 40 | 42 | 44 | 48 | 56 (기본값 40)
// 높이에 따라 글자 크기도 함께 조정됩니다.
<Button height="24">Button</Button>
<Button height="40">Button</Button>
<Button height="56">Button</Button>

// width — 테마 키 또는 "auto" | "full" (기본값 "auto")
<Button width="40">Button</Button>
<Button width="full">Button</Button>`;

export const size: CodeData = {
  title: "크기 (height / width)",
  description:
    "height 기본값은 40 이고, 지정한 높이에 맞춰 글자 크기도 함께 바뀝니다. width 를 생략하면 내용에 맞춰 폭이 결정됩니다.",
  type: "single",
  code: [{ fileName: "ButtonSize.tsx", language: "tsx", code }],
  component: <Component />,
};
