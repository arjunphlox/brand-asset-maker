---
title: Sticker
scope: A sticker or label: the logo, or the logo and one short word. Square, or a die-cut circle.
owns:
  - Slots word · logo and their budgets
  - The sticker print frame for this job
  - Bounded variation: scheme, shape
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

# Sticker

**Principle carried:** Restraint: one mark, at most one word. Balance → Anchor (one centred group, inside the circle when the sticker is cut round).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `word` | no | ≤ 2 words, ≤ 12 chars | `h1`: display face, 11cqi (50px), under the logo. Two words or fewer. Optional, but a brand with no wordmark needs it: a sticker with no words cannot be measured by `contrast` |
| `logo` | yes | asset | Centred: 22cqi tall alone, 14cqi with a word. The wordmark joins it when the brand has one |

Hierarchy: logo > word.

## Format

`sticker`: sticker, 450×450 (3×3 in, 76.2 mm, at 150 dpi). Safe zone 5 mm inside the trim, 30px on every side (`poligraf.config.json`, an estimate to re-measure against the printer's spec). 1cqi is 4.5px at sticker. The frame is the trim: bleed is not drawn. The proof PNG renders at `render.scale` 2, 300 dpi.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | accent | Surface and on-surface pair |
| `shape` | square · circle | square | `circle`: the surface is a circle the size of the frame (the die cut), and the group narrows to stay inside it. Outside the circle is not printed (the frame is transparent there) |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- `word` over 2 words or 12 characters → cut it. A sticker is a mark, not a message.
- No wordmark and no word → add a word; a sticker with no words fails `contrast` ("no text elements found").
- `logo` missing → refuse; no sticker.

## Decisions

- 2026-10-21 — Added with the `print` use-case (five forms plan, form 5). The circle is drawn as a disc that carries the surface; the frame around it is transparent, so the PNG proof shows the die cut and the safe-zone check still measures the square 5 mm inside the trim. The group's width is held to 64% of the frame in the circle so its corners stay inside the cut (half the diagonal of the group stays under the circle's radius minus 5 mm).

## Never do

- Never type the brand's name as a wordmark on a sticker. The wordmark comes from `brand.json`.
- Never put a slogan on a sticker. One or two words.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/sticker']"]
- prop: shape
  label: Shape
  kind: select
  values: [square, circle]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/sticker']"]
```
