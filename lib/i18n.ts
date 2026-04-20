import type { LocaleCode } from "@/content/site/types";

export const locales = ["en", "es"] as const satisfies readonly LocaleCode[];

export function isLocale(value: string): value is LocaleCode {
  return locales.includes(value as LocaleCode);
}

export function getAlternateLocale(locale: LocaleCode): LocaleCode {
  return locale === "en" ? "es" : "en";
}
