"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { WeightCard } from "./parts";
import {
  weights,
  koreanSample,
  koreanBody,
  latinSample,
  latinBody,
} from "./data";

function Component() {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium">
        폰트 속성은 Semibold, Regular, Light 3가지만 사용
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        {weights.map(({ label, weightClass }) => (
          <WeightCard
            key={`ko-${label}`}
            sample={koreanSample}
            body={koreanBody}
            weightClass={weightClass}
            label={label}
          />
        ))}
        {weights.map(({ label, weightClass }) => (
          <WeightCard
            key={`en-${label}`}
            sample={latinSample}
            body={latinBody}
            weightClass={weightClass}
            label={label}
          />
        ))}
      </div>
    </div>
  );
}

const code = `// 폰트 웨이트는 Semibold · Regular · Light 3가지만 사용합니다.
<div className="font-semibold">Semibold</div>
<div className="font-normal">Regular</div>
<div className="font-light">Light</div>`;

export const weightStyles: CodeData = {
  title: "폰트 속성",
  description:
    "Semibold · Regular · Light 3가지만 사용합니다. 위쪽은 한글, 아래쪽은 영문·숫자 표본입니다.",
  type: "single",
  code: [{ fileName: "Typography.tsx", language: "tsx", code }],
  component: <Component />,
};
