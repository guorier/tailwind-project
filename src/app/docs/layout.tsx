export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div id='root' className='atlas-module-surface'>
      {children}
    </div>
  )
}
