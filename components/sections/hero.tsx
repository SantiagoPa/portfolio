import { ArrowDown, Download, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { MeasureLine } from "@/components/shared/measure-line";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { cvPath } from "@/content/shared";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <Section
      id="inicio"
      headingId="inicio-titulo"
      tone="block"
      className="md:py-24 lg:py-28"
    >
      <SectionHeading id="inicio-titulo" as="h1" tone="block" className="text-balance">
        {t("name")}
      </SectionHeading>
      <p className="mt-5 font-heading type-h2 font-semibold text-block-soft">
        {t("role")}
      </p>
      <p className="mt-8 max-w-[66ch] text-block-foreground">{t("tagline")}</p>
      <p className="mt-5 flex items-center gap-2 type-meta text-block-soft">
        <MapPin strokeWidth={1.5} aria-hidden="true" className="size-4 shrink-0" />
        {t("location")}
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="bg-block-foreground text-block hover:bg-block-soft"
        >
          <a href="#experiencia">
            {t("ctaExperience")}
            <ArrowDown strokeWidth={1.5} aria-hidden="true" className="size-5" />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-block-soft text-block-foreground hover:bg-block-foreground/10"
        >
          <a href={cvPath} download>
            <Download strokeWidth={1.5} aria-hidden="true" className="size-5" />
            {t("ctaCv")}
          </a>
        </Button>
      </div>

      <div className="mt-16 md:mt-20">
        <MeasureLine />
      </div>
    </Section>
  );
}
