import { useState } from "react";

export const COLOR_THEME = {
  flowerStore: {
    bubbleChat: "#DAE7DE",
    headerLine: "#9BBFA7",
    chatGradient: "#DAE7DE",
  },
  friend: {
    bubbleChat: "#fde0d9",
    headerLine: "#FAC1B3",
    chatGradient: "#fde0d9",
  },
  guardian: {
    bubbleChat: "#D4CCD9",
    headerLine: "",
    chatGradient: "",
  },
};

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
