# GRAB-FROM-VPANDCO — borrow list

Repo: `O:\VPANDCO\ai-website-cloner-template`  
Live skin: `public/prototypes/hallmark/b5-stone-fresh/index.html` via `src/middleware.ts` (`/` rewrite).

## Copy the idea

| Piece | When | How |
|-------|------|-----|
| 2+1 hero plate | Now | Recreate in React. Monochrome tokens. |
| Live Ghost Chat | **Phase A now** | Do not clone. Add `/embed/chat` on VP and iframe it. Spec: [`CHAT.md`](./CHAT.md). |
| Ghost chat CSS density | Phase B | Same rail physics, new copy + tokens. |
| Public agent API / tools / soul | **Phase B later** | Clone `route.ts`, `catalog.ts`, `soul.ts`, rate-limit. Point at exhibitors JSON. |

## Do not copy

| Piece | Why |
|-------|-----|
| VP brand, team, listings, prices | Wrong product |
| `HeroSection.tsx` video carousel + Playfair | Wrong IA; B5 replaced it |
| `PropertyCard` beds/baths/rounded-2xl marketplace | Exhibitor ≠ listing |
| `CatalogFilters` hand-rolled URL sync | Replaced by nuqs |
| Command dashboard (`vpandco-command`) | Ops, not public |
| `middleware.ts` HTML rewrites | New app is React pages, not prototype HTML as `/` |
| OpenGraph / favicon of VP | New marks |

## Hallmark skill location

`O:\Umbral\hallmark\skills\hallmark\SKILL.md`  
(Also used inside VP as `docs/research/*/HALLMARK_STUDY.md` — those studies are VP listing DNA, **not** this fair guide.)
