"use client";

import { useCallback } from "react";
import { useTheme } from "next-themes";
import { useClickSound } from "@/hooks/use-click-sound";

export function useToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const { playClick } = useClickSound();

  return useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    playClick();
  }, [resolvedTheme, setTheme, playClick]);
}