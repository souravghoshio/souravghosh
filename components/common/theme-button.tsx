"use client";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Sun, Moon } from "lucide-react";
import { useToggleTheme } from "@/hooks/use-toogle-theme";

const ThemeButton = () => {
  const { toggleTheme, isDark } = useToggleTheme();

  return (
    <Tooltip>
      <TooltipTrigger
        delay={0}
        closeDelay={0}
        render={
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hover:bg-foreground/10 p-2 ml-1 rounded-md group cursor-pointer"
          >
            {isDark ? (
              <Sun
                size={16}
                className="group-hover:rotate-12 transition-transform duration-200"
              />
            ) : (
              <Moon
                size={16}
                className="group-hover:-rotate-12 transition-transform duration-200"
              />
            )}
          </button>
        }
      />
      <TooltipContent>
        <span className="font-heading">
          {isDark ? "Switch to light mode" : "Switch to dark mode"}{" "}
          <kbd className="ml-0.5 px-2 py-0.5 text-xs rounded-sm bg-muted-foreground/50 font-sans">
            D
          </kbd>
        </span>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeButton;
