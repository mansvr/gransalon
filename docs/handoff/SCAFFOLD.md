# SCAFFOLD — repo [mansvr/gransalon](https://github.com/mansvr/gransalon)

Empty GitHub repo. Domain **gransalon.co** already on Vercel — connect this repo.

```bash
git clone https://github.com/mansvr/gransalon.git
cd gransalon
npx create-next-app@latest . --ts --tailwind --app --eslint --src-dir
# if create-next-app refuses a non-empty dir, init files then npm i
npm i nuqs
```

Add `NuqsAdapter` per [`NUQS.md`](./NUQS.md).

Copy:

```text
O:\Umbral\GB-Corpus\gtm-signals\gran-salon-guia\data\exhibitors.catalog.csv
→ data/exhibitors.catalog.csv

O:\VPANDCO\gransalon-co-handoff\
→ docs/handoff/
```

## Vercel

Import **mansvr/gransalon**, Production `main`, domain `gransalon.co`.

Gran Salón env (Phase A may not need an LLM key):

```text
# Phase A: chat is iframe → vpandco.co — no key required here
# Phase B:
SITE_AGENT_ENABLED=true
OPENROUTER_API_KEY=
```

## VP & Co. (tiny, Phase A only)

Allowed work on `O:\VPANDCO\ai-website-cloner-template`:

1. Chat-only `/embed/chat` (B5 ghost rail, same `/api/public-chat`).
2. `frame-ancestors` includes `https://gransalon.co`.
3. If fallback CORS path: add gransalon origins to `ALLOWED_ORIGINS`.

Do not move the fair directory into the VP repo.

## First PR shape (gransalon)

- `app/page.tsx` — monochrome plate + directory
- `app/layout.tsx` — NuqsAdapter
- `components/HeroPlate.tsx` — PlayCanvas iframe + **iframe to vpandco `/embed/chat`**
- `components/Directory.tsx` — nuqs + chips (`ALB` as ALB) + cards
- `lib/exhibitors.ts`
- `app/privacidad/page.tsx`
- Claim links → `wa.me/573018927141`

## Do not

- Init the Next app inside `O:\VPANDCO\gransalon-co-handoff`
- Init inside `O:\Umbral\GB-Corpus`
- Rewrite VP `middleware.ts` so `/` becomes the fair guide
