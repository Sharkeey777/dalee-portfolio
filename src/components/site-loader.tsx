"use client";

import { useEffect, useRef, useState } from "react";

const INTRO_DURATION = 2100;
const EXIT_DURATION = 700;

export function SiteLoader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "hidden">("loading");
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduceMotion ? 250 : INTRO_DURATION;
    const exitDuration = reduceMotion ? 80 : EXIT_DURATION;
    let frame = 0;
    let exitTimer = 0;
    const startedAt = performance.now();

    root.classList.add("site-is-loading");

    const updateProgress = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const percentage = Math.round(easedProgress * 100);

      loaderRef.current?.style.setProperty("--loader-progress", `${percentage}%`);
      loaderRef.current?.style.setProperty("--loader-arrow-scale", String(0.32 + easedProgress * 0.68));
      if (progressRef.current) {
        progressRef.current.textContent = String(percentage).padStart(2, "0");
      }

      if (progress < 1) {
        frame = requestAnimationFrame(updateProgress);
        return;
      }

      setPhase("exiting");
      root.classList.remove("site-is-loading");
      exitTimer = window.setTimeout(() => setPhase("hidden"), exitDuration);
    };

    frame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
      root.classList.remove("site-is-loading");
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      ref={loaderRef}
      className={`site-loader ${phase === "exiting" ? "is-exiting" : ""}`}
      role="status"
      aria-label="Загрузка сайта"
      aria-live="polite"
    >
      <div className="site-loader-flash" aria-hidden="true" />

      <div className="site-loader-kicker">
        <span>Студия контента</span>
        <span>Портфолио · 2026</span>
      </div>

      <div className="site-loader-mark" aria-hidden="true">
        <span className="site-loader-word">ДА</span>
        <span className="site-loader-arrows">
          <i />
          <i />
        </span>
        <span className="site-loader-word">ЛЕЕ</span>
      </div>

      <div className="site-loader-progress">
        <span className="site-loader-percent">
          <span ref={progressRef}>00</span>%
        </span>
        <span className="site-loader-caption">Снимаем · Монтируем · Двигаем далее</span>
      </div>

      <div className="site-loader-line" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
