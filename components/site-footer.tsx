import Link from "next/link";
import type { LocaleSiteContent } from "@/content/site/types";
import { createLocaleHref } from "@/lib/site";

type SiteFooterProps = {
  content: LocaleSiteContent;
};

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="section-divider mt-20 bg-ink px-4 pb-36 pt-12 text-cream sm:mt-24 sm:px-8 sm:pb-28 sm:pt-14 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-serif text-[2.4rem] sm:text-4xl">{content.brand.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-cream/72">
            {content.footer.note}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-cream/52">
            {content.footer.legal}
          </p>
        </div>

        <div className="grid gap-3 text-sm text-cream/74">
          <Link href={createLocaleHref(content.locale)}>
            {content.navigation.home}
          </Link>
          <Link href={createLocaleHref(content.locale, "/stay")}>
            {content.navigation.stay}
          </Link>
          <Link href={createLocaleHref(content.locale, "/massage")}>
            {content.navigation.massage}
          </Link>
          <Link href={createLocaleHref(content.locale, "/contact")}>
            {content.navigation.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
