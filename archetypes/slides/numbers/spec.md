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

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`poligraf.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

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
