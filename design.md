# Petfocuz — Design System & Implementation Guide

A comprehensive reference for the Petfocuz brand and web experience. This document is the source of truth: another team should be able to rebuild the site faithfully using this file alone.

---

## 0. 2026 Redesign Notes

This revision simplifies the site around a premium minimalist voice while preserving the teal / black / white palette.

**Services page** — the left category sidebar is removed. All 8 services stream vertically in a single alternating image ↔ copy layout, separated by a 96 px hairline `bg-border` divider. Each block is centred inside `max-w-5xl`, alternates order every second block, and reveals with `framer-motion` fade-and-rise (`y: 30 → 0`, `opacity: 0 → 1`, `duration: 0.6`). Images hover-zoom to `scale(1.05)` over 700 ms.

**FAQ page** — category filter/sidebar is removed. A single centred column (`max-w-3xl`) presents every question in one Radix Accordion, with the search input remaining at the top (`rounded-full`, `shadow-soft`). Category chips inside each row are removed; questions are now the sole surface.

**About page (v3 — story-driven)** — restructured into five focused blocks with no filler space:

1. **Hero** — split layout (`grid md:grid-cols-2 md:items-center`) with the "Meet Petfocuz." headline + subtitle on the left and a `4:5` founder portrait (`founder-maxon.jpg`) on the right. Portrait sits first on mobile (`order-1 md:order-2`). Ambient teal `blur-3xl` glow behind the section. `bg-surface`, `pt-32 md:pt-36`, `pb-16 md:pb-24`.
2. **Founder Story** — two-column `md:grid-cols-[1fr_1.1fr]` inside `max-w-6xl`. Left: portrait in a `rounded-[32px] shadow-lift` frame with a floating name-plate card (`Maxon Mathew / Founder · Lead Groomer`) pinned to `-bottom-6 -right-6` (desktop only). Right: eyebrow "Founder Story", `Meet Maxon Mathew.` H2, the two-paragraph first-person story, followed by a 3-item stat strip (`5,000+ Happy Pets`, `10+ yrs Experience`, `SG Trained Standards`) separated by a top border. `py-20 md:py-28`.
3. **Core Values** — 4-column grid (`sm:grid-cols-2 lg:grid-cols-4`, `max-w-6xl`) of icon cards on `bg-surface`. Icons: `Scissors`, `ShieldCheck`, `HeartHandshake`, `Sparkles`. Titles: Professional Grooming, Pet Safety & Hygiene, Stress-Free Handling, Loving & Compassionate Care. Cards hover-lift `-translate-y-1` and swap the icon tile from `bg-primary/10 text-primary` to `bg-primary text-primary-foreground`.
4. **Gallery** — bento masonry (`grid-cols-2 md:grid-cols-4`, `auto-rows-[180px] md:auto-rows-[220px]`) with the first tile spanning `md:col-span-2 md:row-span-2`. Every tile is a `<button>` that opens a full-screen lightbox (framer-motion `AnimatePresence`, `bg-foreground/85 backdrop-blur`, close via `X` button, backdrop click, or Esc). Tiles hover-zoom to `scale(1.10)` over 700 ms with a bottom-gradient overlay reveal.
5. **Final CTA** — reuses `CtaBanner` with copy "Experience Professional Pet Care in Thrissur." + "Appointment-only. Personal, calm and always tailored to your pet.", exposing Book Appointment (solid) and WhatsApp us (glass) buttons.

The prior `Timeline` and `Our Story` blocks are removed on this page to keep the About page tight and founder-first; the historical timeline copy remains available in `src/lib/site-data.ts` should it need to be reintroduced elsewhere.

**Reviews section** — now ships with **13 reviews** and a toggle between **Grid** (3 columns, staggered fade-in) and **Carousel** (Swiper autoplay 4.5 s) views. Each card exposes the star rating, the Google G logo (inline SVG), the review body in quotes, an initial-based coloured avatar (`avatarTone` OKLCH per review), owner name + pet, review source (`Google`) and relative date. Cards lift 6 px on hover with a `shadow-soft → shadow-lift` transition and a Google-logo micro-scale.

**Grooming Course teaser** — removed the parent `gap-6` on the copy column and replaced with explicit `mt-3/mt-5/mt-6` steps so the eyebrow, headline, description, checklist and CTA sit as one visually connected block.

**Contact page** — Google Maps iframes removed. Two prominent **location cards** replace them at the top of the left column: `Grooming Studio` and `Home Boarding`, each with a rounded icon tile, "Location NN" eyebrow, title, and an `Open in Google Maps` link with an `ArrowUpRight` micro-interaction. Both link out to Google Maps via `MAP_LINKS` in `src/lib/contact.ts`. The details card gained explicit **WhatsApp** and **Business Hours** rows and a `Follow us` block with pill-style **Instagram** and **YouTube** buttons.

