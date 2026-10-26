---
title: Link preview
scope: The image a link shows when it is shared (share card, blog cover, Open Graph image), 1200×630. A title, a kicker and the logo.
owns:
  - Slots title · kicker · logo and their budgets
  - The 1.91:1 share-card frame and its centre-line rule
  - Bounded variation: scheme, align, accent mark
see-also:
  - ../select.md
  - ../profile-cover/spec.md
  - ../../social-post/headline/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Link preview

**Principle carried:** Hierarchy → Prioritise (the title is the one dominant element). Balance → Anchor (the block sits on the centre line, so the card still reads when an app shows it small or crops it towards a square).

## Why it works

- **The title is seen first.** The `title` is 77px, far larger than the `kicker` and `cta`, so it is the one dominant element on the card. Attention goes first to the region that stands out most in size. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **A short title survives scanning.** The `title` is limited to ten words. On screen, people scan more than they read, and look at the first words of a line. ([Nielsen 2006](../../../docs/design/system/visual/sources.md#nielsen-2006))
- **Kicker, title and button read as one block.** The `kicker`, `title` and `cta` sit close together on one start edge, so they group into one block. Things that sit close together or line up are seen as a group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **The block stays readable when cropped.** The block sits on the centre line, so the card still reads when an app shows it small or crops it towards a square. (HueGrid practice, not a research finding)

## How it comes across

**simple, credible.** A shared link: clear enough to read in a feed, credible enough to click. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `title` | yes | ≤ 10 words, ≤ 70 chars | `h1`: display face, 6.4cqi (77px), up to three lines |
| `kicker` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, uppercase, in the accent text colour, above the title (the section, "Tasting notes") |
| `cta` | no | ≤ 3 words, ≤ 20 chars, starts with a verb | `label`: body face, below the title ("Read the notes") |
| `logo` | yes | asset | Top left inside the safe zone (top centre when `align` is center) |

Hierarchy: title > kicker > cta > logo.

## Format

One format: `1.91:1`, 1200×630. Safe zone 60px top and bottom, 72px sides (`poligraf.config.json`). 1cqi is 12px here.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment and logo position |
| `mark` | bar · none | bar | An accent bar on the start side of the block; suppressed when `align` is center |
| `rule` | none · hairline | none | The top row becomes the logo, a hairline and the kicker at the far edge. The bar is suppressed |
| `cta` | text · pill | text | The CTA as text, or as one solid button: the accent surface with its own text colour. On the accent scheme the pair swaps, so the button turns ink |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- `title` over 10 words or 70 characters → use the page's short title. The first sentence of the page is not a title.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the new `banner` use-case (contract 1.4, `rules/decisions.md`). The frame is 1200 wide, so base.css sets its width as well as its height. Sizes stay in cqi: the title step (6.4cqi) was chosen so 70 characters fit in three lines at 1200 wide.

- 2026-10-21 — Opt-in cues from HueGrid's client work (inspiration only, `rules/decisions.md`): the kicker in the accent text colour, `rule: hairline` (logo, line, kicker in one row; the block uses `display: contents` so the kicker can join that row) and `cta: pill`. Kadri: all 48 samples (16 variation combinations × three schemes) pass the 11 checks.

## Never do

- Never put the only copy of a fact on the card. The page it links to must say it too.
- Never show the bar on a centred block.
- Never move the title to the top or bottom edge. Small previews and square crops lose it there.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/link-preview']"]
- prop: align
  label: Alignment
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/link-preview']"]
- prop: mark
  label: Accent mark
  kind: select
  values: [bar, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/link-preview']"]
- prop: rule
  label: Hairline rule
  kind: select
  values: [none, hairline]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/link-preview']"]
- prop: cta
  label: CTA style
  kind: select
  values: [text, pill]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/link-preview']"]
```
