import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/cta-link";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { Reveal } from "@/components/reveal";
import { SchemaScript } from "@/components/schema-script";
import { SectionHeading } from "@/components/section-heading";
import { getLocaleContentOrThrow } from "@/lib/content";
import { getCloudbedsBookingUrl, getMassageBookingUrl } from "@/lib/booking/config";
import { buildPageMetadata } from "@/lib/metadata";
import { createLocaleHref } from "@/lib/site";
import { buildWebsiteSchema } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getLocaleContentOrThrow(locale);

  return buildPageMetadata({
    content,
    title: content.meta.title,
    description: content.meta.description,
  });
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getLocaleContentOrThrow(locale);
  const stayBookingUrl = getCloudbedsBookingUrl(content.locale, "home-hero");
  const massageBookingUrl = getMassageBookingUrl(content.locale, "home-hero");

  return (
    <main>
      <SchemaScript schema={buildWebsiteSchema(content)} />

      <section className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-28 pt-32 sm:px-8 sm:items-end sm:pb-18 sm:pt-32 lg:px-10 lg:pb-20">
        <HeroBackdrop
          src="/media/hero.jpg"
          alt="Moody landscape road through green hills for Casa Quilla"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 sm:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.62fr)] lg:items-end">
          <Reveal>
            <div className="max-w-3xl text-cream">
              <p className="eyebrow text-gold">{content.home.hero.eyebrow}</p>
              <p className="mt-4 font-serif text-[3.35rem] leading-[0.84] tracking-[0.035em] text-cream sm:mt-5 sm:text-[5.6rem] sm:tracking-[0.04em] lg:text-[7rem]">
                {content.brand.name}
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-[3.15rem] leading-[0.92] text-balance text-cream sm:mt-6 sm:text-6xl lg:text-7xl">
                {content.home.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-cream/82 sm:mt-6 sm:text-xl sm:leading-8">
                {content.home.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CtaLink
                  href={stayBookingUrl}
                  newTab
                  eventName="hero_cta_click"
                  payload={{
                    locale: content.locale,
                    placement: "hero",
                    target: "stay",
                  }}
                >
                  {content.home.hero.primaryCta}
                </CtaLink>
                <CtaLink
                  href={createLocaleHref(content.locale, "/massage")}
                  eventName="hero_cta_click"
                  payload={{
                    locale: content.locale,
                    placement: "hero",
                    target: "massage-page",
                  }}
                  variant="secondary"
                >
                  {content.home.hero.secondaryCta}
                </CtaLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-4 border-t border-white/18 pt-6 text-cream/84 lg:gap-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              <p className="eyebrow text-gold">{content.brand.announcement}</p>
              <p className="max-w-md font-serif text-[2rem] leading-tight text-cream sm:text-3xl">
                {content.brand.tagline}
              </p>
              <ul className="grid gap-3 sm:gap-4">
                {content.home.hero.proof.map((item) => (
                  <li
                    key={item}
                    className="border-t border-white/15 pt-3 text-sm leading-6 sm:pt-4 sm:leading-7"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-divider px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[0.78fr_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.directBooking.eyebrow}
              title={content.home.directBooking.title}
              description={content.home.directBooking.intro}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-8">
              {content.home.directBooking.benefits.map((benefit, index) => (
                <article
                  key={benefit}
                  className="section-divider grid gap-3 pt-8 first:border-t-0 first:pt-0 md:grid-cols-[auto_1fr]"
                >
                  <span className="font-serif text-4xl text-clay">
                    {`0${index + 1}`}
                  </span>
                  <p className="max-w-2xl text-base leading-8 text-ink-soft">
                    {benefit}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-divider px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.rooms.eyebrow}
              title={content.home.rooms.title}
              description={content.home.rooms.intro}
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:mt-14 lg:grid-cols-3">
            {content.rooms.map((room, index) => (
              <Reveal key={room.id} delay={0.05 * index}>
                <article className="section-divider flex h-full flex-col gap-5 pt-7 sm:gap-6 sm:pt-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-serif text-[2.2rem] text-ink sm:text-4xl">
                      {room.name}
                    </h3>
                    {room.badge ? (
                      <span className="rounded-full border border-clay/20 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-clay">
                        {room.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-clay">
                    {room.rate} · {room.capacity}
                  </p>
                  <p className="max-w-sm text-base leading-8 text-ink-soft">
                    {room.summary}
                  </p>
                  <ul className="grid gap-3 text-sm leading-7 text-ink-soft">
                    {room.features.map((feature) => (
                      <li key={feature} className="border-t border-line pt-3">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-12">
            <CtaLink
              href={createLocaleHref(content.locale, "/stay")}
              eventName="stay_cta_click"
              payload={{
                locale: content.locale,
                placement: "home-rooms",
              }}
              variant="secondary"
            >
              {content.home.rooms.cta}
            </CtaLink>
          </Reveal>
        </div>
      </section>

      <section className="section-divider px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,0.84fr)] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.7rem] bg-ink shadow-soft sm:rounded-[2rem]">
              <Image
                src="/media/massage.jpg"
                alt="Soft towels and candles evoking restorative massage"
                width={1400}
                height={1000}
                className="h-full min-h-[320px] w-full object-cover sm:min-h-[420px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,20,15,0.05),rgba(25,20,15,0.52))]" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow={content.home.massage.eyebrow}
              title={content.home.massage.title}
              description={content.home.massage.intro}
            />
            <ul className="mt-8 grid gap-3 text-base leading-8 text-ink-soft">
              {content.home.massage.highlights.map((item) => (
                <li key={item} className="border-t border-line pt-4">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink
                href={createLocaleHref(content.locale, "/massage")}
                eventName="massage_cta_click"
                payload={{
                  locale: content.locale,
                  placement: "home-massage",
                }}
              >
                {content.home.massage.cta}
              </CtaLink>
              <CtaLink
                href={massageBookingUrl}
                newTab
                eventName="booking_engine_click"
                payload={{
                  locale: content.locale,
                  placement: "home-massage-inline",
                  provider: "simplybook",
                }}
                variant="secondary"
              >
                {content.navigation.bookMassage}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-divider px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.localStory.eyebrow}
              title={content.home.localStory.title}
              description={content.home.localStory.intro}
              eyebrowClassName="text-moss"
            />
          </Reveal>
          <div className="grid gap-8 sm:gap-10">
            <Reveal delay={0.06}>
              <div className="overflow-hidden rounded-[1.7rem] shadow-soft sm:rounded-[2rem]">
                <Image
                  src="/media/hero.jpg"
                  alt="A winding road through green hills suggesting a slower travel rhythm"
                  width={1600}
                  height={1200}
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-3">
                {content.home.localStory.moments.map((moment) => (
                  <p
                    key={moment}
                    className="border-t border-line pt-4 text-sm leading-7 text-ink-soft"
                  >
                    {moment}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-divider px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.testimonials.eyebrow}
              title={content.home.testimonials.title}
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:mt-14 lg:grid-cols-3">
            {content.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={0.05 * index}>
                <blockquote className="section-divider flex h-full flex-col gap-5 pt-7 sm:gap-6 sm:pt-8">
                  <p className="font-serif text-[2rem] leading-tight text-ink sm:text-3xl">
                    “{testimonial.quote}”
                  </p>
                  <footer className="text-sm uppercase tracking-[0.18em] text-clay">
                    {testimonial.author} · {testimonial.context}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.faq.eyebrow}
              title={content.home.faq.title}
              description={content.home.faq.intro}
            />
          </Reveal>
          <div className="grid gap-4">
            {content.faq.map((item, index) => (
              <Reveal key={item.question} delay={0.05 * index}>
                <article className="section-divider pt-5">
                  <h3 className="font-serif text-[2rem] text-ink sm:text-3xl">
                    {item.question}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-ink-soft">
                    {item.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-10 text-cream shadow-soft sm:rounded-[2.4rem] sm:px-12 sm:py-14 lg:py-16">
            <p className="eyebrow text-gold">{content.brand.location}</p>
            <h2 className="mt-5 max-w-4xl font-serif text-[2.9rem] leading-[0.95] sm:text-6xl">
              {content.home.finalCta.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-cream/78 sm:text-lg sm:leading-8">
              {content.home.finalCta.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink
                href={stayBookingUrl}
                newTab
                eventName="booking_engine_click"
                payload={{
                  locale: content.locale,
                  placement: "home-final",
                  provider: "cloudbeds",
                }}
              >
                {content.home.finalCta.primaryCta}
              </CtaLink>
              <CtaLink
                href={createLocaleHref(content.locale, "/massage")}
                eventName="massage_cta_click"
                payload={{
                  locale: content.locale,
                  placement: "home-final",
                }}
                variant="secondary"
                className="border-white/20 bg-white/10 text-cream hover:bg-white/14"
              >
                {content.home.finalCta.secondaryCta}
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
