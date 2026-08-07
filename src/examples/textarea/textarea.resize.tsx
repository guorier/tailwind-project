"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textarea } from "@/components/Textarea/Textarea";
import { CompareGrid, StateLabels, ColumnTitle } from "./parts";

const states = ["Default", "Disabled", "Focus"];

const resizeOptions = [
  { value: "none", title: "none" },
  { value: "resize", title: "resize (x·y)" },
  { value: "x-axis", title: "x-axis" },
  { value: "y-axis", title: "y-axis" },
] as const;

function Component() {
  return (
    <CompareGrid>
      <StateLabels items={states} />
      <div className="grid grid-cols-4 items-center gap-4">
        {resizeOptions.map(({ value, title }) => (
          <div key={value} className="flex flex-col items-center gap-4">
            <ColumnTitle>{title}</ColumnTitle>
            <Textarea placeholder="Text Value" resize={value} width="full" height="16" />
            <Textarea placeholder="Text Value" resize={value} width="full" height="16" disabled />
            <Textarea
              placeholder="Text Value"
              resize={value}
              width="full"
              height="16"
              className="border-natural-900"
            />
          </div>
        ))}
      </div>
    </CompareGrid>
  );
}

const code = `import { Textarea } from "@/components/Textarea/Textarea";

// resize 로 사용자가 크기를 조절할 수 있는 방향을 지정합니다. (기본값 "resize")
<Textarea placeholder="Text Value" resize="none" width="full" height="16" />
<Textarea placeholder="Text Value" resize="resize" width="full" height="16" />
<Textarea placeholder="Text Value" resize="x-axis" width="full" height="16" />
<Textarea placeholder="Text Value" resize="y-axis" width="full" height="16" />`;

export const resize: CodeData = {
  title: "크기 조절 방향",
  description:
    'resize 로 사용자가 드래그해 크기를 바꿀 수 있는 방향을 정합니다. 기본값은 "resize"(가로·세로 모두)이며, 레이아웃이 깨지는 걸 막으려면 "none" 이나 "y-axis" 를 씁니다.',
  type: "single",
  code: [{ fileName: "Textarea.tsx", language: "tsx", code }],
  component: <Component />,
};
