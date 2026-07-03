"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { BrandLockup } from "@/components/brand-lockup";
import type { HeroContent, NavItem } from "@/content/site";
import { assetPath } from "@/lib/asset-path";

type HeroSectionProps = {
  navItems: NavItem[];
  hero: HeroContent;
};

export function HeroSection({ navItems, hero }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const overlayY = useTransform(scrollYProgress, [0, 0.22], [0, prefersReducedMotion ? 0 : 44]);
  const heroLines = ["Снимаем.", "Монтируем.", "Двигаем ДАЛЕЕ"];

  return (
    <section className="hero-cinema">
      <video className="hero-cinema-video" autoPlay muted loop playsInline preload="auto" poster={hero.heroPoster ? assetPath(hero.heroPoster) : undefined}>
        <source src={assetPath(hero.heroVideo)} type="video/mp4" />
      </video>

      <div className="hero-cinema-scrim" />

      <motion.div className="hero-cinema-inner" style={{ y: overlayY }}>
        <header className="top-nav top-nav-on-dark">
          <Link href="/" className="shrink-0">
            <BrandLockup />
          </Link>

          <nav className="top-nav-links top-nav-links-light">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-cinema-copy hero-cinema-copy-centered">
          <div className="hero-cinema-heading-stack">
            <p
              className={`hero-script-title ${prefersReducedMotion ? "" : "hero-text-reveal"}`.trim()}
              style={prefersReducedMotion ? undefined : { animationDelay: "0.16s" }}
            >
              {heroLines[0]}
            </p>
            <p
              className={`hero-script-title ${prefersReducedMotion ? "" : "hero-text-reveal"}`.trim()}
              style={prefersReducedMotion ? undefined : { animationDelay: "0.24s" }}
            >
              {heroLines[1]}
            </p>
            <p
              className={`hero-script-title ${prefersReducedMotion ? "" : "hero-text-reveal"}`.trim()}
              style={prefersReducedMotion ? undefined : { animationDelay: "0.32s" }}
            >
              {heroLines[2]}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
