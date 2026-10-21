---
title: Stat
scope: One number is the post. A label says what it counts, a source may vouch for it.
owns:
  - Slots number · label · source · logo and their budgets
  - The number-first hierarchy and the 5-character rule
  - Bounded variation: scheme, accent target, block position
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

# Stat

**Principle carried:** Hierarchy → Prioritise (the number is the only display-size element). Balance → Anchor (the block sits top or bottom of the safe zone; the logo anchors the opposite corner, so the frame never floats).

## Why it works

- **The number is seen first.** The `number` is at most 5 characters and the only display-size element. Attention goes first to the region that differs most from its surroundings in size, contrast or colour. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **The label sits right under the number.** The `label` follows the `number` with a 1.4cqi gap, so the two read as one fact: things that sit close together are seen as one group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **A source can back the figure.** The optional `source` sits at the bottom of the block. The same message changes more minds when it comes from a source people trust. ([Hovland & Weiss 1951](../../../docs/design/system/visual/sources.md#hovland-weiss-1951))
- **The block and logo face each other.** The block sits at the top or bottom of the safe zone and the `logo` takes the opposite corner, so the frame is balanced. (HueGrid practice, not a research finding)

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `number` | yes | ≤ 5 chars incl. symbols (`42%`, `3.2×`, `$1.4M`, `10k+`) | `data-snippet`: display face, `--brand-weight-display`, dominant |
| `label` | yes | ≤ 6 words, ≤ 40 chars | `body`: body face, under the number: 0.15em of the number's size kept for a descender, then a 1.4cqi gap |
| `source` | no | ≤ 8 words | `label`: body face, muted, bottom of the block |
| `logo` | yes | asset | Opposite corner to the block |

Hierarchy: number > label > source > logo.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `accent` | number · label · none | number | Which one element takes the accent color. Never two |
| `position` | top · bottom | bottom | Where the block sits; the logo takes the opposite corner |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Do and Don't

Rendered on the practice brand, Kadri Coffee, at 1:1 on paper. `showcase.html` at the root of Brand Asset Maker (BAM) shows each pair side by side (in the engine repo the PNGs are in `docs/evidence/kadri/out/do-dont/`).

| | Post | What it shows |
|---|---|---|
| Do | [stat--do](../../../showcase.html#do-dont-stat) | "250 g" reads at a glance. The label says what it counts, and the source vouches for it. |
| Don't | [stat--dont](../../../showcase.html#do-dont-stat) | A sentence in the number slot. It fails `budget`, `safe-zone` and `overflow`: must fix. Use the headline post instead. |

## Fallbacks

- `number` over 5 characters → `social-post/headline`. A long number is a sentence.
- `label` over budget → rewrite. The label names, it does not explain; explanation belongs in the post copy.

## Decisions

- 2026-09-29 — Slot roles renamed from faces to heading levels (Arjun, `upstream: true`): `number → data-snippet, label → body, source → label`. The `role-face` check enforces the face per level (display for `h1`/`h2`/`h3`/`data-snippet`, body for `body`/`label`) and the renderer stamps `data-role`. Template class for the number is `.pg-data`.

- 2026-09-29 — The number keeps the display face under the "display face is for H1 to H3 only" rule: a display-scale number that is the dominant element of the surface is the H1 of that surface. This is the one sanctioned non-heading use.

- 2026-09-29 — The 5-character rule is the whole archetype. Past it the number stops reading as a glyph and the display size becomes a wall. Tested against `100%`, `$1.4M`, `3.2×`, `10k+`, `24/7`.
- 2026-09-29 — A 1.4cqi gap between number and label: at line-height 0.85 the descender of a `y` in `15y` touched the label in the first HueGrid render.
- 2026-10-20 — The 1.4cqi gap was tuned to one face (Magnet). In Kadri's Hubot Sans the `g` of `250 g` hangs 0.14em below the 0.85 line box and its ink ran 5.3px into the label (measured at 1x; `overflow` passed, it sees boxes, not ink). A descender scales with the number, so its room is set in em: `padding-bottom: 0.15em` on the number, the 1.4cqi gap kept below it. Figures-only numbers sit 0.15em higher. `upstream: true`.
- 2026-09-29 — Accent goes on exactly one element. `number` and `label` both accented was tried and rejected: the label competes.
- 2026-10-20 — 9:16 story (contract 1.4), adapted not scaled (`upstream: true`): sizes stay in `cqi`; at `[data-ratio="9:16"]` the default position (`bottom`) sits on the centre line, because the foot of a story belongs to the reply bar and the thumb; `top` stays top.

## Never do

- Never accent two elements.
- Never put the source above the label.
- Never render a number with more than 5 characters; route to headline.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/stat']"]
- prop: accent
  label: Accent target
  kind: select
  values: [number, label, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/stat']"]
- prop: position
  label: Block position
  kind: select
  values: [top, bottom]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/stat']"]
```
