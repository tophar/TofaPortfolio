"use client";

import React, { createContext, useCallback, useContext, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
  mounted: false,
});

const STORAGE_KEY = "tofa_theme";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getSnapshot(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore storage access errors
  }
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return getSystemTheme();
}

function getServerSnapshot(): Theme {
  return "light";
}

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handleMedia = (e: MediaQueryListEvent) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== "light" && stored !== "dark") {
        const sysTheme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", sysTheme);
        callback();
      }
    } catch {
      // ignore
    }
  };

  media.addEventListener("change", handleMedia);

  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      const val = e.newValue;
      if (val === "light" || val === "dark") {
        document.documentElement.setAttribute("data-theme", val);
      } else {
        const sys = getSystemTheme();
        document.documentElement.setAttribute("data-theme", sys);
      }
      callback();
    }
  };
  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(callback);
    media.removeEventListener("change", handleMedia);
    window.removeEventListener("storage", handleStorage);
  };
}

function emptySubscribe() {
  return () => {};
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const setTheme = useCallback((nextTheme: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
    } catch {
      // ignore
    }
    listeners.forEach((listener) => listener());
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getSnapshot();
    const nextTheme: Theme = current === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
