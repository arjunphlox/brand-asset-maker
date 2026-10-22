# Intake log: Kadri Coffee, 2026-10-22

Kadri Coffee is fictional teaching material by Madhuri Maram.

**The hand-in.** The owner's request: "I want to create a post for the Kadri pop-up at Mill Lane Market on 8 November, for Instagram based on the material from the kadri-coffee folder in aiproductdesign.co repo. Use the brand-asset-maker harness for this." No `brand-folder.md` form was filled in; the owner named the Kadri Coffee demo brand asset kit as the material. The kit's own README says: "For agents: read `brand-tokens.json`, `docs/brand-guide.md`, and `asset-manifest.json` before generating or changing an asset." Those three files, the kit's `logos/` and `fonts/`, and the owner's sentence are the hand-in. A value the kit states in words or JSON is treated as said by the owner (`locked`); a value read off an artwork file or inferred is `derived`.

**The doctor, by hand.** The nine questions, with what the hand-in answers:

| # | Question | Answer from the hand-in | Status |
|---|---|---|---|
| 1 | Logo and wordmark | The kit's compact mark for a light background: `logos/kadri-symbol-dark.svg` → `brand/assets/logo.svg`. For a dark background: `logos/kadri-symbol-light.svg` → `brand/assets/logo-reversed.svg`. Wordmark files `kadri-wordmark-dark.svg` and `-light.svg` kept in `brand/assets/`. Wordmark spelling "kadri", lowercase (the guide: keep the logo lowercase). Bytes unchanged; sha256 in `locked.json`. | you said |
| 2 | Primary colour | `brand-tokens.json`: cream `#FFF5DF`, ink `#302037`, coral `#FF603E`. Paper = cream (the guide: cream for large branding and label backgrounds), ink = ink, accent = coral. | you said |
| 3 | Fonts | Files in the kit's `fonts/` with OFL 1.1 licences: policy path (a). Roles from the guide's table: Hubot Sans 800 wdth 110 for the wordmark, k and badges; Mona Sans 500 for product names, headings and small labels; Mona Sans 400 for tasting notes and supporting text. | you said |
| 4 | Who it is for | Not stated in the kit as one sentence. The guide's intent line: "Good coffee, with a bright everyday mood." Written into `brand.json` `context`. | blank, open: ask "Who is this for, in one sentence?" |
| 5 | How it sounds | The guide: "Be direct, warm, and concrete." | you said |
| 6 | Never say | The guide: no invented sourcing stories; no certifications, health benefits, actual stock, real customer reviews or commercial results; keep the fictional disclosure. | you said |
| 7 | Posts you consider on-brand | The kit's flat front artworks, labels and badges (`components/`) and the preview sheet. Read, never copied into a post. | you said |
| 8 | Photographs | The kit has pouch cutouts and lifestyle scenes (`products/`). BAM has no photograph layout, so none is used; a post over one is a gap note. | not used |
| 9 | Where they run first | The owner: Instagram. Formats 1:1 feed post, 4:5 tall feed post, 9:16 story. | you said |

**Measurements (WCAG 2.x relative luminance; L = 0.2126 R + 0.7152 G + 0.0722 B, channels linearised):**

| Pair | Ratio | Passes |
|---|---|---|
| ink #302037 on cream #FFF5DF | 13.97:1 | 4.5 and 3 |
| coral #FF603E on cream #FFF5DF | 2.77:1 | neither: no coral text on paper |
| coral #FF603E on ink #302037 | 5.04:1 | 4.5 and 3 |
| ink #302037 on coral #FF603E | 5.04:1 | 4.5 and 3 |
| cream #FFF5DF on white #ffffff | 1.08:1 | (the cream is not white; the paper is the cream) |

**Derived values and why:**
- `--brand-accent-ink: #302037`: text on the coral surface. The guide puts ink lettering on the coloured badges; the ink is 5.04:1 on coral. No other candidate in the kit (the cream is 2.77:1 on coral).
- `--brand-muted: #302037`: the kit has three shared colours. Only the hairline rule and the slide foot read muted; no proposal uses them. Ask the owner for a muted colour before a layout needs one.
- `--brand-logo-variant: reversed` on the ink scheme: the dark k on the ink surface would be 1:1. The kit's rule (dark mark on light, cream mark on dark) decides it, but the kit names no post scheme, so it stays a guess until an ink post is picked.
- `--brand-tracking-display: 0em`: the guide sets tracking for the wordmark only (−9 at 390px, −0.023em).
- `--brand-tracking-label: 0.06em`: uppercase labels opened slightly; nothing in the kit.
- `--brand-radius: 28px`: read from the kit's label artwork, `<rect width="1000" height="600" rx="28">` in `components/*-label.svg`.
- The wordmark at the logo slot's size: the slot is 3.4cqi = 36.72px tall; the wordmark canvas (1200×420) would be 104.9px wide and its lettering 92.1px wide (measured in Chromium with `getBBox`). The kit's minimum digital wordmark width is 100px, below which it says to use the k symbol. So the k is the logo and the wordmark slot stays empty.
- Mona Sans `opsz=16` (the guide) cannot be set by a contract 1.5 token; the browser picks the optical size by font size. Left as a gap, not hand-set.

**Conflict noted.** `examples/kadri/` (the workshop's form-based encoding of Kadri) has paper `#ffffff`, ink `#4b1f15`, Hubot Sans 700 for headings and the coral k as the logo. The kit says cream, `#302037`, Mona Sans 500 and the dark k on light. This folder follows the kit, as the owner asked; `examples/kadri/` is untouched. Only the owner can say which is Kadri.

**Open questions for the owner (ask, never guess):**
1. Who is Kadri for, in one sentence? (question 4)
2. Is the pop-up's name "Kadri Pop-up" (as in the message) or "Kadri pop-up"?
3. The call to action "Find our stall" is a draft. Your words?
4. Headings in Mona Sans 500 per the kit, or Hubot Sans 800 per the workshop form?
5. Do you want a coral that can carry text on the cream (the kit's coral is 2.77:1)? If yes, it is a new brand value.
6. A muted colour, for hairlines and footers?

**Exit criterion:** every token in `tokens.css` has a status in `locked.json` (checked by eye: 13 tokens, 13 entries plus `--brand-logo-variant`); this log exists. The cold handoff test (`skills/poligraf--encode.md`) has not been run: it needs a fresh chat with only `brand/` attached.
