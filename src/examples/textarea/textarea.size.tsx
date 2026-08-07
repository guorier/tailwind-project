"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textarea } from "@/components/Textarea/Textarea";
import { ColumnTitle } from "./parts";

function Component() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex flex-col gap-4">
        <ColumnTitle>height</ColumnTitle>
        <div className="grid grid-cols-3 gap-4 items-start">
          {(["16", "24", "32"] as const).map((h) => (
            <div key={h} className="flex flex-col gap-2">
              <span className="text-sm text-gray-600">height=&quot;{h}&quot;</span>
              <Textarea placeholder="Text Value" resize="none" width="full" height={h} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ColumnTitle>width</ColumnTitle>
        <Textarea placeholder='width="full"' resize="none" width="full" height="16" />
        <Textarea placeholder='width="64"' resize="none" width="64" height="16" />
      </div>
    </div>
  );
}

const code = `import { Textarea } from "@/components/Textarea/Textarea";

// height / width 는 테마 키를 받습니다. (둘 다 기본값 "auto")
<Textarea placeholder="Text Value" height="16" width="full" />
<Textarea placeholder="Text Value" height="32" width="full" />
<Textarea placeholder="Text Value" height="16" width="64" />`;

export const size: CodeData = {
  title: "크기 (height / width)",
  description:
    "height·width 는 테마에 정의된 키를 받고, 기본값은 둘 다 auto 입니다. 테마에 없는 값을 넘기면 h-{값} / w-{값} 클래스로 처리됩니다.",
  type: "single",
  code: [{ fileName: "TextareaSize.tsx", language: "tsx", code }],
  component: <Component />,
};
