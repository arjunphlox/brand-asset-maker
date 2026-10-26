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

## Why it works

- **Three items fit in mind.** The layout holds exactly three items; fewer go to `headline` and more are cut. The working limit is about three to five chunks, and grouping items into chunks raises how much people hold. ([Cowan 2001](../../../docs/design/system/visual/sources.md#cowan-2001); [Miller 1956](../../../docs/design/system/visual/sources.md#miller-1956))
- **Equal rows read as one list.** `item1` to `item3` share one size (4.8cqi) and one gap. Things that look alike are seen as one group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **Numbers show the structure.** The 1, 2 and 3 sit on the baseline of each item, so number and item read as one row. Numbers and other signals of structure help readers find their way and remember the structure. ([Lorch 1989](../../../docs/design/system/visual/sources.md#lorch-1989); [Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **The title tells what the list is.** The `title` (8cqi) is larger than the items and is read first. In learning studies, a short overview given before the material helps people learn and keep it. ([Ausubel 1960](../../../docs/design/system/visual/sources.md#ausubel-1960))

## How it comes across

**simple, credible.** Several items read in order: nothing competes, every item is believed. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

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
- 2026-10-26 — Anchored, never floating (Arjun, `upstream: true`): a block on the centre line of a tall post reads unresolved, so content anchors to the safe zone's edges in every format, the 9:16 story included (above its 340px reply-bar zone). On tall frames the logo and the first text slot grow with `--pg-logo` and `--pg-title` from `base.css`, since type is sized by width. A readability rule for every brand, not one brand's taste.

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
