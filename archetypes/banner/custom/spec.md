---
title: Custom banner
scope: A banner at any width and height the generator names (`size: [w, h]`). Headline, an optional line, a call to action and the logo, laid out by the frame's shape: wide, square-ish or tall.
owns:
  - Slots headline · sub · cta · logo and their budgets
  - The custom-size frame and its three shapes
  - Bounded variation: scheme, cta
see-also:
  - ../select.md
  - ../link-preview/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Custom banner

**Job:** a placement whose size is not one of the named formats (a partner site's slot, a screen in a venue, a site section band).

**Principle carried:** Hierarchy → Prioritise (one headline at every shape). Balance → the shape picks the flow: a row when wide, a column when square-ish or tall.

## Why it works

- **The headline stays the largest text.** Type is set in `cqmin`, 1% of the short side, so the `headline` keeps its size against the `sub` and `cta` at every frame size. Attention goes first to the largest region. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **Each shape has one reading path.** A wide frame is one row and a tall or square-ish frame is one column, always in the order `logo`, text, `cta`. Things that line up along one path are seen as a group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **One action in every shape.** The `cta` is required and there is only one, starting with a verb. The time to choose grows with the number of options. ([Hick 1952](../../../docs/design/system/visual/sources.md#hick-1952))
- **Thin frames fail instead of shrinking.** The `min-text` check fails a frame where text falls under 12px, such as a very long thin one. Reading slows sharply below a critical print size. ([Legge & Bigelow 2011](../../../docs/design/system/visual/sources.md#legge-bigelow-2011))

## How it comes across

**striking, simple.** A display ad of any size: stop the eye with very little. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `headline` | yes | ≤ 8 words, ≤ 50 chars | `h2`: display face, 15 / 8.5 / 11 cqmin (wide / square-ish / tall), up to three lines |
| `sub` | no | ≤ 14 words, ≤ 90 chars | `body`: body face, 6.5 / 3.8 / 5.4 cqmin, under the headline |
| `cta` | yes | ≤ 3 words, ≤ 18 chars | `label`: body face, uppercase, 6 / 3.2 / 4.6 cqmin, end of the row (wide) or at the foot, starts with a verb |
| `logo` | yes | asset | Start of the row (wide) or top left, mark plus wordmark (when the brand has one) |

Hierarchy: headline > sub > cta > logo.

The call to action is required: a display banner that cannot be clicked through to something is a poster, and this layout is not one.

## Format

Any size: `ratio: "custom"` with `size: [w, h]` in the generator or the proposal (or `--size WxH`), each side 100 to 4000px (`bam.config.json` `customSize`). The renderer stamps the width, the height and the safe zone (6% of the short side on every edge, at least 8px) on the frame, and the checks read that size. Minimum text 12px (`minTextPxByRatio.custom`). Shapes: **wide** at an aspect of 3:1 or wider (one row: logo, text, call to action); **tall** at 3:5 or narrower (a column, larger headline); **square-ish** between (a column). The shapes are container queries on the frame's aspect ratio, never `@media`, and type is set in `cqmin` (1% of the short side), so it keeps its proportion to the frame at every size. A very long thin frame (8:1 and beyond) can bring the call to action under 12px: the `min-text` check fails it; pick a taller size.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `cta` | chip · text | chip | The call to action as a filled chip (the accent surface with its own text colour; on the accent scheme the pair swaps, so the chip turns ink) or as text underlined in the accent |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- Any text over its budget → cut the copy. Never shrink the type to fit: the sizes are set for the unit at 1x.
- `cta` missing → write one, verb first.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout of the web banner form (contract 1.5). The custom ratio is new in 1.5: the generator gives the size, the renderer stamps it and a computed safe zone, and the frame becomes a size container so the template can query its shape.

## Never do

- Never scale another banner into this one. A new size re-runs selection (`../select.md`).
- Never shrink the type to fit longer copy. Cut the copy.
- Never put the only copy of a fact on a banner. The page it links to must say it too.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/custom']"]
- prop: cta
  label: CTA style
  kind: select
  values: [chip, text]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/custom']"]
```
