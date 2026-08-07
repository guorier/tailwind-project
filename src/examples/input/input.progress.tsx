"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Progressbar } from "@/components/Input/ProgressBar";
import { Progresscircle } from "@/components/Input/ProgressCircle";
import { ColumnTitle } from "./parts";

function Component() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-10">
        <ColumnTitle>Progressbar</ColumnTitle>
        {/* none: 값 고정 표시 (조작 불가) */}
        <Progressbar none value={50} />
        {/* none 없이 쓰면 드래그로 값을 조절할 수 있습니다. */}
        <Progressbar />
      </div>

      <div className="flex flex-col gap-10">
        <ColumnTitle>Progresscircle</ColumnTitle>
        <Progresscircle
          trackColor="#F1F1F5"
          fillColor="#111111"
          min={0}
          max={100}
          step={10}
          size={100}
          value={50}
          none
        />
        <Progresscircle
          trackColor="#F1F1F5"
          fillColor="#111111"
          min={0}
          max={100}
          step={10}
          size={100}
        />
      </div>
    </div>
  );
}

const code = `import { Progressbar } from "@/components/Input/ProgressBar";
import { Progresscircle } from "@/components/Input/ProgressCircle";

// none — 값을 고정해서 보여주기만 합니다.
<Progressbar none value={50} />

// none 없이 — 사용자가 드래그로 값을 조절합니다.
<Progressbar />

// 원형 프로그레스
<Progresscircle
  trackColor="#F1F1F5"
  fillColor="#111111"
  min={0}
  max={100}
  step={10}
  size={100}
  value={50}
  none
/>`;

export const progress: CodeData = {
  title: "프로그레스 (bar / circle)",
  description:
    "none 을 주면 value 를 그대로 표시하는 읽기 전용이 되고, 생략하면 드래그로 조작할 수 있습니다. size 는 원형에서 지름으로 쓰입니다.",
  type: "single",
  code: [{ fileName: "Progress.tsx", language: "tsx", code }],
  component: <Component />,
};
