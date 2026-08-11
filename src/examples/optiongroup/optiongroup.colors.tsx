"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Radio } from "@/components/Radio/Radio";
import {
  CompareColumns,
  CompareGrid,
  ColumnTitle,
  StateLabels,
  colorLabels,
} from "./parts";

const colorKeys = ["base", "primary", "secondary", "warning", "valid", "error"] as const;

/** 한 색상에 대해 체크박스와 라디오를 나란히 배치한 행. */
const ColorRow = ({
  color,
  disabled,
}: {
  color: (typeof colorKeys)[number];
  disabled?: boolean;
}) => (
  <div className="flex h-[22px] items-center justify-start gap-2 whitespace-nowrap">
    <div className="flex w-24 justify-start">
      <Checkbox label={color} colors={color} checked disabled={disabled} />
    </div>
    <div className="flex w-24 justify-start">
      <Radio label={color} colors={color} checked disabled={disabled} />
    </div>
  </div>
);

function Component() {
  return (
    <CompareGrid>
      <StateLabels items={colorLabels} />
      {/* 한 열에 체크박스+라디오(w-24 x2)가 들어가므로 폭을 넓게 잡는다. */}
      <CompareColumns columnWidth="212px">
        <div className="flex min-w-0 flex-col gap-4">
          <ColumnTitle>Default</ColumnTitle>
          {colorKeys.map((color) => (
            <ColorRow key={color} color={color} />
          ))}
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <ColumnTitle>Disabled</ColumnTitle>
          {colorKeys.map((color) => (
            <ColorRow key={color} color={color} disabled />
          ))}
        </div>
      </CompareColumns>
    </CompareGrid>
  );
}

const code = `import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Radio } from "@/components/Radio/Radio";

// colors 는 체크박스·라디오 모두 동일한 키를 씁니다.
<Checkbox label="base" colors="base" checked />
<Checkbox label="primary" colors="primary" checked />
<Checkbox label="error" colors="error" checked />

<Radio label="base" colors="base" checked />
<Radio label="primary" colors="primary" checked />

// 비활성화 시에는 colors 와 무관하게 회색으로 표시됩니다.
<Checkbox label="primary" colors="primary" checked disabled />`;

export const colors: CodeData = {
  title: "색상",
  description:
    "colors 로 선택 상태의 색을 지정합니다. 체크박스와 라디오가 같은 키를 공유합니다. 비활성화 상태에서는 지정한 색상과 무관하게 회색으로 표시됩니다.",
  type: "single",
  code: [{ fileName: "Colors.tsx", language: "tsx", code }],
  component: <Component />,
};
