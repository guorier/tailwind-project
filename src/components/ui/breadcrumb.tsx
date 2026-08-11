import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * 현재 위치의 경로를 보여주는 탐색 컴포넌트.
 *
 * 구조는 `Breadcrumb > BreadcrumbList > BreadcrumbItem` 이며,
 * 마지막 항목만 `BreadcrumbPage`(현재 페이지), 나머지는 `BreadcrumbLink` 로 쓴다.
 */
function Breadcrumb(props: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm text-natural-500 sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  )
}

/**
 * 이동 가능한 경로 항목.
 *
 * Next.js 의 `<Link>` 로 렌더하려면 `asChild` 를 주고 자식으로 넘긴다.
 * (`<BreadcrumbLink asChild><Link href="/">홈</Link></BreadcrumbLink>`)
 */
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { asChild?: boolean }
>(({ asChild = false, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-natural-900", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

/** 현재 페이지. 링크가 아니므로 `aria-current` 로 위치를 알린다. */
function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-medium text-natural-900", className)}
      {...props}
    />
  )
}

/** 항목 사이 구분자. 장식이므로 낭독기에서 감춘다. */
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      role="presentation"
      aria-hidden
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  )
}

/** 경로가 길 때 가운데를 접어서 보여주는 생략 표시. */
function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      role="presentation"
      aria-hidden
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
