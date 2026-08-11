import { cn } from "@/lib/utils"

/**
 * 대시보드·상세 화면에서 반복되는 컨테이너.
 *
 * `Container` 가 페이지 폭을 잡는 레이아웃 래퍼라면, `Card` 는 그 안에서
 * 내용 한 덩어리를 감싸는 표면(surface)이다.
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border border-silver-200 bg-white text-natural-800 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/** 제목·설명·우측 액션을 담는 머리말 영역. */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 px-6 pt-6 pb-4",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn("text-base font-bold leading-none", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("mt-1.5 text-sm text-natural-500", className)} {...props} />
  )
}

/** 머리말 우측에 버튼·배지 등을 배치할 때 사용한다. */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex-none", className)} {...props} />
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("px-6 pb-6", className)} {...props} />
}

/** 하단 액션 영역. 위쪽 구분선으로 본문과 나눈다. */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mt-auto flex items-center gap-2 border-t border-silver-200 px-6 py-4",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
}
