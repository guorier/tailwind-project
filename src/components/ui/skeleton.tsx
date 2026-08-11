import { cn } from "@/lib/utils"

/**
 * 콘텐츠가 로딩되는 동안 자리를 대신 차지하는 플레이스홀더.
 *
 * 크기는 클래스로 직접 지정한다. (`<Skeleton className="h-4 w-40" />`)
 * 화면 낭독기에는 노출하지 않고, 로딩 상태는 감싸는 영역에서
 * `aria-busy` 로 알리는 것을 권장한다.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden
      className={cn("animate-pulse rounded-md bg-silver-200", className)}
      {...props}
    />
  )
}

/** 여러 줄짜리 텍스트 자리표시자. 마지막 줄은 짧게 렌더해 문단처럼 보이게 한다. */
function SkeletonText({
  lines = 3,
  className,
  ...props
}: React.ComponentProps<"div"> & { lines?: number }) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === lines - 1 ? "w-3/5" : "w-full")}
        />
      ))}
    </div>
  )
}

export { Skeleton, SkeletonText }
