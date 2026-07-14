# QWER — Website Brief for Claude Code

> **How to use this:** Drop this file + `qwer_logo.png` into an empty project folder, open Claude Code in that folder, and paste the line below as your first message:
>
> *"Read QWER-website-brief.md and build the full website exactly as specified. Run the dev server, take screenshots, critique your own work against the brief, and refine before telling me it's done."*

---

## 0. Language rule (read first)

The **entire website is in Dutch (Nederlands)**. This brief is written in English for clarity, but every piece of user-facing copy is provided in Dutch and must stay in Dutch, exactly as written. Do not translate the copy to English. Do not invent English UI labels.

---

## 1. What we're building

A marketing / landing website for **QWER**, a Dutch startup that helps small and medium businesses (**mkb**) actually adopt AI — through hands-on, tailored workshops and a pilot-based approach.

**Core positioning (make every word of copy serve this):**
The mkb doesn't have a *tools* problem — there are thousands of AI tools. They have a *direction* problem: they don't know where AI fits their business, their team, their customers. QWER sells **guidance and vision, not software.** Warm, human, concrete. The opposite of a SaaS pitch.

**Tone:** direct, confident, calm, no hype. Never use words like "revolutionair", "baanbrekend", "next-level", "game-changer", or empty AI buzz. Plain Dutch that a 55-year-old mkb-owner reads and trusts.

---

## 2. Brand identity

The logo is provided as `qwer_logo.png` in this folder: four keyboard keys spelling **Q W E R** (three charcoal, the **R** in teal), followed by three small mint dots (`…`), with the wordmark **QWER** and tagline **"De rest volgt."** below.

The `…` dots and the tagline **"De rest volgt."** are the conceptual heart of the brand: *you've made the first move (QWER), the rest follows.* Let this idea drive the hero and at least one tasteful animation.

### Colors (derive/confirm against the PNG; these are the target tokens)

```css
--charcoal:      #2B2B2B;  /* keys, dark sections, headings on light */
--charcoal-soft: #3A3A3A;  /* borders, hovers on dark */
--teal:          #0E7C5F;  /* primary accent — the R key, buttons, links */
--teal-dark:     #0A6650;  /* button hover */
--mint:          #86C9AF;  /* the three dots, subtle secondary accent */
--cream:         #F2EFE6;  /* keycap letters, light text on dark bg */
--paper:         #FBFAF7;  /* main light background */
--ink:           #1A1A1A;  /* primary text on light */
--gray:          #5A5A5A;  /* muted body text, tagline */
```

Charcoal + cream + teal is the whole personality. Use teal sparingly — it should *pop*, like the single teal R.

### Typography

- **Headings:** `Space Grotesk` (geometric, slightly technical — echoes the keycap wordmark).
- **Body:** `Inter`.
- **Eyebrows / labels / small accents:** a monospace — `Space Mono` or `JetBrains Mono` — uppercase, letter-spaced. This ties back to the keyboard theme. Use it for the little section labels ("HET PROBLEEM", "DE AANPAK", etc.).

Self-host or use Google Fonts with `font-display: swap`.

### The keyboard motif

Use it with restraint. Good uses: keycap-style buttons/cards with a subtle bottom "key press" shadow; the hero built from actual QWER keycaps; the three `…` dots pulsing gently to reinforce "de rest volgt". Do **not** wallpaper the whole site in keyboards.

**Recreate the four keycaps + dots as inline SVG** for the hero so they can animate crisply (keys depress on hover, dots pulse on a slow loop). Keep the PNG as the footer logo / og-image / favicon source (favicon from the teal **R** key).

---

## 3. Tech stack

- **Astro + Tailwind CSS v4 + TypeScript.** Static output, component-based, trivial to deploy on Vercel/Netlify, easy for a non-dev founder to maintain with Claude Code later.
- Mobile-first and fully responsive. **mkb-owners browse on phones — design the mobile view first.**
- One page, section-based, with smooth in-page scroll to anchors from the nav.
- Respect `prefers-reduced-motion`. Semantic HTML, real `alt` text, WCAG AA contrast, full keyboard navigation.
- Target Lighthouse 95+ on all axes. Lazy-load images, no heavy JS libraries — vanilla/Astro islands only.
- Set page `<title>`, meta description, Open Graph + Twitter tags (use the logo as og-image), and `lang="nl"`.

If you have a strong reason to deviate from the stack, note it and proceed — but keep it simple and statically deployable.

---

## 4. Page structure & Dutch copy

Build these sections top-to-bottom. Copy below is final — use it verbatim. Where you see `[TODO: ...]`, insert a clearly-marked placeholder comment; **do not invent** real names, quotes, emails, or client stories.

### Nav (sticky, minimal)
Logo left. Links right: `Aanpak` · `Wat we doen` · `Over ons` · button **`Plan een kennismaking`** (teal). Collapses to a hamburger on mobile.

### 1. Hero
- Eyebrow (mono): `AI-TRAINING VOOR HET MKB`
- H1:
  > Je weet dat AI belangrijk is.
  > **De rest volgt.**

  (Style "De rest volgt." distinctly — e.g. teal, or paired with the animated `…` dots.)
- Sub:
  > QWER helpt Nederlandse mkb-bedrijven van "we moeten iets met AI" naar concreet aan de slag. Met praktische workshops op maat — geen tools, geen jargon, wel richting.
- Primary CTA: **`Plan een kennismaking`** · Secondary (ghost) CTA: `Zo werkt het`
- Visual: the animated inline-SVG QWER keycaps + pulsing dots.

