---
title: Two columns
scope: A slide title and two labelled columns of body text: two sides, two audiences, two parts of one answer.
owns:
  - Slots title · leftLabel · left · rightLabel · right and their budgets
  - The shared slide chrome slots footer · page · logo (positions set in base.css)
  - Bounded variation: scheme
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

# Two columns

**Principle carried:** Balance → Symmetry (two equal columns). Grouping → Navigate (a label and a hairline open each column).

A content slide (the body of the deck).

## Why it works

- **Equal columns line up part by part.** Both columns have a label, a hairline and a body in the same places. When two things share one structure, people line them up and notice differences in matching places. ([Gentner & Markman 1997](../../../docs/design/system/visual/sources.md#gentner-markman-1997))
- **Labels help the viewer find their way.** `leftLabel` and `rightLabel` open each column. Headings and similar signals help readers find their way and remember the structure. ([Lorch 1989](../../../docs/design/system/visual/sources.md#lorch-1989))
- **The left edge of each column is scanned.** Each column starts with a label at the left edge. On web pages, people scan more than they read, looking at the start of lines and the first words. ([Nielsen 2006](../../../docs/design/system/visual/sources.md#nielsen-2006))
- **Small labels still pass contrast.** `leftLabel` is small text in the accent colour. Below 36px, `contrast` asks for 4.5:1 against the surface. ([W3C 2023 (WCAG 2.2)](../../../docs/design/system/visual/sources.md#wcag-22))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | yes | ≤ 8 words, ≤ 50 chars | `h2`: display face, 3.6cqi (69px) |
| `leftLabel` | yes | ≤ 4 words, ≤ 28 chars | `label`, accent text colour, opens the left column |
| `left` | yes | ≤ 40 words, ≤ 240 chars | `body`, 2cqi (38px), up to six lines |
| `rightLabel` | yes | ≤ 4 words, ≤ 28 chars | `label`, opens the right column |
| `right` | yes | ≤ 40 words, ≤ 240 chars | `body`, 2cqi (38px) |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: title > leftLabel > left > rightLabel > right > footer > page > logo.

The logo (top left), the footer (bottom left) and the page number (bottom right) are the slide chrome: `base.css` places them at the same spot on every slides layout, so a deck reads as one thing. The content sits in `.pg-slide-body`, between them.

## Format

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`poligraf.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- A before and after, or A against B → **comparison**: one short line per side, the better side marked.
- A column over 40 words → cut it, or give each side its own slide.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never add a third column.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/two-column']"]
```
