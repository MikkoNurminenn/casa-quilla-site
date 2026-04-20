"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  type AnalyticsEventName,
  type AnalyticsPayload,
  trackEvent,
} from "@/lib/analytics";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  eventName: AnalyticsEventName;
  payload: AnalyticsPayload;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  newTab?: boolean;
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const variantClasses: Record<NonNullable<CtaLinkProps["variant"]>, string> = {
  primary:
    "bg-clay border border-clay text-white hover:bg-clay-deep hover:text-white visited:text-white shadow-soft",
  secondary:
    "border border-ink/15 bg-cream/60 text-ink hover:bg-cream backdrop-blur-sm",
  ghost: "text-ink hover:text-clay",
};

const sharedClasses =
  "inline-flex w-full items-center justify-center gap-3 rounded-full px-5 py-3 text-center text-[0.78rem] font-semibold tracking-[0.14em] uppercase transition duration-300 sm:w-auto sm:px-6 sm:text-sm sm:tracking-[0.08em]";

export function CtaLink({
  href,
  children,
  eventName,
  payload,
  variant = "primary",
  className,
  newTab,
}: CtaLinkProps) {
  const external = href.startsWith("http");
  const classes = joinClasses(sharedClasses, variantClasses[variant], className);

  const handleClick = () => {
    trackEvent(eventName, payload);
  };

  if (external) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer noopener" : undefined}
        className={classes}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {children}
    </Link>
  );
}
