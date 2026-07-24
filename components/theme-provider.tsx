"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { useToggleTheme } from "@/hooks/use-toogle-theme";

const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeHotKey />
      {children}
    </ThemeProvider>
  );
};

const ThemeHotKey = () : React.ReactNode => {
 
  const toggleTheme = useToggleTheme();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === "d") {
      toggleTheme();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);

  return
};

export default NextThemeProvider;
