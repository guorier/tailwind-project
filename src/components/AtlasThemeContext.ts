import { createContext, useContext } from 'react'

import type { AtlasTheme } from '@/styles/theme/palette.theme'

// Provider 컴포넌트와 분리해 두어야 AtlasThemeProvider.tsx 수정 시 Fast Refresh가 전체 리로드로 떨어지지 않는다.
type AtlasThemeContextValue = {
  activeTheme: AtlasTheme
  setTheme: (themeId: string) => void
}

export const AtlasThemeContext = createContext<AtlasThemeContextValue | null>(null)

export function useAtlasTheme() {
  const context = useContext(AtlasThemeContext)

  if (!context) {
    throw new Error('useAtlasTheme must be used inside AtlasThemeProvider')
  }

  return context
}
