"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Slider } from "@/components/ui/slider";

function Component() {
  const [value, setValue] = useState([50]);

  return (
    <div className="flex h-52 items-center gap-8">
      <Slider
        orientation="vertical"
        value={value}
        onValueChange={setValue}
        max={100}
      />
      <span className="text-sm font-medium">{value[0]}</span>
    </div>
  );
}

const code = `import { Slider } from "@/components/ui/slider";

// orientation="vertical" 은 부모에 높이가 있어야 보입니다.
<div className="h-52">
  <Slider orientation="vertical" value={value} onValueChange={setValue} max={100} />
</div>`;

export const vertical: CodeData = {
  title: "세로 방향 (vertical)",
  description:
    'orientation="vertical" 로 세로 슬라이더가 됩니다. 부모에 높이가 지정돼 있어야 보이며, 값은 아래에서 위로 증가합니다.',
  type: "single",
  code: [{ fileName: "SliderVertical.tsx", language: "tsx", code }],
  component: <Component />,
};
