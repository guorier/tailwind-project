"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { IconToggle } from "@/components/Toggle/IconToggle";
import { ColumnTitle } from "./parts";

function Component() {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-xl">
      <div className="flex flex-col items-center gap-4">
        <ColumnTitle>iconType=&quot;switch&quot;</ColumnTitle>
        <IconToggle
          iconType="switch"
          iconOn="iconCompleted"
          iconOff="iconFail"
          iconSize="size-6"
        />
        <p className="text-xs text-gray-600">상태에 따라 아이콘이 교체됩니다.</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <ColumnTitle>iconType=&quot;color&quot;</ColumnTitle>
        <IconToggle
          iconType="color"
          iconOn="iconPower"
          iconColorOff="bg-[#DC0000]"
          iconColorOn="bg-[#24DE81]"
          iconSize="size-6"
        />
        <p className="text-xs text-gray-600">아이콘은 그대로, 배경색만 바뀝니다.</p>
      </div>
    </div>
  );
}

const code = `import { IconToggle } from "@/components/Toggle/IconToggle";

// switch — 상태에 따라 아이콘 자체를 교체합니다.
<IconToggle
  iconType="switch"
  iconOn="iconCompleted"
  iconOff="iconFail"
  iconSize="size-6"
/>

// color — 아이콘은 유지하고 배경색만 바꿉니다.
<IconToggle
  iconType="color"
  iconOn="iconPower"
  iconColorOff="bg-[#DC0000]"
  iconColorOn="bg-[#24DE81]"
  iconSize="size-6"
/>`;

export const icon: CodeData = {
  title: "아이콘 토글",
  description:
    'iconType="switch" 는 켜짐/꺼짐에 따라 아이콘을 교체하고, "color" 는 아이콘을 유지한 채 배경색만 바꿉니다. iconOn/iconOff 에는 아이콘 이름을 넘깁니다.',
  type: "single",
  code: [{ fileName: "IconToggle.tsx", language: "tsx", code }],
  component: <Component />,
};
