# gransalon.co — scaffold handoff

**This folder is planning only.** Scaffold into **[mansvr/gransalon](https://github.com/mansvr/gransalon)** (empty), then deploy to the existing Vercel project for **`gransalon.co`**. Founder locks: [`LOCKED.md`](./LOCKED.md).

**Created:** 2026-08-21  
**Product:** Independent visitor guide for Gran Salón Inmobiliario 2026 (Corferias, 20–23 Aug).  
**Commander's intent:** *Find the stand. That's the product.*

Live references (layout DNA, not brand):

- Wireframe in production: [vpandco.co](https://vpandco.co/) — Hallmark **B5 Stone Fresh** (`2fr` media + `1fr` ghost chat)
- Arco PlayCanvas: [playcanv.as/p/iimjVte8](https://playcanv.as/p/iimjVte8/)
- Official catalog (do not clone chrome): [gransaloninmobiliario.com/es/catalogo-expositores](https://gransaloninmobiliario.com/es/catalogo-expositores/)
- URL state: [nuqs](https://nuqs.dev/)
- Design skill: Hallmark at `O:\Umbral\hallmark\skills\hallmark\SKILL.md`

---

## Read order (receiving agent)

| # | File | Why |
|---|------|-----|
| 0 | [`LOCKED.md`](./LOCKED.md) | Repo, WA, chat embed, mono, ALB |
| 1 | [`AGENTS.md`](./AGENTS.md) | Locks, don'ts, legal |
| 2 | [`PLAN.md`](./PLAN.md) | What to build this weekend |
| 3 | [`WIREFRAME.md`](./WIREFRAME.md) | Home: iframe + chat + directory |
| 4 | [`NUQS.md`](./NUQS.md) | Search params contract |
| 5 | [`DATA.md`](./DATA.md) | 159 empresas / 182 cards |
| 6 | [`GRAB-FROM-VPANDCO.md`](./GRAB-FROM-VPANDCO.md) | Steal layout/agent pattern, not VP brand |
| 7 | [`HALLMARK.md`](./HALLMARK.md) | How to design the skin |
| 8 | [`CHAT.md`](./CHAT.md) | Public agent (thin) |
| 9 | [`SCAFFOLD.md`](./SCAFFOLD.md) | Repo + Vercel steps |
| 10 | [`OPEN-QUESTIONS.md`](./OPEN-QUESTIONS.md) | Closed — see LOCKED |

Canon (do not duplicate into this pack):  
`O:\Umbral\GB-Corpus\gtm-signals\gran-salon-guia\` — GAMEPLAN, LEGAL, SCHEMA, SCRIPTS.

---

## One-screen product

```text
gransalon.co
  ├─ Hero plate (B5 rhythm)
  │    ├─ LEFT  2fr  PlayCanvas arco iframe
  │    └─ RIGHT 1fr  iframe → vpandco.co/embed/chat (live VP agent; clone later)
  └─ Directory
       chips (nuqs) → search → exhibitor cards (hall + stand)
```

Footer always: **guía independiente** — not Corferias / Lonja.
