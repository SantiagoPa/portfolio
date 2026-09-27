import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  as?: "h1" | "h2";
  tone?: "default" | "block";
  className?: string;
  children: React.ReactNode;
}

export function SectionHeading({
  id,
  as: Tag = "h2",
  tone = "default",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <Tag id={id} className={cn("relative max-w-measure", className)}>
      {/* Marca de cota en el raíl (desde lg): un tick que parte del eje, a 72px del texto. */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-[0.5lh] left-[-72px] hidden h-px w-6 lg:block",
          tone === "block" ? "bg-block-soft" : "bg-ink-soft",
        )}
      />
      {children}
    </Tag>
  );
}
