import type { LocaleSiteContent } from "@/content/site/types";
import { createAbsoluteUrl, createLocaleHref } from "@/lib/site";

export function buildWebsiteSchema(content: LocaleSiteContent) {
  const localeRoot = createAbsoluteUrl(createLocaleHref(content.locale));

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: content.brand.name,
    url: localeRoot,
    inLanguage: content.locale,
    description: content.meta.description,
  };
}

export function buildLodgingSchema(content: LocaleSiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: `${content.brand.name} ${content.brand.label}`,
    description: content.stay.hero.description,
    areaServed: "Peru",
    url: createAbsoluteUrl(createLocaleHref(content.locale, "/stay")),
    makesOffer: content.rooms.map((room) => ({
      "@type": "Offer",
      name: room.name,
      description: room.summary,
      priceCurrency: "USD",
      priceSpecification: room.rate,
    })),
  };
}

export function buildMassageSchema(content: LocaleSiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: `${content.brand.name} Massage`,
    description: content.massage.hero.description,
    areaServed: "Peru",
    url: createAbsoluteUrl(createLocaleHref(content.locale, "/massage")),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Massage menu",
      itemListElement: content.massages.map((massage) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: massage.name,
          description: massage.description,
        },
      })),
    },
  };
}
