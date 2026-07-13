# Noble Bathrooms — Demo Landing Page

A Next.js (App Router) landing-page prototype for **Noble Bathrooms Renovations Sydney**,
ported from the "Northforge" design template and rebranded:

- **Accent color:** Sky Blue `#2F9BD6` (replacing the template's orange).
- **Hero background:** full-bleed `Hero-video.mp4` with a legibility scrim.
- **Logo:** `New Logo small_JPG.avif` (served as `/public/logo.avif`).
- **Fonts:** Archivo, Oswald, Space Mono (via `next/font/google`).
- **Stock images:** Unsplash photos under `public/images/`.

> Demo content is illustrative and not represented as 100% accurate.

## Run it

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

## Structure

- `app/layout.tsx` — fonts, metadata, global CSS
- `app/globals.css` — accent token, hover/focus/reveal utilities, responsive rules
- `app/page.tsx` — assembles the sections
- `components/*` — one component per section; interactive ones are client components
  (`Hero` count-up, `QuoteForm`, `Faq` accordion, `StickyCtaBar`, `Reveal` scroll fade-up)
- `lib/fonts.ts` — font-family + palette + contact constants
