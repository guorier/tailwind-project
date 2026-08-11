"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Progressbar } from "@/components/Input/ProgressBar";

function Component() {
  return (
    <div className="max-w-100">
      <Progressbar value={60} />
    </div>
  );
}

const code = `import { Progressbar } from "@/components/Input/ProgressBar";

// range 입력과 진행 바가 함께 렌더됩니다.
// value 를 넘기면 그 값에서 시작하고, 드래그하면 값이 바뀝니다.
<Progressbar value={60} />

// 색을 바꾸려면 trackColor · fillColor 를 넘깁니다.
<Progressbar value={60} fillColor="#256ef4" trackColor="#e5e7eb" />`;

export const bar: CodeData = {
  title: "진행 바 (Progressbar)",
  description:
    "range 입력과 진행 바가 한 쌍으로 렌더됩니다. 슬라이더를 움직이면 아래 바와 퍼센트 표시가 함께 반응합니다.",
  type: "single",
  code: [{ fileName: "Progressbar.tsx", language: "tsx", code }],
  component: <Component />,
};
