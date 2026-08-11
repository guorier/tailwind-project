"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function Component() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* src 가 없으면 fallback 이 대신 보인다. */}
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

const code = `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// AvatarImage 로딩이 실패하면 AvatarFallback 이 대신 보입니다.
// 둘을 함께 넣어야 이미지 없는 사용자도 빈 원으로 남지 않습니다.
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "사용자를 나타내는 원형 표식입니다. 이미지가 없거나 로딩에 실패하면 AvatarFallback 이 대신 보이므로 항상 함께 넣습니다.",
  type: "single",
  code: [{ fileName: "Avatar.tsx", language: "tsx", code }],
  component: <Component />,
};
