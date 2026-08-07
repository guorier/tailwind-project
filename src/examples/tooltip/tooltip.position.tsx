"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const sides = ["top", "right", "bottom", "left"] as const;

function Component() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-4 py-10">
        {sides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline">{side}</Button>
            </TooltipTrigger>
            <TooltipContent side={side} align="center">
              side=&quot;{side}&quot;
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

const code = `import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

// side — 트리거 기준 표시 방향 (기본값 "top")
// align — 방향축 기준 정렬 ("start" | "center" | "end")
// sideOffset — 트리거와의 간격 (기본값 6)
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">right</Button>
    </TooltipTrigger>
    <TooltipContent side="right" align="center" sideOffset={6}>
      오른쪽에 표시됩니다
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`;

export const position: CodeData = {
  title: "표시 위치",
  description:
    "side 로 방향, align 으로 정렬, sideOffset 으로 간격을 조절합니다. 화면 경계에 가까우면 Radix 가 자동으로 반대 방향으로 뒤집습니다. 각 버튼에 마우스를 올려 확인하세요.",
  type: "single",
  code: [{ fileName: "TooltipPosition.tsx", language: "tsx", code }],
  component: <Component />,
};
