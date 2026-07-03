"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ClientLogo } from "@/content/site";
import { assetPath } from "@/lib/asset-path";

type LogoMarqueeProps = {
  logos: ClientLogo[];
};

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const logoItems = logos.map((logo) => (
    <div key={logo.slug} className="logo-marquee-item logo-marquee-item-plain">
      <div className="logo-marquee-image">
        <Image
          src={assetPath(logo.image)}
          alt={logo.name}
          fill
          sizes="(max-width: 768px) 160px, 220px"
          priority
          unoptimized
          className={logo.mode === "cover" ? "object-cover" : "object-contain"}
        />
      </div>
      <p>{logo.name}</p>
    </div>
  ));

  return (
    <motion.section
      id="clients"
      className="logo-marquee-section"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="project-title mb-8">С кем мы работаем</h2>

      <div className="logo-marquee-window">
        <div className="logo-marquee-track">
          <div className="logo-marquee-segment">{logoItems}</div>
          <div className="logo-marquee-segment" aria-hidden="true">
            {logoItems}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
