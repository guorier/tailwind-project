"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textinput } from "@/components/Input/TextInput";
import { ColumnTitle } from "./parts";

const heights = ["32", "36", "40", "42", "48", "56"] as const;

function Component() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 max-w-[346px]">
        <ColumnTitle>height</ColumnTitle>
        {heights.map((h) => (
          <div key={h} className="flex items-center gap-3">
            <span className="flex-none w-10 text-sm text-gray-600">{h}</span>
            <Textinput placeholder={`height="${h}"`} height={h} />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <ColumnTitle>width</ColumnTitle>
        <Textinput placeholder='width="40"' width="40" />
        <Textinput placeholder='width="64"' width="64" />
        <Textinput placeholder='width="full"' width="full" />
      </div>
    </div>
  );
}

const code = `import { Textinput } from "@/components/Input/TextInput";

// 높이 (기본값 42 — SelectBox 와 동일한 표준 높이)
<Textinput placeholder="Please enter..." height="36" />
<Textinput placeholder="Please enter..." height="42" />
<Textinput placeholder="Please enter..." height="56" />

// 너비
<Textinput placeholder="Please enter..." width="40" />
<Textinput placeholder="Please enter..." width="full" />`;

export const size: CodeData = {
  title: "크기 (height / width)",
  description:
    "height 기본값은 42 로 SelectBox·MultiSelect 와 같은 표준 높이입니다. 지정한 높이에 맞춰 글자 크기도 함께 조정됩니다.",
  type: "single",
  code: [{ fileName: "TextInput.tsx", language: "tsx", code }],
  component: <Component />,
};
