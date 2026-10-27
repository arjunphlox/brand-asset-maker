---
title: Title slide
scope: The first slide of a deck: the deck title, an optional subtitle, a date or event line, and the logo.
owns:
  - Slots title · subtitle · kicker and their budgets
  - The shared slide chrome slots footer · page · logo (positions set in base.css)
  - Bounded variation: scheme, align
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

# Title slide

**Principle carried:** Hierarchy → Prioritise (the title is the one dominant element). Balance → Anchor (the block sits low on the start side, so the empty top of the slide frames it).

A intro slide (opens the deck).

## Why it works

- **The first look sets the impression.** The title slide is the first thing the audience sees. In studies of web pages, people judged visual appeal in about 50 ms, and that first judgement matched the one they made with more time. ([Lindgaard et al. 2006](../../../docs/design/system/visual/sources.md#lindgaard-2006))
- **One title dominates.** `title` is 119px, `subtitle` 42px and `kicker` a small label. In print ads, attention to a text element grows with its surface size. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **The subtitle gives an overview.** `subtitle` says what the deck is for, in 16 words or fewer. A short overview given before the material helps people learn and keep it. ([Ausubel 1960](../../../docs/design/system/visual/sources.md#ausubel-1960))
- **The block sits low and to the start.** The title block sits low on the start side, so the empty top of the slide frames it. (HueGrid practice, not a research finding)

## How it comes across

**confident, refined.** The opening: sure of itself, well made. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | yes | ≤ 10 words, ≤ 60 chars | `h1`: display face, 6.2cqi (119px), up to two lines |
| `subtitle` | no | ≤ 16 words, ≤ 100 chars | `body`, 2.2cqi (42px), under the title. What the deck is for |
| `kicker` | no | ≤ 6 words, ≤ 40 chars | `label`, in the accent text colour, above the title. The date or the event ("Harbour Market · 8 November") |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: title > subtitle > kicker > footer > page > logo.

The logo (top left), the footer (bottom left) and the page number (bottom right) are the slide chrome: `base.css` places them at the same spot on every slides layout, so a deck reads as one thing. The content sits in `.pg-slide-body`, between them.

## Format

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`poligraf.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment of the content block. The logo, footer and page number stay where every slide has them |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- `title` over 10 words or 60 characters → move the rest into the subtitle.
- A speaker to name → **title-speaker**.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never put the agenda on the title slide. It has its own slide.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/title']"]
- prop: align
  label: Alignment
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/title']"]
```
