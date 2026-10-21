---
title: Bullets
scope: A slide title and three to five short points, 12 words or fewer each.
owns:
  - Slots title · point1 · point2 · point3 · point4 · point5 and their budgets
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

# Bullets

**Principle carried:** Rhythm → Flow (one size and one gap per point). Grouping → Navigate (each point has one accent square on its baseline).

A content slide (the body of the deck).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | yes | ≤ 8 words, ≤ 50 chars | `h2`: display face, 4cqi (77px) |
| `point1` | yes | ≤ 12 words, ≤ 80 chars | `body`, 2.1cqi (40px), one line at 80 characters |
| `point2` | yes | ≤ 12 words, ≤ 80 chars | `body` |
| `point3` | yes | ≤ 12 words, ≤ 80 chars | `body` |
| `point4` | no | ≤ 12 words, ≤ 80 chars | `body`, optional; an empty point and its square are not drawn |
| `point5` | no | ≤ 12 words, ≤ 80 chars | `body`, optional; an empty point and its square are not drawn |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: title > point1 > point2 > point3 > point4 > point5 > footer > page > logo.

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

- More than five points → split them over two bullets slides. Never smaller type.
- Two points → **two-column**, or **comparison** when they are opposites.
- A point over 12 words → cut it; the speaker says the rest.
- Points that happen in order → **process**.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never add a sixth point, or shrink the type to fit one. Split the slide.
- Never nest points.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/bullets']"]
```
