"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";

interface LocaleSwitchProps {
  current: Locale;
  labels: Dictionary["header"]["language"];
}

// El fragmento (#ancla) solo existe en el navegador, por eso este componente es cliente:
// al cambiar de idioma se navega a la misma sección. Sin JS, el enlace lleva al inicio.
export function LocaleSwitch({ current, labels }: LocaleSwitchProps) {
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, locale: Locale) {
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (modified || event.button !== 0 || !window.location.hash) return;
    event.preventDefault();
    router.push(`/${locale}${window.location.hash}`);
  }

  return (
    <div role="group" aria-label={labels.label} className="flex items-center">
      <Languages
        strokeWidth={1.5}
        aria-hidden="true"
        className="mr-1 hidden size-4 text-ink-soft sm:block"
      />
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            lang={locale}
            aria-label={labels.names[locale]}
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
