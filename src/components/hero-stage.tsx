"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChatsCircle, PlayCircle } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { NavItem } from "@/content/site";
import { AmbientBeams } from "@/components/ambient-beams";
import { BrandLockup } from "@/components/brand-lockup";
import { ThemeToggle } from "@/components/theme-toggle";

type HeroStageProps = {
  navItems: NavItem[];
  telegramUrl: string;
};

const heroMarks = ["свадьбы", "reels", "коммерция"];
const heroHeadline = ["Снимаем ролики,", "которые хочется", "досмотреть."];

export function HeroStage({ navItems, telegramUrl }: HeroStageProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const symbolY = useTransform(scrollYProgress, [0, 0.18], [0, prefersReducedMotion ? 0 : 26]);
  const panelY = useTransform(scrollYProgress, [0, 0.18], [0, prefersReducedMotion ? 0 : 34]);

  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/commercial-still.png"
          alt=""
          fill
          priority
          className="object-cover grayscale"
        />
      </div>
      <div className="hero-logo-video-wrap absolute inset-0 overflow-hidden">
        <video className="hero-logo-video" autoPlay muted loop playsInline preload="auto">
          <source src="/assets/video/dalee-logo-motion.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.42),rgba(0,0,0,0.74))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.32),transparent_18%,transparent_70%,rgba(0,0,0,0.8))]" />
      <div className="hero-grain absolute inset-0 opacity-60" />
      <AmbientBeams />

      <div className="relative z-10 mx-auto min-h-[100dvh] w-full max-w-[1520px] px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <header className="glass-panel flex items-center justify-between gap-3 px-4 py-4 sm:px-5 lg:min-h-[5.3rem] lg:px-7">
          <Link href="/" className="shrink-0">
            <BrandLockup />
          </Link>

          <nav className="hero-topbar-nav hidden items-center gap-9 text-xs uppercase tracking-[0.18em] lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition duration-200">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-topbar-cta inline-flex h-12 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium transition sm:px-6"
            >
              <span className="hidden sm:inline">Обсудить проект</span>
              <span className="sm:hidden">TG</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </header>

        <div className="grid min-h-[calc(100dvh-7.25rem)] items-end gap-8 pb-4 pt-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:pt-10">
          <div className="max-w-[39rem] self-center">
            <p className="shiny-text text-xs uppercase tracking-[0.28em]">видеосъёмка и монтаж · ростов</p>

            <div className="mt-5 max-w-[7.9ch]">
              <h1 className="text-[clamp(3rem,5.7vw,6.15rem)] leading-[0.88] font-medium tracking-[-0.085em] text-white">
                {heroHeadline.map((line, index) => (
                  <span
                    key={line}
                    className={`hero-headline-line block ${prefersReducedMotion ? "" : "hero-text-reveal"}`}
                    style={prefersReducedMotion ? undefined : { animationDelay: `${0.08 + index * 0.09}s` }}
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            <p
              className={prefersReducedMotion ? "mt-6 max-w-[31rem] text-base leading-7 text-white/72 md:text-lg md:leading-8" : "hero-text-reveal mt-6 max-w-[31rem] text-base leading-7 text-white/72 md:text-lg md:leading-8"}
              style={prefersReducedMotion ? undefined : { animationDelay: "0.34s" }}
            >
              Свадебные истории, reels и коммерческие съёмки под задачу. Берём на себя съёмку, монтаж и
              корректировки, чтобы у вас остался не хаос, а готовый результат.
            </p>

            <div
              className={`${prefersReducedMotion ? "" : "hero-text-reveal"} mt-7 flex flex-col gap-4 sm:flex-row`}
              style={prefersReducedMotion ? undefined : { animationDelay: "0.46s" }}
            >
              <a
                href="#portfolio"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-base font-medium text-black transition hover:brightness-95 active:scale-[0.985]"
              >
                Смотреть работы
                <PlayCircle size={20} weight="fill" />
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/16 bg-black/16 px-7 text-base font-medium text-white transition hover:bg-black/28 active:scale-[0.985]"
              >
                Написать в Telegram
                <ChatsCircle size={20} weight="fill" />
              </a>
            </div>

            <div
              className={`${prefersReducedMotion ? "" : "hero-text-reveal"} mt-8 flex flex-wrap gap-2.5`}
              style={prefersReducedMotion ? undefined : { animationDelay: "0.56s" }}
            >
              {heroMarks.map((mark) => (
                <span key={mark} className="eyebrow-chip border-white/12 bg-white/8 text-white/68">
                  {mark}
                </span>
              ))}
            </div>
          </div>

          <motion.div style={{ y: panelY }} className="relative lg:pl-4 xl:pl-10">
            <div className="hero-frame relative overflow-hidden p-3 md:p-4">
              <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10">
                <Image
                  src="/assets/images/commercial-still.png"
                  alt="Кадр со съёмки"
                  width={1600}
                  height={1200}
                  priority
                  className="h-[31rem] w-full object-cover grayscale md:h-[37rem] xl:h-[43rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.62))]" />
              </div>

              <motion.div
                aria-hidden="true"
                style={{ y: symbolY }}
                className="pointer-events-none absolute right-[7%] top-[16%] h-[10rem] w-[10rem] opacity-28 md:h-[16rem] md:w-[16rem] xl:h-[19rem] xl:w-[19rem]"
              >
                <Image src="/assets/images/dalee-symbol.png" alt="" fill className="object-contain" />
              </motion.div>

              <div className="absolute left-6 right-6 top-6 flex items-center justify-between gap-4">
                <div className="hero-chip px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/52">первый экран</p>
                  <p className="mt-2 text-sm leading-6 text-white/84 md:text-base">Спокойный вход без лишнего шума.</p>
                </div>
                <div className="hidden rounded-full border border-white/12 bg-black/30 px-4 py-3 text-[10px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-md md:block">
                  ростов · video studio
                </div>
              </div>

              <div className="absolute inset-x-6 bottom-6 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="hero-chip">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/46">что внутри</p>
                  <p className="mt-3 text-base leading-7 text-white/84">
                    Съёмка свадеб, reels, SDE, смешные форматы и коммерческие ролики для брендов.
                  </p>
                </div>
                <div className="hero-chip">
                  <div className="grid gap-4 md:grid-cols-3 md:items-end">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-white/46">формат</p>
                      <p className="mt-2 text-lg font-medium tracking-[-0.04em] text-white">под ключ</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-white/46">процесс</p>
                      <p className="mt-2 text-sm leading-6 text-white/78">съёмка, монтаж, корректировки</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-white/46">контакт</p>
                      <p className="mt-2 text-sm leading-6 text-white/78">быстрее всего стартуем в Telegram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-3 grid gap-3 border-t border-white/10 pt-4 text-white/64 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/16 px-4 py-4 backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/44">01</p>
            <p className="mt-2 text-sm leading-6">Свадебные фильмы, reels и SDE для живых историй.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-black/16 px-4 py-4 backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/44">02</p>
            <p className="mt-2 text-sm leading-6">Контент для соцсетей, запусков и личного бренда.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-black/16 px-4 py-4 backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/44">03</p>
            <p className="mt-2 text-sm leading-6">Промо и имиджевые ролики для бизнеса и команд.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
