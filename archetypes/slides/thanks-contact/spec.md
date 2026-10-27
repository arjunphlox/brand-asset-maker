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

## Why it works

- **The closing line is remembered.** `thanks` is the last slide and the largest text (134px). In free-recall tests with lists of items, people remember the first and last items best. ([Murdock 1962](../../../docs/design/system/visual/sources.md#murdock-1962))
- **The contact is found at once.** `contact` is the one line in the accent text colour. One item that differs by a single feature such as colour is found at once. ([Treisman & Gelade 1980](../../../docs/design/system/visual/sources.md#treisman-gelade-1980))
- **Ways to reach you sit together.** `contact`, `url` and `handle` are stacked at one size (42px) and one gap. Things that sit close together are seen as one group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **Few lines are easy to copy down.** `contact` is at most six words and `url` and `handle` at most two. Material that makes people search for extra things leaves less room to take in the point. ([Sweller 1988](../../../docs/design/system/visual/sources.md#sweller-1988))

## How it comes across

**inviting, simple.** The close: warm, with a clear way to get in touch. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `thanks` | yes | ≤ 6 words, ≤ 40 chars | `h1`: display face, 7cqi (134px) |
| `contact` | yes | ≤ 6 words, ≤ 48 chars | `body`, 2.2cqi (42px), in the accent text colour: an email or a name |
| `url` | no | ≤ 2 words, ≤ 40 chars | `body`, 2.2cqi |
| `handle` | no | ≤ 2 words, ≤ 32 chars | `body`, 2.2cqi ("@northside") |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: thanks > contact > url > handle > footer > page > logo.

The logo (top left), the footer (bottom left) and the page number (bottom right) are the slide chrome: `base.css` places them at the same spot on every slides layout, so a deck reads as one thing. The content sits in `.pg-slide-body`, between them.

## Format

One format: `16:9`, 1920×1080, a slide. Safe zone 96px all round (`bam.config.json`, an estimate to re-measure). 1cqi is 19.2px. The smallest text is 24px (`minTextPx` for slides).

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
