"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 rounded-full",
  {
    variants: {
      size: {
        sm: "size-8 text-xs",
        default: "size-10 text-sm",
        lg: "size-12 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

/**
 * 사용자를 나타내는 원형 표식.
 *
 * `AvatarImage` 가 로딩에 실패하면 `AvatarFallback` 이 대신 보인다.
 * 둘을 함께 넣어야 이미지가 없는 사용자도 빈 원으로 남지 않는다.
 *
 * `AvatarBadge` 를 자식으로 넣을 수 있어야 하므로 원 자체는
 * overflow 를 자르지 않고, `AvatarImage` 와 `AvatarFallback` 에서 각각 자른다.
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
    VariantProps<typeof avatarVariants>
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size }), className)}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(
      "aspect-square size-full rounded-full object-cover",
      className
    )}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/** 이미지가 없거나 로딩에 실패했을 때 보이는 대체 표시. 보통 이름 첫 글자를 넣는다. */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex size-full items-center justify-center rounded-full bg-silver-100 font-medium text-natural-600",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

/**
 * 아바타 우하단에 겹쳐 붙는 작은 표식.
 *
 * 접속 상태처럼 색만으로 뜻이 정해지는 표식은 화면 낭독기에 전달되지 않으므로,
 * 뜻이 있는 배지에는 `aria-label` 을 함께 준다.
 */
function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "absolute bottom-0 right-0 flex size-3 items-center justify-center rounded-full bg-silver-400 ring-2 ring-white [&>svg]:size-2 [&>svg]:text-white",
        className
      )}
      {...props}
    />
  )
}

/** 아바타 여러 개를 조금씩 겹쳐 나열한다. */
function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center -space-x-2 [&>*]:ring-2 [&>*]:ring-white",
        className
      )}
      {...props}
    />
  )
}

/** 그룹 끝에 붙는 "+N" 표시. 남은 인원 수를 알린다. */
function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex size-10 items-center justify-center rounded-full bg-silver-100 text-sm font-medium text-natural-600",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
}
