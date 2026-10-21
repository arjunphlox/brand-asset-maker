---
title: Email header
scope: The image at the top of a newsletter, 1200×400, shown at 600×200. A headline, a kicker and the logo.
owns:
  - Slots headline · kicker · logo and their budgets
  - The 3:1 header frame and its half-size reading rule
  - Bounded variation: scheme, align, accent mark
see-also:
  - ../select.md
  - ../../banner/link-preview/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Email header

**Principle carried:** Hierarchy → Prioritise (one headline). Every size is set for the half-size view: an email client shows the 1200×400 image at 600×200, so 32px here is 16px on the reader's screen.

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `headline` | yes | ≤ 8 words, ≤ 48 chars | `h1`: display face, 5.4cqi (65px here, 32px shown), one or two lines |
| `kicker` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, uppercase, in the accent text colour, 2.8cqi (34px here, 17px shown). The issue or the topic |
| `logo` | yes | asset | Top left inside the safe zone (top centre when `align` is center) |

Hierarchy: headline > kicker > logo.

## Format

One format: `3:1`, 1200×400, shown at 600×200. Safe zone 56px top and bottom, 72px sides. 1cqi is 12px here. The `min-text` floor for the email use-case is 32px (16px shown), higher than a post's 28px.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment and logo position |
| `mark` | bar · none | bar | An accent bar on the start side of the block; suppressed when `align` is center |
| `rule` | none · hairline | none | The top row becomes the logo, a hairline and the kicker at the far edge. The bar is suppressed |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- `headline` over 8 words or 48 characters → rewrite. The email body says the rest.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the new `email` use-case (contract 1.4, `rules/decisions.md`). Some email clients hide images until the reader allows them, so the header repeats what the email says and never carries the only copy of a fact (a date, a price, a link).

- 2026-10-21 — Opt-in cues from HueGrid's client work (inspiration only, `rules/decisions.md`): the kicker in the accent text colour and `rule: hairline`. Kadri: all 24 samples (8 variation combinations × three schemes) pass the 11 checks.

## Never do

- Never put the only copy of a fact in the header image. The email text must say it too.
- Never set text below 32px here. It shows at half size.
- Never show the bar on a centred block.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='email/header']"]
- prop: align
  label: Alignment
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='email/header']"]
- prop: mark
  label: Accent mark
  kind: select
  values: [bar, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='email/header']"]
- prop: rule
  label: Hairline rule
  kind: select
  values: [none, hairline]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='email/header']"]
```
