"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Skeleton } from "@/components/ui/skeleton";

function Component() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-50" />
        <Skeleton className="h-4 w-40" />
      </div>
    </div>
  );
}

const code = `import { Skeleton } from "@/components/ui/skeleton";

// 크기는 클래스로 직접 지정합니다.
// 실제로 들어올 콘텐츠와 비슷한 크기로 맞춰야 로딩이 끝날 때 화면이 덜 흔들립니다.
<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-50" />
    <Skeleton className="h-4 w-40" />
  </div>
</div>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "로딩 중인 자리를 미리 잡아 두는 플레이스홀더입니다. 실제 콘텐츠와 비슷한 크기로 맞춰야 데이터가 도착했을 때 레이아웃이 밀리지 않습니다.",
  type: "single",
  code: [{ fileName: "Skeleton.tsx", language: "tsx", code }],
  component: <Component />,
};
