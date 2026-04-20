"use client";

import { useState } from "react";

type DemoBadgeProps = {
  locale?: string;
};

const labels = {
  en: {
    badge: "Demo site preview",
    close: "Dismiss demo badge",
  },
  es: {
    badge: "Vista previa del sitio demo",
    close: "Cerrar insignia de demo",
  },
} as const;

export function DemoBadge({ locale = "en" }: DemoBadgeProps) {
  const [isVisible, setIsVisible] = useState(true);

  const copy = labels[locale as keyof typeof labels] ?? labels.en;

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed right-4 top-[6.2rem] z-40 sm:left-6 sm:right-auto sm:top-6">
      <div
        aria-label={copy.badge}
        role="note"
        className="pointer-events-auto relative flex size-[4rem] items-center justify-center rounded-full border border-clay/18 bg-[rgba(252,247,239,0.84)] text-ink shadow-soft backdrop-blur-xl sm:size-[5.5rem]"
      >
        <button
          type="button"
          aria-label={copy.close}
          onClick={handleDismiss}
          className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border border-ink/12 bg-cream text-[0.72rem] font-semibold text-ink shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-clay/35 sm:size-6 sm:text-[0.78rem]"
        >
          <span aria-hidden="true">x</span>
        </button>
        <div className="absolute inset-[0.32rem] rounded-full border border-clay/28" />
        <div className="absolute -inset-1 rounded-full border border-clay/12" />
        <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-clay sm:text-[0.74rem] sm:tracking-[0.34em]">
          Demo
        </span>
      </div>
    </div>
  );
}
