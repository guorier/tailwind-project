"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textarea } from "@/components/Textarea/Textarea";
import { ColumnTitle } from "./parts";

const colorKeys = ["base", "primary", "secondary", "warning", "error", "valid"] as const;

function Component() {
  return (
    <div className="flex flex-col gap-4">
      <ColumnTitle>color</ColumnTitle>
      <div className="grid grid-cols-3 gap-4">
        {colorKeys.map((color) => (
          <div key={color} className="flex flex-col gap-2">
            <span className="text-sm text-gray-600">{color}</span>
            <Textarea
              placeholder="Text Value"
              color={color}
              resize="none"
              width="full"
              height="16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const code = `import { Textarea } from "@/components/Textarea/Textarea";

<Textarea placeholder="Text Value" color="base" resize="none" height="16" />
<Textarea placeholder="Text Value" color="primary" resize="none" height="16" />
<Textarea placeholder="Text Value" color="warning" resize="none" height="16" />
<Textarea placeholder="Text Value" color="error" resize="none" height="16" />
<Textarea placeholder="Text Value" color="valid" resize="none" height="16" />`;

export const colors: CodeData = {
  title: "색상",
  description:
    "color 로 테두리와 포커스 색을 지정합니다. warning · error · valid 는 글자색까지 함께 변경됩니다.",
  type: "single",
  code: [{ fileName: "TextareaColors.tsx", language: "tsx", code }],
  component: <Component />,
};
