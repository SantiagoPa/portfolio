import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { en } from "@/messages/en";
import { es } from "@/messages/es";

import type { Locale } from "next-intl";
import type { Messages } from "@/messages/types";

// Import estático de ambos ficheros (solo servidor): sin rutas dinámicas construidas.
const messages: Record<Locale, Messages> = { es, en };

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return { locale, messages: messages[locale] };
});
