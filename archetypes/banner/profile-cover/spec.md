---
title: Profile cover
scope: A cover image for a LinkedIn page or profile, 1584×396. One tagline and the logo, kept clear of the profile photo.
owns:
  - Slots tagline · logo and their budgets
  - The 4:1 cover frame and its profile-photo margin
  - Bounded variation: scheme, align, accent mark
see-also:
  - ../select.md
  - ../link-preview/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Profile cover

**Principle carried:** Hierarchy → Prioritise (one line, nothing else competes). Balance → Anchor (the line sits on the centre line of the free area; the logo takes the opposite corner).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `tagline` | yes | ≤ 6 words, ≤ 40 chars | `h1`: display face, 4.4cqi (70px), one or two lines |
| `logo` | yes | asset | The bottom corner opposite the tagline's side, inside the safe zone |

Hierarchy: tagline > logo.

## Format

One format: `4:1`, 1584×396. 1cqi is 15.84px here. Safe zone: 48px top and bottom, 72px right, and **568px left**, which keeps text clear of the profile photo. The photo sits over the lower left of the cover on a desktop; on a phone the cover is cropped at the sides and the photo sits further in.

**The 568px margin is an estimate, to re-measure** (`safeZoneNotes` in `poligraf.config.json`). LinkedIn's help page could not be fetched to cite. Before treating the number as locked, take a desktop and a phone screenshot of the real profile with the cover in place and measure where the photo ends.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · end | start | The tagline sits at the start of the free area (logo bottom right) or at its end (logo bottom left of the free area) |
| `mark` | bar · none | bar | An accent bar on the start side of the tagline; suppressed when `align` is end |
| `rule` | none · hairline | none | A hairline along the foot of the free area, running to the logo |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- `tagline` over 6 words or 40 characters → cut it. The profile's own text says the rest.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout with the new `banner` use-case (contract 1.4, `rules/decisions.md`). The safe zone is asymmetric: base.css sets a 35.8586cqi left inset (568px at 1584 wide). The logo is smaller here (2.6cqi, 41px) than on a post: at the post's 3.4cqi it would be 54px tall in a 300px band.

- 2026-10-21 — `rule: hairline` added as an opt-in cue from HueGrid's client work (inspiration only, `rules/decisions.md`). The logo and the line share a foot row, so the line always ends at the logo. Kadri: all 24 samples (8 variation combinations × three schemes) pass the 11 checks.

## Never do

- Never put text or the logo in the left 568px. The profile photo covers it.
- Never add a second line of copy. A cover carries one.
- Never show the bar when the tagline sits at the end.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/profile-cover']"]
- prop: align
  label: Alignment
  kind: select
  values: [start, end]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/profile-cover']"]
- prop: mark
  label: Accent mark
  kind: select
  values: [bar, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/profile-cover']"]
- prop: rule
  label: Hairline rule
  kind: select
  values: [none, hairline]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='banner/profile-cover']"]
```
