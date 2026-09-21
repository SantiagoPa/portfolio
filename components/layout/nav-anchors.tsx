import { navSectionIds } from "@/content/shared";

import type { Dictionary } from "@/content/types";

interface NavAnchorsProps {
  label: string;
  items: Dictionary["nav"];
}

export function NavAnchors({ label, items }: NavAnchorsProps) {
  return (
    <nav aria-label={label} className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {navSectionIds.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="inline-flex h-11 items-center rounded-sm px-3 text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-foreground"
            >
              {items[id]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
