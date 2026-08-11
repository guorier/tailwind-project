"use client"

import * as React from "react"
import { PanelLeftIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"

/** 데스크톱에서 펼쳐진 사이드바 너비. 모바일에서는 Sheet 가 대신 열린다. */
const SIDEBAR_WIDTH = "16rem"
const MOBILE_BREAKPOINT = 768

type SidebarContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  toggle: () => void
  isMobile: boolean
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

/** Sidebar 하위 구성 요소에서 열림 상태를 읽고 바꾼다. */
function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebar 는 <SidebarProvider> 안에서만 쓸 수 있습니다.")
  }

  return context
}

/**
 * 사이드바 열림 상태를 관리한다.
 *
 * 화면이 좁아지면 `isMobile` 이 참이 되고, 이때 Sidebar 는 상주 패널 대신
 * Sheet 로 열린다. 상태를 밖에서 제어하려면 open · onOpenChange 를 넘긴다.
 */
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const [isMobile, setIsMobile] = React.useState(false)
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)

  const open = openProp ?? uncontrolledOpen

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (onOpenChange) onOpenChange(next)
      else setUncontrolledOpen(next)
    },
    [onOpenChange]
  )

  // 화면 폭이 모바일 기준을 넘나들 때만 상태를 갱신한다.
  React.useEffect(() => {
    const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const sync = () => setIsMobile(query.matches)

    sync()
    query.addEventListener("change", sync)
    return () => query.removeEventListener("change", sync)
  }, [])

  const value = React.useMemo<SidebarContextValue>(
    () => ({ open, setOpen, toggle: () => setOpen(!open), isMobile }),
    [open, setOpen, isMobile]
  )

  return (
    <SidebarContext.Provider value={value}>
      <div className={cn("flex min-h-svh w-full", className)} {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

/** 사이드바 본체. 모바일에서는 Sheet 로 렌더된다. */
function Sidebar({ className, children, ...props }: React.ComponentProps<"div">) {
  const { open, setOpen, isMobile } = useSidebar()

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetTitle className="sr-only">사이드바</SheetTitle>
          <div className="flex h-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      data-state={open ? "open" : "closed"}
      style={{ width: open ? SIDEBAR_WIDTH : "0rem" }}
      className={cn(
        "shrink-0 overflow-hidden border-r border-silver-200 bg-white transition-[width] duration-200",
        className
      )}
      {...props}
    >
      <div className="flex h-full flex-col" style={{ width: SIDEBAR_WIDTH }}>
        {children}
      </div>
    </div>
  )
}

/** 사이드바를 여닫는 버튼. 헤더 등 바깥에 두고 쓴다. */
function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggle } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="사이드바 열기/닫기"
      className={className}
      onClick={(event) => {
        onClick?.(event)
        toggle()
      }}
      {...props}
    >
      <PanelLeftIcon className="size-4" />
    </Button>
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 border-b border-silver-200 p-4", className)}
      {...props}
    />
  )
}

/** 스크롤되는 본문 영역. 메뉴 묶음을 넣는다. */
function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex min-h-0 flex-1 flex-col gap-4 overflow-auto p-4", className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mt-auto border-t border-silver-200 p-4", className)}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />
}

function SidebarGroupLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "px-2 py-1 text-xs font-medium text-natural-500",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul className={cn("flex flex-col gap-1", className)} {...props} />
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return <li className={cn("list-none", className)} {...props} />
}

/** 메뉴 링크. 현재 위치면 isActive 를 주어 강조한다. */
function SidebarMenuButton({
  className,
  isActive = false,
  ...props
}: React.ComponentProps<"button"> & { isActive?: boolean }) {
  return (
    <button
      type="button"
      data-active={isActive}
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-natural-700 transition-colors hover:bg-silver-100",
        isActive && "bg-silver-100 font-medium text-natural-900",
        className
      )}
      {...props}
    />
  )
}

/** 사이드바 옆에 오는 본문 영역. */
function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return <main className={cn("flex min-w-0 flex-1 flex-col", className)} {...props} />
}

export {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  useSidebar,
}
