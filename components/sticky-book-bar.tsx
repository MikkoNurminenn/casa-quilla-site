import type { LocaleSiteContent } from "@/content/site/types";
import { getCloudbedsBookingUrl } from "@/lib/booking/config";
import { CtaLink } from "@/components/cta-link";

type StickyBookBarProps = {
  content: LocaleSiteContent;
};

export function StickyBookBar({ content }: StickyBookBarProps) {
  const bookingHref = getCloudbedsBookingUrl(content.locale, "sticky-book-bar");

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-50 px-3 sm:bottom-4 sm:px-4">
      <div className="pointer-events-auto mx-auto flex w-full max-w-5xl flex-col items-start gap-3 rounded-[1.6rem] border border-ink/8 bg-cream/88 px-4 py-4 shadow-soft backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-[30px] sm:px-5 sm:py-3">
        <div className="min-w-0">
          <p className="eyebrow text-[0.62rem] text-clay">
            {content.brand.announcement}
          </p>
          <p className="mt-1 text-[0.92rem] leading-6 text-ink-soft sm:text-sm">
            {content.navigation.bookStay} · Cloudbeds · OTA sync live
          </p>
        </div>
        <CtaLink
          href={bookingHref}
          newTab
          eventName="booking_engine_click"
          payload={{
            locale: content.locale,
            placement: "sticky-bar",
            provider: "cloudbeds",
          }}
          className="sm:shrink-0"
        >
          {content.navigation.bookStay}
        </CtaLink>
      </div>
    </div>
  );
}