### 2. Het probleem
- Eyebrow: `HET PROBLEEM`
- H2: `Iedereen praat over AI. Bijna niemand weet waar te beginnen.`
- Body:
  > Je hoort overal dat je "iets met AI" moet doen. Maar wat dan? Welke tool? Voor welk probleem? En levert het écht iets op, of is het weer een dure gadget die niemand gebruikt?
  >
  > Het probleem is geen gebrek aan tools — er zijn er duizenden. Het probleem is richting: weten wat past bij jóuw werk, jouw team en jouw klanten.

### 3. Wat we doen (three keycap-style cards)
- Eyebrow: `WAT WE DOEN`
- H2: `Geen software. Wel inzicht.`
- Card 1 — **Workshops op maat:**
  > Hands-on sessies waarin je team ontdekt waar AI echt tijd en geld bespaart. Toegespitst op jouw sector en jouw processen.
- Card 2 — **Pilot om te starten:**
  > We beginnen klein en concreet. Eén afdeling, één proces. Werkt het? Dan bouwen we verder. Zo niet? Dan weet je dat — zonder groot risico.
- Card 3 — **Begeleiding, geen verkooppraatje:**
  > Wij verkopen geen abonnement en geen platform. We helpen je zélf de juiste keuzes maken. Daarna sta je op eigen benen.

### 4. De aanpak (3 numbered steps)
- Eyebrow: `DE AANPAK`
- H2: `In drie stappen van vraag naar resultaat.`
- Step 01 — **Kennismaking:**
  > Een gratis gesprek. We brengen in kaart waar je nu staat en waar de kansen liggen. Geen verplichtingen.
- Step 02 — **Workshop op maat:**
  > Een praktische sessie met je team. We werken aan echte voorbeelden uit jouw bedrijf — niet aan theorie.
- Step 03 — **Aan de slag:**
  > Je gaat naar huis met concrete toepassingen die je meteen kunt inzetten. En met een helder beeld van de volgende stap.

### 5. Waarom QWER
- Eyebrow: `WAAROM QWER`
- H2: `We denken mee, niet voor je.`
- Three short points:
  > **Nederlands mkb als focus** — geen corporate consultancy, wel de praktijk van jouw bedrijf.
  > **Mensen, geen platform** — je praat met ons, niet met een dashboard.
  > **Onafhankelijk** — we kiezen de oplossing die bij jóu past, niet die voor ons het meeste oplevert.

### 6. Voor wie
- Eyebrow: `VOOR WIE`
- H2: `Voor mkb-bedrijven die klaar zijn om te bewegen.`
- Body:
  > Of je nu in de logistiek zit, een adviesbureau runt of een productiebedrijf hebt — ben je nieuwsgierig naar wat AI voor je kan betekenen, dan is dit het startpunt. Je hoeft geen technische kennis te hebben. Die brengen wij mee.

### 7. Over ons
- Eyebrow: `OVER ONS`
- H2: `Twee mensen. Eén missie.`
- Intro:
  > QWER is opgericht door twee ondernemers die geloven dat AI voor élk bedrijf toegankelijk moet zijn — niet alleen voor de grote spelers met een IT-afdeling.
- Two founder cards:
  > **Thomas** — `[TODO: korte bio, 1–2 zinnen. Rol, achtergrond (International Business, Groningen), waarom hij dit doet.]`
  > **Willem Lenters** — `[TODO: korte bio, 1–2 zinnen. Rol, achtergrond, waarom hij dit doet.]`
- `[TODO: optionele founder-foto per persoon; laat nette placeholder-avatars tot foto's er zijn.]`

### 8. Contact / CTA
- Eyebrow: `AAN DE SLAG`
- H2: `Klaar voor de eerste stap?`
- Body:
  > Plan een vrijblijvende kennismaking. Vertel ons waar je tegenaan loopt, en we laten zien waar AI het verschil kan maken.
- Simple form (Astro form, no backend yet): **Naam**, **Bedrijf**, **E-mail**, textarea **"Je grootste AI-vraag"**, submit button `Verstuur`.
  - Wire it to a `mailto:` fallback for now and leave `[TODO: koppel aan formulier-backend of boekingslink, bv. Formspree / Cal.com]` in a comment.

### 9. Footer
- Logo (`qwer_logo.png`) + tagline **`De rest volgt.`**
- Links: `LinkedIn` `[TODO: URL]` · `E-mail` `[TODO: adres]` · `KvK` `[TODO: nummer]`
- Line: `© 2026 QWER`

---

## 5. Design & interaction principles

- **Whitespace is the aesthetic.** Generous margins, big type, one idea per screen. Do not crowd.
- Alternate light (`--paper`) and dark (`--charcoal`) section backgrounds for rhythm; put a dark section behind at least one keycap moment so the cream/teal sings.
- **Tasteful motion only:** keycaps depress on hover; `…` dots pulse slowly; sections fade/rise in on scroll (subtle, fast, disabled under reduced-motion). No parallax circus.
- Buttons: keycap-inspired — solid teal with a soft "pressable" bottom shadow that compresses on `:active`.
- One primary CTA repeated, never competing CTAs in the same view.
- Body copy max-width ~65ch for readability.

## 6. Deliverables & self-review

1. A working Astro project: `npm install` → `npm run dev` runs cleanly with no console errors.
2. A `README.md`: how to run, edit copy, replace the logo, and deploy to Vercel/Netlify.
3. All `[TODO: ...]` items left as visible placeholders — never fabricated.
4. **Before you say it's done:** run the dev server, screenshot desktop *and* mobile, check against this brief section by section, and fix spacing, hierarchy, contrast, and responsiveness. Iterate at least once on the visual result — don't ship the first draft.

Take your time. Make it genuinely good.
