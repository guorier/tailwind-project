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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
          <ProjectLogo />
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
                    <NavigationMenuContent className="!w-40 p-3">
                      <div className="flex w-full flex-col gap-1">
                        {navItem.children.map((child) => (
                          <Link
                            key={child.name}
                            href={`/docs${child.link}`}
                            className={`w-full rounded px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground ${
                              pathname === `/docs${child.link}`
                                ? "bg-accent text-accent-foreground"
                                : ""
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
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

            <SheetContent side="right" className="w-64">
              <div className="mt-6 flex flex-col gap-4">
                {navItems.map((navItem) => (
                  <div key={navItem.name}>
                    {navItem.children?.length ? (
                      <details className="group">
                        <summary className="cursor-pointer py-2 text-sm font-medium">
                          {navItem.name}
                        </summary>
                        <div className="ml-3 flex flex-col gap-2">
                          {navItem.children.map((child) => (
                            <Link
                              key={child.name}
                              href={`/docs${child.link}`}
                              className={`block py-1 text-sm ${
                                pathname === `/docs${child.link}`
                                  ? "font-medium text-primary"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={`/docs${navItem.link}`}
                        className={`block py-2 text-sm ${
                          pathname === `/docs${navItem.link}`
                            ? "font-medium text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {navItem.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
