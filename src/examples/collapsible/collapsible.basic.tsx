"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

function Component() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="max-w-100 space-y-2"
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-bold">고급 설정</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="고급 설정 펼치기">
            <ChevronsUpDown className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>

      <div className="rounded-md border border-silver-200 px-4 py-3 text-sm">
        기본 항목은 항상 보입니다.
      </div>

      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border border-silver-200 px-4 py-3 text-sm">
          접힌 항목 1
        </div>
        <div className="rounded-md border border-silver-200 px-4 py-3 text-sm">
          접힌 항목 2
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

const code = `import {
  Collapsible, CollapsibleTrigger, CollapsibleContent,
} from "@/components/ui/collapsible";

// 여러 항목을 묶어 하나씩 여닫아야 하면 Accordion 을 쓰세요.
// Collapsible 은 독립된 한 덩어리를 감출 때만 씁니다.
<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" size="icon">
      <ChevronsUpDown className="size-4" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div>접힌 내용</div>
  </CollapsibleContent>
</Collapsible>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "영역 하나를 접고 펴는 컴포넌트입니다. 여러 항목을 묶어 하나씩 여닫는 것이 목적이면 Accordion 을 쓰고, Collapsible 은 독립된 한 덩어리를 감출 때만 씁니다.",
  type: "single",
  code: [{ fileName: "Collapsible.tsx", language: "tsx", code }],
  component: <Component />,
};
