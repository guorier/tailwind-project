"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Separator } from "@/components/ui/separator";

function Component() {
  return (
    <div className="max-w-100">
      <div>
        <h4 className="font-bold">Radix Primitives</h4>
        <p className="text-sm text-natural-500">
          접근성을 갖춘 UI 프리미티브 모음입니다.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  );
}

const code = `import { Separator } from "@/components/ui/separator";

// 가로 구분선 (기본값)
<Separator className="my-4" />

// 세로 구분선 — 부모에 높이가 있어야 보입니다.
<div className="flex h-5 items-center gap-4">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
</div>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "내용을 시각적으로 나누는 선입니다. orientation 으로 방향을 정하며, 세로선은 부모에 높이가 지정돼 있어야 보입니다.",
  type: "single",
  code: [{ fileName: "Separator.tsx", language: "tsx", code }],
  component: <Component />,
};
