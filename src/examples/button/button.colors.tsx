"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Button } from "@/components/Button/Button";
import {
  CompareColumn,
  CompareColumns,
  CompareGrid,
  ColumnTitle,
  StateLabels,
  colorKeys,
} from "./parts";

const colorLabels = ["Base", "Primary", "Secondary", "Warning", "Valid", "Error"];

function Component() {
  return (
    <CompareGrid>
      <StateLabels items={colorLabels} />
      {/* 왼쪽 열에 버튼이 2개 들어가므로 그 폭에 맞춘다. */}
      <CompareColumns columnWidth="212px">
        <CompareColumn>
          <ColumnTitle>Default / Outline</ColumnTitle>
          {colorKeys.map((color) => (
            <div key={color} className="flex items-center gap-4">
              <Button colors={color}>Button</Button>
              <Button colors={color} styleType="outline">
                Button
              </Button>
            </div>
          ))}
        </CompareColumn>

        <CompareColumn>
          <ColumnTitle>Disabled</ColumnTitle>
          {colorKeys.map((color) => (
            <Button key={color} colors={color} disabled>
              Button
            </Button>
          ))}
        </CompareColumn>
      </CompareColumns>
    </CompareGrid>
  );
}

const code = `import { Button } from "@/components/Button/Button";

// colors — "base" | "primary" | "secondary" | "warning" | "valid" | "error"
<Button colors="primary">Button</Button>
<Button colors="primary" styleType="outline">Button</Button>

// HEX 값을 직접 넘길 수도 있습니다.
// default 는 배경색, outline 은 테두리색에 적용됩니다.
<Button colors="#2b7fff">Button</Button>

// 비활성화 시에는 colors 와 무관하게 회색으로 표시됩니다.
<Button colors="primary" disabled>Button</Button>`;

export const colors: CodeData = {
  title: "색상",
  description:
    "colors 로 색을 지정합니다. HEX 문자열(#2b7fff)을 넘기면 styleType 에 따라 배경색 또는 테두리색으로 적용됩니다. 비활성화 상태에서는 지정한 색과 무관하게 회색으로 표시됩니다.",
  type: "single",
  code: [{ fileName: "ButtonColors.tsx", language: "tsx", code }],
  component: <Component />,
};
