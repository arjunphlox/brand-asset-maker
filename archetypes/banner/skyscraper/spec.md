---
title: Skyscraper
scope: The 160×600 display ad (skyscraper), a narrow column beside a page. Logo, a few-word headline, an optional line, and a call to action.
owns:
  - Slots headline · sub · cta · logo and their budgets
  - The 160x600 frame
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

# Skyscraper

**Job:** a display ad in the skyscraper slot; the column is 136px wide inside its margins, so every line is two or three words.

**Principle carried:** Hierarchy → Prioritise (a few large words). Balance → Flow (read top to bottom: who, what, do).

## Why it works

- **A few large words lead.** The `headline` is 20.8px, larger than the `sub` and `cta`, in lines of two or three words. Attention goes first to the largest region. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **An ad gets a short look.** People looking for something else on a page often miss things that look like ads, even large bright ones. So this unit says one thing: the `logo`, one `headline` and one `cta`, in the order they are read. ([Benway 1998](../../../docs/design/system/visual/sources.md#benway-1998))
- **Short budgets keep chunks few.** The `headline` is capped at 6 words and the `sub` at 10. People hold about three to five chunks in mind at once. ([Cowan 2001](../../../docs/design/system/visual/sources.md#cowan-2001))
- **Small text has a floor.** The `cta` is 12.2px on one line, and the `min-text` check fails text under the floor. Reading slows sharply below a critical print size. ([Legge & Bigelow 2011](../../../docs/design/system/visual/sources.md#legge-bigelow-2011))

## How it comes across

**striking, simple.** A display ad seen in passing: it must stop the eye with very little. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `headline` | yes | ≤ 6 words, ≤ 36 chars | `h3`: display face, 13cqi (20.8px), up to five short lines |
| `sub` | no | ≤ 10 words, ≤ 60 chars | `body`: body face, 8cqi (12.8px), under the headline |
| `cta` | yes | ≤ 3 words, ≤ 12 chars | `label`: body face, uppercase, 7.6cqi (12.2px), at the foot, one line, starts with a verb |
| `logo` | yes | asset | Top left, mark plus wordmark (when the brand has one) |

Hierarchy: headline > sub > cta > logo.

The call to action is required: a display banner that cannot be clicked through to something is a poster, and this layout is not one.

## Format

One format: `160x600`, 160×600, shown at 1x. Safe zone and minimum text size from `bam.config.json` (`safeZone`, `minTextPxByRatio`); 1cqi is 1.6px here.

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

- 2026-10-21 — Added as a sample layout of the web banner form (contract 1.5). The size is the IAB Skyscraper unit (sources in `bam.config.json` `safeZoneNotes`); the safe zone and the 1x minimum text size are judgement, to re-measure.

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
    elements: [".pg-frame[data-archetype='banner/skyscraper']"]
- prop: cta
  label: CTA style
  kind: select
  values: [chip, text]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/skyscraper']"]
```
