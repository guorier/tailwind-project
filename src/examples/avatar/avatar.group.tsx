"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

const members = ["CN", "LR", "ER"];

function Component() {
  return (
    <div className="flex flex-col gap-6">
      <AvatarGroup>
        {members.map((initials) => (
          <Avatar key={initials}>
            <AvatarImage src="https://github.com/shadcn.png" alt="" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        ))}
      </AvatarGroup>

      <AvatarGroup>
        {members.map((initials) => (
          <Avatar key={initials}>
            <AvatarImage src="https://github.com/shadcn.png" alt="" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}

const code = `import {
  Avatar, AvatarImage, AvatarFallback,
  AvatarGroup, AvatarGroupCount,
} from "@/components/ui/avatar";

// 겹쳐 나열합니다. 각 아바타에 흰 테두리가 자동으로 붙어 경계가 보입니다.
<AvatarGroup>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>LR</AvatarFallback>
  </Avatar>

  {/* 다 보여주기 어려우면 남은 인원 수를 끝에 붙입니다. */}
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>`;

export const group: CodeData = {
  title: "그룹 (AvatarGroup)",
  description:
    "아바타 여러 개를 조금씩 겹쳐 나열합니다. 각 아바타에 흰 테두리가 자동으로 붙어 겹친 경계가 구분됩니다. 인원이 많으면 AvatarGroupCount 로 나머지 수를 표시하세요.",
  type: "single",
  code: [{ fileName: "AvatarGroup.tsx", language: "tsx", code }],
  component: <Component />,
};
