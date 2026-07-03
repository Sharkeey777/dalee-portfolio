"use client";

import { useEffect, useRef, useState } from "react";

type CountUpValueProps = {
  value: string;
};

function parseValue(value: string) {
  const number = Number.parseInt(value.replace(/[^\d]/g, ""), 10);
  const suffix = value.replace(/[\d\s]/g, "");

  return {
    number: Number.isNaN(number) ? 0 : number,
    suffix,
  };
}

export function CountUpValue({ value }: CountUpValueProps) {
  const { number, suffix } = parseValue(value);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let rafId = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const startedAt = performance.now();
        const duration = 1200;

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setDisplayValue(Math.round(number * eased));

          if (progress < 1) {
            rafId = window.requestAnimationFrame(tick);
          }
        };

        rafId = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [number]);

  return (
    <p
      ref={ref}
      className="text-[3rem] leading-none font-medium tracking-[-0.06em] text-[var(--color-foreground)]"
    >
      {displayValue}
      {suffix}
    </p>
  );
}
