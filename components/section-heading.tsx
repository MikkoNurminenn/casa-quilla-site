import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow text-clay">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-[2.85rem] leading-[0.95] text-ink sm:mt-5 sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <div className="mt-4 text-[1.02rem] leading-7 text-ink-soft sm:mt-5 sm:text-lg sm:leading-8">
          {description}
        </div>
      ) : null}
    </div>
  );
}
