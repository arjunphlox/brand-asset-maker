---
title: Agenda
scope: What the deck covers: a short title and three to six numbered items.
owns:
  - Slots title · item1 · item2 · item3 · item4 · item5 · item6 and their budgets
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

# Agenda

**Principle carried:** Rhythm → Flow (one size and one gap for every item). Grouping → Navigate (each number sits on its item's baseline, and a hairline closes each row).

A intro slide (opens the deck).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | yes | ≤ 4 words, ≤ 24 chars | `h2`: display face, 4.6cqi (88px), the left column |
| `item1` | yes | ≤ 6 words, ≤ 40 chars | `h3`: display face, 2.8cqi (54px), one row, numbered 01 by the template |
| `item2` | yes | ≤ 6 words, ≤ 40 chars | `h3` |
| `item3` | yes | ≤ 6 words, ≤ 40 chars | `h3` |
| `item4` | no | ≤ 6 words, ≤ 40 chars | `h3`, optional; an empty item and its number are not drawn |
| `item5` | no | ≤ 6 words, ≤ 40 chars | `h3`, optional; an empty item and its number are not drawn |
| `item6` | no | ≤ 6 words, ≤ 40 chars | `h3`, optional; an empty item and its number are not drawn |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: title > item1 > item2 > item3 > item4 > item5 > item6 > footer > page > logo.

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

- Fewer than three items → skip the agenda, or say them as **bullets**.
- More than six items → group them into six sections; the deck has too many parts for one agenda.
- An item over 6 words → use the section's short name, the one its **section** slide shows.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never number the items by hand. The template numbers them.
- Never add a seventh item, or shrink the type to fit one.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/agenda']"]
```
