"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { LoaderIcon } from "lucide-react";
import Spinner from "@/components/ui/spinner";
import { SpinnerBar } from "@/components/Spinner/SpinnerBar";

function Component() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 w-26">크기</div>
        <Spinner className="size-4 min-w-4" />
        <Spinner className="size-6 min-w-6" />
        <Spinner className="size-8 min-w-8" />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 w-26">색상 / 두께</div>
        <SpinnerBar className="size-8 min-w-8 text-indigo-500 border-[5px]" />
        <SpinnerBar className="size-8 min-w-8 text-natural-900 border-[3px]" />
        <SpinnerBar className="size-8 min-w-8 text-error-100" trackOpacity={0.15} />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 w-26">다른 아이콘</div>
        <LoaderIcon
          role="status"
          aria-label="Loading"
          className="size-8 min-w-8 animate-spin"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 w-26">텍스트와 함께</div>
        <div className="flex items-center gap-3 h-10">
          <SpinnerBar className="size-8 min-w-8 text-indigo-500 border-[5px]" />
          Loading data..
        </div>
      </div>
    </div>
  );
}

const code = `import Spinner from "@/components/ui/spinner";
import { SpinnerBar } from "@/components/Spinner/SpinnerBar";
import { LoaderIcon } from "lucide-react";

// 크기
<Spinner className="size-4 min-w-4" />
<Spinner className="size-8 min-w-8" />

// SpinnerBar — 색은 text-*, 두께는 border-*, 트랙 투명도는 trackOpacity
<SpinnerBar className="size-8 min-w-8 text-indigo-500 border-[5px]" />
<SpinnerBar className="size-8 min-w-8 text-error-100" trackOpacity={0.15} />

// lucide 의 다른 아이콘을 직접 돌려도 됩니다.
<LoaderIcon role="status" aria-label="Loading" className="size-8 animate-spin" />

// 텍스트와 함께
<div className="flex items-center gap-3">
  <SpinnerBar className="size-8 min-w-8 text-indigo-500 border-[5px]" />
  Loading data..
</div>`;

export const custom: CodeData = {
  title: "크기 · 색상 · 두께",
  description:
    "SpinnerBar 는 currentColor 를 쓰므로 text-* 로 색을 바꾸고, border-* 로 두께를, trackOpacity 로 남은 트랙의 투명도를 조절합니다.",
  type: "single",
  code: [{ fileName: "SpinnerCustom.tsx", language: "tsx", code }],
  component: <Component />,
};
