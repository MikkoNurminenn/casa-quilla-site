"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternateLocale } from "@/lib/i18n";
import type { LocaleCode } from "@/content/site/types";

type LocaleSwitcherProps = {
  locale: LocaleCode;
};

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const alternateLocale = getAlternateLocale(locale);
  const segments = pathname.split("/").filter(Boolean);
  const alternatePath = `/${[alternateLocale, ...segments.slice(1)].join("/")}`;
  const currentLabel = locale === "en" ? "EN" : "ES";
  const alternateLabel = alternateLocale === "en" ? "EN" : "ES";

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-ink/10 bg-canvas-soft/90 p-[0.2rem] text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink shadow-soft sm:p-1 sm:text-xs sm:tracking-[0.18em]">
      <span className="rounded-full bg-cream px-2.5 py-1.5 sm:px-3 sm:py-2">
        {currentLabel}
      </span>
      <Link
        href={alternatePath}
        className="rounded-full px-2.5 py-1.5 text-ink-soft transition hover:bg-cream hover:text-ink sm:px-3 sm:py-2"
      >
        {alternateLabel}
      </Link>
    </div>
  );
}
