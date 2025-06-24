const brand = {
    title: 'URBAN DOCS',
    img: '/images/logo_b.svg',
}

export default function Footer() {
    return (
        <div className="mt-6 p-6 w-full bg-silver-100">
            <div className="flex justify-end mx-auto max-w-7xl">
                <img src={brand.img} alt={brand.title} className="h-4 opacity-50" />
            </div>
        </div>
    )
}
