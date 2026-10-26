---
title: Medium rectangle
scope: The 300×250 display ad (medium rectangle), in a sidebar or between paragraphs. Logo, headline, an optional line, and a call to action.
owns:
  - Slots headline · sub · cta · logo and their budgets
  - The 300x250 frame
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

# Medium rectangle

**Job:** a display ad in the medium rectangle slot, the unit most ad networks have the most room for.

**Principle carried:** Hierarchy → Prioritise (the headline is the one large element). Balance → Anchor (logo on top, call to action at the foot, the message between).

## Why it works

- **The headline is the largest text.** The `headline` is 25.2px, against 13.8px for the `sub` and 12.6px for the `cta`. In print ads, the attention text gets grows with its size. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **An ad gets a short look.** People looking for something else on a page often miss things that look like ads, even large bright ones. So this unit says one thing: the `logo`, one `headline` and one `cta`, in the order they are read. ([Benway 1998](../../../docs/design/system/visual/sources.md#benway-1998))
- **The button is the one filled shape.** With `cta` set to chip, the button is a filled accent shape among plain text. One item that differs by a single feature is found at once. ([Treisman & Gelade 1980](../../../docs/design/system/visual/sources.md#treisman-gelade-1980))
- **Copy stays short.** The `headline` is capped at 8 words and the `sub` at 12. Working memory is limited, and extra material leaves less room to take in the point. ([Sweller 1988](../../../docs/design/system/visual/sources.md#sweller-1988))

## How it comes across

**striking, simple.** A display ad seen in passing: it must stop the eye with very little. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `headline` | yes | ≤ 8 words, ≤ 48 chars | `h2`: display face, 8.4cqi (25.2px), up to three lines |
| `sub` | no | ≤ 12 words, ≤ 70 chars | `body`: body face, 4.6cqi (13.8px), under the headline, up to two lines |
| `cta` | yes | ≤ 3 words, ≤ 16 chars | `label`: body face, uppercase, 4.2cqi (12.6px), at the foot, starts with a verb |
| `logo` | yes | asset | Top left, mark plus wordmark (when the brand has one) |

Hierarchy: headline > sub > cta > logo.

The call to action is required: a display banner that cannot be clicked through to something is a poster, and this layout is not one.

## Format

One format: `300x250`, 300×250, shown at 1x. Safe zone and minimum text size from `poligraf.config.json` (`safeZone`, `minTextPxByRatio`); 1cqi is 3px here.

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

- 2026-10-21 — Added as a sample layout of the web banner form (contract 1.5). The size is the IAB Medium Rectangle unit (sources in `poligraf.config.json` `safeZoneNotes`); the safe zone and the 1x minimum text size are judgement, to re-measure.

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
    elements: [".pg-frame[data-archetype='banner/rectangle']"]
- prop: cta
  label: CTA style
  kind: select
  values: [chip, text]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/rectangle']"]
```
