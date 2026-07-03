import Image from "next/image";
import { assetPath } from "@/lib/asset-path";

type BrandLockupProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function BrandLockup({ className, variant = "light" }: BrandLockupProps) {
  return (
    <div className={["brand-lockup", className ?? ""].join(" ").trim()}>
      <Image
        src={assetPath(variant === "dark" ? "/assets/images/dalee-logo.png" : "/assets/images/dalee-logo-original.png")}
        alt="Студия Далее"
        width={2048}
        height={480}
        priority
        className="brand-lockup-image"
      />
    </div>
  );
}
