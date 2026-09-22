import type { Locale } from "next-intl";

// Datos del sitio. `url` (siteUrl) es un MOCK hasta tener dominio real
// (content/PLACEHOLDERS.md); se usa como `metadataBase` y para construir canonical, sitemap y OG.
export const siteConfig = {
  url: "https://santiagopadilla.dev",
  name: "Santiago Padilla Arcia",
  shortName: "Santiago Padilla",
  jobTitle: "Fullstack Developer",
  email: "santiagopadilla117@gmail.com",
  location: "Montería, Colombia",
  socials: {
    github: "https://github.com/SantiagoPa",
    linkedin: "https://www.linkedin.com/in/santiago-padilla-arcia-6562ba205/",
  },
  keywords: [
    "Fullstack Developer",
    "React Developer",
    "Frontend Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js",
    "NestJS",
    "Colombia",
    "Montería",
    "remote",
  ],
} as const;

// Locale de Open Graph / JSON-LD por idioma del sitio (docs/BLUEPRINT.md §12).
export const ogLocales = {
  es: "es_CO",
  en: "en_US",
} as const satisfies Record<Locale, string>;
