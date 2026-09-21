import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  as?: "h1" | "h2";
  className?: string;
  children: React.ReactNode;
}

export function SectionHeading({
  id,
  as: Tag = "h2",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <Tag id={id} className={cn("max-w-measure", className)}>
      {children}
    </Tag>
  );
}
