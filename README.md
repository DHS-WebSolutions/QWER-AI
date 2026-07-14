# QWER — website

One-page Dutch marketing site for QWER, built with Astro + Tailwind CSS v4 + TypeScript. Static output, no backend.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
```

Other commands:

| Command           | Action                                    |
| ------------------ | ------------------------------------------ |
| `npm run build`    | Build the static site to `./dist/`        |
| `npm run preview`  | Preview the production build locally      |
| `npm run gen:assets` | Regenerate favicons + og-image from `qwer_logo.png` (see below) |

## Project structure

```
src/
├── components/     # one file per section (Hero, Probleem, Aanpak, ...) + Nav, Footer, KeycapLogo
├── layouts/
│   └── Layout.astro  # <head>, meta/OG/Twitter tags, global scripts
├── styles/
│   └── global.css    # design tokens (colors, fonts) + shared utility classes
└── pages/
    └── index.astro    # assembles all sections in order
public/                # favicons, og-image, qwer_logo.png
```

## Editing the copy

All copy lives directly in the components under `src/components/`, in Dutch, matching the approved brief. Each file is one section — e.g. edit the headline in `src/components/Hero.astro`, the three cards in `src/components/WatWeDoen.astro`, etc.

Search the codebase for `[TODO:` to find every placeholder still waiting on real content:

- **Founder bios & photos** — `src/components/OverOns.astro`. Replace the bracketed bio text per founder, and swap the circular initial-avatar `<div>` for an `<img>` once real photos exist.
- **Footer links** — `src/components/Footer.astro`. Fill in the LinkedIn URL, e-mail address, and KvK number.
- **Contact form backend** — `src/components/Contact.astro`. The form currently falls back to a `mailto:` submission (no real address filled in yet — see the `[TODO: adres]` in the `action` attribute and the HTML comment above the form). Point it at a real backend or booking link (e.g. [Formspree](https://formspree.io) or [Cal.com](https://cal.com)) when one is chosen.

## Replacing the logo

The brand mark lives at `qwer_logo.png` (project root) and `public/qwer_logo.png` (served copy — keep these in sync). The favicon and social-share (`og-image.png`) images are both automatically cropped/composited from that same PNG by `gen-assets.mjs`.

To swap in a new logo file:

1. Replace `qwer_logo.png` in the project root with the new file (same filename).
2. Copy it into `public/` as well: `cp qwer_logo.png public/qwer_logo.png`.
3. Open `gen-assets.mjs` and adjust the `keyCrop` pixel coordinates so they still tightly frame just the accent key (the crop coordinates are specific to the current image's layout).
4. Run `npm run gen:assets` to regenerate `public/favicon-*.png`, `public/apple-touch-icon.png`, and `public/og-image.png`.

## Colors, fonts & motion

Design tokens (the brand colors, font stacks, keycap-press shadow, reveal-on-scroll animation) are all defined once in `src/styles/global.css` and consumed as Tailwind v4 theme values (`bg-charcoal`, `text-teal`, `font-heading`, etc.) throughout the components. Change a token there to re-theme the whole site.

All motion (keycap hover-press, pulsing dots, scroll-reveal) is disabled automatically for visitors with `prefers-reduced-motion` set.

## Deploying

This is a fully static Astro site — `npm run build` outputs plain HTML/CSS/JS to `./dist/`, deployable anywhere that serves static files.

**Vercel**
- Import the repo at [vercel.com/new](https://vercel.com/new).
- Framework preset "Astro" is auto-detected. Default build command (`npm run build`) and output directory (`dist`) need no changes.

**Netlify**
- Import the repo at [app.netlify.com](https://app.netlify.com).
- Build command: `npm run build`. Publish directory: `dist`.

Before going live, update `site` in `astro.config.mjs` to the real production domain (used to generate canonical URLs and absolute OG/Twitter image URLs).
