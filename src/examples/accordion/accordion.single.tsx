"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Accordion } from "@/components/ui/accordion";
import { FaqItems } from "./items";

function Component() {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
      <FaqItems />
    </Accordion>
  );
}

const code = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// type="single" — 한 번에 하나만 열립니다.
// collapsible — 열린 항목을 다시 눌러 닫을 수 있게 합니다. (없으면 항상 하나는 열림)
// defaultValue — 처음에 열어둘 항목의 value
<Accordion type="single" collapsible className="w-full" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Product Information</AccordionTrigger>
    <AccordionContent className="flex flex-col gap-4 text-balance">
      <p>프리미엄 소재로 제작되어 뛰어난 성능과 안정성을 제공합니다.</p>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>Shipping Details</AccordionTrigger>
    <AccordionContent>
      <p>표준 배송은 3~5 영업일이 소요됩니다.</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

export const single: CodeData = {
  title: "하나만 열기 (single)",
  description:
    'type="single" 은 한 번에 하나만 열립니다. collapsible 을 함께 주면 열린 항목을 다시 눌러 닫을 수 있고, 생략하면 최소 하나는 항상 열린 상태로 유지됩니다.',
  type: "single",
  code: [{ fileName: "Accordion.tsx", language: "tsx", code }],
  component: <Component />,
};
