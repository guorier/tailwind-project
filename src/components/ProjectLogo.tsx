import type { HTMLAttributes } from 'react'

type ProjectLogoProps = HTMLAttributes<HTMLSpanElement> & {
  compact?: boolean
  /** 트레이스를 따라 신호가 흐르는 애니메이션을 재생한다. */
  animated?: boolean
}

/**
 * 칩에서 뻗어 나가는 트레이스와 그 끝단 노드의 쌍.
 * 신호가 사방으로 퍼지도록 delay 를 시계 방향으로 배분한다.
 */
const TRACES = [
  { d: 'M16 12V8H10V5', cx: 10, cy: 5 },
  { d: 'M24 12V8H30V5', cx: 30, cy: 5 },
  { d: 'M28 16H32V10H35', cx: 35, cy: 10 },
  { d: 'M28 24H32V30H35', cx: 35, cy: 30 },
  { d: 'M24 28V32H30V35', cx: 30, cy: 35 },
  { d: 'M16 28V32H10V35', cx: 10, cy: 35 },
  { d: 'M12 24H8V30H5', cx: 5, cy: 30 },
  { d: 'M12 16H8V10H5', cx: 5, cy: 10 },
] as const

/** 신호가 한 바퀴 도는 데 걸리는 시간(2.4s)을 트레이스 수로 나눈 간격. */
const STAGGER_MS = 300

/**
 * The shared project mark and wordmark.
 * The central block is a component; the traces are its reusable connections.
 */
export default function ProjectLogo({
  compact = false,
  animated = false,
  className = '',
  ...props
}: ProjectLogoProps) {
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

        {TRACES.map(({ d, cx, cy }, i) => {
          const delay = `${i * STAGGER_MS}ms`

          return (
            <g key={d}>
              {/* 트레이스 바탕. 신호가 지나지 않는 구간에도 회로가 보이도록 깔아둔다. */}
              <path
                d={d}
                stroke="#5FE0AE"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={animated ? 0.3 : 1}
              />
              {animated && (
                // pathLength=1 로 정규화해 대시 패턴을 경로 길이와 무관하게 맞춘다.
                <path
                  d={d}
                  stroke="#5FE0AE"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray="0.35 0.65"
                  className="animate-trace-flow motion-reduce:animate-none"
                  style={{ animationDelay: delay }}
                />
              )}
              <circle
                cx={cx}
                cy={cy}
                r="1.5"
                fill="#5FE0AE"
                className={animated ? 'animate-node-pulse motion-reduce:animate-none' : undefined}
                style={animated ? { animationDelay: delay, transformOrigin: `${cx}px ${cy}px` } : undefined}
              />
            </g>
          )
        })}

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
