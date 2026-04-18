# Handoff: mcpy Landing Page

## Overview
Marketing landing page for **mcpy** — a universal mobile AI client (iOS + Android) that routes chats across every frontier model and connects to MCP servers and first-party tools (Gmail, Drive, Calendar, Notion, Supabase, etc.).

The page's centerpiece is a **scroll-driven scrollytelling section**: a sticky iPhone mockup on the left, five feature panels on the right. As the user scrolls, the phone screen cross-fades to match the active feature, and a vertical progress rail highlights the current step.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing intended look and behavior, not production code to copy verbatim.

**Your job**: recreate this design inside the existing **Next.js** project, using its established patterns (App Router / Pages Router, the CSS/Tailwind setup already in place, existing component conventions). Do not ship the raw HTML file. Break it into clean React components that fit the project's file structure.

If the Next.js project already has a component library (shadcn/ui, Radix, custom primitives, etc.), prefer those. If it uses Tailwind, convert the CSS to Tailwind classes. If it uses CSS Modules / styled-components / vanilla-extract, match that.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and scroll interaction are all intentional and should be matched pixel-accurately. If something looks off, the HTML prototype is the source of truth — open `Landing Page.html` in a browser to compare.

## Screens / Views
Single long-scrolling page. Sections in order:

### 1. Fixed Navigation Bar
- **Position**: `fixed; top:0; left:0; right:0; z-index:50`
- **Padding**: `18px 32px`
- **Background**: `linear-gradient(180deg, rgba(10,10,11,0.8), rgba(10,10,11,0.4) 70%, transparent)` with `backdrop-filter: blur(14px)`
- **Left**: Logo — 28×28px rounded square (radius 8px) using `assets/mcpy-logo.png` as background-cover, plus "mcpy" wordmark (Inter 600, 17px, letter-spacing −0.02em)
- **Center**: Text links to `#features`, `#models`, `#connectors` (Inter 14px, color `var(--ink-2)`; hover → `var(--ink)`)
- **Right**: Primary CTA button — "Download on App Store" with inline Apple-logo SVG and `→` arrow; background `#FF375F`, white text, border-radius 999px, padding `9px 16px`, glow shadow `0 8px 30px -12px rgba(255,55,95,0.55)`

### 2. Hero
- **Padding**: `160px 32px 100px`, `max-width:1400px`, centered, text-align center
- **Background glow**: absolute ::before radial gradients with `rgba(255,55,95,0.22)` at top and `rgba(255,55,95,0.08)` at bottom
- **Pill badge**: "Now in private beta — iOS + Android" with a pulsing green dot (`oklch(0.7 0.18 150)`)
- **H1**: Two lines — "One chat, every model," / "_all your tools._" — Inter 700, `clamp(44px, 7vw, 96px)`, line-height 0.98, letter-spacing −0.04em. The `<em>` span is italic 500 with a vertical gradient from `--ink` to `#FF375F` clipped to text
- **Subcopy**: 620px max width, Inter 400, 16–19px, line-height 1.55, color `var(--ink-2)`
- **CTAs**: Primary "Download for iOS →" + ghost "How it works"
- **Meta row**: 3 monospace items with green checkmarks — "End-to-end routed", "Private by default", "Open MCP protocol"
- **Phone fan**: 5 iPhone mockups (`phone-1.png` through `phone-5.png`) fanned with rotation + opacity — center (z-index 3) is fully opaque; side phones rotate ±5°/±10° with opacity 0.82 / 0.55

### 3. Trusted / Routes-to Band
- Small monospace label "ROUTES TO THE MODELS YOU ALREADY KNOW"
- Row of text logos (Anthropic, OpenAI, Google, xAI, Meta, Mistral, DeepSeek) at 0.55 opacity — **placeholder; consider replacing with real SVG wordmarks if you have them**

### 4. Scrollytelling — "How it works"
This is the marquee section. Layout:

- Header (centered, 60px bottom margin): eyebrow `/ How it works` in accent red monospace, H2 "Scroll through a day with mcpy." (Inter 600 italic on `<em>`), subcopy
- **Grid**: `grid-template-columns: 1fr 1fr`, no gap
- **Left column (`.stage`)**: `position: sticky; top: 0; height: 100vh; display: flex; align-items: center` — stays pinned while right column scrolls
  - Contains a 320×640 inner stage with:
    - A soft red radial glow behind the phone
    - A vertical progress rail on the far left — 5 dots (3×36px pills), default color `var(--line)`; active dot turns accent red with glow; passed dots turn `var(--line-2)`
    - 5 absolutely-positioned `.phone` layers stacked on top of each other. Inactive: `opacity:0; transform: translateY(40px) scale(0.96)`. Active: `opacity:1; transform: none`. Transition `0.7s cubic-bezier(.2,.6,.2,1)`
