---
title: Process
scope: Three to five numbered steps in a row, joined by connectors, each with an optional detail line.
owns:
  - Slots title · step1 · step2 · step3 · step4 · step5 · detail1 · detail2 · detail3 · detail4 · detail5 and their budgets
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

# Process

**Principle carried:** Continuity → Flow (the connectors carry the eye from step to step, left to right). Similarity → Compare (every step has the same node and the same size).

A content slide (the body of the deck).

## Why it works

- **Left to right shows the order.** Steps sit in a row and connectors join each node to the next. Things that line up along one path are seen as one group, so the steps read as one sequence. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **Few steps are easy to remember.** The slide has three to five steps, each named in four words or fewer. People hold only a few items in mind at once. ([Cowan 2001](../../../docs/design/system/visual/sources.md#cowan-2001))
- **Numbered nodes mark the order.** The template numbers each node, so the viewer does not count along the row. Numbers are a signal of structure, and signals help readers find their way. ([Lorch 1989](../../../docs/design/system/visual/sources.md#lorch-1989))
- **Detail sits under its step.** `detail1` to `detail5` are small (31px) and placed directly under their step. Related words placed together are easier to understand than ones placed apart. ([Mayer 2009](../../../docs/design/system/visual/sources.md#mayer-2009))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | yes | ≤ 8 words, ≤ 50 chars | `h2`: display face, 3.6cqi (69px) |
| `step1` | yes | ≤ 4 words, ≤ 28 chars | `h3`: display face, 2.8cqi (54px), under a numbered node |
| `step2` | yes | ≤ 4 words, ≤ 28 chars | `h3` |
| `step3` | yes | ≤ 4 words, ≤ 28 chars | `h3` |
| `step4` | no | ≤ 4 words, ≤ 28 chars | `h3`, optional; an empty step, its node and its connector are not drawn |
| `step5` | no | ≤ 4 words, ≤ 28 chars | `h3`, optional; an empty step, its node and its connector are not drawn |
| `detail1` | no | ≤ 12 words, ≤ 72 chars | `body`, 1.6cqi (31px), under its step, optional |
| `detail2` | no | ≤ 12 words, ≤ 72 chars | `body`, optional |
| `detail3` | no | ≤ 12 words, ≤ 72 chars | `body`, optional |
| `detail4` | no | ≤ 12 words, ≤ 72 chars | `body`, optional |
| `detail5` | no | ≤ 12 words, ≤ 72 chars | `body`, optional |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: title > step1 > step2 > step3 > step4 > step5 > detail1 > detail2 > detail3 > detail4 > detail5 > footer > page > logo.

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

- More than five steps → group them into five, or split the process over two slides.
- Steps with no order → **bullets**.
- A step over 4 words → a verb first, and the rest in its detail line.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never draw a connector to a step that is not there.
- Never number the steps by hand.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/process']"]
```
