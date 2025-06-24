'use client'
import { Container } from "@/components/Container";
import Nav, { NavItem } from "@/components/examples/Nav";

export default function Navbar() {
    const brand = {
        title: 'URBAN DOCS',
        img: '/images/logo.svg'
    }
    const navItems: NavItem[] = [
        {
            name: 'home',
            link: '/form/input',
            children: []
        },
        {
            name: 'component',
            link: '',
            children: [
                { name: 'Input', link: '/input', },
                { name: 'Checkbox / Radio', link: '/optiongroup', },
                { name: 'Button', link: '/button', },
                { name: 'SelectBox', link: '/selectbox', },
                { name: 'Datepicker', link: '/datepicker', },
                { name: 'Textarea', link: '/textarea', },
                { name: 'Table', link: '/table', },
                { name: 'Tab', link: '/tabs', },
                { name: 'Pagination', link: '/pagination', },
                { name: 'FileUpload', link: '/fileInput', },
                { name: 'Accordion', link: '/accordion', },
                { name: 'Modal', link: '/modal', },
                { name: 'Toast', link: '/toast', },
                { name: 'Editor', link: '/editor', },
                { name: 'Typography', link: '/typography', },
                { name: 'Color', link: '/color', },
                { name: 'Icon', link: '/icon', },
                { name: 'Tooltip', link: '/tooltip', },
            ]
        },
    ]
    return (
        <Container>
            <Nav brand={brand} navItems={navItems} />
        </Container>
    );
}
