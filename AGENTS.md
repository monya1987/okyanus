<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Okyanus

Product source of truth: `main.md`.

Locales: `en` (default, no prefix), `ru`, `ka`, `tr`.

## Stack

Next.js 16 App Router, TypeScript, MUI 9, next-intl, OpenNext (`@opennextjs/cloudflare`) + Wrangler. Package manager: **npm**.

## Key directories

| Path | Purpose |
|------|---------|
| `src/app/[locale]/` | Localized pages |
| `src/app/api/` | API routes |
| `src/components/` | UI |
| `src/i18n/` | next-intl routing, request config, navigation |
| `src/lib/` | SEO, currency, mail, telegram, formatters |
| `src/theme/` | MUI theme |
| `messages/` | UI copy per locale |
| `main.md` | Product concept |

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server |
| `npm run lint` | ESLint |
| `npm run preview` | OpenNext build + local Workers runtime |
| `npm run deploy` | OpenNext build + Cloudflare deploy |
| `npm run cf-typegen` | Generate `cloudflare-env.d.ts` |

## Cursor rules

Detailed agent instructions live in `.cursor/rules/*.mdc`.

- `project.mdc` — always applied (stack, npm, product constraints)
- `typescript-react.mdc` — App Router, next-intl, hooks
- `styling.mdc` — MUI `sx` and theme tokens
- `figma.mdc` — implement UI from Figma URLs

## MR review

Automated review standards: `.cursor/BUGBOT.md`.
