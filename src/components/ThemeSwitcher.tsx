'use client'

import { Check, ChevronDown, Palette } from 'lucide-react'
import type { CSSProperties } from 'react'

import { useAtlasTheme } from '@/components/AtlasThemeContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { themeOptions } from '@/styles/theme/palette.theme'

export default function ThemeSwitcher({ className = '' }: { className?: string }) {
  const { activeTheme, setTheme } = useAtlasTheme()

  return (
    <div className={`atlas-theme-picker ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className="atlas-theme-trigger" aria-label="Choose a color theme">
            <Palette className="size-3.5 shrink-0" style={{ color: activeTheme.accent }} aria-hidden="true" />
            <span className="atlas-theme-value">
              <span className="atlas-theme-value-swatch" style={{ backgroundColor: activeTheme.accent }} />
              <span className="atlas-theme-value-index">{activeTheme.index}</span>
              <span className="atlas-theme-value-name">{activeTheme.name}</span>
            </span>
            <ChevronDown className="atlas-theme-trigger-chevron" aria-hidden="true" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="atlas-theme-content" align="start" sideOffset={8}>
          <DropdownMenuLabel className="atlas-theme-menu-label">Color atmosphere</DropdownMenuLabel>
          {themeOptions.map((theme) => {
            const isActive = theme.id === activeTheme.id
            const optionStyle = { '--theme-option-color': theme.accent } as CSSProperties

            return (
              <DropdownMenuItem
                key={theme.id}
                className={`atlas-theme-option ${isActive ? 'atlas-theme-option-selected' : ''}`}
                style={optionStyle}
                onSelect={() => setTheme(theme.id)}
              >
                <span className="atlas-theme-option-rail" aria-hidden="true" />
                <span className="atlas-theme-option-swatch" aria-hidden="true" />
                <span className="atlas-theme-option-copy">
                  <span className="atlas-theme-option-index">{theme.index}</span>
                  <span className="atlas-theme-option-name">{theme.name}</span>
                  <span className="atlas-theme-option-label">{theme.label.split(' / ')[0]}</span>
                </span>
                {isActive && <Check className="atlas-theme-option-check" aria-hidden="true" />}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
