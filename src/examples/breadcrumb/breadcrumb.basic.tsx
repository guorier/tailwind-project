"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function Component() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">홈</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/">컴포넌트</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

const code = `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// 마지막 항목만 BreadcrumbPage(현재 페이지), 나머지는 BreadcrumbLink 를 씁니다.
// BreadcrumbSeparator 는 children 을 생략하면 기본 화살표(>)가 들어갑니다.
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">홈</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">컴포넌트</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`;

export const basic: CodeData = {
  title: "기본 사용",
  description:
    "현재 위치까지의 경로를 순서대로 나열합니다. 마지막 항목은 이동할 곳이 없으므로 BreadcrumbPage 로 두어 링크가 아닌 현재 페이지임을 알립니다.",
  type: "single",
  code: [{ fileName: "Breadcrumb.tsx", language: "tsx", code }],
  component: <Component />,
};
