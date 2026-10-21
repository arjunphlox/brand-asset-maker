---
title: Business card back
scope: The back of a business card: a name, a role and up to four contact lines.
owns:
  - Slots name · role · contact1 · contact2 · contact3 · contact4 · logo and their budgets
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

# Business card back

**Principle carried:** Grouping → Navigate (who, then how to reach them, as two groups). Alignment → Scan (one edge for every line).

## Why it works

- **Two groups, who then how.** The `name` and `role` sit together, and the contact lines sit in a second block 4.4cqi lower. Things that sit close together are seen as one group, so the card reads as the person first and the ways to reach them second. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **Every line starts on one edge.** The `name`, `role` and contact lines share one start edge (or one centre line with `align: center`). Lines that follow one path are seen as one group, and the eye runs down the card without stopping. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **The name is seen first.** The `name` is 6.4cqi and every other line is 3.6cqi. Attention goes first to the region that differs most in size, so the person is found before the details. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **Few lines to hold in mind.** A card has at most four contact lines. People hold about three to five chunks at once, so a short list is easier to remember and use than a long one. ([Cowan 2001](../../../docs/design/system/visual/sources.md#cowan-2001))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `name` | yes | ≤ 4 words, ≤ 32 chars | `h2`: display face, 6.4cqi (32px). A person or the business |
| `role` | no | ≤ 7 words, ≤ 44 chars | `body`: body face, 3.6cqi (18px), under the name. Optional |
| `contact1` … `contact4` | no | ≤ 5 words, ≤ 36 chars each | `body`: body face, 3.6cqi, one per line, below a gap. Optional: a site, an email, a phone, an address line |
| `logo` | yes | asset | Top row, end side, 7cqi tall |

Hierarchy: name > role > contact1 > contact2 > contact3 > contact4 > logo.

## Format

`card`: business card, 502×325 (85×55 mm at 150 dpi). Safe zone 5 mm inside the trim, 30px on every side (`poligraf.config.json`, an estimate to re-measure against the printer's spec). 1cqi is 5.02px at card. The frame is the trim: bleed is not drawn. The proof PNG renders at `render.scale` 2, 300 dpi.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment; with `center` the logo moves to the top centre |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- More than four contact lines → choose four. A card is not a directory.
- A contact line over 5 words → one fact per line.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added with the `print` use-case (five forms plan, form 5). Contact lines are numbered slots (contact1…contact4); empty ones are removed.

## Never do

- Never put a person's name or contact details on a card without their yes. Contact details are facts the owner supplies, never a guess.
- Never set contact lines smaller than 8pt (17px) to fit a fifth line.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/card-back']"]
- prop: align
  label: Align
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/card-back']"]
```
