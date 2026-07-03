# Dalee Landing

Лендинг студии «Далее» на `Next.js 16`, `Tailwind CSS v4` и `motion/react`.

## Команды

```bash
npm install
npm run dev
npm run build
npm run start
```

## Переменные окружения

Скопируйте `.env.example` в `.env.local` и заполните реальные контакты:

```bash
cp .env.example .env.local
```

Важно заменить:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_TELEGRAM_URL`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_EMAIL`

## Деплой на Timeweb

- Режим: `Node.js`
- Версия Node: `22` (`.nvmrc`)
- Команда сборки: `npm run build`
- Команда запуска: `npm run start`

## Что внутри

- `src/content/site.ts` - typed-контент и структура лендинга
- `src/components` - UI и motion-компоненты
- `src/app/robots.ts` и `src/app/sitemap.ts` - SEO-файлы
- `public/assets` - логотип, logo-motion и локальные still-кадры
