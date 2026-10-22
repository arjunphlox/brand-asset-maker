---
credit: "Kadri Coffee is fictional teaching material by Madhuri Maram."
encodedFrom: "the Kadri Coffee demo brand asset kit (aiproductdesign.co, demo-assets/kadri-coffee/), named by the owner as the hand-in on 2026-10-22"
---

Kadri Coffee is fictional teaching material by Madhuri Maram.

# Kadri Coffee — BRAND.md

Read this before any render. Values are copied from `tokens.css`, `fonts.md`, `voice.md`, `locked.json`, `brand.json`. If they ever disagree, those files win and this file is regenerated. Status is as of intake (2026-10-22): no post has been picked yet, so nothing marked "we guessed" has been promoted.

## 1. Visual

| Token | Value | Status |
|---|---|---|
| `--brand-paper` | `#FFF5DF` | you said (locked): the kit's cream, `brand-tokens.json` |
| `--brand-ink` | `#302037` | you said: the kit's ink |
| `--brand-accent` | `#FF603E` | you said: the kit's coral |
| `--brand-accent-ink` | `#302037` | we guessed (derived): the ink on the coral, 5.04:1 |
| `--brand-muted` | `#302037` | we guessed: the kit has no fourth colour; the ink stands in |
| `--brand-logo-variant` | `reversed` (ink scheme only) | we guessed: the cream k goes on the ink surface; declared under `.pg-frame[data-scheme="ink"]` |
| `--brand-font-display` | `"Mona Sans", sans-serif` | you said: the kit's typography table, headings |
| `--brand-font-body` | `"Mona Sans", sans-serif` | you said: the kit's typography table, supporting text |
| `--brand-weight-display` | `500` | you said |
| `--brand-weight-body` | `400` | you said |
| `--brand-weight-label` | `500` | you said: "small labels" |
| `--brand-tracking-display` | `0em` | we guessed: the kit gives tracking for the wordmark only |
| `--brand-tracking-label` | `0.06em` | we guessed |
| `--brand-radius` | `28px` | we guessed: read from the label artwork (`rx="28"`) |

Schemes (measured with the WCAG formula at intake):
- **paper**: #FFF5DF surface, #302037 text (13.97:1). The coral is **2.77:1** on the cream, below 3:1, so coral text is not allowed on this scheme at any size: keep `accent: none` and show the coral as a surface (a `cta: pill` button, a bar). Ink text on that coral surface is 5.04:1. No darker coral is declared: a coral that can carry text on cream is a brand value only the owner can add.
- **ink**: #302037 surface, #FFF5DF text (13.97:1), coral text 5.04:1 (accent text is allowed here). The logo is the cream k (`logo-reversed.svg`) through `.pg-frame[data-scheme="ink"] { --brand-logo-variant: reversed; }`: the dark k would vanish.
- **accent**: #FF603E surface, #302037 text (5.04:1). The logo is the dark k, 5.04:1 on coral.

## 2. Fonts

Policy path **(a): files supplied.** The kit ships `MonaSansVF.ttf` and `HubotSansVF-Regular.ttf` with their SIL Open Font License 1.1 files; copied unchanged into `brand/fonts/` (sha256 in `locked.json`), `@font-face` rules in `brand/fonts.css`. Fonts status: you said. Roles from the kit's typography table: **Mona Sans 500** for product names, headings and small labels (the display face and the label weight), **Mona Sans 400** for tasting notes and supporting text (the body face). **Hubot Sans 800, width 110** is the wordmark, the compact k and the flavour badges only, which reach a post as outlined SVG files, so no post role uses it. Open: the kit sets Mona Sans `opsz=16`; contract 1.5 has no token for optical size, so the browser picks it from the font size. Open: the workshop's form-based encoding (`examples/kadri/`) says Hubot Sans for headings; this folder follows the kit.

## 3. Voice

