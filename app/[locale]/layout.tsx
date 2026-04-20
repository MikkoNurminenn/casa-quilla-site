import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBookBar } from "@/components/sticky-book-bar";
import { getLocaleContentOrThrow } from "@/lib/content";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getLocaleContentOrThrow(locale);

  return (
    <div lang={content.locale} className="site-shell min-h-screen">
      <SiteHeader content={content} />
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">{children}</div>
        <SiteFooter content={content} />
      </div>
      <StickyBookBar content={content} />
    </div>
  );
}
