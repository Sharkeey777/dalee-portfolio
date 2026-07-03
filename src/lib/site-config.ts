const fallbackTelegram = "https://t.me/studiadalee";

export const siteConfig = {
  name: "Студия Далее",
  title: "Студия Далее | Свадебная и коммерческая видеосъёмка",
  description:
    "Студия видеосъёмки и монтажа Далее. Снимаем свадьбы, reels и коммерческие ролики, собирая аккуратный визуальный результат под конкретную задачу.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://your-timeweb-domain.ru",
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL || fallbackTelegram,
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/studio.dalee?igsh=MTZnb3loc2owemVyag%3D%3D&utm_source=qr",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/79289097483",
  email: process.env.NEXT_PUBLIC_EMAIL || "hello@studiadalee.ru",
  city: "Ростов-на-Дону",
} as const;
