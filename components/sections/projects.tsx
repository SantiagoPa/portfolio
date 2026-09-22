import { useTranslations } from "next-intl";

import { ProjectCard } from "@/components/shared/project-card";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects, techLabels } from "@/content/shared";

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
    maps: {
      title: t("items.maps.title"),
      role: t("items.maps.role"),
      description: t("items.maps.description"),
      problem: t("items.maps.problem"),
      features: [
        t("items.maps.features.first"),
        t("items.maps.features.second"),
        t("items.maps.features.third"),
      ],
    },
    peajes: {
      title: t("items.peajes.title"),
      role: t("items.peajes.role"),
      description: t("items.peajes.description"),
      problem: t("items.peajes.problem"),
      features: [
        t("items.peajes.features.first"),
        t("items.peajes.features.second"),
        t("items.peajes.features.third"),
      ],
    },
    clima: {
      title: t("items.clima.title"),
      role: t("items.clima.role"),
      description: t("items.clima.description"),
      problem: t("items.clima.problem"),
      features: [
        t("items.clima.features.first"),
        t("items.clima.features.second"),
        t("items.clima.features.third"),
      ],
    },
  } as const;

  // Sección oculta por completo si no hay proyectos (docs/BLUEPRINT.md §5).
  return projects.length > 0 ? (
    <Section id="proyectos" headingId="proyectos-titulo">
      <SectionHeading id="proyectos-titulo">{t("heading")}</SectionHeading>

      <ul className="mt-12 grid gap-8 md:mt-14 md:grid-cols-2 lg:gap-10">
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
