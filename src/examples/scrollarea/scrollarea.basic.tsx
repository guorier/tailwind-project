"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 30 }, (_, i) => `항목 ${i + 1}`);

function Component() {
  return (
    <ScrollArea className="h-72 w-60 rounded-md border border-silver-200">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-bold">전체 목록</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="py-2 text-sm">{tag}</div>
            <Separator />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}

const code = `import { ScrollArea } from "@/components/ui/scroll-area";

// 높이를 직접 제한해야 스크롤이 생깁니다.
<ScrollArea className="h-72 w-60 rounded-md border">
  <div className="p-4">
    {items.map((item) => (
      <div key={item}>{item}</div>
    ))}
  </div>
</ScrollArea>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "브라우저 기본 스크롤바 대신 일관된 모양의 스크롤바를 씁니다. OS마다 다른 스크롤바 모양을 통일할 때 유용합니다. 높이를 제한해야 스크롤이 생깁니다.",
  type: "single",
  code: [{ fileName: "ScrollArea.tsx", language: "tsx", code }],
  component: <Component />,
};
