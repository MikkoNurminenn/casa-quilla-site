"use client";

import Link from "next/link";
import { useState } from "react";
import type { LocaleCode } from "@/content/site/types";

type MobileMenuItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  locale: LocaleCode;
  items: MobileMenuItem[];
  bookStayHref: string;
  bookStayLabel: string;
};

const labels = {
  en: {
    open: "Open navigation menu",
    close: "Close navigation menu",
  },
  es: {
    open: "Abrir menu de navegacion",
    close: "Cerrar menu de navegacion",
  },
} as const;

export function MobileMenu({
  locale,
  items,
  bookStayHref,
  bookStayLabel,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const copy = labels[locale] ?? labels.en;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-site-menu"
        aria-label={isOpen ? copy.close : copy.open}
        onClick={() => setIsOpen((value) => !value)}
        className="relative inline-flex size-11 items-center justify-center rounded-full border border-ink/10 bg-cream/88 text-ink shadow-soft transition hover:bg-white"
      >
        <span className="sr-only">{isOpen ? copy.close : copy.open}</span>
        <span
          className={`absolute h-[1.5px] w-4 rounded-full bg-current transition ${
            isOpen ? "rotate-45" : "-translate-y-[5px]"
          }`}
        />
        <span
          className={`absolute h-[1.5px] w-4 rounded-full bg-current transition ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute h-[1.5px] w-4 rounded-full bg-current transition ${
            isOpen ? "-rotate-45" : "translate-y-[5px]"
          }`}
        />
      </button>

      {isOpen ? (
        <div
          id="mobile-site-menu"
          className="absolute inset-x-0 top-[calc(100%+0.75rem)] z-50 rounded-[1.7rem] border border-white/45 bg-[rgba(252,247,239,0.94)] p-4 text-ink shadow-soft backdrop-blur-2xl"
        >
          <nav className="grid gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[1.15rem] px-4 py-3 text-[0.92rem] font-semibold tracking-[0.08em] text-ink-soft transition hover:bg-white hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 border-t border-ink/8 pt-4">
            <Link
              href={bookStayHref}
              onClick={() => setIsOpen(false)}
              style={{ color: "#fcf7ef" }}
              className="inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-center text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#fcf7ef] transition hover:bg-ink/88 hover:text-[#fcf7ef] visited:text-[#fcf7ef]"
            >
              <span style={{ color: "#fcf7ef" }}>{bookStayLabel}</span>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