**Global** — sticky Book Appointment + WhatsApp floating actions (`FloatingActions`) and the top scroll progress bar are unchanged and continue to render on every route.

---



## 1. Brand Identity

**Personality:** Professional, hygienic, warm, calm, trustworthy, premium.
**Tone of voice:** Confident but soft. Clear, human, uses "we" and "your pet". Avoids cutesy or infantilising language. Short sentences. Never markets fear.
**Positioning:** A luxury wellness brand for pets. Closer to a modern boutique spa than a veterinary clinic.
**Design philosophy:** Clean layouts, generous whitespace, premium typography, purposeful motion. Handcrafted, not templated.

---

## 2. Colour System

All colours are defined as OKLCH tokens in `src/styles.css` and consumed via Tailwind semantic classes. **Never hard-code hex or `text-white`/`bg-black` in components.**

| Token | Hex | OKLCH | Usage |
|---|---|---|---|
| `--primary` | `#0F9D94` | `oklch(0.63 0.11 190)` | Primary CTAs, links, active states, accents |
| `--primary-dark` | `#0A7B73` | `oklch(0.53 0.10 190)` | Gradient end-stop, hover states |
| `--accent` | `#FF6B57` | `oklch(0.72 0.18 32)` | Warm accent, use sparingly on large text/CTAs |
| `--background` | `#FFFFFF` | `oklch(1 0 0)` | Page background |
| `--surface` | `#F7FAFA` | `oklch(0.977 0.005 190)` | Section-alternating background |
| `--foreground` | `#121212` | `oklch(0.18 0 0)` | Headings and body text |
| `--muted-foreground` | `#555555` | `oklch(0.48 0 0)` | Secondary text |
| `--border` | `#E5ECEC` | `oklch(0.925 0.008 190)` | Dividers, input borders |
| `--card` | `#FFFFFF` | `oklch(1 0 0)` | Card surfaces |
| `--success` | `#39B980` | `oklch(0.72 0.16 155)` | Confirmation, WhatsApp fill |

**Accessibility:** Body copy (`--muted-foreground` on `--background`) meets WCAG AA at 14 px+. Coral accent has insufficient contrast on white for body text — restrict to headings, large text (18 px+), or CTA fills. Interactive elements always ship with a visible focus ring (`focus:ring-2 focus:ring-primary/20`).

**Usage rules:**
- Primary teal = the brand. Every CTA, link, and active state.
- Coral accent = one accent per view. Never combine with primary in the same button.
- Dark hero overlays: linear-gradient from `foreground/90` → `foreground/30`.

---

## 3. Typography

- **Display / headings:** Poppins — weights 500, 600, 700, 800
- **Body / UI:** Inter — weights 400, 500, 600
- **Loading:** Google Fonts via `<link>` in `src/routes/__root.tsx` (Tailwind v4 rule — no `@import` for remote URLs).

**Scale:**

| Role | Size (mobile → desktop) | Weight | Tracking |
|---|---|---|---|
| Hero H1 | 2.5rem → 4.5rem | 700 | -0.02em |
| Section H2 | 1.875rem → 3rem | 700 | -0.02em |
| Card H3 | 1.125rem | 600 | -0.01em |
| Body large | 1rem → 1.125rem | 400 | 0 |
| Body | 0.875rem → 1rem | 400 | 0 |
| Small / meta | 0.75rem | 500-600 | 0.14em (uppercase eyebrows) |

Line-height: 1.05 for hero, 1.1 for section, 1.6 for body. `text-balance` on all large headings.

---

## 4. Layout System

- **Container:** `.container-x` — max-width 1280 px, horizontal padding 1.25rem (mobile) / 2rem (md+).
- **Section vertical rhythm:** `.section-y` — padding 4rem (mobile), 6rem (md), 7rem (lg).
- **Grid gutters:** 1rem (mobile), 1.25rem (md), 1.5rem (lg).
- **Breakpoints (Tailwind v4 defaults):** sm 640, md 768, lg 1024, xl 1280, 2xl 1536.

**Spacing scale:** Standard Tailwind (4 px unit). Prefer 4, 6, 8, 12, 16, 20, 24 for component padding.

---

## 5. Radii, Shadows, Elevation

