import type { HTMLAttributes } from 'react'

type ProjectLogoProps = HTMLAttributes<HTMLSpanElement> & {
  compact?: boolean
}

/**
 * The shared project mark and wordmark.
 * The central block is a component; the traces are its reusable connections.
 */
export default function ProjectLogo({ compact = false, className = '', ...props }: ProjectLogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Common UI component system"
      {...props}
    >
      <svg
        className={compact ? 'size-7 shrink-0' : 'size-8 shrink-0'}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="11" fill="#0E1726" />
        <path
          d="M16 12V8H10V5M24 12V8H30V5M12 16H8V10H5M28 16H32V10H35M12 24H8V30H5M28 24H32V30H35M16 28V32H10V35M24 28V32H30V35"
          stroke="#5FE0AE"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="5" r="1.5" fill="#5FE0AE" />
        <circle cx="30" cy="5" r="1.5" fill="#5FE0AE" />
        <circle cx="5" cy="10" r="1.5" fill="#5FE0AE" />
        <circle cx="35" cy="10" r="1.5" fill="#5FE0AE" />
        <circle cx="5" cy="30" r="1.5" fill="#5FE0AE" />
        <circle cx="35" cy="30" r="1.5" fill="#5FE0AE" />
        <circle cx="10" cy="35" r="1.5" fill="#5FE0AE" />
        <circle cx="30" cy="35" r="1.5" fill="#5FE0AE" />
        <rect x="12" y="12" width="16" height="16" rx="3" fill="#F4F8F6" stroke="#5FE0AE" strokeWidth="2.2" />
        <rect x="17" y="17" width="6" height="6" rx="1" fill="#0E1726" />
      </svg>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[14px] font-black tracking-[0.15em] text-slate-900">COMMON UI</span>
          <span className="mt-1 text-[8px] font-semibold tracking-[0.24em] text-emerald-700">COMPONENT SYSTEM</span>
        </span>
      )}
    </span>
  )
}
