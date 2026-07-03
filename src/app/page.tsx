import { HeroSection } from "@/components/hero-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { ProjectStack } from "@/components/project-stack";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { clientLogos, heroContent, navItems, projects } from "@/content/site";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <ScrollProgress />

      <HeroSection navItems={navItems} hero={heroContent} />

      <div className="overlap-shell">
        <section id="projects" className="section-shell section-shell-tight">
          <ProjectStack projects={projects} />
        </section>

        <section className="section-shell pt-8">
          <LogoMarquee logos={clientLogos} />
        </section>

        <SiteFooter siteConfig={siteConfig} />
      </div>
    </main>
  );
}