**Radii tokens:**
- `sm` 8 · `md` 12 · `lg` 20 · `xl` 28 · `2xl` 36 · `3xl` 44 px
- Default `--radius` = 20 px. Cards use 24-36 px. CTAs use full-round (`rounded-full`).

**Shadow tokens:**
- `--shadow-soft` — ambient card
- `--shadow-card` — resting card
- `--shadow-lift` — hover / floating element

Applied as `shadow-soft`, `shadow-card`, `shadow-lift` utilities.

---

## 6. Component Library

### Navbar
- Fixed, full-width, height 64 (mobile) / 80 px (md).
- Transparent over `/`, glassmorphic (`.glass`) + `shadow-soft` on scroll or non-home routes.
- Right-side pill CTA "Book Appointment" links to `/contact-pet-grooming-thrissur`.
- Mobile: sheet-style dropdown from top; hamburger toggles.

### Buttons
- **Primary (`gradient-primary`)** — teal → dark teal, white text, `rounded-full`, 24 px horizontal, 14 px vertical, `shadow-lift`, hover scale 1.03.
- **Secondary** — white background, dark text, same radius/shadow.
- **Ghost** — transparent with ring, used on dark backgrounds.
- Minimum tap target 44×44 (icon buttons use `h-11 w-11`).

### Cards
- Background `bg-background` or `bg-card`, border `border-border`, `rounded-3xl`, padding 24-28 px, `shadow-soft`.
- Hover: `hover-lift` utility → translateY(-4px) + `--shadow-lift`, 400 ms cubic-bezier(0.2,0.8,0.2,1).

### Service Bento Tile
- Full-bleed image + dark bottom gradient overlay.
- Title + short line at the bottom; arrow chip in the corner that rotates 45° on hover.
- Grid: mixed `col-span`/`row-span`; first + boarding tiles span 2 cols.

### FAQ Accordion
- Uses shadcn/Radix `Accordion` primitive (ARIA-correct).
- Trigger: display font, semibold, left-aligned, border-b divider.

### Appointment Form
- React Hook Form + Zod validation.
- Fields: Owner Name, Phone, Email (optional), Pet Name, Pet Type (Dog/Cat), Breed, Age, Service (select from services list), Preferred Date, Preferred Time (dropdown 10 AM – 6 PM, no manual entry), Medical (textarea), Notes (textarea).
- Inputs: `rounded-2xl`, border-input, focus ring `ring-primary/20`.
- Submit builds a formatted WhatsApp message and opens `https://wa.me/919898989898?text=...` in a new tab. No backend calls.

### Video Gallery
- Masonry 2×2 grid; first tile spans 2×2.
- Poster image + play chip; click opens fullscreen dialog with dark scrim.

### Reviews Carousel
- Swiper, autoplay 4.5 s, 1/2/3 slides per breakpoint.
- Google-style card: quote, body, avatar (initial), name, pet, star row.

### Timeline
- Desktop: horizontal, 3 columns with connector line + numbered discs.
- Mobile: vertical stacked list with left border and numbered discs.

### Footer
- 4-column grid (logo + tagline + socials, quick links, services, contact).
- Bottom row: copyright + Kaeon credit link to `www.kaeonstudios.com`.

### Floating Actions
- Fixed bottom-right stack: WhatsApp (green solid disc), "Book Appointment" pill (md+), back-to-top disc (appears >600 scroll).
- Top-of-viewport scroll progress bar (0.5 px, primary gradient).
- Safe-area padding on mobile.

---

## 7. Motion System

