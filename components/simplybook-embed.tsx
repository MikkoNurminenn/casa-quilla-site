import type { LocaleSiteContent } from "@/content/site/types";
import {
  getBookingProviderConfig,
  getMassageBookingUrl,
  getSimplybookEmbedUrl,
} from "@/lib/booking/config";
import { CtaLink } from "@/components/cta-link";

type SimplybookEmbedProps = {
  content: LocaleSiteContent;
};

export function SimplybookEmbed({ content }: SimplybookEmbedProps) {
  const config = getBookingProviderConfig("simplybook");

  if (!config.ready) {
    return (
      <div className="rounded-[2rem] border border-line bg-cream p-8 shadow-soft">
        <p className="eyebrow text-clay">SimplyBook widget placeholder</p>
        <h3 className="mt-4 font-serif text-4xl text-ink">
          Connect the live booking URL to unlock inline scheduling.
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-8 text-ink-soft">
          Add <code className="rounded bg-canvas px-2 py-1">NEXT_PUBLIC_SIMPLYBOOK_WIDGET_URL</code>
          {" "}to replace this placeholder with the real inline calendar and deposit-ready
          massage flow.
        </p>
        <div className="mt-8">
          <CtaLink
            href={getMassageBookingUrl(content.locale, "massage-placeholder")}
            newTab
            eventName="booking_engine_click"
            payload={{
              locale: content.locale,
              placement: "massage-placeholder",
              provider: "simplybook",
            }}
            variant="secondary"
          >
            {content.navigation.bookMassage}
          </CtaLink>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-cream shadow-soft">
      <iframe
        src={getSimplybookEmbedUrl(content.locale)}
        title={`${content.brand.name} massage booking`}
        className="h-[760px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
