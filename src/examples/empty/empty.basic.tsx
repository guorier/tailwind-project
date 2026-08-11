"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Inbox } from "lucide-react";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

function Component() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox className="text-blue-700" />
        </EmptyMedia>
        <EmptyTitle>등록된 항목이 없습니다</EmptyTitle>
        <EmptyDescription>
          첫 항목을 추가하면 여기에 표시됩니다.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>항목 추가</Button>
      </EmptyContent>
    </Empty>
  );
}

const code = `import {
  Empty, EmptyHeader, EmptyMedia,
  EmptyTitle, EmptyDescription, EmptyContent,
} from "@/components/ui/empty";

// 목록이 비었을 때 보여줍니다.
// EmptyContent 에 다음 행동을 유도하는 버튼을 넣으면 좋습니다.
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Inbox className="text-blue-700" />
    </EmptyMedia>
    <EmptyTitle>등록된 항목이 없습니다</EmptyTitle>
    <EmptyDescription>첫 항목을 추가하면 여기에 표시됩니다.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>항목 추가</Button>
  </EmptyContent>
</Empty>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "목록이나 검색 결과가 비었을 때 보여주는 화면입니다. 왜 비었는지 설명하고, EmptyContent 에 다음 행동을 유도하는 버튼을 두면 사용자가 막히지 않습니다.",
  type: "single",
  code: [{ fileName: "Empty.tsx", language: "tsx", code }],
  component: <Component />,
};
