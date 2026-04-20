import type { Metadata } from "next";
import type { LocaleCode, LocaleSiteContent } from "@/content/site/types";
import { createAbsoluteUrl, createLocaleHref } from "@/lib/site";

type MetadataArgs = {
  content: LocaleSiteContent;
  title: string;
  description: string;
  path?: string;
};

export function buildPageMetadata({
  content,
  title,
  description,
  path = "",
}: MetadataArgs): Metadata {
  const localeRoot = createLocaleHref(content.locale);
  const currentPath = createLocaleHref(content.locale, path);
  const alternateLocale = content.locale === "en" ? "es" : "en";
  const alternatePath = createLocaleHref(alternateLocale as LocaleCode, path);

  return {
    title,
    description,
    alternates: {
      canonical: createAbsoluteUrl(currentPath),
      languages: {
        en: createAbsoluteUrl(path ? `/en${path}` : "/en"),
        es: createAbsoluteUrl(path ? `/es${path}` : "/es"),
      },
    },
    openGraph: {
      title,
      description,
      url: createAbsoluteUrl(currentPath),
      locale: content.locale,
      images: [createAbsoluteUrl(`${localeRoot}/opengraph-image`)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [createAbsoluteUrl(`${localeRoot}/opengraph-image`)],
    },
    other: {
      "x-alternate-locale": alternatePath,
    },
  };
}
