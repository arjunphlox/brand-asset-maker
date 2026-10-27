---
title: Numbers
scope: Three numbers side by side, each with a short label, under an optional title.
owns:
  - Slots title · number1 · label1 · number2 · label2 · number3 · label3 and their budgets
  - The shared slide chrome slots footer · page · logo (positions set in base.css)
  - Bounded variation: scheme, accent
see-also:
  - ../select.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Numbers

**Principle carried:** Rhythm → Flow (three equal cells, one size). Similarity → Compare (the same treatment says the three are the same kind of fact).

A content slide (the body of the deck).

## Why it works

- **Three facts fit in memory.** The slide shows three number and label pairs, no more. People hold about three to five chunks at once, so all three stay in mind. ([Cowan 2001](../../../docs/design/system/visual/sources.md#cowan-2001))
- **The numbers are seen before the labels.** Each number is 146px in the display face and each label is 38px. In print ads, attention to a text element grows with its surface size. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **Equal cells read as one set.** The three cells have the same size and treatment, and each label sits under its number. Things that look alike or sit close together are seen as one group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **Large accent numbers still pass contrast.** With `accent: numbers`, the three figures take the accent text colour. At 36px and above, `contrast` asks for 3:1 against the surface; smaller text needs 4.5:1. ([W3C 2023 (WCAG 2.2)](../../../docs/design/system/visual/sources.md#wcag-22))

## How it comes across

**credible, simple.** A few numbers together: believed, easy to take in. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | no | ≤ 8 words, ≤ 50 chars | `h2`: display face, 3.6cqi (69px) |
| `number1` | yes | ≤ 2 words, ≤ 5 chars | `data-snippet`: display face, 7.6cqi (146px) |
| `label1` | yes | ≤ 8 words, ≤ 48 chars | `body`, 2cqi (38px), up to two lines |
| `number2` | yes | ≤ 2 words, ≤ 5 chars | `data-snippet` |
| `label2` | yes | ≤ 8 words, ≤ 48 chars | `body` |
| `number3` | yes | ≤ 2 words, ≤ 5 chars | `data-snippet` |
| `label3` | yes | ≤ 8 words, ≤ 48 chars | `body` |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: number1 > number2 > number3 > label1 > label2 > label3 > title > footer > page > logo.

The logo (top left), the footer (bottom left) and the page number (bottom right) are the slide chrome: `base.css` places them at the same spot on every slides layout, so a deck reads as one thing. The content sits in `.pg-slide-body`, between them.

## Format

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`bam.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `accent` | numbers · none | numbers | The three numbers take the accent text colour, or stay on-surface |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- One number → **stat**. Two → two stat slides, or a **chart** when they compare.
- More than three → **chart** when they measure one thing, or two numbers slides.
- A number over 5 characters → **stat**.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never mix a count, a percentage and a price as if they compared. Three facts side by side is not a chart.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/numbers']"]
- prop: accent
  label: Accent target
  kind: select
  values: [numbers, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/numbers']"]
```
