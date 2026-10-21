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

## Why it works

- **Text is sized for the half-size view.** An email client shows the image at 600×200, so the `headline` at 65px reads as 32px. The `min-text` floor of 32px here is 16px shown. Reading slows sharply below a critical print size. ([Legge & Bigelow 2011](../../../docs/design/system/visual/sources.md#legge-bigelow-2011))
- **The headline is seen first.** The `headline` is 65px and the `kicker` 34px, so the headline is the largest region. Attention goes first to the region that differs most in size. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **The kicker shows the topic.** The `kicker` sits above the `headline` in the accent text colour and names the issue or topic. Signals that show a text's structure help readers find their way. ([Lorch 1989](../../../docs/design/system/visual/sources.md#lorch-1989))
- **The logo is in the same place each issue.** By default the `logo` is top left, the same place on every issue. A logo becomes a brand asset when people link it to the brand, and that comes from using it the same way, often, over time. ([Romaniuk 2018](../../../docs/design/system/visual/sources.md#romaniuk-2018))

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
