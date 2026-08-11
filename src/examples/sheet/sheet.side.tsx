"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const sides = ["top", "right", "bottom", "left"] as const;

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      {sides.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>side=&quot;{side}&quot;</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

const code = `import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

// side 로 열리는 방향을 정합니다. 기본값은 "right" 입니다.
// 좌우는 너비 3/4(최대 sm), 상하는 전체 너비로 열립니다.
<SheetContent side="top">...</SheetContent>
<SheetContent side="right">...</SheetContent>
<SheetContent side="bottom">...</SheetContent>
<SheetContent side="left">...</SheetContent>`;

export const side: CodeData = {
  title: "열리는 방향 (side)",
  description:
    'side 로 패널이 나오는 방향을 정합니다. 기본값은 "right" 이며, 좌우는 너비 3/4(최대 sm), 상하는 화면 전체 너비로 열립니다.',
  type: "single",
  code: [{ fileName: "SheetSide.tsx", language: "tsx", code }],
  component: <Component />,
};
