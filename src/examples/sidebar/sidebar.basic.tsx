"use client";

import React, { useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Home, Inbox, Settings } from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";

const menu = [
  { name: "홈", icon: Home },
  { name: "받은 문서", icon: Inbox },
  { name: "설정", icon: Settings },
];

function Component() {
  const [active, setActive] = useState("홈");

  return (
    // 예제 안에서 보여주려고 높이를 제한했습니다. 실제로는 페이지 전체를 감쌉니다.
    <div className="h-96 overflow-hidden rounded-md border border-silver-200">
      <SidebarProvider className="h-full min-h-0">
        <Sidebar>
          <SidebarHeader>
            <span className="font-bold">My App</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>메뉴</SidebarGroupLabel>
              <SidebarMenu>
                {menu.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      isActive={active === item.name}
                      onClick={() => setActive(item.name)}
                    >
                      <item.icon className="size-4" />
                      {item.name}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <span className="text-sm text-natural-500">v1.0.0</span>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="flex items-center gap-2 border-b border-silver-200 p-2">
            <SidebarTrigger />
            <span className="text-sm font-medium">{active}</span>
          </header>
          <div className="p-4 text-sm text-natural-600">본문 영역입니다.</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

const code = `import {
  SidebarProvider, Sidebar, SidebarTrigger,
  SidebarHeader, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";

// 화면이 좁아지면(768px 미만) 사이드바가 Sheet 로 자동 전환됩니다.
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <span className="font-bold">My App</span>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>메뉴</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive onClick={...}>
              <Home className="size-4" />
              홈
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>v1.0.0</SidebarFooter>
  </Sidebar>

  <SidebarInset>
    <header>
      <SidebarTrigger />
    </header>
    <div>본문 영역입니다.</div>
  </SidebarInset>
</SidebarProvider>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "접고 펼 수 있는 사이드바 레이아웃입니다. 화면 폭이 768px 미만이 되면 상주 패널 대신 Sheet 로 열려서 좁은 화면에서도 본문을 가리지 않습니다.",
  type: "single",
  code: [{ fileName: "Sidebar.tsx", language: "tsx", code }],
  component: <Component />,
};
