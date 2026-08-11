import ProjectLogo from '@/components/ProjectLogo'

export default function Footer() {
  return (
    <div className="mt-6 p-6 w-full bg-silver-100">
      <div className="flex justify-end mx-auto max-w-7xl">
        <ProjectLogo compact className="opacity-40" />
      </div>
    </div>
  )
}
