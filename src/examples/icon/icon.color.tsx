"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import Icons from "@/components/Icons";

const samples = ["iconSearch", "iconSave", "iconFolder", "iconDelete", "iconInfo"];
const colors = ["bg-natural-900", "bg-teal-600", "bg-primary-500", "bg-error-100"];

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h6 className="flex-none">original — 원본 색상</h6>
          <div className="w-full h-px bg-silver-300" />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {samples.map((iName) => (
            <Icons key={iName} iName={iName} className="size-8" original />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h6 className="flex-none">마스크 — bg-* 로 색 지정</h6>
          <div className="w-full h-px bg-silver-300" />
        </div>
        {colors.map((color) => (
          <div key={color} className="flex flex-wrap items-center gap-4">
            <span className="w-32 text-xs text-gray-600">{color}</span>
            {samples.map((iName) => (
              <Icons key={iName} iName={iName} className={`size-8 ${color}`} />
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h6 className="flex-none">크기</h6>
          <div className="w-full h-px bg-silver-300" />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {["size-4", "size-5", "size-6", "size-8", "size-10"].map((size) => (
            <div key={size} className="flex flex-col items-center gap-1">
              <Icons iName="iconSearch" className={`${size} bg-natural-900`} />
              <span className="text-[11px] text-gray-600">{size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const code = `import Icons from "@/components/Icons";

// original — SVG 를 배경 이미지로 넣어 원본 색상을 그대로 씁니다.
<Icons iName="iconSearch" className="size-8" original />

// original 없이 — SVG 를 마스크로 쓰므로 bg-* 가 아이콘 색이 됩니다.
// 색을 바꿔야 하는 아이콘은 이 방식을 쓰세요.
<Icons iName="iconSearch" className="size-8 bg-natural-900" />
<Icons iName="iconSearch" className="size-8 bg-teal-600" />

// 크기는 size-* 로 지정합니다.
<Icons iName="iconSearch" className="size-4 bg-natural-900" />
<Icons iName="iconSearch" className="size-10 bg-natural-900" />

// 클릭 핸들러도 받습니다.
<Icons iName="iconDelete" className="size-5 bg-error-100 cursor-pointer"
  onClick={() => handleDelete()} />`;

export const color: CodeData = {
  title: "색상과 크기",
  description:
    "original 을 주면 SVG 원본 색이 그대로 나오고, 생략하면 마스크로 처리되어 bg-* 클래스가 아이콘 색이 됩니다. 색을 바꿔야 하는 아이콘은 original 을 쓰지 마세요.",
  type: "single",
  code: [{ fileName: "IconColor.tsx", language: "tsx", code }],
  component: <Component />,
};
