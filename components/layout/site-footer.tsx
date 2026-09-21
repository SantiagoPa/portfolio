import { siteConfig } from "@/lib/site";

import type { Dictionary } from "@/content/types";

interface SiteFooterProps {
  dict: Dictionary["footer"];
}

export function SiteFooter({ dict }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-block-soft/30 bg-block text-block-foreground">
      <div className="mx-auto flex w-full max-w-[68rem] flex-col gap-1 px-5 py-6 type-meta md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {year} {siteConfig.name}. {dict.rights}
        </p>
        <p className="text-block-soft">{dict.builtWith}</p>
      </div>
    </footer>
  );
}
