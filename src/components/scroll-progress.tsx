"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 500 : 220,
    damping: prefersReducedMotion ? 80 : 32,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[80] h-px origin-left bg-[var(--color-foreground)]/80"
      style={{ scaleX }}
    />
  );
}
