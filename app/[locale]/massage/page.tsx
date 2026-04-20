import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { SchemaScript } from "@/components/schema-script";
import { SectionHeading } from "@/components/section-heading";
import { SimplybookEmbed } from "@/components/simplybook-embed";
import { getLocaleContentOrThrow } from "@/lib/content";
import { getMassageBookingUrl } from "@/lib/booking/config";
import { buildPageMetadata } from "@/lib/metadata";
import { buildMassageSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getLocaleContentOrThrow(locale);

  return buildPageMetadata({
    content,
    title: `${content.navigation.massage} | ${content.brand.name}`,
    description: content.massage.hero.description,
    path: "/massage",
  });
}

export default async function MassagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getLocaleContentOrThrow(locale);

  return (
    <main className="px-4 pb-10 pt-28 sm:px-8 sm:pt-36 lg:px-10">
      <SchemaScript schema={buildMassageSchema(content)} />
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,0.9fr)] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow={content.massage.hero.eyebrow}
              title={content.massage.hero.title}
              description={content.massage.hero.description}
            />
            <p className="mt-8 eyebrow text-clay">
              {content.massage.hero.bookingLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[1.9rem] shadow-soft sm:rounded-[2.3rem]">
              <Image
                src="/media/massage.jpg"
                alt="Massage towels and candles suggesting calm recovery"
                width={1400}
                height={1000}
                className="h-[360px] w-full object-cover sm:h-[480px]"
              />
            </div>
          </Reveal>
        </section>

        <section className="section-divider mt-16 py-16 sm:mt-20 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.massage.eyebrow}
              title={content.massage.servicesTitle}
              description={content.massage.servicesIntro}
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:mt-14">
            {content.massages.map((massage, index) => (
              <Reveal key={massage.id} delay={0.05 * index}>
                <article className="section-divider grid gap-6 pt-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1fr)_auto] lg:items-start">
                  <div>
                    <h2 className="font-serif text-[2.8rem] text-ink sm:text-5xl">
                      {massage.name}
                    </h2>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-clay">
                      {massage.duration} · {massage.price}
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <p className="max-w-2xl text-base leading-8 text-ink-soft">
                      {massage.description}
                    </p>
                    {massage.note ? (
                      <p className="text-sm uppercase tracking-[0.18em] text-clay">
                        {massage.note}
                      </p>
                    ) : null}
                  </div>
                  <div className="lg:justify-self-end">
                    <CtaLink
                      href={getMassageBookingUrl(
                        content.locale,
                        `massage-${massage.id}`,
                        massage.id,
                      )}
                      newTab
                      eventName="booking_engine_click"
                      payload={{
                        locale: content.locale,
                        placement: `massage-${massage.id}`,
                        provider: "simplybook",
                      }}
                    >
                      {content.navigation.bookMassage}
                    </CtaLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-divider grid gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.directBooking.eyebrow}
              title={content.massage.ritualTitle}
            />
          </Reveal>
          <div className="grid gap-5">
            {content.massage.ritualSteps.map((step, index) => (
              <Reveal key={step} delay={0.04 * index}>
                <article className="section-divider grid gap-3 pt-5 md:grid-cols-[auto_1fr]">
                  <span className="font-serif text-4xl text-clay">
                    {`0${index + 1}`}
                  </span>
                  <p className="text-base leading-8 text-ink-soft">{step}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-divider grid gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.testimonials.eyebrow}
              title={content.massage.trustTitle}
            />
          </Reveal>
          <div className="grid gap-5">
            {content.massage.trustPoints.map((item, index) => (
              <Reveal key={item} delay={0.04 * index}>
                <p className="border-t border-line pt-5 text-base leading-8 text-ink-soft">
                  {item}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.16}>
              <p className="rounded-[1.8rem] border border-line bg-cream px-6 py-5 text-sm leading-7 text-ink-soft shadow-soft">
                {content.massage.depositNote}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-divider py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.massage.eyebrow}
              title={content.massage.widgetTitle}
              description={content.massage.widgetIntro}
            />
          </Reveal>
          <div className="mt-12 sm:mt-14">
            <SimplybookEmbed content={content} />
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <Reveal>
            <div className="rounded-[2rem] bg-ink px-6 py-10 text-cream shadow-soft sm:rounded-[2.2rem] sm:px-10 sm:py-12">
              <p className="eyebrow text-gold">{content.brand.location}</p>
              <h2 className="mt-5 max-w-3xl font-serif text-[2.8rem] leading-[0.96] sm:text-5xl">
                {content.massage.finalCta.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-cream/78 sm:text-lg sm:leading-8">
                {content.massage.finalCta.description}
              </p>
              <div className="mt-8">
                <CtaLink
                  href={getMassageBookingUrl(content.locale, "massage-final")}
                  newTab
                  eventName="massage_cta_click"
                  payload={{
                    locale: content.locale,
                    placement: "massage-final",
                  }}
                >
                  {content.massage.finalCta.cta}
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
