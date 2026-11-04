"use client";

import React from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { themeOptions } from "@styles/theme/palette.theme";

type ThemeSwatch = {
  name: string;
  hex: string;
};

function getThemeSwatches(theme: (typeof themeOptions)[number]): ThemeSwatch[] {
  return [
    { name: "surface", hex: theme.surface },
    { name: "foreground", hex: theme.foreground },
    { name: "accent", hex: theme.accent },
    { name: "muted", hex: theme.muted },
    ...theme.colors.map((color) => ({
      name: color.name,
      hex: color.hex,
    })),
  ];
}

function Component() {
  return (
    <div className="flex flex-col gap-10">
      {themeOptions.map((theme) => (
        <div key={theme.id} className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="flex-none">
              <h6 className="font-bold">{theme.name}</h6>
              <p className="text-xs text-silver-500">{theme.label}</p>
            </div>
            <div className="h-px w-full bg-silver-300" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(112px,1fr))] gap-3">
            {getThemeSwatches(theme).map((color) => (
              <div key={`${theme.id}-${color.name}`} className="flex flex-col gap-1">
                <div
                  className="h-10 rounded border border-black/5"
                  style={{ backgroundColor: color.hex }}
                  title={`${color.name}: ${color.hex}`}
                />
                <div className="text-sm leading-tight text-silver-700">
                  {color.name}
                  <div className="text-xs text-silver-500">{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const code = `// 현재 제공하는 테마 목록입니다.
import { themeOptions } from "@styles/theme/palette.theme";

themeOptions.map((theme) => ({
  id: theme.id,
  surface: theme.surface,
  foreground: theme.foreground,
  accent: theme.accent,
  muted: theme.muted,
  colors: theme.colors,
}));`;

export const themes: CodeData = {
  title: "테마 색상",
  description:
    "테마별 surface · foreground · accent · muted 토큰과 원본 팔레트 색상을 확인할 수 있습니다.",
  type: "single",
  code: [{ fileName: "ThemeColors.tsx", language: "tsx", code }],
  component: <Component />,
};
