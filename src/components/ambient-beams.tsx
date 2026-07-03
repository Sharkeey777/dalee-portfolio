"use client";

import { motion, useReducedMotion } from "motion/react";

const beamData = [
  { className: "left-[38%] h-[120%] w-24", delay: 0 },
  { className: "left-[54%] h-[118%] w-32", delay: 0.45 },
  { className: "left-[72%] h-[112%] w-20", delay: 0.2 },
];

export function AmbientBeams() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {beamData.map((beam) => (
        <motion.div
          key={beam.className}
          className={`absolute top-[-8%] rounded-full bg-white/[0.05] blur-3xl ${beam.className}`}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -20, 12, 0],
                  opacity: [0.35, 0.5, 0.3, 0.35],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: beam.delay,
                }
          }
        />
      ))}
    </div>
  );
}
