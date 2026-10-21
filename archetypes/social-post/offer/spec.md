---
title: Offer
scope: A post that makes one offer. A short detail ("20% off", "Free", "2 for 1") is the biggest thing; the offer line says what it is for; terms and a CTA may follow.
owns:
  - Slots detail · offer · terms · cta · logo and their budgets
  - The detail-first hierarchy and the 7-character rule
  - Bounded variation: scheme, accent target
see-also:
  - ../select.md
  - ../stat/spec.md
  - ../headline/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Offer

**Principle carried:** Hierarchy → Prioritise (the detail is the only element at display size, like the stat's number). Contrast → Distinguish (the terms are muted, so the condition is there but never competes with the offer).

## Why it works

- **The deal is seen first.** The `detail` is at most 7 characters and is the only display-size element (18cqi). In print ads, the attention a text element gets grows with its surface size. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **A short time or supply raises want.** `terms` holds the one condition that matters, such as a date or "while stocks last". Things in short supply or for a short time are wanted more, and a stated end date prompted action in a study of coupons. ([Cialdini 2021](../../../docs/design/system/visual/sources.md#cialdini-2021); [Inman & McAlister 1994](../../../docs/design/system/visual/sources.md#inman-mcalister-1994))
- **There is one thing to choose.** The post has one `detail` and at most one `cta`. The time to choose grows with the number of options. ([Hick 1952](../../../docs/design/system/visual/sources.md#hick-1952))
- **The condition does not compete.** The `terms` are muted, so they are there to read but are smaller and quieter than the `detail`. (HueGrid practice, not a research finding)

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `detail` | yes | ≤ 7 chars incl. symbols and spaces (`20% off`, `Free`, `2 for 1`, `-30%`) | `data-snippet`: display face, dominant (18cqi), one line |
| `was` | no | ≤ 8 chars (`₹2699`, `£12`) | `label`: body face, 5.2cqi, struck through in `--pg-muted`, above the detail. The previous price or offer, only when the owner gives it. Its presence is the switch: no variation |
| `offer` | yes | ≤ 6 words, ≤ 40 chars | `h2`: display face, 6.4cqi. What the detail applies to |
| `terms` | no | ≤ 10 words, ≤ 60 chars | `label`: body face, muted. The one condition that matters (a date, "while stocks last") |
| `cta` | no | ≤ 3 words, ≤ 20 chars, starts with a verb | `label`: body face, below the terms |
| `logo` | yes | asset | Top left inside the safe zone |

Hierarchy: detail > was > offer > terms > cta > logo. The old price sits above the detail but reads after it: it is a fifth of its size and struck through.

**An offer is a fact.** Only the owner can make one. The agent never invents a discount, a price or a "free". If the request has no offer the owner has stated, ask.

## Formats

1:1 (feed post), 4:5 (tall feed post) and 9:16 (story). At 9:16 the block sits on the centre line and the CTA drops to the foot of the safe zone.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `accent` | detail · cta · none | detail | Which one element takes the accent colour. Never two |
| `cta` | text · pill | text | The CTA as text, or as one solid button: the accent surface with its own text colour. On the accent scheme the pair swaps, so the button turns ink |

With `cta: pill` the button is the accent surface; set `accent` to `none` or keep one accent text element beside it.

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- `detail` over 7 characters → `social-post/headline`. A long offer is a sentence.
- `offer` over 6 words → rewrite. Name what is on offer, nothing else.
- `terms` over 10 words → keep the one condition that matters. The rest goes in the post copy.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout (contract 1.4, `rules/decisions.md`). The detail reuses the stat's number rules: a tight 0.85 line box with 0.15em kept below it for a descender, and one line only (`white-space: nowrap`), so the 7-character budget is what keeps it inside the frame.
- 2026-10-21 — The Kadri example offer ("Free", "A taste of both coffees") is demo copy written for the layout, flagged in the generator's note. Kadri has made no offer.

- 2026-10-21 — `cta: pill` added as an opt-in cue from HueGrid's client work (inspiration only, `rules/decisions.md`). Kadri: all 54 samples (6 variation combinations × three formats × three schemes) pass the 11 checks.

- 2026-10-21 — Optional `was` slot from public reference posts Arjun shared (Shillington, Room Fifty, a course card: an old price struck through beside the new one; inspiration only, nothing copied, `rules/decisions.md`). `label` role (body face), 5.2cqi, `--pg-muted`, `text-decoration: line-through`, above the detail so a long detail and the old price never share one line. Muted is 4.64:1 on Kadri's paper, the ink scheme's own muted on ink, and the accent ink on the accent surface (`base.css`), so `contrast` and `min-text` pass on all three schemes. No variation: an empty `was` is removed, and the layout is as before. Kadri: 54 demo samples with `was` (every combination × three formats × three schemes) pass the 11 checks; Kadri has set no price, so the sweep's "₹2699" is demo copy.

## Never do

- Never invent an offer, a price or a discount. Ask the owner.
- Never fill `was` with a price the owner did not give, or one the product never sold at. A struck-through price is a claim about the past; no previous price, no `was`.
- Never accent two elements.
- Never put the terms above the offer line, or in a size larger than the label.
- Never let the detail wrap to two lines. Over 7 characters, use the headline.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/offer']"]
- prop: accent
  label: Accent target
  kind: select
  values: [detail, cta, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/offer']"]
- prop: cta
  label: CTA style
  kind: select
  values: [text, pill]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/offer']"]
```
