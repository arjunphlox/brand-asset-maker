---
title: Bar chart
scope: A simple horizontal bar chart: a title, two to six bars with a label and a number each, and an optional note for the unit or source.
owns:
  - Slots title · note · label1 · value1 · label2 · value2 · label3 · value3 · label4 · value4 · label5 · value5 · label6 · value6 and their budgets
  - The shared slide chrome slots footer · page · logo (positions set in base.css)
  - Bounded variation: scheme
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

# Bar chart

**Principle carried:** Honesty → Proportion (every bar starts at zero on one linear scale, and its number is printed beside it). Alignment → Compare (one baseline, one left edge, so lengths compare at a glance).

A content slide (the body of the deck).

## Why it works

- **Bars compare along one baseline.** Every bar starts at the same left edge, so the viewer compares bar ends on one common scale. People judge values most accurately that way. ([Cleveland & McGill 1984](../../../docs/design/system/visual/sources.md#cleveland-mcgill-1984))
- **Bars start at zero.** The template draws each bar from zero on one linear scale (`scale: bars`) and refuses mixed units or negative values. A bar chart with a cut axis made readers judge differences as larger than they are, and marks should be in proportion to the numbers. ([Pandey et al. 2015](../../../docs/design/system/visual/sources.md#pandey-2015); [Tufte 2001](../../../docs/design/system/visual/sources.md#tufte-2001))
- **Each number sits with its bar.** `label1` is left of its bar and `value1` is at the end of the bar. Related words and shapes placed together are easier to understand than ones placed apart. ([Mayer 2009](../../../docs/design/system/visual/sources.md#mayer-2009))
- **Two to six bars and no extra ink.** The chart has one baseline, the bars, labels and numbers, and no gridlines. Ink that shows no data is cut, and extra words and pictures leave people learning less. ([Tufte 2001](../../../docs/design/system/visual/sources.md#tufte-2001); [Mayer 2009](../../../docs/design/system/visual/sources.md#mayer-2009))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | yes | ≤ 10 words, ≤ 60 chars | `h2`: display face, 3.4cqi (65px). Says what is measured |
| `note` | no | ≤ 8 words, ≤ 48 chars | `label`, muted, at the far end of the title row: the unit or the source ("Minutes, our brew guide") |
| `label1` | yes | ≤ 4 words, ≤ 24 chars | `body`, 1.9cqi (36px), left of its bar |
| `value1` | yes | ≤ 1 words, ≤ 6 chars | `data-snippet`: display face, 2.6cqi (50px), at the end of its bar. A number with an optional unit; `scale: bars` |
| `label2` | yes | ≤ 4 words, ≤ 24 chars | `body` |
| `value2` | yes | ≤ 1 words, ≤ 6 chars | `data-snippet`, `scale: bars` |
| `label3` | no | ≤ 4 words, ≤ 24 chars | `body`, optional; a bar is drawn only when its label and its value are both given |
| `value3` | no | ≤ 1 words, ≤ 6 chars | `data-snippet`, `scale: bars` |
| `label4` | no | ≤ 4 words, ≤ 24 chars | `body`, optional; a bar is drawn only when its label and its value are both given |
| `value4` | no | ≤ 1 words, ≤ 6 chars | `data-snippet`, `scale: bars` |
| `label5` | no | ≤ 4 words, ≤ 24 chars | `body`, optional; a bar is drawn only when its label and its value are both given |
| `value5` | no | ≤ 1 words, ≤ 6 chars | `data-snippet`, `scale: bars` |
| `label6` | no | ≤ 4 words, ≤ 24 chars | `body`, optional; a bar is drawn only when its label and its value are both given |
| `value6` | no | ≤ 1 words, ≤ 6 chars | `data-snippet`, `scale: bars` |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: title > value1 > label1 > value2 > label2 > value3 > label3 > value4 > label4 > value5 > label5 > value6 > label6 > note > footer > page > logo.

The logo (top left), the footer (bottom left) and the page number (bottom right) are the slide chrome: `base.css` places them at the same spot on every slides layout, so a deck reads as one thing. The content sits in `.pg-slide-body`, between them.

## Format

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`poligraf.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- One number → **stat**. Three unrelated numbers → **numbers**.
- More than six bars → keep the six that matter and say "others" out loud, or split the chart.
- Values in different units, or a negative value → the row is refused (`budget` rule `scale`); a chart of mixed units is not one chart.
- A trend over time → no line-chart layout yet: write a gap note (`workshop/gap-note.md`).
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

- 2026-10-21 — Bar lengths come from the new optional slot field `scale` (contract 1.5): the value slots name the group `bars`, the renderer divides each value by the largest and stamps `--pg-scale-valueN` (0..1) on the frame, and the template multiplies it by the track. Values must share one unit and be zero or more, else the row is refused (`budget` rule `scale`). The value text is printed as typed.

## Never do

- Never start a bar anywhere but zero, or set a bar's length by hand. The renderer draws it from the number.
- Never leave a bar without its number printed beside it.
- Never chart a number the brand cannot source.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/chart']"]
```
