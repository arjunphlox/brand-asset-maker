---
title: Leaderboard
scope: The 728×90 display ad across the top of a page. One row: logo, a short headline with an optional line under it, and a call to action.
owns:
  - Slots headline · sub · cta · logo and their budgets
  - The 728x90 frame
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

# Leaderboard

**Job:** a display ad bought on an ad network or placed on a partner site, in the leaderboard slot.

**Principle carried:** Hierarchy → Prioritise (one headline, read in a glance at 1x). Balance → Flow (one row, read left to right: who, what, do).

## Why it works

- **Few things, so a glance is enough.** The row has at most four things: `logo`, `headline`, an optional `sub` and `cta`. People hold only about three to five chunks in mind, and this row stays inside that. ([Cowan 2001](../../../docs/design/system/visual/sources.md#cowan-2001))
- **The headline is the largest text.** The `headline` is 24px against 13px for the `sub` and 12.7px for the `cta`. Attention goes first to the largest region, and in print ads, text gets attention in step with its size. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001); [Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **An ad gets a short look.** People looking for something else on a page often miss things that look like ads, even large bright ones. So this unit says one thing: the `logo`, one `headline` and one `cta`, in the order they are read. ([Benway 1998](../../../docs/design/system/visual/sources.md#benway-1998))
- **Text never drops below a floor.** The sizes are set for the unit at 1x, and the `min-text` check fails any text under the floor in `bam.config.json`. Reading slows sharply below a critical print size. ([Legge & Bigelow 2011](../../../docs/design/system/visual/sources.md#legge-bigelow-2011))

## How it comes across

**striking, simple.** A display ad seen in passing: it must stop the eye with very little. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `headline` | yes | ≤ 6 words, ≤ 40 chars | `h3`: display face, 3.3cqi (24px), one or two lines |
| `sub` | no | ≤ 8 words, ≤ 48 chars | `body`: body face, 1.8cqi (13px), under the headline |
| `cta` | yes | ≤ 3 words, ≤ 16 chars | `label`: body face, uppercase, 1.75cqi (12.7px), at the far end of the row, starts with a verb |
| `logo` | yes | asset | At the start of the row, mark plus wordmark (when the brand has one) |

Hierarchy: headline > sub > cta > logo.

The call to action is required: a display banner that cannot be clicked through to something is a poster, and this layout is not one.

## Format

One format: `728x90`, 728×90, shown at 1x. Safe zone and minimum text size from `bam.config.json` (`safeZone`, `minTextPxByRatio`); 1cqi is 7.28px here.

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

- 2026-10-21 — Added as a sample layout of the web banner form (contract 1.5). The size is the IAB Leaderboard unit (sources in `bam.config.json` `safeZoneNotes`); the safe zone and the 1x minimum text size are judgement, to re-measure.

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
    elements: [".pg-frame[data-archetype='banner/leaderboard']"]
- prop: cta
  label: CTA style
  kind: select
  values: [chip, text]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/leaderboard']"]
```
