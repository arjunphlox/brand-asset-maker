---
title: Poster
scope: One huge headline on an A4 poster (A3 at render.scale 3), with an optional line under it and a call to action. Read from across a room.
owns:
  - Slots headline · subline · cta · logo and their budgets
  - The A4-portrait print frame for this job
  - Bounded variation: scheme, align, anchor
see-also:
  - ../select.md
  - ../flyer/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Poster

**Principle carried:** Hierarchy → Prioritise (one dominant element: the headline fills the page; everything else is a step far below it). Balance → Anchor (the block sits on the foot or the head of the safe zone, never floats).

## Why it works

- **The gist comes at a glance.** The `headline` is 15cqi and fills the page, with six words or fewer. People take the gist of an image from a very brief glance, well under a second. ([Potter et al. 2014](../../../docs/design/system/visual/sources.md#potter-2014))
- **One headline, no rival.** A poster has one `headline`. When two equally strong regions compete, attention splits between them, so the layout allows only one. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **A large surface gets attention.** In print ads, the attention a text element gets grows with its surface size. The `headline` is by far the largest element here. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **The block never floats.** The text block sits on the foot of the safe zone, or under the logo with `anchor: top`, so the page feels settled. (HueGrid practice, not a research finding)

## How it comes across

**striking, confident.** Seen from across a room: it must stop people and sound sure. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `headline` | yes | ≤ 6 words, ≤ 40 chars | `h1`: display face, 15cqi (186px, about 89pt at A4); six words or fewer |
| `subline` | no | ≤ 16 words, ≤ 100 chars | `body`: body face, 3cqi, under the headline, up to 80% of the width |
| `cta` | no | ≤ 3 words, ≤ 20 chars | `label`: body face, uppercase, 2.6cqi, under the subline. Starts with a verb, or the site |
| `logo` | yes | asset | Top row, start side (top centre when `align` is center) |

Hierarchy: headline > subline > cta > logo.

## Format

`A4-portrait`: A4 portrait, 1240×1754 (210×297 mm at 150 dpi). Safe zone 5 mm inside the trim, 30px on every side (`poligraf.config.json`, an estimate to re-measure against the printer's spec). 1cqi is 12.4px at A4-portrait. The frame is the trim: bleed is not drawn. The proof PNG renders at `render.scale` 2, 300 dpi.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | accent | Surface and on-surface pair. The accent surface is the default: a poster is seen first as a colour |
| `align` | start · center | start | Text alignment; with `center` the logo moves to the top centre |
| `anchor` | bottom · top | bottom | Where the block sits: on the foot of the safe zone, or under the logo |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- `headline` over 6 words → rewrite it, or make a flyer (`print/flyer`).
- `subline` over 16 words → cut it. A poster is read from a distance.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added with the `print` use-case (five forms plan, form 5). A3 is the A4 frame rendered at render.scale 3 (about 318 dpi at A3): the two share the proportion, and every size here is in cqi.

## Never do

- Never shrink the headline to fit more words. Rewrite it, or make a flyer.
- Never put two headlines on a poster.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/poster']"]
- prop: align
  label: Align
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/poster']"]
- prop: anchor
  label: Anchor
  kind: select
  values: [bottom, top]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/poster']"]
```
