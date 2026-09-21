export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Elige el idioma a partir de la cabecera Accept-Language respetando los pesos (q).
// Solo cuenta el subtag principal ("es-CO" -> "es"). Sin coincidencia: idioma por defecto.
export function negotiateLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
      return { primary: tag.trim().toLowerCase().split("-")[0], q, index };
    })
    .filter((entry) => Number.isFinite(entry.q) && entry.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);

  for (const { primary } of ranked) {
    if (isLocale(primary)) return primary;
  }
  return defaultLocale;
}
