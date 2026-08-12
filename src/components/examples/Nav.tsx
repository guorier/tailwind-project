"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import ProjectLogo from "@/components/ProjectLogo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface NavItem {
  name: string;
  link: string;
  children?: NavItem[];
}

export default function Nav({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <div className="flex h-14 w-full items-center justify-between">
        <Link
          href="/"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          aria-label="Common UI home"
        >
          <ProjectLogo animated />
        </Link>

        <NavigationMenu className="hidden w-29 md:flex">
          <NavigationMenuList className="flex items-center gap-2">
            {navItems.map((navItem) => (
              <NavigationMenuItem key={navItem.name} className="flex h-14 items-center">
                {navItem.children?.length ? (
                  <>
                    <NavigationMenuTrigger className="flex h-full w-40 items-center justify-between px-3 text-sm">
                      {navItem.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-3">
                      {/* 항목 수가 많아 세로 한 줄이면 화면을 넘긴다. 고정 폭 열로 나눠 폭이 흔들리지 않게 한다. */}
                      <ul className="grid max-h-[70vh] grid-flow-col grid-rows-10 gap-x-2 gap-y-1 overflow-y-auto">
                        {navItem.children.map((child) => (
                          <li key={child.name} className="w-44">
                            <Link
                              href={`/docs${child.link}`}
                              className={`block truncate rounded px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground ${
                                pathname === `/docs${child.link}`
                                  ? "bg-accent text-accent-foreground"
                                  : ""
                              }`}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    href={`/docs${navItem.link}`}
                    className={`inline-flex h-full items-center px-3 text-sm ${
                      pathname === `/docs${navItem.link}`
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {navItem.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>

            {/* 시트 자체는 넘치지 않게 고정하고, 목록 영역만 세로로 스크롤시킨다. */}
            <SheetContent
              side="right"
              className="flex w-72 flex-col gap-0 overflow-hidden p-0"
            >
              <SheetTitle className="shrink-0 border-b px-6 py-4 text-base">
                Menu
              </SheetTitle>

              <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-4">
                <div className="flex flex-col gap-5">
                  {navItems.map((navItem) => (
                    <div key={navItem.name}>
                      {navItem.children?.length ? (
                        <>
                          <p className="pb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {navItem.name}
                          </p>
                          <ul className="flex flex-col">
                            {navItem.children.map((child) => (
                              <li key={child.name}>
                                {/* SheetClose 로 감싸야 이동과 동시에 시트가 닫힌다. */}
                                <SheetClose asChild>
                                  <Link
                                    href={`/docs${child.link}`}
                                    className={`block rounded px-2 py-2.5 text-sm ${
                                      pathname === `/docs${child.link}`
                                        ? "bg-accent font-medium text-accent-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                                  >
                                    {child.name}
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={`/docs${navItem.link}`}
                            className={`block rounded px-2 py-2.5 text-sm ${
                              pathname === `/docs${navItem.link}`
                                ? "bg-accent font-medium text-accent-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {navItem.name}
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
