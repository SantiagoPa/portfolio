import { AnimatedContent } from "@/components/animations/animated-content";
import { TechBadge } from "@/components/shared/tech-badge";
import { cn } from "@/lib/utils";

interface ExperienceItemStack {
  id: string;
  label: string;
}

interface ExperienceItemProps {
  // Posición en la lista renderizada: escalona la animación de entrada de cada rol.
  index: number;
  company: string;
  role: string;
  start: number;
  // `null` marca el rol actual.
  end: number | null;
  presentLabel: string;
  bullets: readonly string[];
  stackLabel: string;
  stack?: readonly ExperienceItemStack[];
}

// Un rol sobre el eje (docs/BLUEPRINT.md §4.5, §11). Debe vivir en un contenedor que herede el
// raíl de `Section`: la marca de cota sale del eje hasta el contenido y, en el rol actual,
// un tramo ámbar recorre el eje a lo largo del rol.
// Mobile: periodo -> cargo -> empresa -> bullets. `lg`: periodo+empresa (3 col) | cargo+bullets (8 col).
export function ExperienceItem({
  index,
  company,
  role,
  start,
  end,
  presentLabel,
  bullets,
  stackLabel,
  stack = [],
}: ExperienceItemProps) {
  const current = end === null;

  return (
    <AnimatedContent as="li" distance={40} delay={index * 0.1} className="relative">
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-2.5 left-[-16px] h-px w-3 md:left-[-28px] md:w-5 lg:left-[-72px] lg:w-6",
          current ? "bg-signal" : "bg-ink-soft",
        )}
      />
      {current ? (
        <span
          aria-hidden="true"
          className="measure-draw-y pointer-events-none absolute top-2.5 bottom-0 left-[-17px] w-[3px] bg-signal md:left-[-29px] lg:left-[-73px]"
          style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
        />
      ) : null}

      <div className="grid gap-y-1 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-2">
        <p
          className={cn(
            "type-meta tabular-nums lg:col-span-3 lg:row-start-1",
            current ? "font-medium text-signal" : "text-ink-soft",
          )}
        >
          <time dateTime={String(start)}>{start}</time>
          {" – "}
          {current ? presentLabel : <time dateTime={String(end)}>{end}</time>}
        </p>
        <p className="font-medium lg:col-span-8 lg:col-start-5 lg:row-start-1">{role}</p>
        <h3 className="mt-1 lg:col-span-3 lg:row-start-2 lg:mt-0">{company}</h3>
        <ul className="mt-3 max-w-[66ch] space-y-2 lg:col-span-8 lg:col-start-5 lg:row-start-2 lg:mt-0">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="relative pl-5 before:absolute before:top-[0.85em] before:left-0 before:h-px before:w-2.5 before:bg-ink-soft"
            >
              {bullet}
            </li>
          ))}
        </ul>
        {stack.length > 0 ? (
          <ul
            aria-label={stackLabel}
            className="mt-2 flex flex-wrap gap-2 lg:col-span-8 lg:col-start-5 lg:row-start-3"
          >
            {stack.map((tech) => (
              <li key={tech.id}>
                <TechBadge level="secondary">{tech.label}</TechBadge>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </AnimatedContent>
  );
}
