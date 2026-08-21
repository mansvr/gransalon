# DATA — catalog contract

**Canonical CSV (do not scrape again unless told):**  
`O:\Umbral\GB-Corpus\gtm-signals\gran-salon-guia\data\exhibitors.catalog.csv`

**Count:** **159 empresas** after collapsing repeats (official e-directory had **182** cards). Hall mix (presence): 06=66 · 08=41 · 07=32 · 05=17 · ALB=6.

Same company with several booths = **one card**. `stand` is a comma list (`103, 104, 108`). Different halls: `06-8A, 07-2` and `hall` = `06, 07`. Filter `hall=06` matches if `06` is in that list.

**Human table:** `O:\Umbral\GB-Corpus\gtm-signals\gran-salon-guia\data\CATALOG.md`  
**Schema narrative:** `O:\Umbral\GB-Corpus\gtm-signals\gran-salon-guia\SCHEMA.md`

Copy the CSV into the new repo as `data/exhibitors.catalog.csv` and generate `data/exhibitors.json` at build (or a one-shot `scripts/csv-to-json.mjs`).

## Columns

| CSV | Use on site |
|-----|-------------|
| `id` | Route `/e/[id]` e.g. `gsi-2026-06-414` |
| `exhibitor_id` | Corferias popup id (debug only) |
| `company_name` | Title |
| `hall` | Chip + card (`05` `06` `07` `08` `ALB`). Label **ALB** as `ALB`. |
| `nivel` | Usually `01` — show if not 01 |
| `stand` | **Load-bearing.** Comma-separated if several booths. |
| `city` | Display (`BOGOTA D.C.`, `PANAMA`, …) |
| `cities` | Filter slug (`bogota`, `internacional`, `cartagena`, …) |
| `category` | Semicolon tags → `tag` nuqs |
| `product` | Subline (may be empty) |
| `website` | Outbound; skip empty/`http://` |
| `logo_url` | `cloud.corferias.co/...` — hotlink v1; cache later if they block |
| `description_es` | Card expand / `/e/[id]` |
| `status` / `source` | Internal |

## City slugs (for nuqs `city`)

`bogota` `medellin` `cali` `cartagena` `barranquilla` `eje_cafetero` `costa` `internacional` `otro`

Map display → slug using `cities` column first.

## Honesty

- 47 rows have no `product`; 62 have no `website`; 124 have no `logo`. UI must look finished **without** a logo (hall numeral glyph).
- Some brands occupy **multiple stands** (Colpatria, Ospinas, …). **One card per company**; extra booth numbers live in `stand`, comma-separated.
- Do not display Econexia tracking URLs as primary CTA.

## Later (not scaffold)

Field photos (`photo_primary`) from intake. Until then, logo or empty plate.
