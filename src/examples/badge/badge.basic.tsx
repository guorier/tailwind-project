"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Badge } from "@/components/ui/badge";

function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}

const code = `import { Badge } from "@/components/ui/badge";

// variant 를 생략하면 default 입니다.
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "짧은 라벨을 표시하는 작은 표식입니다. 네 가지 기본 variant 를 제공하며, 이들은 hover 시 색이 반전되어 클릭 가능한 필터·태그로 쓰기에 적합합니다.",
  type: "single",
  code: [{ fileName: "Badge.tsx", language: "tsx", code }],
  component: <Component />,
};
