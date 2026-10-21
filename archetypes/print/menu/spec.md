---
title: Menu
scope: A menu or price list on A4: a title and two to eight rows, each an item and its price. The price may be left out (a list of services).
owns:
  - Slots kicker · title · item1 · price1 · item2 · price2 · item3 · price3 · item4 · price4 · item5 · price5 · item6 · price6 · item7 · price7 · item8 · price8 · note · logo and their budgets
  - The A4-portrait print frame for this job
  - Bounded variation: scheme, rule, price
see-also:
  - ../select.md
  - ../flyer/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Menu

**Principle carried:** Alignment → Scan (every price on one edge, so the eye runs down a column). Repetition → Rhythm (rows of one height and one gap).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `kicker` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, uppercase, 2.2cqi, top row at the end side |
| `title` | yes | ≤ 5 words, ≤ 32 chars | `h1`: display face, 9cqi |
| `item1` … `item8` | the first two: yes | ≤ 7 words, ≤ 44 chars each | `body`: body face, 3.2cqi. item1 and item2 required; a row without an item is not shown |
| `price1` … `price8` | no | ≤ 8 chars each | `data-snippet`: display face, 3.8cqi, at the end of its row (or under the item with `price: under`). Optional: leave it out for a list without prices |
| `note` | no | ≤ 20 words, ≤ 120 chars | `body`: body face, 2.2cqi, at the foot ("Prices include tax"). Optional |
| `logo` | yes | asset | Top row, start side |

Hierarchy: title > item1 > price1 > item2 > price2 > item3 > price3 > item4 > price4 > item5 > price5 > item6 > price6 > item7 > price7 > item8 > price8 > note > kicker > logo.

**Facts come from the message.** When a campaign's facts (a date, a place, a price) live in `messages/<name>.json`, the generator rows reference them (`{ "fact": "date" }`) and `facts-consistent` fails any print piece that states a fact in another form.

## Format

`A4-portrait`: A4 portrait, 1240×1754 (210×297 mm at 150 dpi). Safe zone 5 mm inside the trim, 30px on every side (`poligraf.config.json`, an estimate to re-measure against the printer's spec). 1cqi is 12.4px at A4-portrait. The frame is the trim: bleed is not drawn. The proof PNG renders at `render.scale` 2, 300 dpi.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `rule` | hairline · none | hairline | A hairline in the muted colour under each row |
| `price` | end · under | end | The price at the end of its row, or on its own line under the item |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

`facts-consistent` runs too when the generator names a message.

## Fallbacks

- More than eight rows → two menus, or a shorter list. Never shrink the rows to fit.
- An item over 7 words → name it; the description goes on the counter.
- A price over 8 characters → rewrite it ("₹2,699", "Free").
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added with the `print` use-case (five forms plan, form 5). Rows are numbered slots (item1…item8, price1…price8) because the contract's slots are flat; a row whose item is empty is hidden by the template (`:has()`), so a stray price never stands alone. Prices are business facts: a brand types only prices the owner gives, and a campaign's prices live in its message file and are referenced.

## Never do

- Never invent a price. A list without prices leaves the price slots empty.
- Never show a price without its item.
- Never mix price styles in one menu (one currency mark, one format).

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/menu']"]
- prop: rule
  label: Rule
  kind: select
  values: [hairline, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/menu']"]
- prop: price
  label: Price
  kind: select
  values: [end, under]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/menu']"]
```
