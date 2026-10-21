---
title: Comparison
scope: Two panels side by side: before and after, or A against B. One short line each, the better side marked.
owns:
  - Slots title · leftLabel · left · rightLabel · right and their budgets
  - The shared slide chrome slots footer · page · logo (positions set in base.css)
  - Bounded variation: scheme, emphasis
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

# Comparison

**Principle carried:** Contrast → Separate (the marked panel takes the accent surface). Balance → Symmetry (two equal panels make the comparison fair).

A content slide (the body of the deck).

## Why it works

- **Matching panels line up part by part.** Both panels have a label (`leftLabel`, `rightLabel`) and one `h3` line in the same places. When two things share one structure, people line them up and notice the differences in matching places. ([Gentner & Markman 1997](../../../docs/design/system/visual/sources.md#gentner-markman-1997))
- **The marked panel stands out.** With `emphasis: right`, the right panel takes the accent surface while the left stays plain. An item set apart from items that are alike is remembered better, and a filled shape groups what is inside it. ([von Restorff 1933](../../../docs/design/system/visual/sources.md#von-restorff-1933); [Palmer 1992](../../../docs/design/system/visual/sources.md#palmer-1992))
- **Text on the accent stays readable.** The marked panel uses its own text colour, and the pair swaps on the accent scheme. `contrast` still checks every pair: text needs 4.5:1, large text 3:1. ([W3C 2023 (WCAG 2.2)](../../../docs/design/system/visual/sources.md#wcag-22))
- **The better side is always on the right.** The layout puts the side that wins in the right panel and its Never do forbids marking the left. The slide is read left to right, so the side that wins is read last. (HueGrid practice, not a research finding)

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | no | ≤ 8 words, ≤ 50 chars | `h2`: display face, 3.6cqi (69px), optional |
| `leftLabel` | yes | ≤ 3 words, ≤ 20 chars | `label` at the top of the left panel ("Before") |
| `left` | yes | ≤ 16 words, ≤ 100 chars | `h3`: display face, 3cqi (58px), up to four lines |
| `rightLabel` | yes | ≤ 3 words, ≤ 20 chars | `label` at the top of the right panel ("After") |
| `right` | yes | ≤ 16 words, ≤ 100 chars | `h3`, on the accent surface when `emphasis` is right |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: right > left > rightLabel > leftLabel > title > footer > page > logo.

The logo (top left), the footer (bottom left) and the page number (bottom right) are the slide chrome: `base.css` places them at the same spot on every slides layout, so a deck reads as one thing. The content sits in `.pg-slide-body`, between them.

## Format

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`poligraf.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `emphasis` | right · none | right | `right`: the right panel takes the accent surface with its own text colour (on the accent scheme the pair swaps). `none`: both panels are outlined |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- A side over 16 words → **two-column**.
- Neither side is better → `emphasis: none`, or **two-column**.
- More than two options → **chart** when they measure one thing, else **bullets**.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never mark the left panel as the better one: the eye ends on the right, and so does the argument.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/comparison']"]
- prop: emphasis
  label: Emphasis
  kind: select
  values: [right, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/comparison']"]
```
