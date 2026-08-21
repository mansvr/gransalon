# WIREFRAME — home plate

Steal **framing** from [vpandco.co](https://vpandco.co/) B5, not photography, not VP copy, not Playfair.

## B5 DNA to keep

Source CSS (do not copy file wholesale — re-implement in React):

`O:\VPANDCO\ai-website-cloner-template\public\prototypes\hallmark\b5-stone-fresh\index.html`

| Token | B5 | Gran Salón |
|-------|----|------------|
| Plate | `.hero-plate` `2fr / 1fr`, 1px rule gutters | Same |
| Media height | `--hero-media-h: min(62vh, 640px)` | Same; iframe fills this box |
| Chat rail | `.hero-caption` height locked to media; transcript scrolls; composer at floor | Same |
| Mobile | Stack: media full width, chat below (not a tiny 1fr) | Same — chat still usable on 375px |
| Mast | Short kicker + one display line + count | “Guía independiente” + “Encuentra el stand” + `159 expositores` (empresas; 182 official cards collapsed) |

## Hero left — PlayCanvas

URL: `https://playcanv.as/p/iimjVte8/`

```html
<iframe
  title="Arco de Corferias — experiencia 3D"
  src="https://playcanv.as/p/iimjVte8/"
  allow="autoplay; fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
  loading="eager"
  referrerpolicy="strict-origin-when-cross-origin"
></iframe>
```

Rules:

- `object-fit` analog: iframe `border:0; width:100%; height:100%`.
- Poster/fallback: still of the arco if `error` or reduced-motion / no WebGL. Do not block the directory on 3D.
- Do not autoplay sound.
- Optional later: self-host the published PlayCanvas build on this domain (CORS/cookie quieter). v1 may use playcanv.as.

## Hero right — chat (Phase A)

Embed the **live** VP Ghost Chat. Full spec: [`CHAT.md`](./CHAT.md).

```html
<iframe
  title="Asesor"
  src="https://vpandco.co/embed/chat"
  style="border:0;width:100%;height:100%"
></iframe>
```

Do not iframe `https://vpandco.co/` (entire B5 page). Phase B: clone UI, retoken to monochrome, starters → nuqs.

Directory chips stay on Gran Salón and do **not** wait on the iframe.

## Below the plate — directory

Not a 4-up property-card clone (`rounded-2xl` + beds/baths). Exhibitor card:

```text
[logo or hall glyph]
EMPRESA
Pabellón 06 · Stand 414
  or  Pabellón ALB · Stand 103, 104, 108
  or  Pabellón 06, 07 · Stand 06-8A, 07-2
Bogotá · VIS
→ ficha / web
Reclamar perfil → wa.me/573018927141
```

Equal-weight grid (B5 catalog comment: “Igual peso · sin jerarquía inventada”). Destacado comes later — no fake “featured” badges.

**Chip row** (counts after company-dedupe 2026-08-21 — do not invent). Hall chips use **presence** (Prodesa counts in 06 and 07):

| Chip | nuqs | Why |
|------|------|-----|
| Todos | clear | 159 |
| Pabellón 6 | `hall=06` | 66 |
| Pabellón 8 | `hall=08` | 41 |
| Pabellón 7 | `hall=07` | 32 |
| Pabellón 5 | `hall=05` | 17 |
| ALB | `hall=ALB` | 6 — label **ALB**, not Ágora |
| Bogotá | `city=bogota` | 73 |
| Panamá | `city=panama` | 19 |
| Cartagena | `city=cartagena` | 9 |
| Medellín | `city=medellin` | 8 |
| VIS | `tag=vis` | 17 |
| Inversión | `tag=inversion` | 21 |
| Turismo | `tag=turismo` | 3 |

Search box writes `q`. Combining chips is AND (hall ∩ city ∩ tag ∩ q).

Result count: “**N** expositores” using the filtered length — honest, not “+1500 proyectos” unless we have that field (we don’t per row).
