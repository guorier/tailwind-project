"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { SwitchDemo } from "@/components/Toggle/SwitchDemo";
import { ToggleDemo } from "@/components/Toggle/ToggleDemo";
import { ColumnTitle } from "./parts";

function Component() {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-xl">
      <div className="flex flex-col items-center gap-4">
        <ColumnTitle>Switch</ColumnTitle>
        <SwitchDemo />
      </div>

      <div className="flex flex-col items-center gap-4">
        <ColumnTitle>Toggle</ColumnTitle>
        <ToggleDemo />
      </div>
    </div>
  );
}

const code = `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { PiStarFour, PiStarFourFill } from "react-icons/pi";
import { useState } from "react";

// Switch — Label 과 id 로 연결해 사용합니다.
<div className="flex items-center space-x-2">
  <Switch id="switch" />
  <Label htmlFor="switch">Switch</Label>
</div>

// Toggle — pressed / onPressedChange 로 눌린 상태를 제어합니다.
// data-[state=on] 으로 켜진 상태의 스타일을 지정합니다.
const [on, setOn] = useState(false);

<Toggle
  pressed={on}
  onPressedChange={setOn}
  aria-label="Toggle bookmark"
  size="sm"
  variant="outline"
  className="text-[#212121] data-[state=on]:text-[#2b7fff]"
>
  <span className="data-[state=on]:hidden" data-state={on ? "on" : "off"}>
    <PiStarFour />
  </span>
  <span className="hidden data-[state=on]:inline" data-state={on ? "on" : "off"}>
    <PiStarFourFill className="fill-[#2b7fff]" />
  </span>
  Check
</Toggle>`;

export const switchDemo: CodeData = {
  title: "shadcn Switch / Toggle",
  description:
    "shadcn/ui 기반 컴포넌트입니다. Switch 는 설정 on/off 에, Toggle 은 서식 버튼처럼 눌린 상태를 유지해야 할 때 사용합니다.",
  type: "single",
  code: [{ fileName: "SwitchDemo.tsx", language: "tsx", code }],
  component: <Component />,
};
