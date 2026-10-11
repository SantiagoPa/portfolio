"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "radix-ui";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { StaticImageData } from "next/image";

// Las capturas (1920×1440) llevan la ventana de la app sobre un degradado: en el visor se recorta
// a la ventana más un margen de 40px, ≈ x 200–1720 y 286–1154 (1520×868). Los porcentajes son
// relativos al recorte: ancho 1920/1520, desplazamiento -200/1520 y -286/868.
const VIEWER_CROP = {
  ratio: 1520 / 868,
  width: `${(1920 / 1520) * 100}%`,
  left: `${(-200 / 1520) * 100}%`,
  top: `${(-286 / 868) * 100}%`,
};

export interface GalleryImage {
  src: StaticImageData;
  alt: string;
  // Nombre accesible de su miniatura ("Ver captura 2 de 5").
  thumbLabel: string;
}

interface ProjectGalleryLabels {
  // Nombre accesible de la galería ("Capturas de Syner").
  gallery: string;
  prevImage: string;
  nextImage: string;
  // Botón que abre la captura activa en grande, y el que la cierra.
  expandImage: string;
  closeImage: string;
}

interface ProjectGalleryProps {
  images: readonly GalleryImage[];
  // `true` en el layout `split`: desde `md` la imagen ocupa el alto de la tarjeta.
  fill?: boolean;
  labels: ProjectGalleryLabels;
}

// Capturas de un proyecto: imagen activa, flechas y miniaturas (←/→ con el foco dentro). Las
// imágenes se apilan y cruzan con opacidad, solo con `motion-safe`. Con una sola imagen no hay
// controles. Clic en la imagen la abre en grande (Dialog de Radix), con el mismo índice activo:
// navegar en el visor también mueve la galería.
export function ProjectGallery({ images, fill = false, labels }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const total = images.length;
  const isMultiple = total > 1;

  const go = (step: number) => setActive((current) => (current + step + total) % total);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isMultiple) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  };

  const current = images[active];

  // El contenido del Dialog va en un portal, pero los eventos de React suben por el árbol de
  // componentes: este `onKeyDown` también recibe ←/→ desde el visor.
  return (
    <div
      role="group"
      aria-label={labels.gallery}
      onKeyDown={handleKeyDown}
      className="flex flex-1 flex-col"
    >
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden",
          fill && "md:aspect-auto md:min-h-80 md:flex-1",
        )}
      >
        {images.map((image, index) => (
          // `fill` + import estático: blurDataURL automático. Sin `priority`: solo la LCP lo lleva.
          <Image
            key={image.src.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            aria-hidden={index !== active}
            className={cn(
              "object-contain motion-safe:transition-opacity motion-safe:duration-300",
              index === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}

        <Dialog.Root open={isExpanded} onOpenChange={setIsExpanded}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label={labels.expandImage}
              className="absolute inset-0 cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
            />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-block/95 duration-150 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
            <Dialog.Content
              className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 p-2 text-block-foreground outline-none duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
              onClick={(event) => {
                // Clic fuera de la imagen y de los controles cierra el visor.
                if (event.target === event.currentTarget) setIsExpanded(false);
              }}
            >
              <Dialog.Title className="sr-only">{labels.gallery}</Dialog.Title>
              {/* Recorta el marco degradado de la captura y deja solo la ventana de la app, a todo
                  lo que permita la pantalla (ancho o alto, lo que limite antes). */}
              <div
                className="relative w-[min(96vw,calc(84vh*var(--crop-ratio)))] overflow-hidden rounded-sm"
                style={
                  {
                    "--crop-ratio": VIEWER_CROP.ratio,
                    aspectRatio: VIEWER_CROP.ratio,
                  } as React.CSSProperties
                }
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  sizes="100vw"
                  placeholder="blur"
                  className="absolute h-auto max-w-none"
                  style={{
                    width: VIEWER_CROP.width,
                    left: VIEWER_CROP.left,
                    top: VIEWER_CROP.top,
                  }}
                />
              </div>
              <Dialog.Description className="max-w-[66ch] text-center type-meta text-block-soft">
                {isMultiple ? `${active + 1} / ${total} · ` : null}
                {current.alt}
              </Dialog.Description>

              <Dialog.Close asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={labels.closeImage}
                  className="absolute top-3 right-3 text-block-foreground hover:bg-block-foreground/10"
                >
                  <LuX aria-hidden="true" strokeWidth={1.5} />
                </Button>
              </Dialog.Close>

              {isMultiple ? (
                <>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => go(-1)}
                    aria-label={labels.prevImage}
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-block-foreground hover:bg-block-foreground/10"
                  >
                    <LuChevronLeft aria-hidden="true" strokeWidth={1.5} />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => go(1)}
                    aria-label={labels.nextImage}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-block-foreground hover:bg-block-foreground/10"
                  >
                    <LuChevronRight aria-hidden="true" strokeWidth={1.5} />
                  </Button>
                </>
              ) : null}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        {isMultiple ? (
          <>
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={() => go(-1)}
              aria-label={labels.prevImage}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-surface/90 hover:bg-surface"
            >
              <LuChevronLeft aria-hidden="true" strokeWidth={1.5} />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={() => go(1)}
              aria-label={labels.nextImage}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-surface/90 hover:bg-surface"
            >
              <LuChevronRight aria-hidden="true" strokeWidth={1.5} />
            </Button>
          </>
        ) : null}
      </div>

      {isMultiple ? (
        <>
          <ul className="flex gap-2 overflow-x-auto border-t border-rule p-3">
            {images.map((image, index) => {
              const isActive = index === active;

              return (
                <li key={image.src.src} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={image.thumbLabel}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block h-12 w-16 overflow-hidden rounded-sm border transition-[border-color,opacity]",
                      isActive
                        ? "border-ink opacity-100"
                        : "border-rule opacity-60 hover:opacity-100",
                    )}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
          {/* Anuncia la captura activa a lectores de pantalla al cambiarla. */}
          <p className="sr-only" aria-live="polite">
            {current.alt}
          </p>
        </>
      ) : null}
    </div>
  );
}
