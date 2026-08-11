"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Slider } from "@/components/ui/slider";

function Component() {
  const [range, setRange] = useState([20, 80]);

  return (
    <div className="max-w-100 space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-natural-500">가격대</span>
        <span className="font-medium">
          {range[0]} ~ {range[1]}
        </span>
      </div>
      <Slider value={range} onValueChange={setRange} max={100} step={5} />
    </div>
  );
}

const code = `import { Slider } from "@/components/ui/slider";

const [range, setRange] = useState([20, 80]);

// 배열 원소를 두 개 넣으면 손잡이가 두 개인 구간 선택이 됩니다.
<Slider value={range} onValueChange={setRange} max={100} step={5} />`;

export const range: CodeData = {
  title: "구간 선택 (range)",
  description:
    "값 배열에 원소를 두 개 넣으면 손잡이가 두 개 생겨 구간을 고를 수 있습니다. 가격대나 기간 필터에 씁니다.",
  type: "single",
  code: [{ fileName: "SliderRange.tsx", language: "tsx", code }],
  component: <Component />,
};
