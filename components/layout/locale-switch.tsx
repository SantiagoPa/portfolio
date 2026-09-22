"use client";

import { useId } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LuChevronDown, LuLanguages } from "react-icons/lu";

import type { Locale } from "next-intl";

interface LocaleSwitchProps {
  current: string;
  label: string;
  names: Record<Locale, string>;
}

// Select nativo (mejor que enlaces sueltos con más de 2 idiomas y más fácil de operar por
// teclado/lector de pantalla que un grupo de botones). Es "use client" porque necesita
// `onChange` para navegar: a diferencia del switch anterior (enlaces `<a>`), sin JS no
// degrada a nada navegable — es el costo aceptado de usar `<select>` para esto.
export function LocaleSwitch({ current, label, names }: LocaleSwitchProps) {
  const id = useId();
  const router = useRouter();
  // Ruta actual sin el prefijo de idioma ("/es/x" -> "/x").
  const path = usePathname().slice(`/${current}`.length) || "/";

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value;
    // `localePrefix` es "always": la ruta es siempre `/<idioma><resto>`.
    const href = `/${locale}${path === "/" ? "" : path}`;
    // El fragmento (#ancla) solo existe en el navegador: se conserva si había uno.
    router.replace(href + window.location.hash);
  }

  return (
    <div className="relative flex items-center">
      <LuLanguages
        strokeWidth={1.5}
        aria-hidden="true"
        className="pointer-events-none absolute left-2 hidden size-4 text-ink-soft sm:block"
      />
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        value={current}
        onChange={handleChange}
        className="h-11 min-w-10 cursor-pointer appearance-none rounded-sm border border-transparent bg-transparent py-0 pr-6 pl-2 text-[0.95rem] font-medium text-foreground uppercase transition-colors hover:text-signal sm:pl-7"
      >
        {Object.entries(names).map(([locale, name]) => (
          <option
            key={locale}
            value={locale}
            className="bg-surface text-foreground normal-case"
          >
            {name}
          </option>
        ))}
      </select>
      <LuChevronDown
        strokeWidth={1.5}
        aria-hidden="true"
        className="pointer-events-none absolute right-1 size-4 text-ink-soft"
      />
    </div>
  );
}
