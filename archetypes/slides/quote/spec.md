---
title: Quote
scope: Someone's words, who said them, and their role.
owns:
  - Slots quote · attribution · role and their budgets
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

# Quote

**Principle carried:** Hierarchy → Prioritise (the words, then the person). A quote mark in the accent signals "someone else's words" before any is read.

A content slide (the body of the deck).

## Why it works

- **The words are read first.** `quote` is 61px and `attribution` is 38px, so the words come before the name. In print ads, attention to a text element grows with its surface size. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **A named source adds trust.** `attribution` is required, and `role` says who the person is. The same message changes more minds when it comes from a source people trust. ([Hovland & Weiss 1951](../../../docs/design/system/visual/sources.md#hovland-weiss-1951))
- **Name and role read as a pair.** `attribution` and `role` sit together under the quote, close and in a smaller size. Things that sit close together are seen as one group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **Quote lines stay short.** The quote is capped at 36 words and five lines at 61px. Line length and line spacing change how fast and how well text is read on screen. ([Dyson 2004](../../../docs/design/system/visual/sources.md#dyson-2004))

## How it comes across

**understated, credible.** Someone else's words: the slide steps back and lets them be trusted. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `quote` | yes | ≤ 36 words, ≤ 200 chars | `body`, 3.2cqi (61px), up to five lines (the body face, as on the post: a long quote reads better in it) |
| `attribution` | yes | ≤ 5 words, ≤ 40 chars | `body`, 2cqi (38px), label weight |
| `role` | no | ≤ 8 words, ≤ 48 chars | `label`, muted |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: quote > attribution > role > footer > page > logo.

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

- No one to attribute it to → **statement**, in the brand's own voice.
- Over 36 words → cut to the sentence that matters.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never invent a quote, or attribute words to a person who did not say them.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/quote']"]
```
