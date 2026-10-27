---
title: Questions
scope: The Q&A slide: one line inviting questions and an optional contact for later.
owns:
  - Slots line · contact and their budgets
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

# Questions

**Principle carried:** Whitespace → Focus (one line on an empty slide is the cue to talk, not read).

A outro slide (closes the deck).

## Why it works

- **An empty slide leaves room for the speaker.** The slide has one line (`line`, 154px) and an optional `contact`, with no summary. People learn more when extra words and pictures are left out. ([Mayer 2009](../../../docs/design/system/visual/sources.md#mayer-2009))
- **The audience takes it in at once.** A single word at 154px is read in a glance. A slide that the audience can take in within a few seconds keeps them listening to the speaker. ([Duarte 2008](../../../docs/design/system/visual/sources.md#duarte-2008))
- **The last slide is remembered.** This slide ends the deck. In free-recall tests with lists of items, people remember the first and last items best. ([Murdock 1962](../../../docs/design/system/visual/sources.md#murdock-1962))
- **The contact stays with the line.** `contact` sits directly under `line` at 42px. Things that sit close together are seen as one group, so the audience knows where to ask later. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))

## How it comes across

**inviting, simple.** An open floor: it should invite people to speak. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `line` | yes | ≤ 6 words, ≤ 40 chars | `h1`: display face, 8cqi (154px) ("Questions?") |
| `contact` | no | ≤ 8 words, ≤ 56 chars | `body`, 2.2cqi (42px), under the line: where to ask later |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: line > contact > footer > page > logo.

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

- A contact and a url to give → **thanks-contact**.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never fill the questions slide with a summary. It is a pause.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/questions']"]
```
