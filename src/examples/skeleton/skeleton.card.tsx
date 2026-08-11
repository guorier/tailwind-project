"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Component() {
  return (
    <Card className="max-w-100" aria-busy>
      <CardHeader>
        <Skeleton className="h-6 w-2/5" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-32 w-full" />
        <SkeletonText lines={2} />
      </CardContent>
    </Card>
  );
}

const code = `import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Skeleton 자체는 aria-hidden 이라 낭독기에 읽히지 않습니다.
// 로딩 중이라는 사실은 감싸는 영역에 aria-busy 를 주어 알립니다.
<Card aria-busy={isLoading}>
  <CardHeader>
    <Skeleton className="h-6 w-2/5" />
  </CardHeader>
  <CardContent className="space-y-4">
    <Skeleton className="h-32 w-full" />
    <SkeletonText lines={2} />
  </CardContent>
</Card>`;

export const card: CodeData = {
  title: "카드 로딩 (aria-busy)",
  description:
    "Skeleton 은 장식이므로 aria-hidden 처리되어 낭독기에 읽히지 않습니다. 로딩 상태는 감싸는 영역에 aria-busy 를 주어 전달하세요.",
  type: "single",
  code: [{ fileName: "SkeletonCard.tsx", language: "tsx", code }],
  component: <Component />,
};
