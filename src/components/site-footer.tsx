import { BrandLockup } from "@/components/brand-lockup";
import { siteConfig as siteConfigValue } from "@/lib/site-config";

type SiteFooterProps = {
  siteConfig: typeof siteConfigValue;
};

export function SiteFooter({ siteConfig }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-inner footer-inner-simple">
        <BrandLockup variant="dark" />
        <p className="sr-only">{siteConfig.name}</p>
      </div>
    </footer>
  );
}
