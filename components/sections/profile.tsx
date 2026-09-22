import { useTranslations } from "next-intl";
import { LuGraduationCap, LuUser } from "react-icons/lu";

import { FadeContent } from "@/components/animations/fade-content";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

const workStyleKeys = ["communication", "maintenance", "greenfield"] as const;

export function Profile() {
  const t = useTranslations("profile");
  return (
    <Section id="perfil" headingId="perfil-titulo">
      <SectionHeading id="perfil-titulo">{t("heading")}</SectionHeading>

      <FadeContent duration={700} className="mt-12 md:mt-14">
        <div className="grid gap-y-10 md:grid-cols-[8rem_1fr] md:gap-x-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12">
          {/* Foto mock. Al llegar public/profile.webp (640x640): sustituir el icono por
              <Image src={profilePhoto} alt="..." priority sizes="(min-width: 768px) 128px, 96px" />
              (import estático para blurDataURL) dentro de este mismo círculo. */}
          <div
            aria-hidden="true"
            className="flex size-24 items-center justify-center overflow-hidden rounded-full border border-signal/40 bg-surface text-signal md:size-32 lg:col-span-5"
          >
            <LuUser strokeWidth={1.5} className="size-10 md:size-14" />
          </div>

          <div className="md:col-start-2 md:row-start-1 lg:col-span-7 lg:col-start-6 lg:row-span-2">
            <div className="max-w-[66ch] space-y-5">
              <p>{t("paragraphs.first")}</p>
              <p>{t("paragraphs.second")}</p>
            </div>

            <h3 className="mt-12">{t("workStyle.heading")}</h3>
            <ul className="mt-4 max-w-[66ch]">
              {workStyleKeys.map((key) => (
                <li key={key} className="border-t border-rule py-4">
                  {t(`workStyle.items.${key}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-start-2 md:row-start-2 lg:col-span-5 lg:col-start-1">
            <h3 className="flex items-center gap-3">
              <LuGraduationCap strokeWidth={1.5} aria-hidden="true" className="size-5" />
              {t("education.heading")}
            </h3>
            <p className="mt-3 font-medium">{t("education.degree")}</p>
            <p className="type-meta text-ink-soft">{t("education.institution")}</p>
            <p className="type-meta text-ink-soft tabular-nums">
              {t("education.period")}
            </p>
          </div>
        </div>
      </FadeContent>
    </Section>
  );
}
