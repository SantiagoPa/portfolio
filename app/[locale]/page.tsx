import { notFound } from "next/navigation";

import { Hero } from "@/components/sections/hero";
import { Profile } from "@/components/sections/profile";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";

// Hero y Perfil son reales (fase 4); el resto son secciones vacías hasta las fases 5-8.
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <Profile dict={dict.profile} />
      <Section id="experiencia" headingId="experiencia-titulo">
        <SectionHeading id="experiencia-titulo">{dict.experience.heading}</SectionHeading>
      </Section>
      <Section id="stack" headingId="stack-titulo">
        <SectionHeading id="stack-titulo">{dict.stack.heading}</SectionHeading>
      </Section>
      <Section id="proyectos" headingId="proyectos-titulo">
        <SectionHeading id="proyectos-titulo">{dict.projects.heading}</SectionHeading>
      </Section>
      <Section id="contacto" headingId="contacto-titulo" tone="block">
        <SectionHeading id="contacto-titulo">{dict.contact.heading}</SectionHeading>
      </Section>
    </>
  );
}