Tone (you said): direct · warm · concrete. Approved lines (you said, the kit's brand guide): "COFFEE FOR YOUR EVERYDAY." and "GOOD COFFEE. YOUR WAY." The tasting notes and badge lines of the three coffees are the brand's own words too (Velvet Hour: Cocoa · Caramel · Toasted almond, ROUND & RICH; Sunny Side: Peach · Citrus · Honey, BRIGHT & JUICY; Electric Bloom: Berry · Tropical fruit · Florals, WILD & FLORAL). Never claims (you said): name flavours, avoid invented sourcing stories; do not imply certifications, health benefits, actual stock, real customer reviews or commercial results; preserve the fictional-example disclosure. Never claims (we guessed): no invented numbers. Casing (you said): product names in title case, the logo lowercase. Style (we guessed): short declaratives; name the flavour; "you" and "your"; no exclamation marks.

## 4. You said vs we guessed

You said is `locked` and we guessed is `derived` in `locked.json`. Approval (you pick one) is the only thing that turns a guess into something you said.

**You said (the kit):** paper #FFF5DF, ink #302037, accent #FF603E; Mona Sans for headings (500), labels (500) and supporting text (400), and the font files; the dark k (`logo.svg`), the cream k (`logo-reversed.svg`) and both wordmark files; the wordmark spelling "kadri", lowercase; the tone words; the approved lines; the never-claims.
**We guessed (still open):** accent-ink #302037; muted #302037; the logo variant on the ink scheme (the cream k); display tracking 0em; label tracking 0.06em; radius 28px; the "no invented numbers" rule; the style notes. Also open, not tokens: the name of the pop-up as "Kadri Pop-up" (the owner wrote "the Kadri pop-up"); the cta "Find our stall"; Instagram as the first platform (formats 1:1, 4:5, 9:16).

## 5. Files

- Logo: `brand/assets/logo.svg`, the dark k (the kit's `kadri-symbol-dark.svg`, sha256 in `locked.json`). Never redraw or recolour it.
- Reversed logo: `brand/assets/logo-reversed.svg`, the cream k (`kadri-symbol-light.svg`). Rendered on the ink scheme (`brand.json` `logoReversed`, `tokens.css` `--brand-logo-variant`).
- Wordmark: none on posts. The slot is empty on purpose. The kit's wordmark files are kept in `brand/assets/` (`kadri-wordmark-dark.svg`, `kadri-wordmark-light.svg`) but at the logo slot's size (3.4cqi, 36.7px tall) the lettering is 92px wide (measured), under the kit's 100px minimum digital wordmark width, below which the kit says to use the k symbol. A typed "kadri" is never the wordmark.
- Fonts: `brand/fonts/*.ttf` via `brand/fonts.css`.
- Message: `messages/kadri-popup.json` (name, date, place of the pop-up; the two approved lines).
- For the pop-up post: `archetypes/social-post/event/` + `brand/tokens.css` + `brand/fonts.css` + `brand/assets/logo.svg` (or `logo-reversed.svg` on ink) + `generators/event-popup.json` (not approved) + `messages/kadri-popup.json`.
- Proposals: `brand/proposals/<use-case>--<layout>.json`. Intake record: `brand/intake.log.md`. Decisions: `rules/decisions.md`.

## Refuse

- "Set the headline in Hubot Sans, it's the logo font." → The kit's table gives headings to Mona Sans 500; Hubot Sans is the wordmark, the k and the badges. The family is locked. Ask the owner first; it is one token change if they say so.
- "Use Bricolage." → The kit says: do not substitute Bricolage. Only the supplied Hubot and Mona fonts belong to the brand.
- "Type 'kadri' next to the k." → The kit says to use the actual wordmark asset and never redraw it. The wordmark files are in `brand/assets/`; at post size the k is the mark.
- "Make the date coral on the cream post." → Coral on cream is 2.77:1, under 3:1. `contrast` fails it. The coral is a surface on paper (the pill), not a text colour. A darker coral is a new brand value: ask the owner.
- "Add 'single origin, ethically sourced'." → Never imply a sourcing story. Name the flavour instead.
- "Say 'selling fast' or 'only 50 bags left'." → Never imply actual stock or commercial results. No invented numbers.
- "Put the Sunny Side gradient behind the headline." → No gradient is a token, and `token-colors` fails any colour outside them. A gradient is a new style: write a gap note (`workshop/gap-note.md`).
- "Add a photo of the bags behind the text." → BAM has no photograph layout. Gap note.
