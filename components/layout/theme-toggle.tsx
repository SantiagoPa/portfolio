"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  label: string;
}

// Alterna claro/oscuro. Sin estado propio ni useEffect: el icono lo decide CSS
// (clase .dark puesta por next-themes antes de pintar), así no hay desajuste de hidratación.
// "Sistema" es el valor inicial (defaultTheme del provider) hasta que se elige un tema.
export function ThemeToggle({ label }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <LuSun strokeWidth={1.5} aria-hidden="true" className="hidden size-5 dark:block" />
      <LuMoon strokeWidth={1.5} aria-hidden="true" className="size-5 dark:hidden" />
    </Button>
  );
}
