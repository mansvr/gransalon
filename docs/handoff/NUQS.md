# NUQS — URL is the filter UI

Library: [nuqs](https://nuqs.dev/) — type-safe search params, `useState` shape, shareable links, back-button.

VP catalog currently syncs filters with a hand-rolled `router.replace` in `CatalogFilters.tsx`. **Do not copy that.** Use nuqs from day one.

## Adapter (App Router)

```tsx
// app/layout.tsx
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
```

Install: `nuqs` (use current docs; Next 15/16 adapter path as in nuqs.dev).

## Keys (locked)

| Key | Parser | Empty | Notes |
|-----|--------|-------|--------|
| `q` | `parseAsString.withDefault("")` | omit if empty | Company, product, city text |
| `hall` | `parseAsStringLiteral(["05","06","07","08","ALB"])` | omit | Match if token is in the CSV `hall` cell (`06, 07` → both chips) |
| `city` | `parseAsStringLiteral([...])` | omit | slugs from DATA.md |
| `tag` | `parseAsStringLiteral(["vis","vivienda","inversion","turismo","financiero","servicios"])` | omit | matches `category` CSV (semicolon list) |
| `sort` | `parseAsStringLiteral(["az","hall"]).withDefault("az")` | default az | |

`clearOnDefault: true` so a clean home URL stays `gransalon.co`.

## Client + server

- Directory grid: client component with `useQueryStates`.
- Optional: `searchParams` on `page.tsx` for first paint / OG later. Follow nuqs “type-safe search params in RSC” if you add metadata.

## Chat contract

When the model (or a starter chip) means “Cartagena”, **set `city=cartagena`** via nuqs rather than only dumping text in the transcript. The list below the hero is the source of truth.

## Deep links to demo

```text
https://gransalon.co/?city=bogota&tag=vis
https://gransalon.co/?hall=07
https://gransalon.co/?q=amarilo
```
