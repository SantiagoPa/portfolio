import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

import type { MetadataRoute } from "next";

const languages = {
  es: `${siteConfig.url}/es`,
  en: `${siteConfig.url}/en`,
  "x-default": `${siteConfig.url}/${routing.defaultLocale}`,
};

// `/es` y `/en`, con `alternates.languages` cruzadas (docs/BLUEPRINT.md §12).
export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    alternates: { languages },
  }));
}
