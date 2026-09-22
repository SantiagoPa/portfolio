import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Profile } from "@/components/sections/profile";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { routing } from "@/i18n/routing";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Profile />
      <Experience />
      <Stack />
      <Projects />
      <Contact />
    </>
  );
}
