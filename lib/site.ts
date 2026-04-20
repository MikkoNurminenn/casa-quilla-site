import type { LocaleCode } from "@/content/site/types";

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://casaquilla.example";
}

export function createLocaleHref(locale: LocaleCode, path = "") {
  const normalizedPath = path === "/" ? "" : path;
  return `/${locale}${normalizedPath}`;
}

export function createAbsoluteUrl(path: string) {
  return new URL(path, getBaseUrl()).toString();
}
