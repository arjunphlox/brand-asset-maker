---
title: Section divider
scope: Opens a part of the deck: the section number, the section title and an optional line.
owns:
  - Slots number · title · kicker and their budgets
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

# Section divider

**Principle carried:** Contrast → Separate (the divider defaults to the ink surface, so a section break reads as a change of scene). Hierarchy → Prioritise (the number in the accent, the title the largest words).

A content slide (the body of the deck).

## Why it works

- **A change of surface marks a new part.** The divider defaults to the ink surface, so the slide looks different from the content slides around it. People split an experience into parts at clear boundaries, and that helps them remember it. ([Zacks & Swallow 2007](../../../docs/design/system/visual/sources.md#zacks-swallow-2007))
- **The number shows where we are.** `number` is 173px in the accent text colour, such as 01 or 2. Numbers are a signal of structure that helps readers find their way. ([Lorch 1989](../../../docs/design/system/visual/sources.md#lorch-1989))
- **The title is the largest text.** `title` is 115px, the largest words on the slide, with `number` next and `kicker` small and muted. In print ads, attention to a text element grows with its surface size. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **Large accent text passes contrast.** The accent number is above 36px, where `contrast` asks for 3:1 against the surface. Large text needs at least 3:1 and smaller text 4.5:1. ([W3C 2023 (WCAG 2.2)](../../../docs/design/system/visual/sources.md#wcag-22))

## How it comes across

**confident, simple.** A new part of the talk: one sure line. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `number` | yes | ≤ 1 words, ≤ 3 chars | `data-snippet`: display face, 9cqi (173px), in the accent text colour. "01", "2" |
| `title` | yes | ≤ 6 words, ≤ 40 chars | `h1`: display face, 6cqi (115px) |
| `kicker` | no | ≤ 8 words, ≤ 48 chars | `label`, muted, under the title |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: title > number > kicker > footer > page > logo.

The logo (top left), the footer (bottom left) and the page number (bottom right) are the slide chrome: `base.css` places them at the same spot on every slides layout, so a deck reads as one thing. The content sits in `.pg-slide-body`, between them.

## Format

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`bam.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | ink | Surface and on-surface pair |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- A section title over 6 words → use the name the agenda gives it.
- A section that needs a sentence → a **statement** slide after the divider.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

- 2026-10-21 — The default scheme is ink, not paper: a divider is a change of scene. Propose still renders all three schemes.

## Never do

- Never put content on a divider. The next slide carries it.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/section']"]
```
