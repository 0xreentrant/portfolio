# Design System

## Visual Theme

Spatino-informed personal portfolio: white paper, near-black ink, cool gray muted type, Geist sans only. Restrained monochrome. Large fluid display type with negative tracking. Soft 8px media corners. Wide 1440px content rail. No product-mockup hero.

Physical scene: daytime desk browser, bright office light, calm professional mood - light theme required.

## Colors

Strategy: restrained (tinted neutrals + scarce ink accent ≤10%).

| Role | Token | Value | Tailwind |
|------|-------|-------|----------|
| Background | `--background` | `#fff` | `bg-white` / `bg-background` |
| Ink | `--foreground` | `#111111` | `text-[#111111]` / `text-foreground` |
| Muted phrase | `--muted-soft` | `#b2b2b2` | `text-[#b2b2b2]` |
| Muted body | `--muted` | `oklch(0.707 0.022 261.325)` | `text-gray-400` |
| Muted prose | `--muted-deep` | `oklch(0.551 0.027 264.364)` | `text-gray-500` |
| Rule | `--rule` | `oklch(0.967 0.003 264.542)` | `border-gray-100` |
| Card rule | `--rule-strong` | `oklch(0.928 0.006 264.531)` | `border-gray-200` |
| Soft surface | `--surface-soft` | `oklch(0.985 0.002 247.839)` | `bg-gray-50` / footer `bg-gray-100` |

## Typography

Family: Geist (variable 100–900), Arial size-adjusted fallback. Single family with weight/size contrast.

Custom fluid scale (override default Tailwind text sizes):

```css
--font-size-xs: clamp(14px, 1.1vw, 14px);
--font-size-sm: clamp(17px, 1.4vw, 17px);
--font-size-md: clamp(17px, 1.6vw, 20px);
--font-size-lg: clamp(20px, 1.8vw, 24px);
--font-size-xl: clamp(24px, 2.2vw, 28px);
--font-size-2xl: clamp(36px, 5.5vw, 64px);
```

| Role | Classes |
|------|---------|
| Hero H1 | `text-2xl md:max-w-[540px] leading-none tracking-[-2.5px]` |
| Hero muted spans | `text-[#b2b2b2]` |
| Brand mark | `text-md font-medium leading-none` |
| Meta line | `text-sm text-gray-400 mt-1` |
| Nav active | `text-sm md:text-md text-[#111111]` |
| Nav idle | `text-sm md:text-md text-gray-400 hover:text-[#111111]` |
| Hero body | `text-md md:max-w-[540px] leading-relaxed text-gray-400` |
| Section label | `text-lg leading-[36.4px] tracking-[-0.64px] text-black` |
| Prose | `text-md leading-relaxed text-gray-500` |
| Contact H2 | `text-2xl font-light leading-[1.1] tracking-[-2px] md:tracking-[-2.56px]` |
| Contact link | `text-2xl font-light text-[#b2b2b2] hover:text-[#111111]` |

Body: 16px / 24px (`leading-normal`). Cap prose ~65–75ch; hero copy rail `max-w-[540px]`.

## Layout

| Token | Value | Classes |
|-------|-------|---------|
| Content rail | 1440px | `max-w-5xl` (theme override `--container-5xl: 1440px`) + `mx-auto` |
| Page gutter | 16px | `px-4` |
| Header | 16px pad + hairline | `px-4 py-4 border-b border-gray-100` |
| Nav gap | 16–20px | `flex gap-4 md:gap-5` |
| Hero grid | 2-col equal | `grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-6 items-stretch` |
| Hero copy column | bottom-aligned breathing | `flex flex-col justify-end py-4 md:py-16 gap-6 md:gap-10` |
| Section vertical | 64–96px | `py-16 md:py-24 border-t border-gray-100` |
| Media radius | 8px | `rounded-lg overflow-hidden` |
| Portrait | square desktop | `aspect-[3/4] md:aspect-square` |
| Feature strip | 2:1 desktop | `aspect-square md:aspect-[2/1]` |

## Components

- Header: brand + live meta left; Home / About / Contact right (Work deferred until products land).
- Hero: person-first headline with ink/muted phrase contrast; portrait; no product mockups.
- Bio split: sticky section label + gray-500 prose.
- Contact band: `bg-gray-100` with light large type.

## Motion

Scarce. Link color transitions `transition-colors`. Media hover scale only if used later: `duration-500` ease-out, gated by `prefers-reduced-motion`. No scroll-reveal gating of content.

## Do / Don't

Do: Geist, `#111` / white / cool gray, 1440 rail, person-first hero, contact as destination.
Don't: cream body, display serif, purple SaaS, product card grids in v1, numbered section eyebrows as default grammar, glassmorphism.
