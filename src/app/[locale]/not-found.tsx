import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";

// not-found no recibe params: usa el idioma por defecto.
export default async function NotFound() {
  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: "notFound",
  });

  return (
    <div className="mx-auto w-full max-w-[68rem] px-5 py-20 md:px-8 lg:py-36">
      <h1 className="type-h2">{t("title")}</h1>
      <p className="mt-4 max-w-measure text-ink-soft">{t("description")}</p>
      <Link
        href={`/${routing.defaultLocale}`}
        className="mt-6 inline-block underline underline-offset-4"
      >
        {t("back")}
      </Link>
    </div>
  );
}
