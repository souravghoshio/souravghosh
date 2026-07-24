"use client";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Sun, Moon } from "lucide-react";
import { useToggleTheme } from "@/hooks/use-toogle-theme";

const ThemeButton = () => {
  const toggleTheme = useToggleTheme();

  return (
    <Tooltip>
      <TooltipTrigger
        delay={0}
        closeDelay={0}
        render={
          <button
            onClick={toggleTheme}
            className="dark:hover:bg-zinc-800/50 hover:bg-gray-100 p-2 ml-1 rounded-md group cursor-pointer"
          >
            <Moon
              size={16}
              className="group-hover:-rotate-12 hidden dark:block"
            />
            <Sun
              size={16}
              className="group-hover:-rotate-12 dark:hidden block"
            />
          </button>
        }
      />
      <TooltipContent>
        <span className="font-mono">Toogle theme <kbd className="ml-0.5 px-2 py-0.5 rounded-sm bg-muted-foreground">D</kbd></span>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeButton;
