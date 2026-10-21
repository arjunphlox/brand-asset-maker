---
title: Title and speaker
scope: The first slide of a talk: the talk title, the speaker, their role, and an optional event line.
owns:
  - Slots title · speaker · role · event and their budgets
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

# Title and speaker

**Principle carried:** Hierarchy → Prioritise (title first, the person second). Grouping → Navigate (name and role sit together behind one accent bar, so they read as one unit).

A intro slide (opens the deck).

## Why it works

- **The title comes before the person.** `title` is 108px at the top and `speaker` is 58px at the foot, so the topic is read first and the person second. In print ads, attention to a text element grows with its surface size. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **Name and role read as a unit.** `speaker` and `role` sit together behind one accent bar, at a size smaller than the title. Things that sit close together are seen as one group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **A named role adds trust.** `role` is required, so the audience learns who is speaking and why. The same message changes more minds when it comes from a source people trust. ([Hovland & Weiss 1951](../../../docs/design/system/visual/sources.md#hovland-weiss-1951))
- **The logo is in its usual place.** The logo sits top left, where it sits on every slide of the deck. A logo becomes a brand asset when people link it to the brand, which is built by using it the same way, often. ([Romaniuk 2018](../../../docs/design/system/visual/sources.md#romaniuk-2018))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | yes | ≤ 10 words, ≤ 60 chars | `h1`: display face, 5.6cqi (108px), at the top of the content box |
| `speaker` | yes | ≤ 4 words, ≤ 32 chars | `h3`: display face, 3cqi (58px), at the foot of the content box |
| `role` | yes | ≤ 8 words, ≤ 56 chars | `body`, 1.9cqi (36px), muted, under the speaker |
| `event` | no | ≤ 6 words, ≤ 40 chars | `label`, accent text colour, above the title ("Kadri Talks") |
| `footer` | no | ≤ 8 words, ≤ 48 chars | `label`: body face, uppercase, muted, bottom left. The deck title or the talk, the same on every slide of a deck |
| `page` | no | ≤ 3 words, ≤ 7 chars | `label`, bottom right. The page number ("3", "3 / 12") |
| `logo` | yes | asset | Top left inside the safe zone, on every slide |

Hierarchy: title > speaker > role > event > footer > page > logo.

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

- No speaker → **title**.
- Two speakers → one title-speaker slide each, or name them on a statement slide; the layout holds one person.
- `logo` missing → refuse; intake is incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the `slides` use-case (contract 1.5, `rules/decisions.md`). One of 16 (3 intro, 10 content, 3 outro). It serves one format, 16:9, and shares the slide chrome in `base.css`.

## Never do

- Never set the speaker larger than the title.
- Never add a headshot: the layout has no image slot.
- Never move the logo, the footer or the page number: every slide of a deck has them in the same place.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='slides/title-speaker']"]
```
