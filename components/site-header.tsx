import Link from "next/link";
import type { LocaleSiteContent } from "@/content/site/types";
import { createLocaleHref } from "@/lib/site";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { MobileMenu } from "@/components/mobile-menu";

type SiteHeaderProps = {
  content: LocaleSiteContent;
};

export function SiteHeader({ content }: SiteHeaderProps) {
  const navItems = [
    { href: createLocaleHref(content.locale), label: content.navigation.home },
    {
      href: createLocaleHref(content.locale, "/stay"),
      label: content.navigation.stay,
    },
    {
      href: createLocaleHref(content.locale, "/massage"),
      label: content.navigation.massage,
    },
    {
      href: createLocaleHref(content.locale, "/contact"),
      label: content.navigation.contact,
    },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-8 sm:py-5 lg:px-10">
        <div className="relative flex items-center justify-between gap-3 rounded-[1.55rem] border border-white/45 bg-[rgba(252,247,239,0.82)] px-3 py-3 text-ink backdrop-blur-2xl sm:gap-6 sm:rounded-[2rem] sm:px-6">
          <Link
            href={createLocaleHref(content.locale)}
            className="min-w-0 flex-1 pr-2 text-ink"
          >
            <span className="flex w-fit max-w-full flex-col">
              <span className="block truncate font-serif text-[2.8rem] leading-[0.9] tracking-[0.035em] sm:text-4xl sm:tracking-[0.04em]">
                {content.brand.name}
              </span>
              <span className="mt-1.5 block whitespace-nowrap pl-[0.16rem] text-[0.6rem] font-semibold uppercase leading-none tracking-[0.18em] text-ink-soft sm:mt-2 sm:pl-[0.2rem] sm:text-[0.72rem] sm:tracking-[0.24em]">
                {content.brand.label}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium text-ink-soft lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href={createLocaleHref(content.locale, "/stay")}
              aria-label={content.navigation.bookStay}
              className="hidden min-w-[10.5rem] items-center justify-center rounded-full bg-ink px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#fcf7ef] transition hover:bg-ink/88 hover:text-[#fcf7ef] visited:text-[#fcf7ef] md:inline-flex"
            >
              <span className="text-[#fcf7ef]">{content.navigation.bookStay}</span>
            </Link>
            <LocaleSwitcher locale={content.locale} />
            <MobileMenu
              locale={content.locale}
              items={navItems}
              bookStayHref={createLocaleHref(content.locale, "/stay")}
              bookStayLabel={content.navigation.bookStay}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
