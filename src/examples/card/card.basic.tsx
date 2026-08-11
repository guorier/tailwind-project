"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

function Component() {
  return (
    <Card className="max-w-100">
      <CardHeader>
        <div>
          <CardTitle>이번 달 주문</CardTitle>
          <CardDescription>2026년 8월 1일 ~ 8월 11일</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">1,284건</p>
      </CardContent>
    </Card>
  );
}

const code = `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

// CardHeader 는 좌우 배치(justify-between)라서
// 제목과 설명은 하나의 div 로 묶어 넘깁니다.
<Card>
  <CardHeader>
    <div>
      <CardTitle>이번 달 주문</CardTitle>
      <CardDescription>2026년 8월 1일 ~ 8월 11일</CardDescription>
    </div>
  </CardHeader>
  <CardContent>
    <p className="text-3xl font-bold">1,284건</p>
  </CardContent>
</Card>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "내용 한 덩어리를 감싸는 컨테이너입니다. 페이지 폭을 잡는 Container 와 달리, Card 는 그 안에서 개별 지표나 목록을 담는 표면 역할을 합니다.",
  type: "single",
  code: [{ fileName: "Card.tsx", language: "tsx", code }],
  component: <Component />,
};
