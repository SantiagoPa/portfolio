import {
  AppWindow,
  Code2,
  Container,
  Database,
  GitBranch,
  Server,
  Smartphone,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-badge";
import { techGroups, techLabels } from "@/content/shared";

import type { LucideIcon } from "lucide-react";
import type { TechGroupId } from "@/content/shared";

const groupIcons = {
  languages: Code2,
  frontend: AppWindow,
  mobile: Smartphone,
  backend: Server,
  databases: Database,
  infrastructure: Container,
  versionControl: GitBranch,
} as const satisfies Record<TechGroupId, LucideIcon>;

export function Stack() {
  const t = useTranslations("stack");

  return (
    <Section id="stack" headingId="stack-titulo">
      <SectionHeading id="stack-titulo">{t("heading")}</SectionHeading>

      <div className="mt-12 grid gap-x-10 gap-y-12 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {techGroups.map((group) => {
          const Icon = groupIcons[group.id];
          const titleId = `stack-${group.id}`;

          return (
            <div key={group.id} className="border-t border-rule pt-5">
              <h3 id={titleId} className="flex items-center gap-3">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-5 shrink-0 text-ink-soft"
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
                    <TechBadge level={tech.level}>{techLabels[tech.id]}</TechBadge>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
