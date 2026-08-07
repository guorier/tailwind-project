"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { colorsArray } from "@styles/theme/color.theme";

/** 상태 색상은 단계가 없어 별도 섹션에서 다룬다. */
const excluded = ["warning", "valid", "error", "line"];

const paletteColors = colorsArray.filter(
  ({ colorName }) => !excluded.includes(colorName),
);

function Component() {
  return (
    <div className="flex flex-col gap-8">
      {paletteColors.map(({ colorName, shades }) => (
        <div key={colorName} className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h6 className="flex-none">{colorName}</h6>
            <div className="w-full h-px bg-silver-300" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-3">
            {Object.entries(shades).map(([shade, hex]) => (
              <div key={shade} className="flex flex-col gap-1">
                <div className="h-10 rounded border border-black/5" style={{ background: hex }} />
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

const code = `// tailwind.config.ts 에 등록된 색상을 클래스로 씁니다.
// 형식: {속성}-{색상명}-{단계}
<div className="bg-natural-900" />
<div className="text-primary-500" />
<div className="border-silver-300" />

// 색상 값을 코드에서 직접 써야 할 때는 테마 배열을 가져옵니다.
import { colorsArray } from "@styles/theme/color.theme";

const natural = colorsArray.find((c) => c.colorName === "natural");
natural?.shades[900]; // "#111111"`;

export const palette: CodeData = {
  title: "색상 팔레트",
  description:
    "tailwind.config.ts 에 등록된 색상 단계입니다. {속성}-{색상명}-{단계} 형식으로 클래스를 만들어 씁니다. 값을 코드에서 직접 참조할 때는 colorsArray 를 가져오세요.",
  type: "single",
  code: [{ fileName: "Colors.tsx", language: "tsx", code }],
  component: <Component />,
};
