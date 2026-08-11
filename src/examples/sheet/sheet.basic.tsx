"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function Component() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">패널 열기</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>상세 정보</SheetTitle>
          <SheetDescription>
            목록에서 선택한 항목의 상세 내용을 보여줍니다.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6 text-sm text-natural-600">
          여기에 상세 내용을 넣습니다.
        </div>
      </SheetContent>
    </Sheet>
  );
}

const code = `import {
  Sheet, SheetTrigger, SheetContent,
  SheetHeader, SheetTitle, SheetDescription,
} from "@/components/ui/sheet";

// Modal 과 달리 화면 가장자리에서 밀려 들어옵니다.
// 목록을 보면서 상세를 확인하는 흐름에 적합합니다.
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">패널 열기</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>상세 정보</SheetTitle>
      <SheetDescription>선택한 항목의 상세 내용입니다.</SheetDescription>
    </SheetHeader>
    <div className="py-6">여기에 상세 내용을 넣습니다.</div>
  </SheetContent>
</Sheet>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "화면 가장자리에서 밀려 들어오는 패널입니다. 화면 중앙을 덮는 Modal 과 달리 배경 목록이 계속 보여서, 목록과 상세를 오가는 흐름에 적합합니다.",
  type: "single",
  code: [{ fileName: "Sheet.tsx", language: "tsx", code }],
  component: <Component />,
};
