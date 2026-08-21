# PLAN — weekend site

**Domain:** `gransalon.co` (Vercel) · **Repo:** [mansvr/gransalon](https://github.com/mansvr/gransalon)  
**Stack (locked):** Next.js App Router · React 19 · Tailwind · **nuqs** · static catalog JSON at build · Vercel.  
**Skin:** Hallmark monochrome directory. **Chat Phase A:** iframe live VP Ghost Chat.

VP `/site` is a generic clone home. **Do not use it.** The live VP home is Hallmark B5 (`middleware` rewrite to `public/prototypes/hallmark/b5-stone-fresh/index.html`). That **plate** is the wireframe to port into React.

## Pages (v1)

| Route | Job |
|-------|-----|
| `/` | Hero plate + directory (filters via nuqs). This is the whole product. |
| `/e/[id]` | Exhibitor card (optional same-day). `id` = `gsi-2026-{hall}-{stand}` |
| `/privacidad` | Short independent-guide + habeas-data stub |

No `/catalogo` split unless `/` gets too long — v1 keeps search **on the home** so a QR has one URL.

## Information architecture

```text
[mast] Guía independiente · Gran Salón 2026 · Corferias
[hero-plate]  iframe arco | iframe vpandco.co/embed/chat
[filters]     q + keyword chips (nuqs)
[results]     N exhibidores · cards
[footer]      disclaimer + Mirador quiet credit (optional, small)
```

## Build slices (order)

1. **Scaffold** [mansvr/gransalon](https://github.com/mansvr/gransalon), `NuqsAdapter`, attach Vercel/`gransalon.co`.
2. **Ingest** CSV → `data/exhibitors.json` (script).
3. **Directory** search + chips + cards (hall/stand first). Chip **ALB**.
4. **Hero plate** PlayCanvas iframe + **embed live VP chat** (see [`CHAT.md`](./CHAT.md) — needs tiny `/embed/chat` on VP).
5. **Hallmark pass** monochrome tokens (directory first, then polish).
6. **Phase B later** clone chat + exhibitor tools. Not this weekend.

## Success (fair weekend)

- Phone: type `VIS` or tap `Bogotá` → list with **Pabellón + Stand**.
- Shareable URL: `gransalon.co/?city=bogota&tag=vis`
- Arco iframe loads (fallback poster if WebGL fails).
- Chat **iframe** loads the live VP agent (listings soul until Phase B). Directory does not depend on it.

## Explicit non-goals

Indoor maps, four pricing SKUs, “official” chrome, cloning all of VP Command.
