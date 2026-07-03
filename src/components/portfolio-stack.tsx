"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "@phosphor-icons/react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import type { PortfolioItem } from "@/content/site";

type PortfolioStackProps = {
  items: PortfolioItem[];
};

export function PortfolioStack({ items }: PortfolioStackProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.max(0, Math.min(items.length - 1, Math.floor(latest * items.length)));

    if (nextIndex !== activeIndexRef.current) {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
  });

  const overlayY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -56],
  );

  return (
    <section ref={sectionRef} className="mt-10 lg:min-h-[210vh]">
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-5 lg:space-y-10">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`portfolio-step ${index === activeIndex ? "is-active" : ""} lg:min-h-[70vh]`}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                0{index + 1} · {item.category}
              </p>
              <h3 className="mt-5 max-w-[10ch] text-[2.6rem] leading-[0.94] font-medium tracking-[-0.06em] text-[var(--color-foreground)] md:text-[3.5rem]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
                {item.summary}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.2em] text-[var(--color-foreground)]">
                <span>{item.duration}</span>
                <span className="inline-flex items-center gap-2">
                  Смотреть кейс
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="lg:sticky lg:top-24 lg:h-[78vh]">
          <div className="portfolio-stage relative h-full overflow-hidden rounded-[2.5rem] border border-[var(--color-line)] p-3 md:p-4">
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black">
              {items.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    scale: index === activeIndex ? 1 : 1.06,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.74))]" />
                </motion.div>
              ))}

              <motion.div
                aria-hidden="true"
                style={{ y: overlayY }}
                className="pointer-events-none absolute right-[8%] top-[12%] h-[10rem] w-[10rem] opacity-[0.48] md:h-[15rem] md:w-[15rem] xl:h-[18rem] xl:w-[18rem]"
              >
                <Image
                  src="/assets/images/dalee-symbol.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </motion.div>

              <div className="absolute left-6 right-6 top-6 flex items-center justify-between gap-4">
                <div className="rounded-full border border-white/10 bg-black/28 px-4 py-3 text-[10px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-md">
                  портфолио в движении
                </div>
                <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/28 px-4 py-3 text-[10px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-md md:flex">
                  {items.length} формата
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/48">
                    {items[activeIndex].category}
                  </p>
                  <h3 className="max-w-[10ch] text-[2.35rem] leading-[0.96] font-medium tracking-[-0.06em] text-white md:text-[3.1rem]">
                    {items[activeIndex].title}
                  </h3>
                  <p className="max-w-[30rem] text-sm leading-6 text-white/68 md:text-base md:leading-7">
                    {items[activeIndex].summary}
                  </p>
                </div>
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-black/44 text-white backdrop-blur-sm">
                  <Play size={18} weight="fill" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