- **Right column (`.features`)**: 5 `.feature` blocks, each `min-height: 100vh`, centered vertically, max-width 560px. Each has:
  - Small step indicator "01 / 05 · Home" (monospace, with a thin rule)
  - Accent kicker in monospace uppercase
  - H3 (Inter 600, `clamp(32px, 3.6vw, 48px)`, italic `<em>` in accent red)
  - Body paragraph (Inter 400, 17px, line-height 1.6)
  - Either a row of pill tags OR a bulleted list with accent-tinted check icons

**Feature → phone mapping** (this is how the pairing works):

| Idx | Eyebrow | Headline | Phone image |
|-----|---------|----------|-------------|
| 0 | One place to start | Pick a model, _or let Auto decide._ | `phone-1.png` |
| 1 | Ask anything | One prompt, _all your context._ | `phone-2.png` |
| 2 | Beyond text | Text, images, code — _all in one thread._ | `phone-3.png` |
| 3 | Your apps, connected | Plug in the tools _you already use._ | `phone-4.png` |
| 4 | Bring your own tools | Add any MCP server. _Yes, any._ | `phone-5.png` |

### 5. Models Marquee
- Top/bottom border in `var(--line)`, faint vertical gradient
- Centered header: eyebrow `/ Models`, H2 "Every frontier model. One subscription.", lede copy
- Infinite horizontal scroll: `@keyframes scroll { to { transform: translateX(-50%) } }`, 40s linear infinite
- Edges faded via `mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)`
- Each chip: 12×20 padding, radius 999px, border `var(--line-2)`, background `var(--bg-2)`. Inside: 24×24 rounded-7 square holding the provider SVG (16×16) + provider name
  - `.sq.on-white` → white bg, used for monochrome/dark logos (OpenAI, Anthropic, Grok, xAI, Z.ai, Moonshot)
  - `.sq.on-dark` → bg `#17171a` with a 1px white/8% border, used for colorful logos (Claude, Gemini, Meta, DeepSeek, Mistral, Arcee)
- **The list is duplicated** for seamless looping

### 6. Connectors Grid
- `max-width: 1200px`, 120px vertical padding
- H2 "A connector for every corner of your workflow." (Inter 600, italic accent on `<em>`)
- 3×2 grid, 1px gaps using `background: var(--line)` on the wrapper to draw the lines; each card has `background: var(--bg-2)` which switches to `var(--bg-3)` on hover
- Card structure: rounded 12px icon square (top-left) + meta label "01 / MAIL" (top-right, monospace, tiny) + title (Inter 500, 19px) + description (Inter 400, 14px, `var(--ink-2)`)

### 7. CTA
- `text-align: center`, 140px vertical padding
- Bottom radial red glow
- H2 "Your phone, _finally agentic._" — Inter 700, `clamp(48px, 7vw, 92px)`, letter-spacing −0.04em
- Buttons: primary "Get early access →" + ghost "Read the changelog"

### 8. Footer
- 4-column grid: brand + 3 link columns
- Brand column: logo + tagline ("The universal AI client…")
- Columns: Product, Developers, Company (links are stubs — `href="#"`)
- Bottom bar: copyright left, version tag right, both monospace 12px

## Interactions & Behavior

### Scrolly activation (critical)
Two mechanisms run together for reliability:

1. **IntersectionObserver** on each `.feature`, with `threshold: [0.3, 0.5, 0.7]` and `rootMargin: '-20% 0px -20% 0px'`. On update, picks the entry whose vertical center is closest to viewport center and calls `setActive(idx)`.
2. **Scroll listener** (passive) that runs the same center-distance calculation as a fallback.

`setActive(i)` updates classes: `.phone.active` on the matching phone, `.rail-dot.active` on the matching dot, `.rail-dot.passed` on all earlier dots. Guarded with `if (i === current) return` to avoid re-applying.

In React/Next.js, implement this as a `useEffect` hook in the Scrollytelling component. The observer should be cleaned up on unmount.

### Phone cross-fade
- From inactive → active: `opacity` 0→1, `translateY(40px) → 0`, `scale(0.96) → 1` over 0.7s with cubic-bezier `(.2, .6, .2, 1)`

### Marquee
- Pure CSS infinite animation; no JS needed. On `prefers-reduced-motion: reduce`, consider pausing it.

### Button hovers
- Primary: background shifts from `#FF375F` to `#ff4f73`, `translateY(-1px)`
- Ghost: background fades in `rgba(255,255,255,0.04)`, border brightens to `rgba(255,255,255,0.24)`
- `.arrow` span inside CTAs translates 2px to the right on hover

## State Management
Only one piece of runtime state: the active scrollytelling index (0–4). Local to the Scrollytelling component — `useState<number>(0)`. No global store, no data fetching.

## Design Tokens

### Colors
```
--bg:           #0a0a0b         /* page background */
--bg-2:         #111113         /* elevated surface (chips, cards) */
--bg-3:         #17171a         /* hover surface / on-dark icon bg */
--line:         rgba(255,255,255,0.08)
--line-2:       rgba(255,255,255,0.14)
--ink:          #f3f3f1         /* primary text */
--ink-2:        #a7a7a3         /* secondary text */
--ink-3:        #6b6b68         /* tertiary / meta */
--accent:       #FF375F         /* brand red, iOS systemPink-ish */
--accent-soft:  rgba(255,55,95,0.14)
--glow:         rgba(255,55,95,0.55)
```

