import { getSiteContent } from "@/content/site";
import type { LocaleCode } from "@/content/site/types";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function getLocaleContentOrThrow(locale: string) {
  if (!isLocale(locale)) {
    notFound();
  }

  return getSiteContent(locale as LocaleCode);
}
