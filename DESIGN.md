# Design System

## Visual Theme

Abrantes dark canvas hybrid: `#141414` body, `#dedede` ink, Switzer, dual kickers violet `#c2a8ff` + yellow `#ffef93`. Split portrait hero, Spatino Info / Companies / Contact rhythm. Signature motion: random cycle on the hero word **teaches** (tracking, flip, wave, clip, blur-in, fade-up).

Physical scene: evening desk browser, low ambient light, calm professional mood - dark theme required.

## Colors

Strategy: committed dark canvas + scarce dual accents.

| Role | Token | Value |
|------|-------|-------|
| Background | `--background` | `#141414` |
| Ink | `--foreground` | `#dedede` |
| Muted | `--muted` | `#8a8a8a` |
| Muted soft | `--muted-soft` | `#c2c2c2` |
| Accent violet | `--accent-violet` | `#c2a8ff` |
| Accent yellow | `--accent-yellow` | `#ffef93` |
| Surface | `--surface` | `#1c1c1c` |
| Rule | `--rule` | `rgba(255, 255, 255, 0.06)` |

## Typography

Family: Switzer (400/500/600 via Fontshare), system sans fallback. Single family with weight/size contrast.

Fluid display: `--text-5xl: clamp(56px…88px)` at `-0.04em`. Hero muted phrases use `--muted`.

## Layout

| Token | Value |
|-------|-------|
| Content rail | `1280px` + pad `clamp(20px, 4vw, 52px)` |
| Hero | Split grid 1.1fr / 0.9fr from 900px |
| Section vertical | `clamp(64px, 8vw, 96px)` |
| Portrait | Square, max 480px |

## Components

- Header: brand + nav + pill Contact
- Hero: dual-accent kicker, person-first H1 with animated **teaches**, portrait
- Info: sticky label + prose
- Companies: logo strip (grayscale idle, color on hover)
- Contact band: surface fill, large mail link

## Motion

Hero signature: play-once letter modes on **teaches**, then short pause, then random next mode (no immediate repeat). Ease `cubic-bezier(0.16, 1, 0.3, 1)`. Respect `prefers-reduced-motion` (static word). Content never motion-gated blank.

Logo hover: opacity/filter/translate, reduced-motion safe.

## Assets

| Asset | Path |
|-------|------|
| Portrait | `public/photos/alex-perez-circle.png` |
| Company marks | `public/logos/*` |
| Theme CSS | `src/styles/theme.css` |
| Letter motion CSS | `src/styles/teaches-motions.css` |
| Motion runtime | `src/lib/teachesMotions.ts` |

## Do / Don't

Do: dark canvas, Switzer, dual kickers, person-first hero, reachable contact, letter cycle on **teaches**.
Don't: cream body, showcase review pages, product card grids in v1, gradient text, bounce/elastic easing, motion-gated blank sections.

## Changelog

| Date | Change |
|------|--------|
| 2026-09-28 | Promoted L11 random-cycle hybrid to production homepage; removed assets-src showcases; assets under `public/` + `src/styles`. |
