"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Button } from "@/components/Button/Button";
import { CompareGrid, StateLabels, ColumnTitle, radiusKeys } from "./parts";

const radiusTitles = {
  default: "Default",
  round: "Round",
  pill: "Pill",
} as const;

function Component() {
  return (
    <CompareGrid>
      <StateLabels items={["Default", "Disabled"]} />
      <div className="grid grid-cols-6 items-center gap-4">
        {/* default 스타일 3종 */}
        {radiusKeys.map((radius) => (
          <div key={`fill-${radius}`} className="flex flex-col items-center gap-4">
            <ColumnTitle>{radiusTitles[radius]}</ColumnTitle>
            <Button radius={radius}>Button</Button>
            <Button radius={radius} disabled>
              Button
            </Button>
          </div>
        ))}

        {/* outline 스타일 3종 */}
        {radiusKeys.map((radius) => (
          <div key={`outline-${radius}`} className="flex flex-col items-center gap-4">
            <ColumnTitle>Outline {radiusTitles[radius]}</ColumnTitle>
            <Button styleType="outline" radius={radius}>
              Button
            </Button>
            <Button styleType="outline" radius={radius} disabled>
              Button
            </Button>
          </div>
        ))}
      </div>
    </CompareGrid>
  );
}

const code = `import { Button } from "@/components/Button/Button";

// styleType — "default"(배경 채움) | "outline"(테두리만)
// radius — "default"(각형) | "round"(둥근 모서리) | "pill"(완전 둥근 형태)
<Button>Button</Button>
<Button radius="round">Button</Button>
<Button radius="pill">Button</Button>

<Button styleType="outline">Button</Button>
<Button styleType="outline" radius="round">Button</Button>
<Button styleType="outline" radius="pill">Button</Button>

<Button disabled>Button</Button>`;

export const basic: CodeData = {
  title: "기본 사용 / 모서리 형태",
  description:
    "styleType 으로 채움·테두리를, radius 로 모서리 형태를 정합니다. 각 행은 기본·비활성 상태입니다.",
  type: "single",
  code: [{ fileName: "Button.tsx", language: "tsx", code }],
  component: <Component />,
};
