---
title: Thanks and contact
scope: The last slide: a thanks line and how to reach the speaker or the brand (contact, url, handle).
owns:
  - Slots thanks · contact · url · handle and their budgets
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

# Thanks and contact

**Principle carried:** Hierarchy → Prioritise (the line closes the deck; the contact is what the audience copies down). Proximity → Group (the three ways to reach you sit together).

A outro slide (closes the deck).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `thanks` | yes | ≤ 6 words, ≤ 40 chars | `h1`: display face, 7cqi (134px) |
| `contact` | yes | ≤ 6 words, ≤ 48 chars | `body`, 2.2cqi (42px), in the accent text colour: an email or a name |
| `url` | no | ≤ 2 words, ≤ 40 chars | `body`, 2.2cqi |
| `handle` | no | ≤ 2 words, ≤ 32 chars | `body`, 2.2cqi ("@kadricoffee") |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: thanks > contact > url > handle > footer > page > logo.

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

- No contact to give → **questions**, or end on a **statement**.
- Actions the audience should take → **next-steps**.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never put a contact the brand has not given you on the slide.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/thanks-contact']"]
```
