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

One format: `728x90`, 728×90, shown at 1x. Safe zone and minimum text size from `poligraf.config.json` (`safeZone`, `minTextPxByRatio`); 1cqi is 7.28px here.

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

- 2026-10-21 — Added as a sample layout of the web banner form (contract 1.5). The size is the IAB Leaderboard unit (sources in `poligraf.config.json` `safeZoneNotes`); the safe zone and the 1x minimum text size are judgement, to re-measure.

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
