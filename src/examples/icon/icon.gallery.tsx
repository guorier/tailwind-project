"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import Icons from "@/components/Icons";
import { iconNames } from "./data";

function Component() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4">
      {iconNames.map((iName) => (
        <div
          key={iName}
          className="flex flex-col items-center gap-2 p-2 rounded border border-gray-200"
        >
          <Icons iName={iName} className="size-8" original />
          <span className="text-[11px] text-gray-600 text-center break-all">
            {iName}
          </span>
        </div>
      ))}
    </div>
  );
}

const code = `import Icons from "@/components/Icons";

// iName 에 아이콘 이름을 넘기고 크기는 className 으로 지정합니다.
<Icons iName="iconSearch" className="size-8" original />`;

export const gallery: CodeData = {
  title: "아이콘 목록",
  description:
    "사용할 수 있는 아이콘 이름입니다. iName 에 이 이름을 그대로 넘기세요. 목록은 src/components/Icons.tsx 의 IconSource 를 따릅니다.",
  type: "single",
  code: [{ fileName: "IconGallery.tsx", language: "tsx", code }],
  component: <Component />,
};
