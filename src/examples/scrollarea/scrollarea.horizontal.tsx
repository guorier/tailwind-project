"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const works = Array.from({ length: 10 }, (_, i) => `작품 ${i + 1}`);

function Component() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border border-silver-200">
      <div className="flex w-max gap-4 p-4">
        {works.map((work) => (
          <figure key={work} className="shrink-0">
            <div className="flex size-32 items-center justify-center rounded-md bg-silver-100 text-sm text-natural-500">
              {work}
            </div>
            <figcaption className="mt-2 text-xs text-natural-500">
              {work} 설명
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

const code = `import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// 가로 스크롤은 ScrollBar 를 orientation="horizontal" 로 하나 더 넣습니다.
// 안쪽 내용은 w-max 로 두어 줄바꿈되지 않게 합니다.
<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max gap-4 p-4">
    {items.map((item) => (
      <figure key={item}>...</figure>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`;

export const horizontal: CodeData = {
  title: "가로 스크롤 (horizontal)",
  description:
    '세로 스크롤바는 기본으로 들어 있고, 가로 스크롤이 필요하면 ScrollBar 를 orientation="horizontal" 로 하나 더 넣습니다. 안쪽 내용에 w-max 를 주어야 줄바꿈되지 않습니다.',
  type: "single",
  code: [{ fileName: "ScrollAreaHorizontal.tsx", language: "tsx", code }],
  component: <Component />,
};
