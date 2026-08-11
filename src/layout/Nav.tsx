'use client'
import { Container } from "@/components/Container";
import Nav, { NavItem } from "@/components/examples/Nav";

export default function Navbar() {
  const navItems: NavItem[] = [
    {
      name: 'COMPONENT',
      link: '',
      // 폼 입력 → 데이터 표시 → 탐색 → 오버레이 → 로딩 → 레이아웃 → 기타 순으로 묶는다.
      children: [
        { name: 'Form', link: '/form', },
        { name: 'Input', link: '/input', },
        { name: 'Checkbox / Radio', link: '/optiongroup', },
        { name: 'Button', link: '/button', },
        { name: 'SelectBox', link: '/selectbox', },
        { name: 'Datepicker', link: '/datepicker', },
        { name: 'Textarea', link: '/textarea', },
        { name: 'Toggle', link: '/toggle', },
        { name: 'Slider', link: '/slider', },
        { name: 'FileUpload', link: '/fileInput', },

        { name: 'Table', link: '/table', },
        { name: 'Card', link: '/card', },
        { name: 'Badge', link: '/badge', },
        { name: 'Avatar', link: '/avatar', },
        { name: 'Pagination', link: '/pagination', },
        { name: 'Empty', link: '/empty', },

        { name: 'Tab', link: '/tabs', },
        { name: 'Breadcrumb', link: '/breadcrumb', },
        { name: 'Accordion', link: '/accordion', },
        { name: 'Collapsible', link: '/collapsible', },
        { name: 'Tree', link: '/folderTree', },
        { name: 'DropdownMenu', link: '/dropdown', },

        { name: 'Modal', link: '/modal', },
        { name: 'Sheet', link: '/sheet', },
        { name: 'Toast', link: '/toast', },
        { name: 'Tooltip', link: '/tooltip', },
        { name: 'Popover', link: '/popover', },

        { name: 'Spinner', link: '/spinner', },
        { name: 'Skeleton', link: '/skeleton', },
        { name: 'Progress', link: '/progress', },

        { name: 'Sidebar', link: '/sidebar', },
        { name: 'Separator', link: '/separator', },
        { name: 'ScrollArea', link: '/scrollarea', },

        { name: 'Editor', link: '/editor', },
        { name: 'Typography', link: '/typography', },
        { name: 'Color', link: '/color', },
        { name: 'Icon', link: '/icon', },
      ]
    },
  ]
  return (
    <Container>
      <Nav navItems={navItems} />
    </Container>
  );
}
