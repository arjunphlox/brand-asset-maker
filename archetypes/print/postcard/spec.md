---
title: Postcard
scope: The picture side of an A6 postcard: a headline and a short body, with an optional kicker. The address side is not drawn.
owns:
  - Slots kicker · headline · body · logo and their budgets
  - The A6-landscape print frame for this job
  - Bounded variation: scheme, align
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

# Postcard

**Principle carried:** Hierarchy → Prioritise (headline, then body). Balance → Anchor (the block sits on the foot of the safe zone, the logo at the head).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `kicker` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, uppercase, 2.2cqi (19px), in the accent text colour, above the headline |
| `headline` | yes | ≤ 8 words, ≤ 50 chars | `h1`: display face, 7.5cqi (66px) |
| `body` | no | ≤ 24 words, ≤ 150 chars | `body`: body face, 2.4cqi (21px), up to 72% of the width. Optional |
| `logo` | yes | asset | Top row, start side (top centre when `align` is center) |

Hierarchy: headline > body > kicker > logo.

**Facts come from the message.** When a campaign's facts (a date, a place, a price) live in `messages/<name>.json`, the generator rows reference them (`{ "fact": "date" }`) and `facts-consistent` fails any print piece that states a fact in another form.

## Format

`A6-landscape`: A6 landscape, 874×620 (148×105 mm at 150 dpi). Safe zone 5 mm inside the trim, 30px on every side (`poligraf.config.json`, an estimate to re-measure against the printer's spec). 1cqi is 8.74px at A6-landscape. The frame is the trim: bleed is not drawn. The proof PNG renders at `render.scale` 2, 300 dpi.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment and logo position |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

`facts-consistent` runs too when the generator names a message.

## Fallbacks

- `headline` over 8 words → rewrite it.
- `body` over 24 words → cut it.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added with the `print` use-case (five forms plan, form 5). One side only: the address side follows the postal service's layout and carries no brand slot.

## Never do

- Never put text in the strip a postal service reserves on the address side; this layout draws the picture side only.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/postcard']"]
- prop: align
  label: Align
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/postcard']"]
```