### Typography
- **Sole family**: Inter (weights 300, 400, 500, 600, 700, 800; italic 400/500/600)
- **Monospace** (eyebrows, meta, footer bottom): JetBrains Mono 400/500
- Google Fonts import included at the top of the HTML
- Feature settings on body: `'ss01', 'cv11', 'cv02'` — keeps Inter's stylistic alternates consistent
- Tracking on display headings: `−0.03em` to `−0.04em` (important for the condensed feel)

### Spacing
No formal scale — the HTML uses direct pixel values. Common multiples: 8, 12, 16, 20, 24, 32, 40, 60, 80, 100, 120, 140, 160. If the Next.js project uses Tailwind, its default scale works fine.

### Radii
- 6–8px: small chips, icon tiles
- 12px: card icons
- 20px: card grid wrapper
- 999px: pill buttons, tags, marquee chips

### Shadows
- Button primary glow: `0 8px 30px -12px rgba(255,55,95,0.55)`
- Phone drop shadow (hero): `drop-shadow(0 40px 60px rgba(0,0,0,0.6))`
- Phone drop shadow (scrolly): `drop-shadow(0 50px 80px rgba(0,0,0,0.7))`
- Logo mark: `0 4px 14px rgba(255,55,95,0.35)` + `0 0 0 1px rgba(255,255,255,0.06)`

## Assets
Everything lives under `assets/` in this bundle. Copy the folder into `public/` in your Next.js project (e.g. `public/landing/`) and reference with leading slash (e.g. `/landing/phone-1.png`).

- `mcpy-logo.png` — app icon, 1024×1024 (provided by user, original brand mark)
- `phone-1.png` … `phone-5.png` — 5 iPhone mockups used in hero fan + scrollytelling stage (provided by user)
- `providers/*.svg` — monochrome + brand-color SVG icons for model providers (Anthropic, Claude, OpenAI, Gemini, Grok, xAI, Meta, Mistral, DeepSeek, Moonshot, Z.ai, Arcee). Third-party brand marks — treat as trademarks of their respective owners.

Missing / to-source from the real project:
- Connector app icons (Gmail, Drive, Calendar, Notion, Supabase logos). Currently text-placeholder letter tiles.
- "Trusted" band wordmarks — currently plain text.
- Real App Store URL for the primary CTA.

## Copywriting
All copy in the HTML is final unless the user says otherwise. A few places to double-check before publishing:

- Version tag in footer bottom (`v 0.9.3 — private beta`)
- Location tag (`crafted in Istanbul`)
- The hero pill says "iOS + Android" — if only iOS is launching, update accordingly

## Suggested React Component Structure

```
app/
  page.tsx                      # composes the landing page
  (landing)/
    _components/
      Nav.tsx
      Hero.tsx
        PhoneFan.tsx             # the 5-phone hero arrangement
      RoutesBand.tsx
      Scrollytelling/
        index.tsx                # hosts state + IntersectionObserver
        Stage.tsx                # sticky phone stack + progress rail
        FeaturePanel.tsx         # receives { index, eyebrow, title, copy, tags?, bullets? }
        features.ts              # array of feature data
      ModelsMarquee.tsx
        marquee.module.css       # the CSS keyframes + mask
      ConnectorsGrid.tsx
      CTA.tsx
      Footer.tsx
  globals.css                    # CSS variables, font imports
public/
  landing/
    mcpy-logo.png
    phone-1.png … phone-5.png
    providers/*.svg
```

## Files in this bundle
- `Landing Page.html` — the full working prototype; open it in a browser to verify visual details
- `assets/` — all images and SVGs referenced by the HTML
- `README.md` — this document

## Prompt to paste into Claude Code
> I'm handing off a landing-page design for mcpy. The design lives in `design_handoff_landing/Landing Page.html` with assets in `design_handoff_landing/assets/`. Read `design_handoff_landing/README.md` for the full spec, including the scrollytelling behavior, the feature↔phone mapping, the design tokens, and the suggested component structure.
>
> Please implement this in my Next.js project:
> 1. Copy the assets into `public/landing/`.
> 2. Add the CSS variables and Google Fonts import to the global stylesheet (or convert to Tailwind config if this project uses Tailwind).
> 3. Build the page as `app/page.tsx` (or wherever the landing route lives in this project), broken into the components listed in the README.
> 4. The scrollytelling section must use an IntersectionObserver + scroll fallback exactly as described — five features, five phones, sticky left column, progress rail.
> 5. Match the HTML prototype pixel-accurately. When in doubt, open the HTML and compare.
>
> Do not ship the raw HTML — turn it into idiomatic React components that fit this project's existing patterns.
