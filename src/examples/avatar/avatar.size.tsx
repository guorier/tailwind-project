"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const sizes = ["sm", "default", "lg"] as const;

function Component() {
  return (
    <div className="flex items-center gap-4">
      {sizes.map((size) => (
        <Avatar key={size} size={size}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}

const code = `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// size 로 크기를 정합니다. 글자 크기도 함께 조정됩니다.
<Avatar size="sm">...</Avatar>       {/* 32px */}
<Avatar>...</Avatar>                  {/* 40px (기본) */}
<Avatar size="lg">...</Avatar>       {/* 48px */}`;

export const size: CodeData = {
  title: "크기 (size)",
  description:
    "sm · default · lg 세 가지 크기를 제공합니다. 원 크기와 함께 fallback 글자 크기도 조정되므로 별도로 맞출 필요가 없습니다.",
  type: "single",
  code: [{ fileName: "AvatarSize.tsx", language: "tsx", code }],
  component: <Component />,
};
