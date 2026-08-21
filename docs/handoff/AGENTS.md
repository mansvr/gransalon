# AGENTS.md — receiving repo rules

You are scaffolding **gransalon.co**, an independent fair guide. You are not cloning VP & Co. and you are not the official Gran Salón site.

## Locks

1. **Spanish default.** English only if the visitor types English.
2. **Never** say oficial, partner, patrocinado, or Lonja/Corferias affiliation.
3. Footer (verbatim enough):

   > Esta guía es independiente. No está afiliada, patrocinada ni administrada por Corferias, la Lonja de Bogotá ni los organizadores del Gran Salón Inmobiliario.

4. **Killer feature is hall + stand**, not indoor GPS, not “3 min walk,” not a 3DGS sales pitch on first paint.
5. Data is **159 empresas** on the public list (182 official cards collapsed). Do not invent exhibitor counts, prices, or testimonials.
6. **nuqs** owns filter state. Do not roll a parallel `useSearchParams` + `router.replace` soup like VP `/catalogo`.
7. **Hallmark** mood is **monochrome directory**: clean, crisp, modern. B5 is framing only. No VP cream/terracotta as brand.
8. **Chat Phase A:** embed live VP Ghost Chat (`vpandco.co/embed/chat`). It will still speak as VP listings. Phase B clones soul onto exhibitors. No lead marketplace. No visitor PII form until LEGAL copy exists.
9. Claim / guía WhatsApp: **+57 301 892 7141** (`wa.me/573018927141`).
10. New app lives in **[mansvr/gransalon](https://github.com/mansvr/gransalon)**. Tiny `/embed/chat` on VP is allowed. Do not put the directory inside Umbral or the VP marketing repo.

## Halls in data

`05` · `06` · `07` · `08` · `ALB` (CE = 0 rows). Chip label is **`ALB`**, not Ágora.

## Out of scope (v1)

- Auth / exhibitor CMS
- Paid Destacado checkout
- Selling leads
- Self-hosting the splat pipeline
- Cloning Econexia
- New Instagram account
