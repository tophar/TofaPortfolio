"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

interface ThemeToggleProps {
  id?: string;
  variant?: "header" | "footer";
  className?: string;
}

export function ThemeToggle({
  id = "theme-toggle",
  variant = "header",
  className = "",
}: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  const isLight = mounted ? theme === "light" : false;
  const label = isLight ? "Switch to dark mode" : "Switch to light mode";

  if (variant === "footer") {
    return (
      <button
        id={id}
        type="button"
        onClick={toggleTheme}
        className={`theme-toggle-footer ${className}`}
        aria-label={label}
        title={label}
      >
        <span className="theme-toggle-icon" aria-hidden="true">
          {isLight ? <Moon size={15} /> : <Sun size={15} />}
        </span>
        <span>{isLight ? "Dark mode" : "Light mode"}</span>
      </button>
    );
  }

  return (
    <button
      id={id}
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${className}`}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {isLight ? (
          <Moon size={18} className="theme-icon-moon" />
        ) : (
          <Sun size={18} className="theme-icon-sun" />
        )}
      </span>
      <span className="sr-only">{label}</span>
    </button>
  );
}
