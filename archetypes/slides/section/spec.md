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

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`poligraf.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

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
