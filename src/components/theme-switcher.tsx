"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      title={mounted ? `Switch to ${nextTheme} theme` : "Toggle color theme"}
      aria-label={
        mounted ? `Switch to ${nextTheme} theme` : "Toggle color theme"
      }
      aria-pressed={mounted ? isDark : undefined}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm transition-[background-color,border-color,transform] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.96] motion-reduce:transition-none"
    >
      <Sun
        aria-hidden="true"
        className="absolute size-4 rotate-0 scale-100 opacity-100 transition-[transform,opacity] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none dark:-rotate-90 dark:scale-75 dark:opacity-0"
      />
      <Moon
        aria-hidden="true"
        className="absolute size-4 rotate-90 scale-75 opacity-0 transition-[transform,opacity] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
};
