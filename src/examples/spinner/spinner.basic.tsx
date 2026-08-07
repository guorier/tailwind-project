"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import Spinner from "@/components/ui/spinner";
import { SpinnerBar } from "@/components/Spinner/SpinnerBar";

function Component() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 w-26">Spinner</div>
        <Spinner className="size-8 min-w-8" />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 w-26">SpinnerBar</div>
        <SpinnerBar className="size-8 min-w-8" />
      </div>
    </div>
  );
}

const code = `import Spinner from "@/components/ui/spinner";
import { SpinnerBar } from "@/components/Spinner/SpinnerBar";

// Spinner — lucide 아이콘 기반. 크기는 size 유틸리티로 지정합니다.
<Spinner className="size-8 min-w-8" />

// SpinnerBar — 테두리를 돌리는 방식. 두께를 조절할 수 있습니다.
<SpinnerBar className="size-8 min-w-8" />`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "두 컴포넌트 모두 role=\"status\" 와 aria-label 이 내장돼 있어 스크린리더에 로딩 상태로 전달됩니다. 크기는 Tailwind size 유틸리티로 지정합니다.",
  type: "single",
  code: [{ fileName: "Spinner.tsx", language: "tsx", code }],
  component: <Component />,
};
