"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Slider } from "@/components/ui/slider";

function Component() {
  return (
    <div className="max-w-100 space-y-6">
      <Slider defaultValue={[40]} max={100} disabled />

      {/* 손잡이가 셋이면 구간이 둘로 나뉜다. */}
      <Slider defaultValue={[20, 50, 80]} max={100} step={5} />
    </div>
  );
}

const code = `import { Slider } from "@/components/ui/slider";

// 조작을 막습니다. 흐리게 표시됩니다.
<Slider defaultValue={[40]} max={100} disabled />

// 배열 길이만큼 손잡이가 생깁니다. 셋 이상도 가능합니다.
<Slider defaultValue={[20, 50, 80]} max={100} step={5} />`;

export const disabled: CodeData = {
  title: "비활성 · 다중 손잡이",
  description:
    "disabled 를 주면 조작이 막히고 흐리게 표시됩니다. 값 배열에 원소를 셋 이상 넣으면 손잡이도 그만큼 생깁니다.",
  type: "single",
  code: [{ fileName: "SliderDisabled.tsx", language: "tsx", code }],
  component: <Component />,
};
