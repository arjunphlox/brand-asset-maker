---
title: Offer flyer
scope: A printed offer: one short detail at full size (Free, 20% off, ₹499), an optional old price, what the offer is, when and where, and the small print.
owns:
  - Slots kicker · was · detail · offer · date · place · terms · cta · logo and their budgets
  - The A4-portrait, A5-portrait print frames for this job
  - Bounded variation: scheme, align, panel
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

# Offer flyer

**Principle carried:** Hierarchy → Prioritise (the detail is the dominant element; the offer names it; the terms are a step far below). Contrast → Emphasis (one element in the accent).

## Why it works

- **The deal is seen first.** The `detail` is 20cqi and the `offer` is 6cqi. Attention goes first to the region that differs most in size and colour, so the number is found before anything else. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **One accent, found at once.** Only the `detail` takes the accent text colour. One item that differs by a single feature, such as colour, is found at once, and one item set apart from similar items is remembered better. ([Treisman & Gelade 1980](../../../docs/design/system/visual/sources.md#treisman-gelade-1980); [von Restorff 1933](../../../docs/design/system/visual/sources.md#von-restorff-1933))
- **Date and place sit together.** The `date` and `place` sit side by side in one row with one size. Things close together are seen as one group, so the viewer reads when and where as one fact. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **A stated end date can prompt action.** When the `date` is the day the offer ends, it gives a reason to act now. In coupon studies, use rose as the expiry date came near. ([Inman & McAlister 1994](../../../docs/design/system/visual/sources.md#inman-mcalister-1994))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `kicker` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, uppercase, 2.2cqi, top row at the end side |
| `was` | no | ≤ 8 chars | `label`: body face, 3.2cqi, struck through, above the detail. The old price. Optional |
| `detail` | yes | ≤ 7 chars | `data-snippet`: display face, 20cqi. Seven characters or fewer |
| `offer` | yes | ≤ 8 words, ≤ 48 chars | `h2`: display face, 6cqi, under the detail. What the offer is |
| `date` | no | ≤ 4 words, ≤ 24 chars | `label`: body face, uppercase, 2.6cqi, in the accent text colour. Optional; a message fact |
| `place` | no | ≤ 6 words, ≤ 40 chars | `label`: body face, uppercase, 2.6cqi, beside the date. Optional; a message fact |
| `terms` | no | ≤ 24 words, ≤ 150 chars | `body`: body face, 2.1cqi, the small print. Optional |
| `cta` | no | ≤ 3 words, ≤ 20 chars | `label`: body face, uppercase, 2.4cqi, at the foot. Starts with a verb |
| `logo` | yes | asset | Top row, start side |

Hierarchy: detail > was > offer > date > place > terms > cta > kicker > logo.

**Facts come from the message.** When a campaign's facts (a date, a place, a price) live in `messages/<name>.json`, the generator rows reference them (`{ "fact": "date" }`) and `facts-consistent` fails any print piece that states a fact in another form.

## Formats

`A4-portrait`: A4 portrait, 1240×1754 (210×297 mm at 150 dpi) · `A5-portrait`: A5 portrait, 874×1240 (148×210 mm at 150 dpi). Safe zone 5 mm inside the trim, 30px on every side (`poligraf.config.json`, an estimate to re-measure against the printer's spec). 1cqi is 12.4px at A4-portrait, 8.74px at A5-portrait. The frame is the trim: bleed is not drawn. The proof PNG renders at `render.scale` 2, 300 dpi.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment |
| `panel` | none · block | none | `block`: the detail sits on a solid accent panel (`--pg-accent` surface, `--pg-accent-on` text; the pair swaps on the accent scheme) |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

`facts-consistent` runs too when the generator names a message.

## Fallbacks

- `detail` over 7 characters → it reads as a headline. Say it in the offer, or make a flyer (`print/flyer`).
- `offer` over 8 words → the conditions go in `terms`.
- `terms` over 24 words → the rest goes on the page the CTA points to.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added with the `print` use-case (five forms plan, form 5). The date and place are their own slots (not words inside the terms) so a campaign references them from its message file.

## Never do

- Never invent a price or a discount. The detail and the old price are business facts the owner gives.
- Never accent two elements: with `panel: block` the date and place take the on-surface colour.
- Never type a fact the message holds. Reference it.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/offer-flyer']"]
- prop: align
  label: Align
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/offer-flyer']"]
- prop: panel
  label: Panel
  kind: select
  values: [none, block]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/offer-flyer']"]
```
