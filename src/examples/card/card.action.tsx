"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Component() {
  return (
    <Card className="max-w-100">
      <CardHeader>
        <div>
          <CardTitle>주문 #10294</CardTitle>
          <CardDescription>2026년 8월 11일</CardDescription>
        </div>
        <CardAction>
          <Badge variant="active">배송중</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <dl className="flex justify-between text-sm">
          <dt className="text-natural-500">결제 금액</dt>
          <dd className="font-medium">128,000원</dd>
        </dl>
      </CardContent>
      <CardFooter>
        <span className="text-sm text-natural-500">
          최종 수정 2026-08-11 14:32
        </span>
      </CardFooter>
    </Card>
  );
}

const code = `import {
  Card, CardHeader, CardTitle, CardDescription,
  CardAction, CardContent, CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// CardAction 은 머리말 우측에 배지나 버튼을 놓을 때 씁니다.
// CardFooter 는 위쪽 구분선이 있어 본문과 시각적으로 나뉩니다.
<Card>
  <CardHeader>
    <div>
      <CardTitle>주문 #10294</CardTitle>
      <CardDescription>2026년 8월 11일</CardDescription>
    </div>
    <CardAction>
      <Badge variant="active">배송중</Badge>
    </CardAction>
  </CardHeader>
  <CardContent>
    <dl className="flex justify-between text-sm">
      <dt className="text-natural-500">결제 금액</dt>
      <dd className="font-medium">128,000원</dd>
    </dl>
  </CardContent>
  <CardFooter>
    <span className="text-sm text-natural-500">최종 수정 2026-08-11 14:32</span>
  </CardFooter>
</Card>`;

export const action: CodeData = {
  title: "액션과 푸터",
  description:
    "CardAction 으로 머리말 우측에 상태 배지나 버튼을 배치하고, CardFooter 로 보조 정보를 아래에 둡니다. 푸터는 위쪽 구분선을 가져 본문과 구분됩니다.",
  type: "single",
  code: [{ fileName: "CardAction.tsx", language: "tsx", code }],
  component: <Component />,
};
