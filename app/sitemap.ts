import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { createAbsoluteUrl, createLocaleHref } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/stay", "/massage", "/contact"];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: createAbsoluteUrl(createLocaleHref(locale, path)),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8,
    })),
  );
}
