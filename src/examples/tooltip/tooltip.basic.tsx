"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { TooltipDemo } from "@components/Tooltip/Tooltip";
import { RowLabel } from "./parts";

function Component() {
  return (
    <div className="flex items-center gap-4 min-h-24">
      <RowLabel>Default</RowLabel>
      <div className="flex justify-center items-center w-28">
        <TooltipDemo />
      </div>
    </div>
  );
}

const code = `import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

// TooltipProvider 는 툴팁을 쓰는 영역을 한 번만 감싸면 됩니다.
// 보통 최상위 레이아웃에 두고, 개별 툴팁에서는 생략합니다.
<TooltipProvider>
  <Tooltip>
    {/* asChild — 트리거가 별도 요소를 만들지 않고 자식에 그대로 붙습니다. */}
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>

    <TooltipContent side="top" align="center">
      Add to library
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "Provider · Root · Trigger · Content 를 조합해 사용합니다. TooltipTrigger 에 asChild 를 주면 트리거가 별도 DOM 을 만들지 않고 자식 요소에 그대로 붙습니다.",
  type: "single",
  code: [{ fileName: "Tooltip.tsx", language: "tsx", code }],
  component: <Component />,
};
