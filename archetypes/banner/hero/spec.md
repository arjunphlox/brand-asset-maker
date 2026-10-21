---
title: Website hero
scope: The 1920×600 band at the top of a web page, shown at 1x and often cover-cropped at the sides. Eyebrow, headline, body, call to action and the logo.
owns:
  - Slots eyebrow · headline · body · cta · logo and their budgets
  - The 1920x600 frame
  - Bounded variation: scheme, align, cta
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

# Website hero

**Job:** the hero image of the brand's own web page or landing page (not an ad unit).

**Principle carried:** Hierarchy → Prioritise (one h1 leads; eyebrow, body and button follow in that order). Balance → Anchor (the block keeps inside the central 1280px a cover crop still shows).

## Why it works

- **The h1 leads the block.** The `headline` is 69px, against 24px for the `body` and about 21px for the `eyebrow` and `cta`. Attention goes first to the largest region. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **The eyebrow names the topic first.** The `eyebrow` sits above the `headline` in the accent text colour. A small signal that shows structure helps readers find their way. ([Lorch 1989](../../../docs/design/system/visual/sources.md#lorch-1989))
- **Lines share one edge.** With `align` set to start, the `eyebrow`, `headline`, `body` and `cta` all start on one left edge. Things that line up along one path are seen as a group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **The block survives a cover crop.** The safe zone keeps text inside the central 1280px that a cover crop still shows. The 1280px figure is an estimate, to re-measure. (HueGrid practice, not a research finding)

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `eyebrow` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, uppercase, 1.15cqi (22px), above the headline, in the accent text colour |
| `headline` | yes | ≤ 10 words, ≤ 60 chars | `h1`: display face, 3.6cqi (69px), one or two lines |
| `body` | no | ≤ 24 words, ≤ 150 chars | `body`: body face, 1.25cqi (24px), under the headline, up to three lines |
| `cta` | yes | ≤ 3 words, ≤ 20 chars | `label`: body face, uppercase, 1.1cqi (21px), under the body, starts with a verb |
| `logo` | yes | asset | Top left of the safe zone (top centre when `align` is center) |

Hierarchy: eyebrow > headline > body > cta > logo.

The call to action is required: a display banner that cannot be clicked through to something is a poster, and this layout is not one.

## Format

One format: `1920x600`, 1920×600, shown at 1x. Safe zone and minimum text size from `poligraf.config.json` (`safeZone`, `minTextPxByRatio`); 1cqi is 19.2px here.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment and logo position |
| `cta` | chip · text | chip | The call to action as a filled chip (the accent surface with its own text colour; on the accent scheme the pair swaps, so the chip turns ink) or as text underlined in the accent |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- Any text over its budget → cut the copy. Never shrink the type to fit: the sizes are set for the unit at 1x.
- `cta` missing → write one, verb first.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout of the web banner form (contract 1.5). The size is the Website hero band unit (sources in `poligraf.config.json` `safeZoneNotes`); the safe zone and the 1x minimum text size are judgement, to re-measure.

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
    elements: [".pg-frame[data-archetype='banner/hero']"]
- prop: align
  label: Alignment
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/hero']"]
- prop: cta
  label: CTA style
  kind: select
  values: [chip, text]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/hero']"]
```
