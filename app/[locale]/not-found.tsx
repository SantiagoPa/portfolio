import Link from "next/link";

import { getDictionary } from "@/content";
import { defaultLocale } from "@/lib/i18n";

// not-found no recibe params: usa el idioma por defecto.
export default function NotFound() {
  const { notFound } = getDictionary(defaultLocale);

  return (
    <div className="mx-auto w-full max-w-[68rem] px-5 py-20 md:px-8 lg:py-36">
      <h1 className="type-h2">{notFound.title}</h1>
      <p className="mt-4 max-w-measure text-ink-soft">{notFound.description}</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-6 inline-block underline underline-offset-4"
      >
        {notFound.back}
      </Link>
    </div>
  );
}
