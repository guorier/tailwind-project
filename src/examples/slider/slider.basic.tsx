"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Slider } from "@/components/ui/slider";

function Component() {
  const [value, setValue] = useState([40]);

  return (
    <div className="max-w-100 space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-natural-500">밝기</span>
        <span className="font-medium">{value[0]}</span>
      </div>
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
    </div>
  );
}

const code = `import { Slider } from "@/components/ui/slider";

const [value, setValue] = useState([40]);

// value 는 배열입니다. 비제어로 쓰려면 defaultValue 를 넘깁니다.
<Slider value={value} onValueChange={setValue} max={100} step={1} />`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "범위 안에서 값을 고르는 입력입니다. value 가 배열인 점에 주의하세요. 사용자가 조작하지 않는 진행률 표시라면 Slider 대신 Progress 를 씁니다.",
  type: "single",
  code: [{ fileName: "Slider.tsx", language: "tsx", code }],
  component: <Component />,
};
