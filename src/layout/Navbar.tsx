import Nav from './Nav';

export const revalidate = 0
export default async function Navbar() {

  return (
    <div className="flex justify-center items-baseline border-b border-white/10 bg-atlas-ink px-6 py-1 text-white">
      <Nav />
    </div>
  )
}
