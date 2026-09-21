import { notFound } from "next/navigation";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";

// Fase 3: secciones vacías con su encabezado. El contenido llega en las fases 4-8.
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Section id="inicio" headingId="inicio-titulo" tone="block">
        <SectionHeading id="inicio-titulo" as="h1">
          {dict.hero.name}
        </SectionHeading>
        <p className="mt-4 text-block-soft">{dict.hero.role}</p>
      </Section>
      <Section id="perfil" headingId="perfil-titulo">
        <SectionHeading id="perfil-titulo">{dict.profile.heading}</SectionHeading>
      </Section>
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
