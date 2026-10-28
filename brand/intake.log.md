# Intake log

Date: 2026-10-28. Inputs: the Figma file in [sources.md](sources.md). No engine (`npm run doctor` does not exist here); the ten questions in `workshop/brand-folder.md` were walked by hand.

| # | Item | Asked? | Answer | What was written / guessed |
|---|---|---|---|---|
| 1 | Logo and wordmark | Partly (reversed mark) | Logo read from Figma component set `Logo`, variant `Color=Blue`. Owner named `Light Blue #EBF7FF` the reversed logo. | `assets/logo.svg`, `assets/logo-reversed.svg`, bytes as exported; wordmark "Finverse" (Figma layer name, page copy). |
| 2 | Primary colour | Yes (roles) | Owner: "Yes, as read": paper #F2F4F5, ink #001F33, accent #009FFF, accent-ink #001F33, muted #59646B, accent text on paper #0074BA. | All five roles `locked`. Ink-scheme muted #87949B **we guessed** (contrast fix, see below). |
| 3 | Fonts | Yes | Owner: Ranade + Amulya (the Graphic Assets faces), not Hanken Grotesk (the Home page face). | Policy (b) free font. Weights 700 / 500 / 500 **we guessed** from Figma usage. Files not downloaded. |
| 4 | Who it is for | Yes | "Developers & fintech teams" → "Product and engineering teams in Asia-Pacific building payments into their apps." | `voice.md`, you said. |
| 5 | How it sounds | Yes | simple, assured, direct (owner picked from two drafts). | `voice.md`, you said. |
| 6 | Never say | Yes | No custody claims: "Never imply Finverse holds, accesses or sells customer funds or credentials." | `voice.md`, you said. |
| 7 | Posts, layouts, guides | No | The Figma file is a website / visual direction file. No social-post layouts or past posts in it. | No owner layouts; Encode starts from BAM's sample layouts. No `coverage.md`. |
| 8 | Photographs | No | None supplied. | No photograph layout; a post over a photo is a gap note. |
| 9 | Platforms | Yes | LinkedIn, Instagram, X. | Formats: 1:1, 4:5, 9:16 (Instagram story), 1.91:1 share card (LinkedIn / X). |
| 10 | Character | Yes | "very simple, clearly calm". | `expression.json`, both you said. |

## Read, not said (we guessed)

- `--brand-weight-display` 700, `--brand-weight-body` 500, `--brand-weight-label` 500: most used Ranade / Amulya styles in Graphic Assets.
- `--brand-tracking-display` -0.02em: -2% on Ranade Bold small sizes and on the Home page headlines.
- `--brand-radius` 16px: most used corner radius on the Home page.
- Ink-scheme `--pg-muted` #87949B: #59646B on #001F33 is 2.78:1 (fails 4.5:1); Cool Grey 40 is 5.42:1.
- Three approved lines in `voice.md`, copied from the Figma page copy.

## Contrast table (WCAG, measured with the formula)

| Pair | Ratio | 4.5:1 | 3:1 |
|---|---|---|---|
| ink #001F33 on paper #F2F4F5 | 15.30 | pass | pass |
| muted #59646B on paper | 5.50 | pass | pass |
| accent #009FFF on paper | 2.57 | fail | fail |
| accent text #0074BA on paper | 4.52 | pass | pass |
| accent-ink #001F33 on accent #009FFF | 5.95 | pass | pass |
| paper on ink | 15.30 | pass | pass |
| accent #009FFF on ink | 5.95 | pass | pass |
| muted #59646B on ink | 2.78 | fail | fail |
| Cool Grey 40 #87949B on ink | 5.42 | pass | pass |
| reversed logo #EBF7FF on ink | 15.50 | — | logo |
| reversed logo #EBF7FF on accent | 2.60 | — | logo |
| logo #009FFF on accent #009FFF | 1.00 | — | vanishes |

## Notes for the owner

- Figma variable names for Cool Grey are one step off the swatch labels (variable "Cool Grey 0" = swatch "Cool Grey 10" = #F2F4F5). Values agree.
- "simple" and "calm" sit on the same scale in the expression map (simple ↔ busy; calm is a synonym of simple), at two different strengths. Posts will be read on that one scale.
- The blue logo vanishes on the accent scheme. Which scheme shows the reversed logo is decided when a sheet shows it (intake step 5c), not now.
