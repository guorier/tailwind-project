import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-silver-100 text-slate-600 hover:bg-slate-600/80 hover:text-white",
        secondary:
          "border-transparent bg-point-100 text-point-700 hover:bg-point-800/80 hover:text-white",
        destructive:
          "border-transparent bg-lightblue-100 text-lightblue-600 hover:bg-lightblue-900/80 hover:text-white",
        outline: "text-foreground",

        // 상태 표시용. 클릭 대상이 아니므로 hover 변화를 두지 않는다.
        active: "border-transparent bg-blue-50 text-blue-700",
        inactive: "border-transparent bg-silver-100 text-natural-600",
        warning: "border-transparent bg-orange-50 text-orange-700",
        error: "border-transparent bg-red-50 text-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/** 상태 배지 variant 목록. 상태값 → variant 매핑을 만들 때 쓴다. */
export type BadgeStatus = "active" | "inactive" | "warning" | "error"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
