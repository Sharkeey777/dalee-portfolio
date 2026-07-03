import Image from "next/image";
import { Play } from "@phosphor-icons/react/dist/ssr";

const mediaCards = [
  {
    src: "/assets/images/wedding-still.png",
    alt: "Свадебный кадр студии Далее",
    className:
      "col-span-2 row-span-2 rounded-[2rem] border border-white/10 object-cover object-center shadow-[0_32px_120px_rgba(0,0,0,0.45)]",
  },
  {
    src: "/assets/images/reels-still.png",
    alt: "Съёмка reels-контента",
    className:
      "rounded-[1.5rem] border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
  },
  {
    src: "/assets/images/commercial-still.png",
    alt: "Коммерческая видеосъёмка",
    className:
      "rounded-[1.5rem] border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
  },
];

export function HeroMedia() {
  return (
    <div className="relative min-h-[34rem] animate-fade-rise lg:min-h-[42rem]">
      <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_top_right,rgba(202,158,118,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_22%)]" />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />
      <div className="relative z-10 grid h-full grid-cols-2 gap-4 rounded-[2.25rem] border border-white/8 bg-black/30 p-4 backdrop-blur-sm">
        {mediaCards.map((card, index) => (
          <div
            key={card.src}
            className={`animate-fade-rise ${index === 0 ? "row-span-2" : ""}`}
            style={{ animationDelay: `${0.18 + index * 0.1}s` }}
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={900}
              height={1000}
              className={`h-full w-full ${card.className}`}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div
        className="absolute right-[7%] top-[18%] z-20 rounded-[2rem] border border-white/12 bg-black/70 p-4 shadow-[0_22px_80px_rgba(0,0,0,0.55)] backdrop-blur-md animate-fade-scale"
        style={{ animationDelay: "0.32s" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-48 w-48 rounded-[1.4rem] object-cover md:h-56 md:w-56"
        >
          <source src="/assets/video/dalee-logo-motion.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute bottom-[9%] left-[10%] z-20 flex items-center gap-4 rounded-full border border-white/15 bg-black/75 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-md animate-fade-scale"
        style={{ animationDelay: "0.46s" }}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
          <Play size={22} weight="fill" />
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">
            showreel
          </p>
          <p className="text-base text-white">Первый кадр, первый ритм, первый контакт</p>
        </div>
      </div>
    </div>
  );
}
