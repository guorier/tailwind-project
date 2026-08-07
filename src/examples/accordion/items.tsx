"use client";

import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** 예제에서 공통으로 쓰는 항목 데이터. */
export const faqItems = [
  {
    value: "item-1",
    title: "Product Information",
    body: "프리미엄 소재로 제작되어 뛰어난 성능과 안정성을 제공합니다. 초보자와 전문가 모두를 위한 직관적인 인터페이스를 갖추고 있습니다.",
  },
  {
    value: "item-2",
    title: "Shipping Details",
    body: "표준 배송은 3~5 영업일, 특급 배송은 1~2 영업일이 소요됩니다. 모든 주문은 안전하게 포장되며 실시간 배송 조회가 가능합니다.",
  },
  {
    value: "item-3",
    title: "Return Policy",
    body: "30일 반품 정책을 운영합니다. 원래 상태로 반품하시면 반품 배송비 없이 48시간 내에 전액 환불됩니다.",
  },
];

/** 항목 목록을 Accordion 자식으로 렌더링한다. */
export const FaqItems = () => (
  <>
    {faqItems.map((item) => (
      <AccordionItem key={item.value} value={item.value}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{item.body}</p>
        </AccordionContent>
      </AccordionItem>
    ))}
  </>
);
