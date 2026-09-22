import { cn } from "@/lib/utils";

import { experiences } from "@/content/shared";

import type { Dictionary } from "@/content/types";

interface MeasureLineProps {
  labels: Dictionary["hero"]["measure"];
  present: Dictionary["experience"]["present"];
  roles: Dictionary["experience"]["roles"];
}

// Línea de cota 2021 -> hoy con una marca por rol (docs/BLUEPRINT.md §1, §4.6). Server
// Component con CSS puro: el trazo es un `div` que se escala en transform (ver globals.css).
// El dibujo es decorativo (`aria-hidden`); la lista `sr-only` es la alternativa accesible.
//
// Escala: cada segmento mide sus años. El rol actual no tiene fin; su tramo se dibuja de un año
// (no a escala) y termina en la marca "hoy".
const segments = experiences.map((experience) => ({
  ...experience,
  span: (experience.end ?? experience.start + 1) - experience.start,
}));

const totalSpan = segments.reduce((sum, segment) => sum + segment.span, 0);
const currentSegment = segments.filter((segment) => segment.end === null);

// Tiempos de la animación de carga: las marcas entran escalonadas 80ms.
const markDelay = (index: number) => `${120 + index * 80}ms`;

// Alto por año en la versión vertical (mobile).
const verticalUnit = 4.5;

export function MeasureLine({ labels, present, roles }: MeasureLineProps) {
  return (
    <div>
      <ul className="sr-only" aria-label={labels.label}>
        {segments.map((segment) => (
          <li key={segment.id}>
            {segment.company}, {roles[segment.id]},{" "}
            <time dateTime={String(segment.start)}>{segment.start}</time> –{" "}
            {segment.end === null ? (
              present
            ) : (
              <time dateTime={String(segment.end)}>{segment.end}</time>
            )}
          </li>
        ))}
      </ul>

      {/* Vertical (mobile): la cota se superpone al eje del raíl, a 20px del borde. */}
      <div aria-hidden="true" className="relative -ml-4 md:hidden">
        <div className="measure-draw-y absolute inset-y-0 left-0 w-0.5">
          <div className="absolute inset-y-0 left-0 w-px bg-block-soft/70" />
          {currentSegment.map((segment) => (
            <div
              key={segment.id}
              className="absolute inset-x-0 bottom-0 bg-signal"
              style={{ height: `${(segment.span / totalSpan) * 100}%` }}
            />
          ))}
        </div>
        {segments.map((segment, index) => {
          const current = segment.end === null;
          return (
            <div
              key={segment.id}
              className="relative pl-6"
              style={{ minHeight: `${segment.span * verticalUnit}rem` }}
            >
              <span
                className={cn(
                  "measure-mark absolute top-0 left-0 h-px w-4",
                  current ? "bg-signal" : "bg-block-foreground",
                )}
                style={{ animationDelay: markDelay(index) }}
              />
              <p className="-mt-3.5 leading-7">
                <span className="font-heading font-semibold tabular-nums">
                  {segment.start}
                </span>{" "}
                <span className="font-medium">{segment.company}</span>
              </p>
              <p className="type-meta text-block-soft">{roles[segment.id]}</p>
              {current ? (
                <>
                  <span
                    className="measure-mark absolute bottom-0 left-0 h-px w-4 bg-signal"
                    style={{ animationDelay: markDelay(segments.length) }}
                  />
                  <p className="absolute bottom-0 left-6 translate-y-1/2 font-heading leading-7 font-semibold">
                    {labels.today}
                  </p>
                </>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Horizontal (md+): compacta con años; desde lg, a todo el ancho con las 4 marcas etiquetadas. */}
      <div aria-hidden="true" className="relative hidden md:block">
        <div className="measure-draw-x absolute inset-x-0 top-8 h-0.5">
          <div className="absolute inset-0 bg-block-soft/60" />
          {currentSegment.map((segment) => (
            <div
              key={segment.id}
              className="absolute inset-y-0 right-0 bg-signal"
              style={{ width: `${(segment.span / totalSpan) * 100}%` }}
            />
          ))}
        </div>
        <div className="flex">
          {segments.map((segment, index) => {
            const current = segment.end === null;
            return (
              <div
                key={segment.id}
                className="relative min-w-0 pb-3 pl-3 lg:pb-0"
                style={{ flexGrow: segment.span, flexBasis: 0 }}
              >
                <span
                  className={cn(
                    "measure-mark absolute inset-y-0 left-0 w-px",
                    current ? "bg-signal" : "bg-block-soft/60",
                  )}
                  style={{ animationDelay: markDelay(index) }}
                />
                <div
                  className={cn(
                    "flex h-8 items-end justify-between pr-3 pb-2 font-heading font-semibold lg:type-h3",
                  )}
                >
                  <span className="tabular-nums">{segment.start}</span>
                  {current ? <span>{labels.today}</span> : null}
                </div>
                <div className="hidden pt-5 pr-3 pb-2 lg:block">
                  <p className="font-heading font-semibold">{segment.company}</p>
                  <p className="type-meta text-block-soft">{roles[segment.id]}</p>
                </div>
                {current ? (
                  <span
                    className="measure-mark absolute inset-y-0 right-0 w-px bg-signal"
                    style={{ animationDelay: markDelay(segments.length) }}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
