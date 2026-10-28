# Finverse — encoded brand

Encoded 2026-10-28 from the Figma visual direction file ([sources.md](sources.md)). `tokens.css` wins wherever this file disagrees with it.

## 1. Visual

| Token | Value | Status | Source |
|---|---|---|---|
| `--brand-paper` | `#F2F4F5` | you said (locked) | [figma-extract.json](sources/figma-extract.json) Cool Grey 0; role confirmed by owner |
| `--brand-ink` | `#001F33` | you said | figma-extract.json Finblue L80 |
| `--brand-accent` | `#009FFF` | you said | figma-extract.json Finblue L40 (logo colour) |
| `--brand-accent-ink` | `#001F33` | you said | figma-extract.json Finblue L80 |
| `--brand-muted` | `#59646B` | you said | figma-extract.json Cool Grey 50 |
| `--brand-font-display` | `"Ranade", system-ui, sans-serif` | you said | figma-extract.json Graphic Assets fonts |
| `--brand-font-body` | `"Amulya", system-ui, sans-serif` | you said | figma-extract.json Graphic Assets fonts |
| `--brand-weight-display` | `700` | we guessed (derived) | figma-extract.json: Ranade Bold most used |
| `--brand-weight-body` | `500` | we guessed | figma-extract.json: Amulya Medium |
| `--brand-weight-label` | `500` | we guessed | figma-extract.json: Amulya Medium |
| `--brand-tracking-display` | `-0.02em` | we guessed | figma-extract.json: -2% on Bold headlines |
| `--brand-radius` | `16px` | we guessed | figma-extract.json: most used radius on Home |

**Scheme overrides** (in `tokens.css`, below `BEGIN CURATED`):

| Scheme | Variable | Value | Status | Why |
|---|---|---|---|---|
| paper | `--pg-accent-text` | `#0074BA` | you said | #009FFF on paper is 2.57:1; Finblue L50 is 4.52:1 |
| ink | `--pg-muted` | `#87949B` | we guessed | #59646B on ink is 2.78:1; Cool Grey 40 is 5.42:1 |

No themes (no `roles.json`). No `--brand-logo-variant` yet: the blue logo vanishes on the accent scheme (1.00:1), so the first sheet will show which scheme needs the reversed mark.

## 2. Fonts

- Display (h1, h2, h3, data): **Ranade**, weight 700.
- Body and label: **Amulya**, weight 500.
- Policy path (b), a named free font: Fontshare, https://www.fontshare.com/fonts/ranade and https://www.fontshare.com/fonts/amulya. Licence: ITF Free Font License, to confirm from the downloaded licence file.
- Files: `brand/fonts/Ranade-Variable.woff2`, `brand/fonts/Amulya-Variable.woff2`. **Not downloaded yet**: every post fails `font-loaded` until they are there.
- Fonts status: we guessed (`fonts.status: derived` in `locked.json`).

Source: [fonts.md](fonts.md)

## 3. Voice

- For: product and engineering teams in Asia-Pacific building payments into their apps. (you said)
- Sounds: simple, assured, direct. (you said)
- Approved lines (we guessed; from the Figma page copy, verbatim):
  - "Easy to plug-in. Even more so, to collect."
  - "Fine tuned down to the penny"
  - "Memorably easy to use and integrate"
- Never claims: never imply Finverse holds, accesses or sells customer funds or credentials. (you said)
- No savings figure ("85%") in a post until the owner gives the exact line and its basis.

**Refuse.**
- Font trap: "Swap the headline to Hanken Grotesk" (or any face but Ranade). Hanken Grotesk is the website face; posts use Ranade for headlines and Amulya for body. Refuse and point to `fonts.md`.
- Voice trap: "Say Finverse keeps your money safe" or "Finverse stores your bank login". Both imply custody of funds or credentials. Refuse.

Source: [voice.md](voice.md)

## 4. You said vs we guessed

**You said:** paper, ink, accent, accent-ink, muted, the accent text on paper (#0074BA), the display and body families, the logo and the reversed logo, the audience, the three tone words, the never-claim, the character words.

**We guessed:** the three weights, display tracking, the corner radius, muted on ink (#87949B), the fonts status, the three approved lines.

You said is `locked` and we guessed is `derived` in `locked.json`. Picking a post (approval) is the only thing that turns a guess into something you said.

## 5. Files

| Use | File |
|---|---|
| Logo on paper and ink | `brand/assets/logo.svg` (Finblue #009FFF) |
| Reversed logo (dark or blue grounds) | `brand/assets/logo-reversed.svg` (#EBF7FF) |
| Wordmark | "Finverse" (`brand.json`) |
| Tokens | `brand/tokens.css` |
| Fonts | `brand/fonts.css` → `brand/fonts/` |
| Formats | LinkedIn, Instagram, X: 1:1, 4:5, 9:16 story, 1.91:1 share card |
| Layouts | BAM sample layouts (`archetypes/`); the owner brought none |
| A stat post | `archetypes/social-post/stat/` (`template.html`, `inputs.schema.json`, `spec.md`) + `archetypes/_shared/base.css` + `brand/tokens.css` + `brand/fonts.css` + `brand/assets/logo.svg`; no generator yet. The number must come from the owner (no approved figure exists). |
| Photographs | none; a post over a photo is a gap note |

## 6. Expression

- Character words: **very simple**, **clearly calm** (both you said, [expression.json](expression.json)).
- Both words sit on one scale in the map: simple ↔ busy (calm is a synonym of simple). A post is read once on that scale; "very" is agreement 0.7 or more, "clearly" 0.4 to 0.7, so one post cannot hit both strengths exactly. Your call which one leads.
- Display face class: not stated; measured from the face once the font files load.
- Brand file and past posts: not measured (no fonts on disk, no past posts).
- Preferred look per layout: none yet (comes after the first contact sheet).
