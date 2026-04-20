import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getLocaleContentOrThrow } from "@/lib/content";
import { getCloudbedsBookingUrl, getMassageBookingUrl } from "@/lib/booking/config";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getLocaleContentOrThrow(locale);

  return buildPageMetadata({
    content,
    title: `${content.navigation.contact} | ${content.brand.name}`,
    description: content.contact.hero.description,
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getLocaleContentOrThrow(locale);

  return (
    <main className="px-4 pb-10 pt-40 sm:px-8 sm:pt-48 lg:px-10 lg:pt-52">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={content.contact.hero.eyebrow}
              title={content.contact.hero.title}
              description={content.contact.hero.description}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[1.8rem] border border-line bg-cream p-6 shadow-soft sm:rounded-[2rem] sm:p-8">
              <p className="eyebrow text-clay">{content.contact.contactTitle}</p>
              <div className="mt-6 grid gap-4">
                {content.contact.contactMethods.map((item) => (
                  <div key={item.label} className="border-t border-line pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base leading-7 text-ink-soft">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section-divider mt-16 grid gap-10 py-16 sm:mt-20 sm:gap-12 sm:py-20 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.localStory.eyebrow}
              title={content.contact.arrivalTitle}
              eyebrowClassName="text-moss"
            />
          </Reveal>
          <div className="grid gap-5">
            {content.contact.arrivalSteps.map((step, index) => (
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

        <section className="section-divider grid gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
          <Reveal>
            <SectionHeading
              eyebrow={content.home.faq.eyebrow}
              title={content.contact.policyTitle}
            />
          </Reveal>
          <div className="grid gap-4">
            {content.contact.policyPoints.map((point, index) => (
              <Reveal key={point} delay={0.04 * index}>
                <p className="border-t border-line pt-5 text-base leading-8 text-ink-soft">
                  {point}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <Reveal>
            <div className="rounded-[2rem] bg-ink px-6 py-10 text-cream shadow-soft sm:rounded-[2.2rem] sm:px-10 sm:py-12">
              <p className="eyebrow text-gold">{content.brand.announcement}</p>
              <h2 className="mt-5 max-w-3xl font-serif text-[2.8rem] leading-[0.96] sm:text-5xl">
                {content.home.finalCta.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-cream/78 sm:text-lg sm:leading-8">
                {content.home.finalCta.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CtaLink
                  href={getCloudbedsBookingUrl(content.locale, "contact-final")}
                  newTab
                  eventName="stay_cta_click"
                  payload={{
                    locale: content.locale,
                    placement: "contact-final",
                  }}
                >
                  {content.navigation.bookStay}
                </CtaLink>
                <CtaLink
                  href={getMassageBookingUrl(content.locale, "contact-final")}
                  newTab
                  eventName="massage_cta_click"
                  payload={{
                    locale: content.locale,
                    placement: "contact-final",
                  }}
                  variant="secondary"
                  className="border-white/20 bg-white/10 text-cream hover:bg-white/14"
                >
                  {content.navigation.bookMassage}
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
