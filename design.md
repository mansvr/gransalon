# Design — gransalon.co

Locked design system. Future Hallmark runs read this file first; pages defer
to it. Amend intentionally — the file is the rule.

## System
- Genre · editorial
- Macrostructure · Catalogue (B5 2+1 plate above an equal-weight index)
- Theme · custom (vibe: "ink on paper, hall index, no varnish")
- Axes · light / condensed-sans / commanding
- Nav · none (directory is the page; Hablar con la guía lives in the footer)
- Footer · Ft2 Inline-rule
- Type · [Fonttrio poster](https://github.com/kapishdima/fonttrio) — Oswald + Barlow + Inconsolata

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
  --font-display: "Oswald", "Arial Narrow", sans-serif;
  --font-body: "Barlow", "Helvetica Neue", sans-serif;
  --font-outlier: Inconsolata, ui-monospace, monospace;
  --hero-media-h: min(62vh, 640px);
}
```

## Voice
- Spanish default. Honest counts only (catalog JSON length).
- Never say oficial / partner / patrocinado / Lonja affiliation.
- Killer line: empresa + pabellón + stand. ALB is labelled ALB.

## Notes
- B5 DNA is framing only (2fr/1fr plate). Not Playfair, not terracotta, not Geist.
- Mast is two lines: Barlow kicker (event · venue · city) over Oswald title “Guía Independiente”. No count in the header.
- Directory chips: cities first, then tags, halls last. Head shows the count. First page is 21 cards, then Ver más in batches of 21.
- Chat Phase A is an iframe to vpandco.co/embed/chat — do not restyle VP chrome here.
