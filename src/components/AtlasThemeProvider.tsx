'use client'

import { createContext, useContext, useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react'

import { atlasThemes, defaultAtlasTheme, type AtlasTheme } from '@/styles/theme/palette.theme'

const STORAGE_KEY = 'common-ui-atlas-theme'

type ThemeStyle = CSSProperties & Record<`--${string}`, string>

type AtlasThemeContextValue = {
  activeTheme: AtlasTheme
  setTheme: (themeId: string) => void
}

const AtlasThemeContext = createContext<AtlasThemeContextValue | null>(null)

function hexToRgb(hex: string) {
  const value = hex.replace('#', '')

  return {
    red: Number.parseInt(value.slice(0, 2), 16),
    green: Number.parseInt(value.slice(2, 4), 16),
    blue: Number.parseInt(value.slice(4, 6), 16),
  }
}

function rgbToHex(red: number, green: number, blue: number) {
  return `#${[red, green, blue].map((channel) => Math.round(channel).toString(16).padStart(2, '0')).join('')}`
}

function mixHex(baseHex: string, targetHex: string, amount: number) {
  const base = hexToRgb(baseHex)
  const target = hexToRgb(targetHex)
  const ratio = Math.min(1, Math.max(0, amount))

  return rgbToHex(
    base.red + (target.red - base.red) * ratio,
    base.green + (target.green - base.green) * ratio,
    base.blue + (target.blue - base.blue) * ratio,
  )
}

function hexToHsl(hex: string) {
  const { red, green, blue } = hexToRgb(hex)
  const normalizedRed = red / 255
  const normalizedGreen = green / 255
  const normalizedBlue = blue / 255
  const max = Math.max(normalizedRed, normalizedGreen, normalizedBlue)
  const min = Math.min(normalizedRed, normalizedGreen, normalizedBlue)
  const lightness = (max + min) / 2

  if (max === min) {
    return `0 0% ${Math.round(lightness * 100)}%`
  }

  const delta = max - min
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
  let hue = 0

  if (max === normalizedRed) {
    hue = (normalizedGreen - normalizedBlue) / delta + (normalizedGreen < normalizedBlue ? 6 : 0)
  } else if (max === normalizedGreen) {
    hue = (normalizedBlue - normalizedRed) / delta + 2
  } else {
    hue = (normalizedRed - normalizedGreen) / delta + 4
  }

  return `${Math.round(hue * 60)} ${Math.round(saturation * 100)}% ${Math.round(lightness * 100)}%`
}

function getContrastHex(hex: string) {
  const { red, green, blue } = hexToRgb(hex)
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255

  return luminance > 0.62 ? '#201A17' : '#FFF8F3'
}

function getThemeStyle(theme: AtlasTheme): ThemeStyle {
  const panel = mixHex(theme.surface, theme.foreground, 0.1)
  const muted = mixHex(theme.surface, theme.foreground, 0.14)
  const secondary = theme.colors[1].hex
  const signal = theme.colors[3].hex

  return {
    '--atlas-surface': theme.surface,
    '--atlas-panel': panel,
    '--atlas-foreground': theme.foreground,
    '--atlas-accent': theme.accent,
    '--atlas-muted': theme.muted,
    '--background': hexToHsl(theme.surface),
    '--foreground': hexToHsl(theme.foreground),
    '--card': hexToHsl(panel),
    '--card-foreground': hexToHsl(theme.foreground),
    '--popover': hexToHsl(panel),
    '--popover-foreground': hexToHsl(theme.foreground),
    '--primary': hexToHsl(theme.accent),
    '--primary-foreground': hexToHsl(getContrastHex(theme.accent)),
    '--secondary': hexToHsl(secondary),
    '--secondary-foreground': hexToHsl(getContrastHex(secondary)),
    '--muted': hexToHsl(muted),
    '--muted-foreground': hexToHsl(theme.muted),
    '--accent': hexToHsl(signal),
    '--accent-foreground': hexToHsl(getContrastHex(signal)),
    '--destructive': hexToHsl(theme.colors[3].hex),
    '--destructive-foreground': hexToHsl(getContrastHex(theme.colors[3].hex)),
    '--border': hexToHsl(mixHex(theme.surface, theme.foreground, 0.2)),
    '--input': hexToHsl(mixHex(theme.surface, theme.foreground, 0.24)),
    '--ring': hexToHsl(theme.accent),
    '--chart-1': hexToHsl(theme.colors[0].hex),
    '--chart-2': hexToHsl(theme.colors[1].hex),
    '--chart-3': hexToHsl(theme.colors[2].hex),
    '--chart-4': hexToHsl(theme.colors[3].hex),
    '--chart-5': hexToHsl(theme.colors[4].hex),
  }
}

export function AtlasThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState(defaultAtlasTheme.id)
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false)
  const activeTheme = atlasThemes.find((theme) => theme.id === themeId) ?? defaultAtlasTheme
  const themeStyle = useMemo(() => getThemeStyle(activeTheme), [activeTheme])

  useEffect(() => {
    const storedThemeId = window.localStorage.getItem(STORAGE_KEY)

    if (storedThemeId && atlasThemes.some((theme) => theme.id === storedThemeId)) {
      setThemeId(storedThemeId)
    }

    setHasLoadedPreference(true)
  }, [])

  useEffect(() => {
    if (hasLoadedPreference) {
      window.localStorage.setItem(STORAGE_KEY, themeId)
    }
  }, [hasLoadedPreference, themeId])

  useEffect(() => {
    const root = document.documentElement

    Object.entries(themeStyle).forEach(([property, value]) => {
      root.style.setProperty(property, String(value))
    })
    root.dataset.atlasTheme = activeTheme.id
  }, [activeTheme.id, themeStyle])

  const contextValue = useMemo(
    () => ({
      activeTheme,
      setTheme: setThemeId,
    }),
    [activeTheme],
  )

  return (
    <AtlasThemeContext.Provider value={contextValue}>
      <div id="theme-root" data-atlas-theme={activeTheme.id} style={themeStyle}>
        {children}
      </div>
    </AtlasThemeContext.Provider>
  )
}

export function useAtlasTheme() {
  const context = useContext(AtlasThemeContext)

  if (!context) {
    throw new Error('useAtlasTheme must be used inside AtlasThemeProvider')
  }

  return context
}
