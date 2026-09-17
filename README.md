# Okyanus

Стек: Next.js (App Router, TypeScript), Material UI, next-intl, OpenNext для Cloudflare Workers.

Локали: `en` (по умолчанию), `ru`, `ka`, `tr`.

## Локальная разработка

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Скопируйте `.env.example` в `.env.local` и заполните SMTP / Telegram, когда понадобится отправка писем.

## Cloudflare

```bash
npm run preview
npm run deploy
npm run cf-typegen
```
