import { getTranslations } from "next-intl/server";

import { experiences, techGroups, techLabels } from "@/content/shared";
import { siteConfig } from "@/lib/site";

import type { Locale } from "next-intl";

interface JsonLdProps {
  locale: Locale;
}

// Todas las tecnologías del Stack (docs/BLUEPRINT.md §6), en el mismo orden de posicionamiento;
// sin duplicar `content/shared.ts`.
const knowsAbout = techGroups.flatMap((group) =>
  group.technologies.map((technology) => techLabels[technology.id]),
);

const currentRole = experiences.find((experience) => experience.end === null);

// JSON-LD `Person` (docs/BLUEPRINT.md §12). Server Component: no `image` (sin foto real), sin
// certificaciones ni `ProfilePage` inventados. `Person.address`/`alumniOf` son solo los datos que
// confirma el CV (§0).
export async function JsonLd({ locale }: JsonLdProps) {
  const t = await getTranslations({ locale, namespace: "meta" });

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    description: t("description"),
    url: `${siteConfig.url}/${locale}`,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montería",
      addressRegion: "Córdoba",
      addressCountry: "CO",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Córdoba",
    },
    knowsAbout,
    sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
    worksFor: currentRole
      ? { "@type": "Organization", name: currentRole.company }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
