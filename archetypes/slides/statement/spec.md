---
title: Statement
scope: One big line: the point of the section, a claim, a principle. An optional label above it.
owns:
  - Slots statement · kicker and their budgets
  - The shared slide chrome slots footer · page · logo (positions set in base.css)
  - Bounded variation: scheme, align
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

# Statement

**Principle carried:** Hierarchy → Prioritise (one element and nothing to compete with it). Whitespace → Focus.

A content slide (the body of the deck).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `statement` | yes | ≤ 14 words, ≤ 90 chars | `h1`: display face, 5.4cqi (104px), up to three lines |
| `kicker` | no | ≤ 6 words, ≤ 40 chars | `label`, in the accent text colour, above the line |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: statement > kicker > footer > page > logo.

The logo (top left), the footer (bottom left) and the page number (bottom right) are the slide chrome: `base.css` places them at the same spot on every slides layout, so a deck reads as one thing. The content sits in `.pg-slide-body`, between them.

## Format

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`poligraf.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment of the content block. The logo, footer and page number stay where every slide has them |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- Over 14 words → cut it to the claim, or make it **bullets**.
- Someone else's words → **quote**.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never put two statements on one slide.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/statement']"]
- prop: align
  label: Alignment
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/statement']"]
```
