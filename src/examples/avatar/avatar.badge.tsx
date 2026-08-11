"use client";

import React from "react";
import { PlusIcon } from "lucide-react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
} from "@/components/ui/avatar";

function Component() {
  return (
    <div className="flex items-center gap-4">
      {/* 색만으로 뜻이 정해지는 표식이라 aria-label 로 뜻을 함께 준다. */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge className="bg-green-600" aria-label="온라인" />
      </Avatar>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>PP</AvatarFallback>
        <AvatarBadge>
          <PlusIcon />
        </AvatarBadge>
      </Avatar>
    </div>
  );
}

const code = `import { PlusIcon } from "lucide-react";
import {
  Avatar, AvatarImage, AvatarFallback, AvatarBadge,
} from "@/components/ui/avatar";

// 색만으로 뜻이 정해지는 표식은 낭독기에 전달되지 않으므로
// aria-label 로 뜻을 함께 줍니다.
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
  <AvatarBadge className="bg-green-600" aria-label="온라인" />
</Avatar>

// 아이콘을 넣을 수도 있습니다.
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>PP</AvatarFallback>
  <AvatarBadge><PlusIcon /></AvatarBadge>
</Avatar>`;

export const badge: CodeData = {
  title: "배지 (AvatarBadge)",
  description:
    "아바타 우하단에 겹쳐 붙는 작은 표식입니다. 접속 상태처럼 색만으로 뜻이 정해지는 경우 화면 낭독기에는 전달되지 않으므로 aria-label 을 함께 주세요.",
  type: "single",
  code: [{ fileName: "AvatarBadge.tsx", language: "tsx", code }],
  component: <Component />,
};
