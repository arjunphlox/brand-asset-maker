---
title: Large mobile banner
scope: The 320×100 mobile display ad (large mobile banner). One row: the mark, a few-word headline, a call to action.
owns:
  - Slots headline · cta · logo and their budgets
  - The 320x100 frame
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

# Large mobile banner

**Job:** a display ad on a phone, above or below the content; there is room for the mark, one short headline and a button, nothing else.

**Principle carried:** Hierarchy → Prioritise (one short headline). Economy → one row of three things, no supporting line.

## Why it works

- **Three things fit in memory.** The row has a `logo`, a `headline` and a `cta`, and no supporting line. People hold only about three to five chunks in mind at once. ([Cowan 2001](../../../docs/design/system/visual/sources.md#cowan-2001))
- **The mark has no wordmark.** The `logo` is the mark only, because the row has no room for a wordmark. People learn more when extra words and pictures are left out. ([Mayer 2009](../../../docs/design/system/visual/sources.md#mayer-2009))
- **The headline is the largest text.** The `headline` is 17.3px and the `cta` is 12.5px. Attention goes first to the region that differs most in size. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **One short button, one choice.** The `cta` is up to two words and starts with a verb. The time to choose grows with the number of options, and here there is one. ([Hick 1952](../../../docs/design/system/visual/sources.md#hick-1952))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `headline` | yes | ≤ 5 words, ≤ 30 chars | `h3`: display face, 5.4cqi (17.3px), up to three short lines |
| `cta` | yes | ≤ 2 words, ≤ 12 chars | `label`: body face, uppercase, 3.9cqi (12.5px), at the end of the row, starts with a verb |
| `logo` | yes | asset | At the start of the row, the mark only: no wordmark (the row has no room for it) |

Hierarchy: headline > cta > logo.

The call to action is required: a display banner that cannot be clicked through to something is a poster, and this layout is not one.

## Format

One format: `320x100`, 320×100, shown at 1x. Safe zone and minimum text size from `poligraf.config.json` (`safeZone`, `minTextPxByRatio`); 1cqi is 3.2px here.

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

- 2026-10-21 — Added as a sample layout of the web banner form (contract 1.5). The size is the Large mobile banner unit (sources in `poligraf.config.json` `safeZoneNotes`); the safe zone and the 1x minimum text size are judgement, to re-measure.

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
    elements: [".pg-frame[data-archetype='banner/mobile']"]
- prop: cta
  label: CTA style
  kind: select
  values: [chip, text]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/mobile']"]
```
