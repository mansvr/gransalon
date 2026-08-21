# CHAT — two phases

Pattern: VP **Agent B** (Ghost Chat Minimal on [vpandco.co](https://vpandco.co/)), not Command.

Reference: `O:\VPANDCO\ai-website-cloner-template\docs\agents\PUBLIC_SITE_AGENT.md`  
UI source: `public/prototypes/hallmark/b5-stone-fresh/index.html` (`.ghost-chat`, `respond()` → `POST /api/public-chat`)  
API: `src/app/api/public-chat/route.ts`

## Phase A — this weekend (locked)

**Do not clone the agent yet.** Embed the **live** VP chat so the rail talks to the same OpenRouter + listing tools already in production.

The live home is the **whole** B5 page. Do **not** iframe `https://vpandco.co/` into the 1fr rail (video + mast + catalog would come with it).

### Preferred embed

1. On **vpandco.co**, add a chat-only surface (tiny, allowed exception to “don’t bloat VP”):

   - Route: `/embed/chat` → rewrite or page that is **only** the ghost-chat rail (same JS as B5, same `/api/public-chat`).
   - `Content-Security-Policy: frame-ancestors 'self' https://gransalon.co https://www.gransalon.co http://localhost:3000`
   - Keep `X-Frame-Options` off for this path (CSP frame-ancestors replaces it).

2. On **gransalon.co** hero right:

```html
<iframe
  title="Asesor"
  src="https://vpandco.co/embed/chat"
  style="border:0;width:100%;height:100%"
></iframe>
```

3. WhatsApp handoff inside that chat already exists on VP. Gran Salón **claim** CTAs on cards use the founder number (below), not VP’s.

### Fallback if `/embed/chat` cannot ship today

Copy B5 `.ghost-chat` markup + `respond()` into the rail as a client island, but keep `fetch("https://vpandco.co/api/public-chat", …)` (absolute). Then on VP add `https://gransalon.co` and `https://www.gransalon.co` to `ALLOWED_ORIGINS` and CORS `Access-Control-Allow-Origin` on that route. This duplicates UI; backend stays live VP.

### Honest weekend behaviour

The embedded agent still thinks it is **VP & Co. (Bogotá Norte listings)**. Founder accepted that. Directory below is the fair product. Do not pretend the VP soul knows pabellones until Phase B.

Starters on the embed stay VP’s until Phase B. Directory chips (nuqs) are independent — they do not need the iframe.

## Phase B — later (clone + customize)

New repo owns:

- Ghost Chat UI (monochrome tokens)
- `POST /api/public-chat` copy with `ALLOWED_ORIGINS` = gransalon.co
- Soul + tools in the draft below
- Starters → nuqs (`tag=vis`, `hall=06`, …)

### Soul (Phase B only)

Eres la guía independiente del Gran Salón Inmobiliario en Corferias (2026). Visitantes en el recinto o en el celular.

- Español por defecto.
- 1–2 frases. Máximo una pregunta. Sin emoji. Sin “como IA”.
- Nunca digas que eres oficial de Corferias o la Lonja.
- Antes de citar un stand, usa herramientas. Nunca inventes pabellón/stand.
- Respuesta útil = **empresa + pabellón + stand**. Luego una pregunta si hace falta.
- No pidas cédula, presupuesto, ni WhatsApp del visitante in v1 (LEGAL).
- Claim / guía humana: `https://wa.me/573018927141`
- No vendas Gaussian Splatting. Si preguntan por recorridos 3D: una línea, luego volver al mapa.

### Tools (Phase B)

| Tool | Args | Returns |
|------|------|---------|
| `search_exhibitors` | `q?` `hall?` `city?` `tag?` | Up to 8 cards: name, hall, stand, city, id |
| `get_exhibitor` | `id` | Full row + website if any |
| `get_whatsapp_link` | `intent: claim \| guia` | `https://wa.me/573018927141?text=…` |

No `capture_lead` until LEGAL page + opt-in exist.

## WhatsApp (both phases, on Gran Salón chrome)

| Intent | URL |
|--------|-----|
| Visitante / guía | `https://wa.me/573018927141?text=Hola%20%E2%80%94%20vi%20la%20gu%C3%ADa%20del%20Gran%20Sal%C3%B3n` |
| Expositor reclama | `https://wa.me/573018927141?text=Hola%20%E2%80%94%20soy%20el%20expositor%20` |

Number: **301 892 7141** (Colombia, +57).
