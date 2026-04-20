import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { SchemaScript } from "@/components/schema-script";
import { SectionHeading } from "@/components/section-heading";
import { getLocaleContentOrThrow } from "@/lib/content";
import { getCloudbedsBookingUrl } from "@/lib/booking/config";
import { buildPageMetadata } from "@/lib/metadata";
import { buildLodgingSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getLocaleContentOrThrow(locale);

  return buildPageMetadata({
    content,
    title: `${content.navigation.stay} | ${content.brand.name}`,
    description: content.stay.hero.description,
    path: "/stay",
  });
}

export default async function StayPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getLocaleContentOrThrow(locale);
  const generalBookingUrl = getCloudbedsBookingUrl(content.locale, "stay-page");

  return (
    <main className="px-4 pb-10 pt-28 sm:px-8 sm:pt-36 lg:px-10">
      <SchemaScript schema={buildLodgingSchema(content)} />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <section className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(215,181,122,0.25),transparent_36%),linear-gradient(135deg,#1b1510,#2d2119_42%,#463022)] px-6 py-10 text-cream shadow-soft sm:rounded-[2.4rem] sm:px-10 sm:py-14 lg:px-14 lg:py-18">
            <p className="eyebrow text-gold">{content.stay.hero.eyebrow}</p>
            <div className="mt-6 grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)]">
              <div>
                <h1 className="max-w-4xl font-serif text-[3rem] leading-[0.95] sm:text-6xl">
                  {content.stay.hero.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-cream/82 sm:text-lg sm:leading-8">
                  {content.stay.hero.description}
                </p>
              </div>
              <div className="border-t border-white/14 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <p className="eyebrow text-gold">
                  {content.stay.hero.availabilityLabel}
                </p>
                <p className="mt-4 text-sm leading-7 text-cream/76">
                  Cloudbeds handles live inventory, deposit logic, and OTA sync so
                  this page can stay focused on conversion rather than custom PMS work.
                </p>
                <div className="mt-6">
                  <CtaLink
                    href={generalBookingUrl}
                    newTab
                    eventName="stay_cta_click"
                    payload={{
                      locale: content.locale,
                      placement: "stay-hero",
                    }}
                  >
                    {content.navigation.bookStay}
                  </CtaLink>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <section className="section-divider mt-16 grid gap-10 py-16 sm:mt-20 sm:gap-12 sm:py-20 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.directBooking.eyebrow}
              title={content.stay.directBenefitsTitle}
            />
          </Reveal>
          <div className="grid gap-6">
            {content.stay.directBenefits.map((item, index) => (
              <Reveal key={item} delay={0.05 * index}>
                <article className="section-divider pt-6">
                  <p className="text-base leading-8 text-ink-soft">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-divider py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.rooms.eyebrow}
              title={content.stay.roomTypesTitle}
              description={content.stay.roomTypesIntro}
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:mt-14">
            {content.rooms.map((room, index) => (
              <Reveal key={room.id} delay={0.05 * index}>
                <article className="section-divider grid gap-8 pt-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)_auto] lg:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      <h2 className="font-serif text-[2.8rem] text-ink sm:text-5xl">
                        {room.name}
                      </h2>
                      {room.badge ? (
                        <span className="rounded-full border border-clay/18 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-clay">
                          {room.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-clay">
                      {room.rate} · {room.capacity}
                    </p>
                    <p className="mt-5 max-w-xl text-base leading-8 text-ink-soft">
                      {room.summary}
                    </p>
                  </div>
                  <ul className="grid gap-3 text-sm leading-7 text-ink-soft">
                    {room.features.map((feature) => (
                      <li key={feature} className="border-t border-line pt-3">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="lg:justify-self-end">
                    <CtaLink
                      href={getCloudbedsBookingUrl(content.locale, `room-${room.id}`, room.id)}
                      newTab
                      eventName="booking_engine_click"
                      payload={{
                        locale: content.locale,
                        placement: `room-${room.id}`,
                        provider: "cloudbeds",
                      }}
                    >
                      {content.navigation.bookStay}
                    </CtaLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-divider grid gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.localStory.eyebrow}
              title={content.stay.amenitiesTitle}
            />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.stay.amenities.map((item, index) => (
              <Reveal key={item} delay={0.03 * index}>
                <p className="border-t border-line pt-4 text-sm leading-7 text-ink-soft">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-divider grid gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.faq.eyebrow}
              title={content.stay.faqTitle}
              description={content.stay.faqIntro}
            />
          </Reveal>
          <div className="grid gap-4">
            {content.faq.map((item, index) => (
              <Reveal key={item.question} delay={0.05 * index}>
                <article className="section-divider pt-5">
                  <h3 className="font-serif text-[2rem] text-ink sm:text-3xl">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-ink-soft">
                    {item.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <Reveal>
            <div className="rounded-[2rem] border border-line bg-cream px-6 py-10 shadow-soft sm:rounded-[2.2rem] sm:px-10 sm:py-12">
              <p className="eyebrow text-clay">{content.brand.location}</p>
              <h2 className="mt-5 max-w-3xl font-serif text-[2.8rem] leading-[0.96] text-ink sm:text-5xl">
                {content.stay.finalCta.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                {content.stay.finalCta.description}
              </p>
              <div className="mt-8">
                <CtaLink
                  href={generalBookingUrl}
                  newTab
                  eventName="stay_cta_click"
                  payload={{
                    locale: content.locale,
                    placement: "stay-final",
                  }}
                >
                  {content.stay.finalCta.cta}
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
