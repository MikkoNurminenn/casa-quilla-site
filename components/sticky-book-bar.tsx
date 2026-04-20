"use client";

import { useState } from "react";
import type { LocaleSiteContent } from "@/content/site/types";
import { getCloudbedsBookingUrl } from "@/lib/booking/config";
import { CtaLink } from "@/components/cta-link";

type StickyBookBarProps = {
  content: LocaleSiteContent;
};

export function StickyBookBar({ content }: StickyBookBarProps) {
  const [dismissed, setDismissed] = useState(false);
  const bookingHref = getCloudbedsBookingUrl(content.locale, "sticky-book-bar");

  if (dismissed) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-50 px-3 sm:bottom-4 sm:px-4">
      <div className="pointer-events-auto mx-auto flex w-full max-w-5xl flex-col items-start gap-3 rounded-[1.6rem] border border-ink/8 bg-cream/88 px-4 py-4 shadow-soft backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-[30px] sm:px-5 sm:py-3">
        <div className="min-w-0 flex-1">
          <p className="eyebrow text-[0.62rem] text-clay">
            {content.brand.announcement}
          </p>
          <p className="mt-1 text-[0.92rem] leading-6 text-ink-soft sm:text-sm">
            {content.navigation.bookStay} · Cloudbeds · OTA sync live
          </p>
        </div>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <CtaLink
            href={bookingHref}
            newTab
            eventName="booking_engine_click"
            payload={{
              locale: content.locale,
              placement: "sticky-bar",
              provider: "cloudbeds",
            }}
            className="flex-1 sm:flex-none sm:shrink-0"
          >
            {content.navigation.bookStay}
          </CtaLink>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Sulje"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-canvas text-ink-soft transition hover:bg-ink/8"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
