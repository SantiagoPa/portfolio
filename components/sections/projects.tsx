import { useTranslations } from "next-intl";

import { ProjectCard } from "@/components/shared/project-card";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects, techLabels } from "@/content/shared";
import { cn } from "@/lib/utils";

export function Projects() {
  const t = useTranslations("projects");

  // Claves literales por proyecto para conservar la comprobación de tipos de las claves.
  // Un texto vacío ("") es un campo sin evidencia: la tarjeta no renderiza su bloque.
  const items = {
    crc: {
      title: t("items.crc.title"),
      role: t("items.crc.role"),
      description: t("items.crc.description"),
      problem: t("items.crc.problem"),
      features: [
        t("items.crc.features.first"),
        t("items.crc.features.second"),
        t("items.crc.features.third"),
      ],
    },
  } as const;

  const isSingle = projects.length === 1;

  // Sección oculta por completo si no hay proyectos (docs/BLUEPRINT.md §5).
  return projects.length > 0 ? (
    <Section id="proyectos" headingId="proyectos-titulo">
      <SectionHeading id="proyectos-titulo">{t("heading")}</SectionHeading>

      <ul
        className={cn(
          "mt-12 grid gap-8 md:mt-14 lg:gap-10",
          // Un solo proyecto ocupa todo el ancho (tarjeta con imagen y texto lado a lado);
          // con dos o más vuelve a 2 columnas.
          isSingle ? null : "md:grid-cols-2",
        )}
      >
        {projects.map((project) => {
          const item = items[project.id];

          return (
            <li key={project.id}>
              <ProjectCard
                title={item.title}
                role={item.role}
                description={item.description}
                problem={item.problem}
                features={item.features.filter((feature) => feature !== "")}
                stack={project.stack.map((id) => techLabels[id])}
                github={project.github}
                demo={project.demo}
                image={project.image}
                layout={isSingle ? "split" : "stacked"}
                labels={{
                  role: t("labels.role"),
                  problem: t("labels.problem"),
                  stack: t("labels.stack"),
                  demo: t("labels.demo"),
                  repo: t("labels.repo"),
                  newTab: t("labels.newTab"),
                  imageAlt: t("labels.imageAlt", { title: item.title }),
                }}
              />
            </li>
          );
        })}
      </ul>
    </Section>
  ) : null;
}
