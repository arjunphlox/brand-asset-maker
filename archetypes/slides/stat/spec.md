---
title: Stat
scope: One big number, what it counts, and where it comes from.
owns:
  - Slots number · label · source and their budgets
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

# Stat

**Principle carried:** Hierarchy → Prioritise (the number is the slide). Proximity → Group (label and source sit under it).

A content slide (the body of the deck).

## Why it works

- **One number fills the slide.** `number` is 307px, far larger than `label` at 54px. In print ads, attention to a text element grows with its surface size. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **It is taken in at a glance.** There is one figure, one label and one source line. A slide that the audience can take in within a few seconds keeps them listening to the speaker. ([Duarte 2008](../../../docs/design/system/visual/sources.md#duarte-2008))
- **The label stays with the number.** `label` and `source` sit directly under `number`. Things that sit close together are seen as one group, so the label reads as the number's meaning. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **The accent colour makes it stand out.** With `accent: number`, the figure is the one element in the accent text colour. One item that differs by a single feature such as colour is found at once. ([Treisman & Gelade 1980](../../../docs/design/system/visual/sources.md#treisman-gelade-1980))

## How it comes across

**confident, credible.** One number has to land with force and be believed. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `number` | yes | ≤ 2 words, ≤ 6 chars | `data-snippet`: display face, 16cqi (307px) |
| `label` | yes | ≤ 10 words, ≤ 64 chars | `body`, 2.8cqi (54px). What the number counts |
| `source` | no | ≤ 10 words, ≤ 64 chars | `label`, muted. Where the number comes from |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: number > label > source > footer > page > logo.

The logo (top left), the footer (bottom left) and the page number (bottom right) are the slide chrome: `base.css` places them at the same spot on every slides layout, so a deck reads as one thing. The content sits in `.pg-slide-body`, between them.

## Format

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`bam.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `accent` | number · none | number | The number takes the accent text colour, or stays on-surface |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- A number over 6 characters → **statement**.
- Three numbers → **numbers**. Numbers to compare → **chart**.
- No source for a number the audience could doubt → find one, or leave the number out.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never invent a number, or round one past what the source says.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/stat']"]
- prop: accent
  label: Accent target
  kind: select
  values: [number, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/stat']"]
```
