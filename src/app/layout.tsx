import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono, Manrope, Oswald } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import "./site.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
});

const displayFont = Oswald({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

const scriptFont = localFont({
  src: "./Gogol-Regular.ttf",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["свадебная видеосъёмка", "reels под ключ", "видеостудия", "коммерческая съёмка", "контент для бизнеса"],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: ["/opengraph-image.png"],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} ${scriptFont.variable} h-full antialiased`}
    >
      <body className="site-body min-h-full">{children}</body>
    </html>
  );
}
