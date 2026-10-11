import { useTranslations } from "next-intl";

import { AnimatedContent } from "@/components/animations/animated-content";
import { FadeContent } from "@/components/animations/fade-content";
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
    syner: {
      title: t("items.syner.title"),
      role: t("items.syner.role"),
      description: t("items.syner.description"),
      problem: t("items.syner.problem"),
      features: [
        t("items.syner.features.first"),
        t("items.syner.features.second"),
        t("items.syner.features.third"),
      ],
      // Texto alternativo por `ProjectImage.id` (content/shared.ts).
      images: {
        panel: t("items.syner.images.panel"),
        summary: t("items.syner.images.summary"),
        movements: t("items.syner.images.movements"),
        reports: t("items.syner.images.reports"),
        breakEven: t("items.syner.images.breakEven"),
      } as Record<string, string>,
    },
  } as const;

  const isSingle = projects.length === 1;

  // Sección oculta por completo si no hay proyectos (docs/BLUEPRINT.md §5).
  return projects.length > 0 ? (
    <Section id="proyectos" headingId="proyectos-titulo">
      <SectionHeading id="proyectos-titulo">{t("heading")}</SectionHeading>

      <FadeContent duration={700} blur className="mt-12 md:mt-14">
        <ul
          className={cn(
            "grid gap-8 lg:gap-10",
            // Un solo proyecto ocupa todo el ancho (tarjeta con imagen y texto lado a lado);
            // con dos o más vuelve a 2 columnas.
            isSingle ? null : "md:grid-cols-2",
          )}
        >
          {projects.map((project, index) => {
            const item = items[project.id];
            const images = project.images ?? [];

            return (
              <AnimatedContent
                key={project.id}
                as="li"
                distance={60}
                scale={0.98}
                delay={index * 0.12}
              >
                <ProjectCard
                  title={item.title}
                  role={item.role}
                  description={item.description}
                  problem={item.problem}
                  features={item.features.filter((feature) => feature !== "")}
                  stack={project.stack.map((id) => techLabels[id])}
                  github={project.github}
                  demo={project.demo}
                  images={images.map((image, imageIndex) => ({
                    src: image.src,
                    alt:
                      item.images[image.id] ??
                      t("labels.imageAlt", { title: item.title }),
                    thumbLabel: t("labels.goToImage", {
                      index: imageIndex + 1,
                      total: images.length,
                    }),
                  }))}
                  layout={isSingle ? "split" : "stacked"}
                  labels={{
                    role: t("labels.role"),
                    problem: t("labels.problem"),
                    stack: t("labels.stack"),
                    demo: t("labels.demo"),
                    repo: t("labels.repo"),
                    newTab: t("labels.newTab"),
                    gallery: t("labels.gallery", { title: item.title }),
                    prevImage: t("labels.prevImage"),
                    nextImage: t("labels.nextImage"),
                    expandImage: t("labels.expandImage"),
                    closeImage: t("labels.closeImage"),
                  }}
                />
              </AnimatedContent>
            );
          })}
        </ul>
      </FadeContent>
    </Section>
  ) : null;
}
