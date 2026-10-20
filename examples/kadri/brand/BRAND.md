---
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
credit: "Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission."
---

Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission.

# Kadri Coffee — BRAND.md

Read this before any render. Values are copied from `tokens.css`, `fonts.md`, `voice.md`, `locked.json`, `brand.json`. If they ever disagree, those files win and this file is regenerated. Status is as of approval `apr-0001` (2026-10-20): a value marked "you picked" was a guess until the owner picked a post that uses it.

Kadri Coffee is a fictional teaching brand by Madhuri Maram, used with her permission.

## 1. Visual

| Token | Value | Status |
|---|---|---|
| `--brand-accent` | `#FF603E` | you said (locked): hand-in question 2 |
| `--brand-paper` | `#ffffff` | you said: you picked it (apr-0001); first a guess, the scale's contrast basis |
| `--brand-ink` | `#4b1f15` | you said: you picked it (apr-0001); first a guess, scale step 12 |
| `--brand-muted` | `#cb492d` | you said: you picked it (apr-0001); first a guess, scale step 11 |
| `--brand-accent-text-on-paper` | `#cb492d` | you said: you picked it (apr-0001); first a guess, scale step 11 (feedback/0001) |
| `--brand-accent-ink` | `#4b1f15` | we guessed (derived): the scale's recommended text on the accent |
| `--brand-muted-on-ink` | `#ff876d` | we guessed: scale step 8 |
| `--brand-logo-variant` | `reversed` (accent scheme only) | we guessed: the dark k goes on coral (feedback/0002); declared under `.pg-frame[data-scheme="accent"]` |
| `--brand-font-display` | `"Hubot Sans", sans-serif` | you said: hand-in question 3 |
| `--brand-font-body` | `"Mona Sans", sans-serif` | you said: hand-in question 3 |
| `--brand-weight-display` | `700` | you said: you picked it (apr-0001); first a guess |
| `--brand-weight-body` | `400` | you said: you picked it (apr-0001); first a guess |
| `--brand-weight-label` | `600` | you said: you picked it (apr-0001); first a guess |
| `--brand-tracking-display` | `0em` | you said: you picked it (apr-0001); first a guess |
| `--brand-tracking-label` | `0.06em` | you said: you picked it (apr-0001); first a guess |
| `--brand-radius` | `0px` | you said: you picked it (apr-0001); first a guess |

Schemes:
- **paper**: #ffffff surface, #4b1f15 text, muted #cb492d. Text painted in the accent reads `--brand-accent-text-on-paper` #cb492d through `.pg-frame[data-scheme="paper"] { --pg-accent-text: … }` in `tokens.css` (the coral is 3.00:1 on white; feedback/0001). Bars keep #FF603E.
- **ink**: #4b1f15 surface, #ffffff text, accent text #FF603E (4.64:1); muted reads `--brand-muted-on-ink` #ff876d through `.pg-frame[data-scheme="ink"] { --pg-muted: … }`.
- **accent**: #FF603E surface, #4b1f15 text (4.64:1). The logo is the dark k (`logo-reversed.svg`) through `.pg-frame[data-scheme="accent"] { --brand-logo-variant: reversed; }` in `tokens.css`: the coral k vanishes here (feedback/0002, resolved by contract 1.4). No generator lists `accent` yet: no accent post has been picked.

## 2. Fonts

Policy path **(a): files supplied.** Owner: "Hubot Sans for the logo and headings, Mona Sans for everything else. Files attached." `brand/fonts/HubotSansVF-Regular.ttf` (display) and `brand/fonts/MonaSansVF.ttf` (body), unchanged, SIL Open Font License 1.1 (licence files beside them). `@font-face` rules in `brand/fonts.css` declare each file's own axis ranges (Hubot Sans weight 200 to 900, width 80% to 120%; Mona Sans weight 200 to 900). Fonts status in `locked.json`: you said (families and files handed in). Weights: display 700, body 400, labels 600. Hubot Sans renders at the CSS default width (100); nothing set a width.

## 3. Voice

Tone (you said): direct · warm · concrete. Approved lines: none. The bag in the two posts shows "COFFEE FOR YOUR EVERYDAY." and "GOOD COFFEE. YOUR WAY."; that copy was read off a photograph, so we guessed it, and it becomes an approved line only when the owner says so. Never claims (you said): "Never imply certifications, health benefits or a sourcing story we cannot prove." Never claims (we guessed): no invented numbers (the only number handed in is the 250 g on the bag); no invented quotes from people (the brand may quote itself). Style (we guessed): short declaratives; name the flavour; "you" and "your"; no exclamation marks.

## 4. You said vs we guessed

You said is `locked` and we guessed is `derived` in `locked.json`. Approval (you pick one) is the only thing that turns a guess into something you said.

**You said (handed in):** the accent `#FF603E`; Hubot Sans and Mona Sans, and their files; the coral k (`logo.svg`) and the dark k (`logo-reversed.svg`); the wordmark spelling "kadri", lowercase; who it is for; the tone words; the never-claim.
**You said by picking post `stat--1x1--paper` (apr-0001):** paper, ink, muted, accent text on paper, all three weights, both trackings, radius.
**We guessed (still open):** accent-ink #4b1f15, muted-on-ink #ff876d (only the ink and accent schemes use them; no approved post does); the logo variant on the accent scheme (the dark k); the Hubot Sans width (CSS default 100); the bag copy as post copy; the no-invented-numbers and no-invented-quotes rules; ratios 1:1 and 4:5.

## 5. Files

- Logo: `brand/assets/logo.svg`, the coral k (sha256 in `locked.json`). Never redraw or recolour it.
- Dark k: `brand/assets/logo-reversed.svg`. Supplied. Since contract 1.4 it renders on the coral (`accent`) surface, chosen in `tokens.css` (`--brand-logo-variant: reversed`, we guessed, feedback/0002); paper and ink keep the coral k.
- Wordmark: none on posts. The slot is empty on purpose: no wordmark file was handed in, and a typed "kadri" is not the owner's wordmark.
- Fonts: `brand/fonts/*.ttf` via `brand/fonts.css`.
- For a stat post: `archetypes/social-post/stat/` + `brand/tokens.css` + `brand/fonts.css` + `brand/assets/logo.svg` + `generators/stat-bag.json` (paper, 1:1).
- Proposals: `brand/proposals/<layout>.json`. Intake record: `brand/intake.log.md`.

## Refuse

- "Type 'kadri' next to the k in Hubot Sans." → The logo is the owner's k file. A typed wordmark is our drawing, not theirs. Ask for the wordmark file.
- "Use Bricolage for the headline." → The owner said Hubot Sans for headings; the family is locked. Ask the owner first.
- "Add 'ethically sourced, single origin'." → Kadri never implies a sourcing story it cannot prove. Name the flavour instead.
- "Say it boosts your focus." → Kadri never implies health benefits.
- "Put the Velvet Hour gradient behind the headline." → There are no gradients in the tokens, and `token-colors` fails any colour outside them. A gradient is a new style: write a gap note (`workshop/gap-note.md`).
- "Put '10,000 cups poured' on a stat." → No sourced number exists. Ask the owner.
