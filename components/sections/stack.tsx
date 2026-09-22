import { useTranslations } from "next-intl";
import {
  LuAppWindow,
  LuCodeXml,
  LuContainer,
  LuDatabase,
  LuGitBranch,
  LuServer,
  LuSmartphone,
} from "react-icons/lu";

import { FadeContent } from "@/components/animations/fade-content";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-badge";
import { techIcons } from "@/components/shared/tech-icons";
import { techGroups, techLabels } from "@/content/shared";

import type { IconType } from "react-icons";
import type { TechGroupId } from "@/content/shared";

const groupIcons = {
  languages: LuCodeXml,
  frontend: LuAppWindow,
  mobile: LuSmartphone,
  backend: LuServer,
  databases: LuDatabase,
  infrastructure: LuContainer,
  versionControl: LuGitBranch,
} as const satisfies Record<TechGroupId, IconType>;

export function Stack() {
  const t = useTranslations("stack");

  return (
    <Section id="stack" headingId="stack-titulo">
      <SectionHeading id="stack-titulo">{t("heading")}</SectionHeading>

      <FadeContent
        duration={700}
        className="mt-12 grid gap-x-10 gap-y-12 md:mt-14 md:grid-cols-2 lg:grid-cols-3"
      >
        {techGroups.map((group) => {
          const Icon = groupIcons[group.id];
          const titleId = `stack-${group.id}`;

          return (
            <div key={group.id} className="border-t border-signal/40 pt-5">
              <h3 id={titleId} className="flex items-center gap-3">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-5 shrink-0 text-signal"
                />
                {t(`groups.${group.id}`)}
              </h3>
              {/* min-h = alto de un badge `primary` (34px): la primera línea de cada grupo mide
                  lo mismo y su primer badge queda centrado en la misma posición vertical. */}
              <ul
                aria-labelledby={titleId}
                className="mt-4 flex min-h-[34px] flex-wrap items-center gap-2"
              >
                {group.technologies.map((tech) => (
                  <li key={tech.id} className="flex">
                    <TechBadge level={tech.level} icon={techIcons[tech.id]}>
                      {techLabels[tech.id]}
                    </TechBadge>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </FadeContent>
    </Section>
  );
}
