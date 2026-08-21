# gransalon.co

Independent visitor guide for Gran Salón Inmobiliario 2026 (Corferias).  
**Find the stand. That’s the product.**

Not Corferias. Not the Lonja. Not VP & Co. listings.

## Stack

Next.js App Router · React 19 · Tailwind v4 · [nuqs](https://nuqs.dev/) · [shadcn](https://ui.shadcn.com/) · [Fonttrio bitter-lora](https://github.com/kapishdima/fonttrio) (Bitter + Lora + Source Code Pro) · static catalog JSON · Vercel.

## Local

```bash
npm install
npm run dev
```

Ingest after CSV changes:

```bash
npm run ingest
```

## Filters (URL is the UI)

```
/?city=bogota&tag=vis
/?hall=07
/?q=amarilo
```

Hall chip **ALB** is labelled ALB.

## Catalog

`data/exhibitors.catalog.csv` → `data/exhibitors.json` (**159** empresas after collapsing official 182 cards). Hall presence: 06=66 · 08=41 · 07=32 · 05=17 · ALB=6.

## Chat (Phase A)

Hero rail iframes `https://vpandco.co/embed/chat` (live VP Ghost Chat). Directory does not wait on it. Phase B clones soul onto exhibitors.

## Deploy

Repo: [mansvr/gransalon](https://github.com/mansvr/gransalon). Connect Vercel production `main` to domain **gransalon.co**. Phase A needs no LLM key here.

Handoff: [`docs/handoff/`](./docs/handoff/).
