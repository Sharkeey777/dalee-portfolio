import Image from "next/image";
import type { ClientLogo } from "@/content/site";
import { assetPath } from "@/lib/asset-path";

type LogoMarqueeProps = {
  logos: ClientLogo[];
};

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const logoItems = logos.map((logo) => (
    <div key={logo.slug} className="logo-marquee-item logo-marquee-item-plain">
      <div className="logo-marquee-image">
        <Image
          src={assetPath(logo.image)}
          alt={logo.name}
          fill
          sizes="(max-width: 768px) 160px, 220px"
          className={logo.mode === "cover" ? "object-cover" : "object-contain"}
        />
      </div>
      <p>{logo.name}</p>
    </div>
  ));

  return (
    <section id="clients" className="logo-marquee-section">
      <h2 className="project-title mb-8">С кем мы работаем</h2>

      <div className="logo-marquee-window">
        <div className="logo-marquee-track">
          <div className="logo-marquee-segment">{logoItems}</div>
          <div className="logo-marquee-segment" aria-hidden="true">
            {logoItems}
          </div>
        </div>
      </div>
    </section>
  );
}
