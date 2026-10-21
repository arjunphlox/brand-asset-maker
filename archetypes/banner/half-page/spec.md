---
title: Half page
scope: The 300×600 display ad (half page), tall in a sidebar. Logo, headline, a supporting line, and a call to action.
owns:
  - Slots headline · sub · cta · logo and their budgets
  - The 300x600 frame
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

# Half page

**Job:** a display ad in the half-page slot, when the message needs a second line of support.

**Principle carried:** Hierarchy → Prioritise (the headline dominates; the line under it supports). Balance → Anchor (logo on top, call to action at the foot).

## Why it works

- **The headline is clearly the largest.** The `headline` is 36px and the `sub` is 16.8px, so one region stands out in size. Attention goes first to the region that differs most from its surroundings. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **An ad gets a short look.** People looking for something else on a page often miss things that look like ads, even large bright ones. So this unit says one thing: the `logo`, one `headline` and one `cta`, in the order they are read. ([Benway 1998](../../../docs/design/system/visual/sources.md#benway-1998))
- **Extra words are left out.** The `sub` is capped at 18 words and the `headline` at 10. People learn more when extra words are left out, and working memory is limited. ([Mayer 2009](../../../docs/design/system/visual/sources.md#mayer-2009); [Sweller 1988](../../../docs/design/system/visual/sources.md#sweller-1988))
- **The text is easy to read.** The `contrast` check holds text to 4.5:1 against its surface, or 3:1 for large text such as the 36px `headline`. Easy-to-perceive items with high contrast are liked more. ([W3C 2023 (WCAG 2.2)](../../../docs/design/system/visual/sources.md#wcag-22); [Reber et al. 2004](../../../docs/design/system/visual/sources.md#reber-2004))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `headline` | yes | ≤ 10 words, ≤ 60 chars | `h2`: display face, 12cqi (36px), up to four lines |
| `sub` | no | ≤ 18 words, ≤ 110 chars | `body`: body face, 5.6cqi (16.8px), under the headline, up to five lines |
| `cta` | yes | ≤ 3 words, ≤ 16 chars | `label`: body face, uppercase, 5cqi (15px), at the foot, starts with a verb |
| `logo` | yes | asset | Top left, mark plus wordmark (when the brand has one) |

Hierarchy: headline > sub > cta > logo.

The call to action is required: a display banner that cannot be clicked through to something is a poster, and this layout is not one.

## Format

One format: `300x600`, 300×600, shown at 1x. Safe zone and minimum text size from `poligraf.config.json` (`safeZone`, `minTextPxByRatio`); 1cqi is 3px here.

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

- 2026-10-21 — Added as a sample layout of the web banner form (contract 1.5). The size is the Half page unit (sources in `poligraf.config.json` `safeZoneNotes`); the safe zone and the 1x minimum text size are judgement, to re-measure.

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
    elements: [".pg-frame[data-archetype='banner/half-page']"]
- prop: cta
  label: CTA style
  kind: select
  values: [chip, text]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/half-page']"]
```
