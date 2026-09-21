import { en } from "@/content/en";
import { es } from "@/content/es";

import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
