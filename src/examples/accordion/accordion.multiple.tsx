"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Accordion } from "@/components/ui/accordion";
import { FaqItems } from "./items";

function Component() {
  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={["item-1", "item-2"]}
    >
      <FaqItems />
    </Accordion>
  );
}

const code = `import { Accordion, AccordionItem, ... } from "@/components/ui/accordion";

// type="multiple" — 여러 항목을 동시에 열 수 있습니다.
// collapsible 은 필요하지 않고, defaultValue 는 배열로 넘깁니다.
<Accordion type="multiple" className="w-full" defaultValue={["item-1", "item-2"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Product Information</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>Shipping Details</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
</Accordion>`;

export const multiple: CodeData = {
  title: "여러 개 열기 (multiple)",
  description:
    'type="multiple" 은 여러 항목을 동시에 펼칠 수 있습니다. 이때 defaultValue 는 문자열이 아니라 배열로 넘겨야 하고, collapsible 은 필요하지 않습니다.',
  type: "single",
  code: [{ fileName: "AccordionMultiple.tsx", language: "tsx", code }],
  component: <Component />,
};
