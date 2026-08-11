"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Progresscircle } from "@/components/Input/ProgressCircle";

function Component() {
  return (
    <div className="max-w-100">
      <Progresscircle value={75} size={120} />
    </div>
  );
}

const code = `import { Progresscircle } from "@/components/Input/ProgressCircle";

// size 는 원의 지름(px)입니다. 기본값이 0이라 반드시 넘겨야 보입니다.
<Progresscircle value={75} size={120} />

// 색 변경
<Progresscircle value={75} size={120} fillColor="#256ef4" />`;

export const circle: CodeData = {
  title: "원형 진행 (Progresscircle)",
  description:
    "conic-gradient 로 그린 원형 게이지입니다. size 는 원의 지름(px)이며 기본값이 0이라 반드시 지정해야 합니다.",
  type: "single",
  code: [{ fileName: "Progresscircle.tsx", language: "tsx", code }],
  component: <Component />,
};
