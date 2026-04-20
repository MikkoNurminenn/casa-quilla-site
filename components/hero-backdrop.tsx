"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HeroBackdropProps = {
  src: string;
  alt: string;
};

export function HeroBackdrop({ src, alt }: HeroBackdropProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const accentY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={
          prefersReducedMotion
            ? undefined
            : {
                y,
                scale,
              }
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.32),rgba(10,10,10,0.52)_38%,rgba(24,16,12,0.74)_100%)]" />
      <motion.div
        className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
        style={prefersReducedMotion ? undefined : { y: accentY }}
      />
    </div>
  );
}
