import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Profile } from "@/components/sections/profile";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { routing } from "@/i18n/routing";

// Hero, Perfil, Experiencia, Stack y Proyectos son reales; Contacto es provisional hasta la fase 8.
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
      <Projects />
      <Section id="contacto" headingId="contacto-titulo" tone="block">
        <SectionHeading id="contacto-titulo">{t("contact.heading")}</SectionHeading>
      </Section>
    </>
  );
}
