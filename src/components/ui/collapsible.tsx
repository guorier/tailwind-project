"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

/**
 * 영역 하나를 접고 펴는 컴포넌트.
 *
 * 여러 항목을 묶어 하나씩 여닫아야 하면 Accordion 을 쓴다.
 * Collapsible 은 독립된 한 덩어리를 감출 때만 쓴다.
 */
const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
