import Image from "next/image";
import { LuExternalLink, LuImageOff } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

import { TechBadge } from "@/components/shared/tech-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { StaticImageData } from "next/image";

interface ProjectCardLabels {
  role: string;
  problem: string;
  stack: string;
  demo: string;
  repo: string;
  // Texto sr-only de los enlaces externos ("(abre en una pestaña nueva)").
  newTab: string;
  // Texto alternativo del screenshot; solo se usa cuando hay `image`.
  imageAlt: string;
}

interface ProjectCardProps {
  title: string;
  role: string;
  // Los campos opcionales ausentes o vacíos no renderizan su bloque.
  description?: string;
  problem?: string;
  features?: readonly string[];
  stack?: readonly string[];
  github?: string;
  demo?: string;
  image?: StaticImageData;
  // `split`: imagen y texto lado a lado desde `md` (proyecto único, a todo el ancho).
  layout?: "stacked" | "split";
  labels: ProjectCardLabels;
}

// Un proyecto (docs/BLUEPRINT.md §8). A mano, sin el `card` de shadcn: la jerarquía sale de
// hairlines, tipografía y espacio; sin sombra y con el radio estructural de 2px.
export function ProjectCard({
  title,
  role,
  description,
  problem,
  features = [],
  stack = [],
  github,
  demo,
  image,
  layout = "stacked",
  labels,
}: ProjectCardProps) {
  const isSplit = layout === "split";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-sm border border-rule bg-surface",
        isSplit && "md:flex-row",
      )}
    >
      <div
        className={cn(
          "aspect-[16/10] border-b border-rule bg-paper",
          isSplit && "md:aspect-auto md:w-1/2 md:shrink-0 md:border-r md:border-b-0",
        )}
      >
        {image ? (
          // Con screenshot: `next/image` con import estático (blurDataURL y dimensiones
          // automáticas) y `sizes` explícito. Sin `priority`: solo la LCP lo lleva.
          <Image
            src={image}
            alt={labels.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            className="size-full object-cover"
          />
        ) : (
          // Marcador mientras no exista screenshot. Para sustituirlo: añadir el WebP 16:10 a
          // `public/projects/`, importarlo en `content/shared.ts` y pasarlo como `image`.
          <div className="flex size-full items-center justify-center">
            <LuImageOff
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-8 text-ink-soft"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 md:p-6">
        <div>
          <h3>{title}</h3>
          <p className="mt-1 type-meta text-ink-soft">
            <span className="sr-only">{labels.role}: </span>
            {role}
          </p>
        </div>

        {description ? <p className="max-w-[66ch]">{description}</p> : null}

        {problem ? (
          <p className="max-w-[66ch]">
            <span className="font-medium">{labels.problem}. </span>
            {problem}
          </p>
        ) : null}

        {features.length > 0 ? (
          <ul className="max-w-[66ch] space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="relative pl-5 before:absolute before:top-[0.85em] before:left-0 before:h-px before:w-2.5 before:bg-ink-soft"
              >
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        {stack.length > 0 ? (
          <ul aria-label={labels.stack} className="flex flex-wrap items-center gap-2">
            {stack.map((tech) => (
              <li key={tech}>
                <TechBadge level="secondary">{tech}</TechBadge>
              </li>
            ))}
          </ul>
        ) : null}

        {demo || github ? (
          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {demo ? (
              <Button asChild>
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <LuExternalLink aria-hidden="true" strokeWidth={1.5} />
                  {labels.demo}
                  <span className="sr-only"> {labels.newTab}</span>
                </a>
              </Button>
            ) : null}
            {github ? (
              <Button asChild variant="outline">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <SiGithub />
                  {labels.repo}
                  <span className="sr-only"> {labels.newTab}</span>
                </a>
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
