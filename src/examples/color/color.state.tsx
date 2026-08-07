"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { colorsArray } from "@styles/theme/color.theme";

const stateNames = ["warning", "valid", "error", "line"];

const stateColors = colorsArray.filter(({ colorName }) =>
  stateNames.includes(colorName),
);

function Component() {
  return (
    <div className="flex flex-col gap-8">
      {stateColors.map(({ colorName, shades }) => (
        <div key={colorName} className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h6 className="flex-none">{colorName}</h6>
            <div className="w-full h-px bg-silver-300" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-3">
            {Object.entries(shades).map(([shade, hex]) => (
              <div key={shade} className="flex flex-col gap-1">
                <div
                  className="h-10 rounded border border-black/5"
                  style={{ background: hex }}
                />
                <div className="text-sm leading-none text-silver-700">
                  {shade}
                  <div className="text-xs text-silver-500">{hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const code = `// 상태 색상 — 단계가 100 하나뿐이므로 항상 -100 을 붙입니다.
<span className="text-warning-100">경고 문구</span>
<span className="text-error-100">오류 문구</span>
<span className="text-valid-100">정상 문구</span>

// 각 컴포넌트의 color prop 과 대응됩니다.
<Textinput color="error" />
<Textarea color="valid" />

// line — 테두리·구분선·배경에 쓰는 회색 계열
<div className="border-line-200" />
<div className="bg-line-100" />`;

export const state: CodeData = {
  title: "상태 · 라인 색상",
  description:
    "warning · valid · error 는 단계가 100 하나뿐이라 항상 -100 을 붙입니다. 각 컴포넌트의 color prop 과 대응되며, line 계열은 테두리와 구분선에 씁니다.",
  type: "single",
  code: [{ fileName: "StateColors.tsx", language: "tsx", code }],
  component: <Component />,
};
