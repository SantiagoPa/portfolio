import { useTranslations } from "next-intl";
import { LuFileDown, LuMail, LuMapPin, LuMessageCircle } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import { FadeContent } from "@/components/animations/fade-content";
import { ContactLink } from "@/components/shared/contact-link";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { cvPath, whatsappUrl } from "@/content/shared";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const t = useTranslations("contact");
  const newTab = t("newTab");

  return (
    <Section id="contacto" headingId="contacto-titulo" tone="block">
      <SectionHeading id="contacto-titulo" tone="block">
        {t("heading")}
      </SectionHeading>
      <p className="mt-6 max-w-[66ch] text-block-foreground">{t("intro")}</p>

      <FadeContent
        duration={700}
        className="mt-12 grid gap-12 md:mt-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10"
      >
        <ul
          aria-label={t("channelsLabel")}
          className="divide-y divide-signal/30 border-y border-signal/30 lg:col-span-7"
        >
          <li>
            <ContactLink
              icon={LuMail}
              label={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
          </li>
          <li>
            <ContactLink
              icon={LuMessageCircle}
              label={t("whatsapp")}
              href={whatsappUrl}
              external
              newTab={newTab}
            />
          </li>
          <li>
            <ContactLink
              icon={FaLinkedin}
              label={t("linkedin")}
              href={siteConfig.socials.linkedin}
              external
              newTab={newTab}
            />
          </li>
          <li>
            <ContactLink
              icon={SiGithub}
              label={t("github")}
              href={siteConfig.socials.github}
              external
              newTab={newTab}
            />
          </li>
        </ul>

        <div className="flex flex-col items-start gap-8 lg:col-span-5">
          <Button
            asChild
            size="lg"
            className="bg-block-foreground text-block hover:bg-block-soft"
          >
            <a href={cvPath} download>
              <LuFileDown strokeWidth={1.5} aria-hidden="true" className="size-5" />
              {t("cv")}
            </a>
          </Button>

          <div className="space-y-2 text-block-soft">
            <address className="not-italic">
              <span className="sr-only">{t("location")}: </span>
              <ContactLink icon={LuMapPin} label={siteConfig.location} className="py-0" />
            </address>
            <p className="type-meta">{t("references")}</p>
          </div>
        </div>
      </FadeContent>
    </Section>
  );
}
