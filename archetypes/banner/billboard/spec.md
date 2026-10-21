---
title: Billboard
scope: The 970×250 display ad (billboard), full width at the top of a page. Logo and message on the left, the call to action on the right.
owns:
  - Slots headline · sub · cta · logo and their budgets
  - The 970x250 frame
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

# Billboard

**Job:** a display ad in the billboard slot, the largest standard unit, when the message needs a headline and a line of support.

**Principle carried:** Hierarchy → Prioritise (the headline dominates). Balance → Flow (message on the left, the action at the end of the read).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `headline` | yes | ≤ 8 words, ≤ 50 chars | `h2`: display face, 4.4cqi (42.7px), one or two lines |
| `sub` | no | ≤ 14 words, ≤ 90 chars | `body`: body face, 1.9cqi (18.4px), under the headline, up to two lines |
| `cta` | yes | ≤ 3 words, ≤ 18 chars | `label`: body face, uppercase, 1.6cqi (15.5px), on the right, centred on the block, starts with a verb |
| `logo` | yes | asset | Top of the left column, mark plus wordmark (when the brand has one) |

Hierarchy: headline > sub > cta > logo.

The call to action is required: a display banner that cannot be clicked through to something is a poster, and this layout is not one.

## Format

One format: `970x250`, 970×250, shown at 1x. Safe zone and minimum text size from `poligraf.config.json` (`safeZone`, `minTextPxByRatio`); 1cqi is 9.7px here.

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

- 2026-10-21 — Added as a sample layout of the web banner form (contract 1.5). The size is the IAB Billboard unit (sources in `poligraf.config.json` `safeZoneNotes`); the safe zone and the 1x minimum text size are judgement, to re-measure.

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
    elements: [".pg-frame[data-archetype='banner/billboard']"]
- prop: cta
  label: CTA style
  kind: select
  values: [chip, text]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/billboard']"]
```
