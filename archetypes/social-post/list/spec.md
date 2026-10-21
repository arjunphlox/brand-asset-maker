---
title: List
scope: A title and three short numbered items. Tips, steps, tasting notes, "three things".
owns:
  - Slots title · item1 · item2 · item3 · logo and their budgets
  - The three-item rule and the numbering
  - Bounded variation: scheme, accent on the numbers
see-also:
  - ../select.md
  - ../headline/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# List

**Principle carried:** Rhythm → Flow (three items at one size with one gap read as a list at a glance). Grouping → Navigate (each number sits on the baseline of its item, so the eye reads the pair as one row).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | yes | ≤ 6 words, ≤ 40 chars | `h1`: display face, 8cqi. Names the list |
| `item1` | yes | ≤ 6 words, ≤ 36 chars | `h3`: display face, 4.8cqi, one row (8.4cqi when `style` is stacked) |
| `item2` | yes | ≤ 6 words, ≤ 36 chars | `h3` |
| `item3` | yes | ≤ 6 words, ≤ 36 chars | `h3` |
| `logo` | yes | asset | Top left inside the safe zone |

Hierarchy: title > item1 > item2 > item3 > logo.

The numbers 1, 2 and 3 belong to the template. They are in the display face and are not slots, so nobody types them.

## Formats

1:1 (feed post) and 4:5 (tall feed post). Not 9:16: a story is a reminder with one fact, and a list is three.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `style` | numbered · stacked | numbered | `numbered`: the title leads and the items are numbered rows. `stacked`: three short statements, one per line, no numbers, one size step up; the title steps down to a lead-in ("Rules break. / Segments age. / Agents adapt.") |
| `accent` | numbers · last · none | numbers | The three numbers, or the last item, take the accent colour. With `stacked` there are no numbers, so use `last` or `none` |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- Fewer than three items → `social-post/headline` with the strongest one.
- More than three items → cut to three. The rest goes in the post copy, or into a second post.
- An item over 6 words → cut it to the point. An item is one row.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout (contract 1.4, `rules/decisions.md`). Exactly three items: a list of two is a comparison, and four or more stop reading at a glance on a feed post. The numbers are template text in the display face; the contrast and min-text checks measure them like any other text.

- 2026-10-21 — `style: stacked` and `accent: last` added as opt-in cues from HueGrid's client work (inspiration only, `rules/decisions.md`). The items are `h3` in the display face for both styles: `role-face` checks the face against the schema role, and a role cannot change with a variation. Kadri: all 36 samples (6 variation combinations × 1:1 and 4:5 × three schemes) pass the 11 checks.

## Never do

- Never add a fourth item, or leave one empty.
- Never let an item wrap to a second line by adding words. Cut it.
- Never number the items by hand inside the slots. The template numbers them.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/list']"]
- prop: accent
  label: Accent target
  kind: select
  values: [numbers, last, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/list']"]
- prop: style
  label: List style
  kind: select
  values: [numbered, stacked]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/list']"]
```
