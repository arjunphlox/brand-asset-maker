---
title: Table tent
scope: One panel of a folded table tent (A6 portrait): a headline, one line and a call to action, read across a table.
owns:
  - Slots kicker · headline · line · cta · logo and their budgets
  - The A6-portrait print frame for this job
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

# Table tent

**Principle carried:** Hierarchy → Prioritise (headline, line, call to action). Balance → Anchor (the block on the centre line, the logo at the head, the call to action at the foot).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `kicker` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, uppercase, 3cqi (19px), above the headline |
| `headline` | yes | ≤ 6 words, ≤ 40 chars | `h1`: display face, 11cqi (68px) |
| `line` | yes | ≤ 16 words, ≤ 100 chars | `body`: body face, 3.6cqi (22px), under the headline |
| `cta` | no | ≤ 3 words, ≤ 20 chars | `label`: body face, uppercase, 3.2cqi, at the foot of the safe zone, in the accent text colour |
| `logo` | yes | asset | Top of the panel (centre, or start side with `align: start`), 8cqi tall |

Hierarchy: headline > line > cta > kicker > logo.

## Format

`A6-portrait`: A6 portrait, 620×874 (105×148 mm at 150 dpi). Safe zone 5 mm inside the trim, 30px on every side (`poligraf.config.json`, an estimate to re-measure against the printer's spec). 1cqi is 6.2px at A6-portrait. The frame is the trim: bleed is not drawn. The proof PNG renders at `render.scale` 2, 300 dpi.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | center · start | center | Centred (seen from either side of a table), or start-aligned |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- `line` over 16 words → cut it; a list of items is a menu (`print/menu`).
- `headline` over 6 words → rewrite it.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added with the `print` use-case (five forms plan, form 5). One panel; a tent prints the same panel twice, the second upside down, which is a print-shop imposition step, not a layout.

## Never do

- Never draw the fold or the second panel into this frame. One panel per render.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/table-tent']"]
- prop: align
  label: Align
  kind: select
  values: [center, start]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/table-tent']"]
```
