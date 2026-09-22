import { useTranslations } from "next-intl";

import { FadeContent } from "@/components/animations/fade-content";
import { ExperienceItem } from "@/components/shared/experience-item";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { experiences, techLabels } from "@/content/shared";

// Más reciente primero: se invierte una copia de la fuente única (orden cronológico).
const rolesNewestFirst = [...experiences].reverse();

export function Experience() {
  const t = useTranslations("experience");

  // Los bullets se leen con claves literales (2–3 por rol) para conservar la comprobación de
  // tipos de las claves.
  const bullets = {
    freelance: [
      t("roles.freelance.bullets.first"),
      t("roles.freelance.bullets.second"),
      t("roles.freelance.bullets.third"),
    ],
    cognox: [
      t("roles.cognox.bullets.first"),
      t("roles.cognox.bullets.second"),
      t("roles.cognox.bullets.third"),
    ],
    sipremcol: [
      t("roles.sipremcol.bullets.first"),
      t("roles.sipremcol.bullets.second"),
      t("roles.sipremcol.bullets.third"),
    ],
    draco: [t("roles.draco.bullets.first"), t("roles.draco.bullets.second")],
  } as const;

  return (
    <Section id="experiencia" headingId="experiencia-titulo">
      <SectionHeading id="experiencia-titulo">{t("heading")}</SectionHeading>

      <FadeContent duration={700} className="mt-12 md:mt-14">
        <ol className="flex flex-col gap-14 md:gap-16 lg:gap-20">
          {rolesNewestFirst.map((experience) => (
            <ExperienceItem
              key={experience.id}
              company={experience.company}
              role={t(`roles.${experience.id}.title`)}
              start={experience.start}
              end={experience.end}
              presentLabel={t("present")}
              bullets={bullets[experience.id]}
              stackLabel={t("stackLabel")}
              stack={
                "stack" in experience
                  ? experience.stack.map((id) => ({ id, label: techLabels[id] }))
                  : undefined
              }
            />
          ))}
        </ol>
      </FadeContent>
    </Section>
  );
}