- **Library:** framer-motion for reveals, hover, dialog, accordion. GSAP available for advanced scroll. Lenis for smooth scrolling.
- **Durations:** 200 ms (micro), 300-400 ms (default), 600-800 ms (hero entrance).
- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` — soft ease-out.
- **Patterns:**
  - Fade + rise: `y: 24 → 0`, `opacity: 0 → 1`, staggered by 50 ms.
  - Hover lift: `translateY(-4px)` + shadow upgrade.
  - Image ken-burns / zoom: `scale(1.05)` on hover, 700 ms.
- Respects `prefers-reduced-motion`; the SmoothScroll wrapper and global CSS both no-op animations in that mode.

---

## 8. Iconography

- **Library:** lucide-react.
- **Default:** 16 px in text, 20 px in cards, 24 px in hero.
- **Stroke:** 1.5 (Lucide default).
- Icon-only buttons **must** carry `aria-label`.

---

## 9. Imagery

- **Style:** photorealistic, warm natural light, shallow depth of field, teal accents in the environment. No cartoons, no clip-art.
- **Aspect ratios:** hero 16:9 (background-cover), service tiles 1:1, video posters 16:9, portraits 4:5.
- **Colour grading:** slightly warm mid-tones with teal shadows to echo the palette.
- **Alt text:** every image ships with descriptive alt or `alt=""` for decorative use.

---

## 10. Responsive Guidelines

- **Mobile-first.** Base styles target 375 px; enhance up.
- Bottom-safe area padding on floating actions via `pb-[env(safe-area-inset-bottom)]`.
- Multi-item header rows use `grid grid-cols-[minmax(0,1fr)_auto]` on mobile → `flex` on `sm:` (see `responsive-layout-patterns` in codebase context).
- Full-height sections use `min-h-[100svh]` (never `100vh`).
- Type scale steps: hero H1 clamps effectively at 2.5rem → 4.5rem via breakpoint utilities.

---

## 11. Accessibility Standards (WCAG AA)

- Semantic landmarks: exactly one `<main>` per route (in `__root.tsx`), one `<h1>` per page.
- Focus rings: 2 px `ring-primary/20` on all interactive elements.
- Keyboard: Radix primitives cover accordions, dialogs, selects.
- Colour contrast: body text ≥ 4.5:1, large text ≥ 3:1.
- Forms: every input has an associated `<label>`; errors are text (not colour alone).
- Motion: honours `prefers-reduced-motion`.

---

## 12. SEO Structure

**URL hierarchy:**
- `/` — home
- `/pet-grooming-services-thrissur`
- `/about-petfocuz-thrissur`
- `/pet-grooming-faq-thrissur`
- `/contact-pet-grooming-thrissur`

**Head metadata per route** (via TanStack `head()`): unique title, description, `og:title`, `og:description`, `og:url` (relative), `og:type`. Canonical `<link>` on leaf routes only.

**Schema (JSON-LD):**
- `LocalBusiness` — root `__root.tsx`.
- `FAQPage` — FAQ route.
- (Add `Service` per service tile as content solidifies.)

**Heading hierarchy:** one H1 per route; H2 for sections; H3 for card titles.

**Internal linking:** navbar + footer link every page; service tiles deep-link into `/pet-grooming-services-thrissur#<service-id>`.

---

## 13. Asset Naming Conventions

- Images: `src/assets/<domain>-<subject>.jpg` (e.g. `service-boarding.jpg`, `video-3.jpg`).
- Import paths: `@/assets/…` alias.
- Components: `PascalCase.tsx`, grouped by `layout/`, `sections/`, `ui/`.
- Route files: `dash-separated.tsx` matching the URL slug.
- Utilities: `camelCase.ts` in `src/lib/`.

---

## 14. Design Tokens (Reference)

```css
/* Colour */
--primary        oklch(0.63 0.11 190)   #0F9D94
--primary-dark   oklch(0.53 0.10 190)   #0A7B73
--accent         oklch(0.72 0.18 32)    #FF6B57
--background     oklch(1 0 0)           #FFFFFF
--surface        oklch(0.977 0.005 190) #F7FAFA
--foreground     oklch(0.18 0 0)        #121212
--muted-fg       oklch(0.48 0 0)        #555555
--border         oklch(0.925 0.008 190) #E5ECEC
--success        oklch(0.72 0.16 155)   #39B980

/* Typography */
--font-display   "Poppins"
--font-sans      "Inter"

/* Radii */
--radius-sm      8px
--radius-md      12px
--radius-lg      20px  (default)
--radius-xl      28px
--radius-2xl     36px
--radius-3xl     44px

/* Shadows */
--shadow-soft    0 4px 24px -8px  oklch(0.2 0.03 200 / 0.08)
--shadow-card    0 12px 40px -16px oklch(0.2 0.03 200 / 0.16)
--shadow-lift    0 24px 60px -24px oklch(0.35 0.09 190 / 0.35)

/* Z-index */
navbar           50
scroll-progress  60
dialog/lightbox  70

/* Motion */
default-duration 300ms
default-easing   cubic-bezier(0.2, 0.8, 0.2, 1)

/* Breakpoints */
sm 640  md 768  lg 1024  xl 1280
```

---

## 15. WhatsApp Deep-Link Contract

Single source of truth in `src/lib/contact.ts`:

- `WHATSAPP_NUMBER = "919898989898"`
- `openWhatsApp(message?)` opens `https://wa.me/{n}?text={encoded}` in a new tab.
- `buildAppointmentMessage(values)` produces the formatted, multi-line message used by the appointment form and any future service CTAs.

All CTAs — floating button, hero WhatsApp button, appointment form, CTA banners — route through these helpers. Never build wa.me URLs inline in components.

Designed and Developed By Kaeon