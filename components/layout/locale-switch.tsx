"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import type { Locale } from "next-intl";

interface LocaleSwitchProps {
  current: string;
  label: string;
  names: Record<Locale, string>;
}

// El fragmento (#ancla) solo existe en el navegador, por eso este componente es cliente:
// al cambiar de idioma se navega a la misma sección. Sin JS, el enlace lleva al inicio.
export function LocaleSwitch({ current, label, names }: LocaleSwitchProps) {
  const router = useRouter();
  // Ruta actual sin el prefijo de idioma ("/es/x" -> "/x").
  const path = usePathname().slice(`/${current}`.length) || "/";

  // localePrefix "always": la ruta es siempre `/<idioma><resto>`.
  const hrefFor = (locale: string) => `/${locale}${path === "/" ? "" : path}`;

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, locale: string) {
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (modified || event.button !== 0 || !window.location.hash) return;
    event.preventDefault();
    router.replace(hrefFor(locale) + window.location.hash);
  }

  return (
    <div role="group" aria-label={label} className="flex items-center">
      <Languages
        strokeWidth={1.5}
        aria-hidden="true"
        className="mr-1 hidden size-4 text-ink-soft sm:block"
      />
      {Object.entries(names).map(([locale, name]) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={hrefFor(locale)}
            hrefLang={locale}
            lang={locale}
            aria-label={name}
            aria-current={active ? "true" : undefined}
            onClick={(event) => handleClick(event, locale)}
            className={cn(
              "inline-flex h-11 min-w-10 items-center justify-center text-[0.95rem] font-medium uppercase transition-colors",
              active
                ? "text-foreground underline decoration-signal decoration-2 underline-offset-8"
                : "text-ink-soft hover:text-foreground",
            )}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
