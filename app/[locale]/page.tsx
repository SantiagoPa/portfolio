import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Profile } from "@/components/sections/profile";
import { Stack } from "@/components/sections/stack";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { routing } from "@/i18n/routing";

// Hero, Perfil, Experiencia y Stack son reales; el resto son secciones vacías hasta las fases 7-8.
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  return (
    <>
      <Hero />
      <Profile />
      <Experience />
      <Stack />
      <Section id="proyectos" headingId="proyectos-titulo">
        <SectionHeading id="proyectos-titulo">{t("projects.heading")}</SectionHeading>
      </Section>
      <Section id="contacto" headingId="contacto-titulo" tone="block">
        <SectionHeading id="contacto-titulo">{t("contact.heading")}</SectionHeading>
      </Section>
    </>
  );
}
