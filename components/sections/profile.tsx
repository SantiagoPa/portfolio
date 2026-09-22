import { GraduationCap, User } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import type { Dictionary } from "@/content/types";

interface ProfileProps {
  dict: Dictionary["profile"];
}

export function Profile({ dict }: ProfileProps) {
  return (
    <Section id="perfil" headingId="perfil-titulo">
      <SectionHeading id="perfil-titulo">{dict.heading}</SectionHeading>

      <div className="mt-12 grid gap-y-10 md:mt-14 md:grid-cols-[8rem_1fr] md:gap-x-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12">
        {/* Foto mock. Al llegar public/profile.webp (640x640): sustituir el icono por
            <Image src={profilePhoto} alt="..." priority sizes="(min-width: 768px) 128px, 96px" />
            (import estático para blurDataURL) dentro de este mismo círculo. */}
        <div
          aria-hidden="true"
          className="flex size-24 items-center justify-center overflow-hidden rounded-full border border-rule bg-surface text-ink-soft md:size-32 lg:col-span-5"
        >
          <User strokeWidth={1.5} className="size-10 md:size-14" />
        </div>

        <div className="md:col-start-2 md:row-start-1 lg:col-span-7 lg:col-start-6 lg:row-span-2">
          <div className="max-w-[66ch] space-y-5">
            {dict.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-12">{dict.workStyle.heading}</h3>
          <ul className="mt-4 max-w-[66ch]">
            {dict.workStyle.items.map((item) => (
              <li key={item} className="border-t border-rule py-4">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-12">{dict.softSkills.heading}</h3>
          <ul className="mt-4 flex max-w-[66ch] flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-4 text-ink-soft">
            {dict.softSkills.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-start-2 md:row-start-2 lg:col-span-5 lg:col-start-1">
          <h3 className="flex items-center gap-3">
            <GraduationCap strokeWidth={1.5} aria-hidden="true" className="size-5" />
            {dict.education.heading}
          </h3>
          <p className="mt-3 font-medium">{dict.education.degree}</p>
          <p className="type-meta text-ink-soft">{dict.education.institution}</p>
          <p className="type-meta text-ink-soft tabular-nums">{dict.education.period}</p>
        </div>
      </div>
    </Section>
  );
}
