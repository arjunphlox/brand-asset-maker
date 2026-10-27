---
title: Next steps
scope: What happens after the talk: a title, up to three actions, and a call to action.
owns:
  - Slots title · action1 · action2 · action3 · cta and their budgets
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

# Next steps

**Principle carried:** Hierarchy → Prioritise (the call to action is the one solid element). Rhythm → Flow (numbered actions at one size).

A outro slide (closes the deck).

## Why it works

- **One solid button is found first.** `cta` is the only filled element on the slide, in the accent surface. One item that differs by a single feature such as colour is found at once, whatever else is there. ([Treisman & Gelade 1980](../../../docs/design/system/visual/sources.md#treisman-gelade-1980))
- **One call to action is easier to act on.** The layout allows one `cta` and at most three actions. The time to choose grows with the number of options, and in their studies fewer options led more people to act. ([Hick 1952](../../../docs/design/system/visual/sources.md#hick-1952); [Iyengar & Lepper 2000](../../../docs/design/system/visual/sources.md#iyengar-lepper-2000))
- **Numbers show the order of the actions.** The template numbers `action1` to `action3` at one size (46px). Numbers are a signal of structure, and signals help readers find their way and remember it. ([Lorch 1989](../../../docs/design/system/visual/sources.md#lorch-1989))
- **The close is remembered.** This slide ends the deck. In free-recall tests with lists of items, people remember the first and last items best. ([Murdock 1962](../../../docs/design/system/visual/sources.md#murdock-1962))

## How it comes across

**confident, simple.** What happens now: sure and clear. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | yes | ≤ 6 words, ≤ 40 chars | `h2`: display face, 4cqi (77px) |
| `action1` | yes | ≤ 10 words, ≤ 64 chars | `body`, 2.4cqi (46px), numbered by the template |
| `action2` | no | ≤ 10 words, ≤ 64 chars | `body`, optional; an empty action and its number are not drawn |
| `action3` | no | ≤ 10 words, ≤ 64 chars | `body`, optional; an empty action and its number are not drawn |
| `cta` | yes | ≤ 4 words, ≤ 28 chars | `label`, a solid button: the accent surface with its own text colour (the pair swaps on the accent scheme) |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: title > cta > action1 > action2 > action3 > footer > page > logo.

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

- More than three actions → keep three. A list of chores is not a close.
- No call to action → **thanks-contact**.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never give two calls to action.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/next-steps']"]
```
