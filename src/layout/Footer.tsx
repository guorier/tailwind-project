import Link from 'next/link'

import ProjectLogo from '@/components/ProjectLogo'

/**
 * 푸터에 노출할 바로가기.
 * 전체 목록은 상단 네비게이션에 있으므로, 자주 찾는 항목만 갈래별로 추린다.
 */
const LINK_GROUPS = [
  {
    title: '입력',
    links: [
      { name: 'Form', href: '/docs/form' },
      { name: 'Input', href: '/docs/input' },
      { name: 'Button', href: '/docs/button' },
      { name: 'SelectBox', href: '/docs/selectbox' },
    ],
  },
  {
    title: '표시',
    links: [
      { name: 'Table', href: '/docs/table' },
      { name: 'Card', href: '/docs/card' },
      { name: 'Badge', href: '/docs/badge' },
      { name: 'Pagination', href: '/docs/pagination' },
    ],
  },
  {
    title: '오버레이',
    links: [
      { name: 'Modal', href: '/docs/modal' },
      { name: 'Sheet', href: '/docs/sheet' },
      { name: 'Toast', href: '/docs/toast' },
      { name: 'Tooltip', href: '/docs/tooltip' },
    ],
  },
  {
    title: '기초',
    links: [
      { name: 'Typography', href: '/docs/typography' },
      { name: 'Color', href: '/docs/color' },
      { name: 'Icon', href: '/docs/icon' },
      { name: 'Spinner', href: '/docs/spinner' },
    ],
  },
] as const

export default function Footer() {
  return (
    <footer className="mt-6 w-full border-t border-silver-200 bg-silver-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link
              href="/"
              className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label="Common UI home"
            >
              <ProjectLogo animated />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-natural-600">
              일관된 화면을 빠르게 만들기 위한 사내 공통 컴포넌트 모음입니다.
            </p>
          </div>

          {/* 링크가 4열이라 좁은 화면에서는 2열로 접는다. */}
          <nav
            aria-label="컴포넌트 바로가기"
            className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4 md:gap-x-14"
          >
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-natural-500">
                  {group.title}
                </h2>
                <ul className="mt-3 flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-natural-600 transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-silver-200 pt-6">
          <p className="text-xs text-natural-500">
            © {new Date().getFullYear()} Common UI. 사내 사용 목적으로 제작되었습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
