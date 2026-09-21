import { Languages } from "lucide-react";
import Link from "next/link";

import { locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";

interface LocaleSwitchProps {
  current: Locale;
  labels: Dictionary["header"]["language"];
}

// Sin JS de cliente: el fragmento (#ancla) no llega al servidor, así que el enlace
// cambia de idioma y vuelve al inicio de la página.
export function LocaleSwitch({ current, labels }: LocaleSwitchProps) {
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
