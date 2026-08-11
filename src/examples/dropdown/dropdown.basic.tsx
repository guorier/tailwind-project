"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function Component() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">메뉴 열기</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>프로필</DropdownMenuItem>
        <DropdownMenuItem>설정</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>로그아웃</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const code = `import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// SelectBox 는 값을 고르는 폼 입력이고,
// DropdownMenu 는 동작을 실행하는 메뉴입니다. 용도가 다릅니다.
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">메뉴 열기</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuLabel>내 계정</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onSelect={() => ...}>프로필</DropdownMenuItem>
    <DropdownMenuItem onSelect={() => ...}>설정</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem onSelect={() => ...}>로그아웃</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "동작을 모아 보여주는 메뉴입니다. 값을 고르는 SelectBox 와 달리 항목을 누르면 동작이 실행됩니다. 더보기(⋯) 버튼이나 계정 메뉴에 씁니다.",
  type: "single",
  code: [{ fileName: "DropdownMenu.tsx", language: "tsx", code }],
  component: <Component />,
};
