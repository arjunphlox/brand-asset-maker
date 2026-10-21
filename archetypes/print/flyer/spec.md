---
title: Flyer
scope: A hand-out flyer for an event: what it is, when and where, one or two lines on what to expect, and what to do. A4 or A5, read in a few seconds in someone's hand.
owns:
  - Slots kicker · headline · date · place · body · cta · logo and their budgets
  - The A4-portrait, A5-portrait print frames for this job
  - Bounded variation: scheme, align, size
see-also:
  - ../select.md
  - ../poster/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Flyer

**Principle carried:** Hierarchy → Prioritise (headline, then the date and place as one block on an accent rule, then the body). Grouping → Navigate (the facts sit together, apart from the description).

## Why it works

- **The headline is read first.** The `headline` is 10cqi (12.5cqi with `size: large`) and the `body` is 2.6cqi. Attention goes first to the region that differs most in size. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **Date and place read as one block.** The `date` and `place` share one size (5cqi), one accent rule and a tight gap. Things that sit close together are seen as one group, apart from the description. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **The facts are easy to find.** The `date` and `place` are set in the display face, apart from the `body`. Headings and numbers that show a text's structure help readers find their way. ([Lorch 1989](../../../docs/design/system/visual/sources.md#lorch-1989))
- **A short body.** The `body` is at most 30 words. In studies of learning, people understand more when extra words are left out. ([Mayer 2009](../../../docs/design/system/visual/sources.md#mayer-2009))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `kicker` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, uppercase, 2.2cqi, top row at the end side. The series or the event's name ("Kadri Pop-up") |
| `headline` | yes | ≤ 8 words, ≤ 64 chars | `h1`: display face, 10cqi (12.5cqi with `size: large`); the one line people read first |
| `date` | yes | ≤ 4 words, ≤ 24 chars | `h3`: display face, 5cqi, beside an accent rule. The day, and the time if there is one. A message fact |
| `place` | yes | ≤ 6 words, ≤ 40 chars | `h3`: display face, 5cqi, under the date. Where to go. A message fact |
| `body` | yes | ≤ 30 words, ≤ 200 chars | `body`: body face, 2.6cqi, up to 80% of the width. What to expect, one or two sentences |
| `cta` | no | ≤ 3 words, ≤ 20 chars | `label`: body face, uppercase, 2.4cqi, below the body. Starts with a verb |
| `logo` | yes | asset | Top row, start side |

Hierarchy: headline > date > place > body > cta > kicker > logo.

**Facts come from the message.** When a campaign's facts (a date, a place, a price) live in `messages/<name>.json`, the generator rows reference them (`{ "fact": "date" }`) and `facts-consistent` fails any print piece that states a fact in another form.

## Formats

`A4-portrait`: A4 portrait, 1240×1754 (210×297 mm at 150 dpi) · `A5-portrait`: A5 portrait, 874×1240 (148×210 mm at 150 dpi). Safe zone 5 mm inside the trim, 30px on every side (`poligraf.config.json`, an estimate to re-measure against the printer's spec). 1cqi is 12.4px at A4-portrait, 8.74px at A5-portrait. The frame is the trim: bleed is not drawn. The proof PNG renders at `render.scale` 2, 300 dpi.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment. With `center` the accent rule moves above the date and the block centres |
| `size` | regular · large | regular | The headline step: 10cqi or 12.5cqi. `large` is for a headline of four words or fewer |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

`facts-consistent` runs too when the generator names a message.

## Fallbacks

- `date` missing → not an event flyer yet. Ask for the date, or make a poster (`print/poster`).
- `headline` over 8 words → rewrite it. The body carries the rest.
- `body` over 30 words → cut it, or move the rest to the event's other channels.
- `place` over 6 words → keep where to go; the full address goes on the event page.
- `cta` over 3 words, or not starting with a verb → rewrite it.
- `logo` missing → refuse; no flyer.

## Decisions

- 2026-10-21 — Added with the `print` use-case (five forms plan, form 5). Closes the Kadri gap note `kadri-flyer-gap-note.md` (ask c, an A5 flyer for the pop-up): the slots, budgets, hierarchy and bounded variation are the ones that note asked for. Two of its asks are later steps, not this layout: bleed (the frame is the trim; colour runs to the trim) and a PDF export. `min-text` in points is met by the frame itself: every print frame is 150 dpi, so `minTextPx` 17 is 8pt, and A5 has its own frame so 8pt stays 8pt. The A4 and A5 frames share the proportion, so the same cqi sizes serve both.

## Never do

- Never type a fact the message holds. Reference it (`{ "fact": "date" }`).
- Never print the A4 frame on A5 (or the reverse) by scaling. Render the format the job asks for.
- Never put the place above the date.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/flyer']"]
- prop: align
  label: Align
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/flyer']"]
- prop: size
  label: Size
  kind: select
  values: [regular, large]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/flyer']"]
```
