"use client";

import { useCallback } from "react";
import { useTheme } from "next-themes";

import { useClickSound } from "@/hooks/use-click-sound";

export function useToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const { playClick } = useClickSound();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
    playClick();
  }, [isDark, setTheme, playClick]);

  return {
    isDark,
    toggleTheme,
  };
}
