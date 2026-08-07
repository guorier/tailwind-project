"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Component() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

const code = `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

// 링크 기반이라 각 페이지가 고유 URL 을 갖습니다. (SSR/SEO 에 유리)
// 번호 계산과 생략 기호 배치를 직접 해야 합니다.
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>

    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>

    {/* isActive — 현재 페이지 표시 */}
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>

    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`;

export const shadcn: CodeData = {
  title: "링크형 페이지네이션 (shadcn)",
  description:
    "각 페이지가 href 를 갖는 링크 기반 방식입니다. 페이지마다 고유 URL 이 필요할 때 쓰고, 번호 계산과 생략 기호는 직접 조립해야 합니다.",
  type: "single",
  code: [{ fileName: "PaginationLink.tsx", language: "tsx", code }],
  component: <Component />,
};
