'use client'

import Link from 'next/link'
import { ArrowUpRight, Check, Clipboard, Code2, Layers3, Sparkles } from 'lucide-react'
import { useState, type CSSProperties } from 'react'

import { useAtlasTheme } from '@/components/AtlasThemeProvider'
import { atlasThemes, type AtlasTheme } from '@/styles/theme/palette.theme'

function getContrastColor(hex: string) {
  const value = hex.replace('#', '')
  const red = Number.parseInt(value.slice(0, 2), 16)
  const green = Number.parseInt(value.slice(2, 4), 16)
  const blue = Number.parseInt(value.slice(4, 6), 16)
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255

  return luminance > 0.62 ? '#201A17' : '#FFF8F3'
}

function AtlasMark({ className = '' }: { className?: string }) {
  return (
    <span className={`atlas-mark ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

function ThemePreview({ theme }: { theme: AtlasTheme }) {
  return (
    <div
      className="atlas-preview relative overflow-hidden rounded-[2rem] p-4 sm:p-6"
      style={{ backgroundColor: theme.surface, color: theme.foreground }}
    >
      <div
        className="absolute -right-20 -top-24 size-64 rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: theme.accent }}
      />

      <div className="relative flex items-center justify-between border-b pb-5" style={{ borderColor: `${theme.foreground}20` }}>
        <div className="flex items-center gap-3">
          <AtlasMark />
          <span className="atlas-display text-[0.72rem] font-bold uppercase tracking-[0.22em]">
            COMMON / UI
          </span>
        </div>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em]" style={{ color: theme.muted }}>
          preview 01
        </span>
      </div>

      <div className="relative grid gap-8 py-9 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
        <div>
          <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.24em]" style={{ color: theme.accent }}>
            component / palette
          </p>
          <h2 className="atlas-display max-w-md text-4xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl">
            Build a point of view.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-6" style={{ color: `${theme.foreground}A8` }}>
            A living color system gives every component a recognizable voice before the first line of copy is written.
          </p>
          <button
            type="button"
            className="mt-7 inline-flex items-center gap-3 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: theme.accent, color: getContrastColor(theme.accent) }}
          >
            Explore system <ArrowUpRight className="size-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
          {[
            ['SURFACE', theme.colors[0].hex],
            ['ACCENT', theme.accent],
            ['SIGNAL', theme.colors[theme.colors.length - 1].hex],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border p-3" style={{ borderColor: `${theme.foreground}20`, backgroundColor: `${theme.foreground}08` }}>
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em]" style={{ color: theme.muted }}>
                  {label}
                </span>
                <span className="size-2 rounded-full" style={{ backgroundColor: value }} />
              </div>
              <span className="font-mono text-xs" style={{ color: theme.foreground }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid grid-cols-5 gap-1.5" aria-label={`${theme.name} palette preview`}>
        {theme.colors.map((color) => (
          <div key={color.hex} className="group relative h-20 overflow-hidden rounded-xl" style={{ backgroundColor: color.hex }}>
            <span className="absolute inset-x-2 bottom-2 truncate text-[0.58rem] font-semibold opacity-0 transition-opacity group-hover:opacity-100" style={{ color: getContrastColor(color.hex) }}>
              {color.hex}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ColorAtlas() {
  const { activeTheme, setTheme } = useAtlasTheme()
  const [copied, setCopied] = useState<string | null>(null)

  const copyValue = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(key)
      window.setTimeout(() => setCopied(null), 1400)
    } catch {
      setCopied(null)
    }
  }

  const atlasStyle = {
    '--atlas-accent': activeTheme.accent,
    '--atlas-muted': activeTheme.muted,
  } as CSSProperties

  return (
    <main className="atlas-shell" style={atlasStyle}>
      <div className="atlas-grid atlas-noise" aria-hidden="true" />
      <div className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between border-b border-white/10 py-5">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/55">
            color atlas <span className="mx-2 text-white/20">/</span> 07 source palettes
          </p>
          <Link href="/docs/color" className="group inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white">
            open docs <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <section className="grid gap-14 pb-16 pt-16 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20 lg:pb-24 lg:pt-24">
          <div className="atlas-reveal">
            <div className="mb-7 flex items-center gap-3 font-mono text-[0.63rem] uppercase tracking-[0.24em] text-white/45">
              <Sparkles className="size-3.5" style={{ color: activeTheme.accent }} />
              extracted from your references
            </div>
            <h1 className="atlas-display max-w-3xl text-[clamp(3.6rem,8vw,7.3rem)] font-bold leading-[0.84] tracking-[-0.065em] text-white">
              Color is a system, <span style={{ color: activeTheme.accent }}>not a swatch.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
              이미지에서 추출한 7개의 색상군을 하나의 테마 아틀라스로 엮었습니다. 팔레트를 고르면 아래의 컴포넌트 미리보기가 즉시 그 분위기로 전환됩니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {['surface', 'accent', 'signal'].map((token) => (
                <span key={token} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/55">
                  {token} token
                </span>
              ))}
            </div>
          </div>

          <div className="atlas-reveal [animation-delay:120ms]">
            <ThemePreview theme={activeTheme} />
          </div>
        </section>

        <section aria-labelledby="theme-index-heading" className="border-t border-white/10 pt-8">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em]" style={{ color: activeTheme.accent }}>
                / 01 — palette index
              </p>
              <h2 id="theme-index-heading" className="atlas-display mt-2 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                Choose the atmosphere.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/45 sm:text-right">
              Seven references, thirty-five exact colors, one adaptable system.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {atlasThemes.map((theme) => {
              const isActive = theme.id === activeTheme.id

              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setTheme(theme.id)}
                  className={`group text-left ${isActive ? 'atlas-theme-card-active' : ''}`}
                  aria-pressed={isActive}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-colors group-hover:border-white/30">
                    <div className="flex h-16">
                      {theme.colors.map((color) => (
                        <span key={color.hex} className="flex-1 transition-transform duration-300 group-hover:scale-y-110" style={{ backgroundColor: color.hex }} />
                      ))}
                    </div>
                    <div className="flex items-start justify-between gap-3 p-4">
                      <div>
                        <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/35">{theme.index} / {theme.label}</p>
                        <h3 className="atlas-display mt-2 text-xl font-bold tracking-[-0.03em] text-white">{theme.name}</h3>
                        <p className="mt-1 text-xs text-white/45">{theme.mood}</p>
                      </div>
                      <span className={`mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border ${isActive ? 'border-transparent' : 'border-white/15'}`} style={isActive ? { backgroundColor: theme.accent, color: getContrastColor(theme.accent) } : undefined}>
                        {isActive ? <Check className="size-3.5" /> : <ArrowUpRight className="size-3.5 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        <section className="grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:pt-20">
          <div>
            <div className="flex items-center gap-3">
              <Layers3 className="size-4" style={{ color: activeTheme.accent }} />
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-white/45">active theme / {activeTheme.index}</p>
            </div>
            <h2 className="atlas-display mt-4 text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">{activeTheme.name}</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">{activeTheme.description}</p>
            <p className="mt-6 font-mono text-[0.64rem] uppercase tracking-[0.2em]" style={{ color: activeTheme.muted }}>{activeTheme.mood}</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {activeTheme.colors.map((color, index) => {
              const key = `${activeTheme.id}-${color.hex}`
              const isCopied = copied === key

              return (
                <button
                  type="button"
                  key={color.hex}
                  onClick={() => copyValue(color.hex, key)}
                  className="group relative min-h-36 overflow-hidden rounded-2xl border border-white/10 p-4 text-left transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  style={{ backgroundColor: color.hex, color: getContrastColor(color.hex) }}
                  title={`Copy ${color.hex}`}
                >
                  <span className="absolute right-3 top-3 flex size-6 items-center justify-center rounded-full bg-black/10 opacity-0 transition-opacity group-hover:opacity-100">
                    {isCopied ? <Check className="size-3.5" /> : <Clipboard className="size-3.5" />}
                  </span>
                  <span className="absolute left-4 top-4 font-mono text-[0.58rem] opacity-55">0{index + 1}</span>
                  <span className="absolute inset-x-4 bottom-4">
                    <span className="block truncate text-xs font-bold">{color.name}</span>
                    <span className="mt-1 block font-mono text-[0.66rem] opacity-70">{color.hex}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        <section className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] lg:mt-20">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.55fr_1fr] lg:items-center lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <Code2 className="size-4" style={{ color: activeTheme.accent }} />
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-white/45">ready to theme</p>
              </div>
              <h2 className="atlas-display mt-4 text-3xl font-bold tracking-[-0.04em] text-white">A palette that ships with intent.</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/45">각 색상은 Tailwind 설정과 컴포넌트 토큰으로 옮겨갈 수 있는 명확한 이름을 가집니다.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-xs leading-7 text-white/70 sm:p-5">
              <div><span style={{ color: activeTheme.accent }}>const</span> theme = {'{'}</div>
              <div className="pl-4"><span className="text-white/45">surface:</span> <button type="button" onClick={() => copyValue(activeTheme.surface, 'surface')} className="transition-colors hover:text-white">'{activeTheme.surface}'</button>,</div>
              <div className="pl-4"><span className="text-white/45">accent:</span> <button type="button" onClick={() => copyValue(activeTheme.accent, 'accent')} className="transition-colors hover:text-white">'{activeTheme.accent}'</button>,</div>
              <div className="pl-4"><span className="text-white/45">signal:</span> <button type="button" onClick={() => copyValue(activeTheme.colors[4].hex, 'signal')} className="transition-colors hover:text-white">'{activeTheme.colors[4].hex}'</button>,</div>
              <div>{'}'}</div>
              <div className="mt-2 text-[0.62rem] text-white/35">{'// click any value to copy'}</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
