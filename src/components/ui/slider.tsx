"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

/**
 * 범위 안에서 값을 고르는 입력.
 *
 * `value` 는 배열이라 원소를 두 개 넣으면 구간 선택(범위 슬라이더)이 된다.
 * 진행률 표시만 필요하면 Slider 대신 Progress 를 쓴다.
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, orientation = "horizontal", ...props }, ref) => {
  // 손잡이 수는 value(제어) 또는 defaultValue(비제어) 길이를 따른다.
  const thumbCount = props.value?.length ?? props.defaultValue?.length ?? 1
  const isVertical = orientation === "vertical"

  return (
    <SliderPrimitive.Root
      ref={ref}
      orientation={orientation}
      className={cn(
        "relative flex touch-none select-none data-[disabled]:opacity-50",
        isVertical
          ? "h-full min-h-44 w-auto flex-col items-center"
          : "w-full items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          "relative grow overflow-hidden rounded-full bg-silver-200",
          isVertical ? "h-full w-1.5" : "h-1.5 w-full"
        )}
      >
        <SliderPrimitive.Range
          className={cn("absolute bg-natural-900", isVertical ? "w-full" : "h-full")}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: thumbCount }, (_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className="block size-4 rounded-full border border-natural-900 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-natural-900 focus-visible:ring-offset-2 disabled:pointer-events-none"
        />
      ))}
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
