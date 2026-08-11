"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { SkeletonText } from "@/components/ui/skeleton";

function Component() {
  return (
    <div className="max-w-100 space-y-6">
      <SkeletonText lines={3} />
      <SkeletonText lines={5} />
    </div>
  );
}

const code = `import { SkeletonText } from "@/components/ui/skeleton";

// lines 로 줄 수를 지정합니다. 마지막 줄은 자동으로 짧게 렌더되어
// 실제 문단처럼 보입니다. (기본값 3줄)
<SkeletonText lines={3} />
<SkeletonText lines={5} />`;

export const text: CodeData = {
  title: "여러 줄 텍스트",
  description:
    "문단 형태의 콘텐츠에는 SkeletonText 를 씁니다. lines 로 줄 수를 정하며, 마지막 줄만 짧게 렌더해 문단이 끝나는 느낌을 줍니다.",
  type: "single",
  code: [{ fileName: "SkeletonText.tsx", language: "tsx", code }],
  component: <Component />,
};
