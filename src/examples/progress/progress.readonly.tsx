"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Progressbar } from "@/components/Input/ProgressBar";
import { Progresscircle } from "@/components/Input/ProgressCircle";

function Component() {
  return (
    <div className="flex max-w-100 flex-col gap-6">
      <Progressbar value={40} none />
      <Progresscircle value={40} size={100} none />
    </div>
  );
}

const code = `import { Progressbar } from "@/components/Input/ProgressBar";
import { Progresscircle } from "@/components/Input/ProgressCircle";

// none 을 주면 range 입력이 숨겨지고 진행 표시만 남습니다.
// 업로드 진행률처럼 사용자가 조작할 수 없는 값에 씁니다.
<Progressbar value={40} none />
<Progresscircle value={40} size={100} none />`;

export const readonly: CodeData = {
  title: "표시 전용 (none)",
  description:
    "none 을 주면 range 입력이 숨겨지고 진행 표시만 남습니다. 업로드 진행률처럼 사용자가 직접 조작하지 않는 값에 사용합니다.",
  type: "single",
  code: [{ fileName: "ProgressReadonly.tsx", language: "tsx", code }],
  component: <Component />,
};
