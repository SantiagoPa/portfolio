"use client";

import { LuDownload, LuMenu } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileNavItem {
  id: string;
  label: string;
}

// Solo strings y arrays mínimos: el diccionario completo no cruza al cliente.
interface MobileNavProps {
  items: MobileNavItem[];
  navLabel: string;
  openLabel: string;
  closeLabel: string;
  title: string;
  description: string;
  cvHref: string;
  cvLabel: string;
  cvAriaLabel: string;
}

export function MobileNav({
  items,
  navLabel,
  openLabel,
  closeLabel,
  title,
  description,
  cvHref,
  cvLabel,
  cvAriaLabel,
}: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={openLabel}
          className="lg:hidden"
        >
          <LuMenu strokeWidth={1.5} aria-hidden="true" className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" closeLabel={closeLabel}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription className="sr-only">{description}</SheetDescription>
        </SheetHeader>
        <nav aria-label={navLabel} className="px-4">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.id} className="border-b border-rule first:border-t">
                <SheetClose asChild>
                  <a
                    href={`#${item.id}`}
                    className="flex h-12 items-center font-heading text-lg font-semibold text-foreground"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto p-4">
          <Button asChild variant="outline" className="w-full">
            <a href={cvHref} download aria-label={cvAriaLabel}>
              <LuDownload strokeWidth={1.5} aria-hidden="true" className="size-4" />
              {cvLabel}
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
