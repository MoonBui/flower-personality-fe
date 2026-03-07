import { useState } from "react";

export const COLOR_THEME = {
  flowerStore: {
    light: "#DAE7DE",
    dark: "#9BBFA7",
  },
  friend: {
    light: "#fde0d9",
    dark: "#FAC1B3",
  },
  guardian: {
    light: "#DCD7EA",
    dark: "#A9A0D9",
  },
} as const;

export type ColorTheme = (typeof COLOR_THEME)[keyof typeof COLOR_THEME];

export function useThemeUIManager() {
  // Internal state
  const [currentTheme, setCurrentTheme] =
    useState<keyof typeof COLOR_THEME>("flowerStore");

  const toggleTheme = (theme: keyof typeof COLOR_THEME) => {
    setCurrentTheme(theme);
  };

  return {
    currentTheme,
    toggleTheme,
  };
}
