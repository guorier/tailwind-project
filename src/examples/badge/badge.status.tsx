"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Badge, type BadgeStatus } from "@/components/ui/badge";

/** 상태값 → 배지 variant·라벨 매핑. 실제 화면에서도 이런 표를 두고 쓴다. */
const statusLabel: Record<BadgeStatus, string> = {
  active: "진행중",
  inactive: "종료",
  warning: "확인 필요",
  error: "실패",
};

function Component() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {(Object.keys(statusLabel) as BadgeStatus[]).map((status) => (
        <Badge key={status} variant={status}>
          {statusLabel[status]}
        </Badge>
      ))}
    </div>
  );
}

const code = `import { Badge, type BadgeStatus } from "@/components/ui/badge";

// 상태값 → 라벨 매핑을 두면 variant 와 문구가 한곳에서 관리됩니다.
const statusLabel: Record<BadgeStatus, string> = {
  active: "진행중",
  inactive: "종료",
  warning: "확인 필요",
  error: "실패",
};

<Badge variant="active">진행중</Badge>
<Badge variant="inactive">종료</Badge>
<Badge variant="warning">확인 필요</Badge>
<Badge variant="error">실패</Badge>`;

export const status: CodeData = {
  title: "상태 표시 (status)",
  description:
    "active · inactive · warning · error 는 상태 표시 전용 variant 입니다. 클릭 대상이 아니므로 hover 변화가 없고, 기본 variant 보다 옅은 배경을 써서 목록 안에서 튀지 않습니다.",
  type: "single",
  code: [{ fileName: "BadgeStatus.tsx", language: "tsx", code }],
  component: <Component />,
};
