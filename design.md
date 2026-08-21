# Design — gransalon.co

Locked design system. Future Hallmark runs read this file first; pages defer
to it. Amend intentionally — the file is the rule.

## System
- Genre · editorial
- Macrostructure · Catalogue (B5 2+1 plate above an equal-weight index)
- Theme · custom (vibe: "ink on paper, hall index, no varnish")
- Axes · light / geometric-sans / neutral
- Nav · none (directory is the page; Hablar con la guía lives in the footer)
- Footer · Ft2 Inline-rule
- Type · [Fonttrio architect](https://github.com/kapishdima/fonttrio) — Outfit + Libre Baskerville + IBM Plex Mono

## Tokens (canonical · `tokens.css` is the source of truth)
```css
:root {
  --color-paper: oklch(96.5% 0.006 250);
  --color-paper-2: oklch(93.8% 0.007 250);
  --color-ink: oklch(20% 0.012 250);
  --color-ink-2: oklch(42% 0.010 250);
  --color-rule: oklch(82% 0.008 250);
  --color-accent: oklch(20% 0.012 250);
  --color-accent-ink: oklch(96.5% 0.006 250);
  --color-focus: oklch(28% 0.05 250);
  --font-display: "Outfit", "Helvetica Neue", sans-serif;
  --font-body: "Libre Baskerville", Georgia, serif;
  --font-outlier: "IBM Plex Mono", ui-monospace, monospace;
  --hero-media-h: min(62vh, 640px);
}
```

## Voice
- Spanish default. Honest counts only (catalog JSON length).
- Never say oficial / partner / patrocinado / Lonja affiliation.
- Killer line: empresa + pabellón + stand. ALB is labelled ALB.

## Notes
- B5 DNA is framing only (2fr/1fr plate). Not Playfair, not terracotta, not Geist.
- Mast is two lines: serif kicker (event · venue · city) over Outfit title “Guía Independiente”. No count in the header.
- Directory chips: cities first, then tags, halls last. Todos opens a first page of 24 with Ver más — do not dump the full catalog.
- Chat Phase A is an iframe to vpandco.co/embed/chat — do not restyle VP chrome here.
