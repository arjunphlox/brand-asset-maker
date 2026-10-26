---
title: Business card front
scope: The front of a business card: the logo and the wordmark, and an optional short line. Nothing else.
owns:
  - Slots tagline · logo and their budgets
  - The card print frame for this job
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

# Business card front

**Principle carried:** Balance → Anchor (one centred group, or one group on the foot of the start side). Restraint: the front carries the brand, the back carries the person.

## Why it works

- **One group and nothing else.** The front holds the `logo` and an optional `tagline`, centred as one group. Things that are easy to perceive, and simple, are liked more. ([Reber et al. 2004](../../../docs/design/system/visual/sources.md#reber-2004))
- **The mark is the largest thing.** The `logo` is 9cqi tall and the `tagline` is 3.6cqi. In print ads, the attention a brand element gets helps people remember the brand, and attention grows with surface size. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **The same mark, the same way.** The front uses the ink scheme and the same mark on every card. A logo or colour becomes a brand asset when people link it to the brand through repeated, consistent use. ([Romaniuk 2018](../../../docs/design/system/visual/sources.md#romaniuk-2018))
- **The front shows the brand only.** Contact details go on the back (`print/card-back`), so the front has no competing text. (HueGrid practice, not a research finding)

## How it comes across

**refined, simple.** A card handed over in person: well made, little on it. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `tagline` | no | ≤ 5 words, ≤ 32 chars | `label`: body face, uppercase, 3.6cqi (18px, 8.7pt), under the logo. Optional. A brand with no wordmark needs it: a card front with no words at all cannot be measured by `contrast` |
| `logo` | yes | asset | The mark, 9cqi tall, with the wordmark beside it when the brand has one (`brand.json` `wordmark`, 7cqi) |

Hierarchy: logo > tagline.

## Format

`card`: business card, 502×325 (85×55 mm at 150 dpi). Safe zone 5 mm inside the trim, 30px on every side (`poligraf.config.json`, an estimate to re-measure against the printer's spec). 1cqi is 5.02px at card. The frame is the trim: bleed is not drawn. The proof PNG renders at `render.scale` 2, 300 dpi.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | ink | Surface and on-surface pair. Ink is the default: the front is the brand's colour, the back is paper |
| `align` | center · start | center | The group in the centre, or at the foot of the start side |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- `tagline` over 5 words → an approved line, or none.
- No wordmark and no tagline → add the tagline; a front with no words fails `contrast` ("no text elements found").
- `logo` missing → refuse; no card.

## Decisions

- 2026-10-21 — Added with the `print` use-case (five forms plan, form 5). The card frame is 85×55 mm at 150 dpi, 502×325: small, so every size is checked against 17px (8pt). The optional tagline exists because a brand without a wordmark (Kadri) has no words on the front, and `contrast` refuses a frame with no text.

## Never do

- Never type the brand's name as a wordmark. The wordmark comes from `brand.json` or the logo file.
- Never put contact details on the front. They go on the back (`print/card-back`).

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/card-front']"]
- prop: align
  label: Align
  kind: select
  values: [center, start]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/card-front']"]
```
