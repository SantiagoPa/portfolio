import { Rail } from "@/components/shared/rail";
import { cn } from "@/lib/utils";

import type { SectionId } from "@/content/shared";

interface SectionProps {
  id: SectionId;
  // id del encabezado (h1 en el hero, h2 en el resto) que etiqueta la sección.
  headingId: string;
  tone?: "default" | "block";
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  headingId,
  tone = "default",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(tone === "block" && "bg-block text-block-foreground")}
    >
      <div className="relative mx-auto w-full max-w-[68rem]">
        <Rail tone={tone} />
        <div
          className={cn(
            "py-20 pr-5 pl-9 md:py-28 md:pr-8 md:pl-12 lg:py-36 lg:pl-[calc(2rem+72px)]",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
