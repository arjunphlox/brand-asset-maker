---
title: Partnership
scope: Two names side by side, "A × B". The brand's mark and a partner's mark lock up with a × between them; a line says what the two do together.
owns:
  - Slots logo · partnerLogo · kicker · title · cta and their budgets
  - The lockup (brand mark, ×, partner mark on its tile) and its two arrangements
  - Bounded variation: scheme, lockup
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

# Partnership

**Principle carried:** Proximity → Group. The two marks and the × read as one unit, the lockup, set apart from the line under it. Hierarchy → Prioritise: the line is the only text at display size; the lockup leads by position, not by scale.

From HueGrid client work, inspiration only: the "A × B" posts of Aampe × Taxfix and Finverse × Xero. No client mark or name is in this library; every example mark is a labelled demo file.

## Why it works

- **The two marks read as a pair.** The brand `logo`, the drawn × and the `partnerLogo` sit close in one lockup, apart from the `title`. Things that sit close together are seen as one group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **Showing both brands shares goodwill.** The post puts the two marks side by side. In studies of brand alliances, how people feel about the alliance changes how they feel about each partner brand. ([Simonin & Ruth 1998](../../../docs/design/system/visual/sources.md#simonin-ruth-1998))
- **The line is read from the start edge.** In `row`, the lockup starts at the start edge and the `title` (7.4cqi) is the only display-size text under it. On screen, people scan down the left edge and look at the first words. ([Nielsen 2006](../../../docs/design/system/visual/sources.md#nielsen-2006))
- **The partner mark stays visible.** The `partnerLogo` sits on a tile in the paper colour, so a dark mark reads on every scheme, and `logo-visible` fails the post if either mark vanishes. Things with clear figure and ground, and high contrast, are liked more. ([Reber et al. 2004](../../../docs/design/system/visual/sources.md#reber-2004))

## How it comes across

**trustworthy, refined.** Two names side by side: each lends the other its trust. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `logo` | yes | asset | The brand's own mark (`brand.assets.logo`), first in the lockup, with the wordmark when the brand has one. `logo-integrity` and `logo-visible` cover it as on every layout |
| `partnerLogo` | yes | asset, named by the row | The partner's mark: a file the row names, under the brand's assets folder (`brand.assets.dir`, e.g. `brand/assets/partners/<name>.svg`; contract 1.5). A missing file, a file outside that folder, or a file that is not a picture refuses the row. Sits on a tile in the paper colour, 6.8cqi tall and at most 34cqi wide (a 5:1 mark fills both), so a dark mark reads on every scheme |
| `kicker` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, in the accent, above the line ("New partnership") |
| `title` | yes | ≤ 8 words, ≤ 56 chars | `h2`: display face, 7.4cqi. What the two do together |
| `cta` | no | ≤ 3 words, ≤ 20 chars, starts with a verb | `label`: body face, below the line |

The × is not a slot: two crossed strokes drawn in CSS in the on-surface colour (a 4.4cqi square, 0.8cqi strokes), between the marks. It was first set as the multiplication sign in the display face, but one condensed display face draws that glyph as a dot-sized cross where a regular face's is full size, so the drawn version keeps the joiner the same weight in every brand.

Hierarchy: title > logo > partnerLogo > kicker > cta.

**A partnership is a fact.** Only the owner can post one, and only with the partner's written yes for this asset (their mark is theirs). The agent never invents a partner, never draws a partner's mark, and never uses a real company's logo as a placeholder.

## Formats

1:1 (feed post) and 4:5 (tall feed post).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair. The partner's tile stays the paper colour on every scheme |
| `lockup` | row · stack | row | `row`: brand mark, ×, partner mark on one line at the top of the safe zone. `stack`: the three centred one under another, the line centred under them |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

`logo-visible` measures both marks (contract 1.5): the brand logo as on every layout, and the partner's mark against its tile; the check fails when either vanishes, and its detail carries the partner file's sha256. `logo-integrity` covers the brand logo only. **Review item:** the partner's file is the row's, not the brand's, so no check knows whether it is the partner's current, approved mark; the reviewer confirms it against the partner's own asset, and the sample's `assets` entry in `report.json` records which file and hash rendered.

## Fallbacks

- `title` over budget → rewrite. What the two do together, in one line; the rest goes in the post copy.
- `partnerLogo` missing, outside the assets folder, or not a picture → refuse; ask the owner for the partner's file.
- No written yes from the partner → do not make the post; ask.
- Three partners or more → a gap note (`workshop/gap-note.md`). The lockup is for two.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-22 — Added as a sample layout (contract 1.5), from the HueGrid client cues noted on 2026-10-21 (`poligraf/archetype-tuning/client-cues.md`: "an A × B partner layout, needs a second logo slot"). The engine gains row-named asset slots (any asset slot but `logo`, resolved and refused like an image slot) and `logo-visible` over every mark, so no new check id. The partner's mark sits on a paper tile: a partner file is made for a light ground, and the tile keeps it readable on ink and accent without asking the partner for a reversed file. In a theme where the paper is dark, the tile is dark too: such a brand needs the partner's light-ground mark reviewed (a review item, not measured beyond `logo-visible`). Kadri's example partner ("Mill Lane Market") and HueGrid's ("Demo Partner") are plain demo wordmarks, labelled in the file.
- 2026-10-26 — Anchored, never floating (Arjun, `upstream: true`): a block on the centre line of a tall post reads unresolved, so content anchors to the safe zone's edges in every format, the 9:16 story included (above its 340px reply-bar zone). On tall frames the logo and the first text slot grow with `--pg-logo` and `--pg-title` from `base.css`, since type is sized by width. A readability rule for every brand, not one brand's taste.

## Never do

- Never put a real company's mark in a proposal or an example. A demo mark says it is a demo.
- Never redraw, recolour or crop a partner's mark; use their file.
- Never set the brand's mark larger than the partner's to "win" the lockup. The two are equals.
- Never add a third mark.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/partnership']"]
- prop: lockup
  label: Lockup
  kind: select
  values: [row, stack]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/partnership']"]
```
