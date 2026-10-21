---
title: Rack card
scope: A DL rack card (99×210 mm, the leaflet in a display rack or a DL envelope): a headline, three points and a call to action.
owns:
  - Slots kicker · headline · point1 · point2 · point3 · cta · logo and their budgets
  - The DL print frame for this job
  - Bounded variation: scheme, marker
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

# Rack card

**Principle carried:** Repetition → Rhythm (three points, one shape, one gap). Hierarchy → Prioritise (headline, points, call to action, top to bottom: the top third shows in a rack).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `kicker` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, uppercase, 3.4cqi (20px), above the headline, in the accent text colour |
| `headline` | yes | ≤ 6 words, ≤ 40 chars | `h1`: display face, 11cqi (64px) |
| `point1` … `point3` | yes | ≤ 8 words, ≤ 48 chars each | `body`: body face, 4cqi (23px), each on its own row with an accent marker. All three required |
| `cta` | no | ≤ 3 words, ≤ 20 chars | `label`: body face, uppercase, 3.4cqi, at the foot of the safe zone |
| `logo` | yes | asset | Top of the card, start side, 10cqi tall |

Hierarchy: headline > point1 > point2 > point3 > cta > kicker > logo.

## Format

`DL`: DL, 585×1240 (99×210 mm at 150 dpi). Safe zone 5 mm inside the trim, 30px on every side (`poligraf.config.json`, an estimate to re-measure against the printer's spec). 1cqi is 5.85px at DL. The frame is the trim: bleed is not drawn. The proof PNG renders at `render.scale` 2, 300 dpi.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `marker` | dot · none | dot | A small accent square before each point, or none |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- Fewer than three points → a postcard (`print/postcard`) or a flyer.
- More than three points → choose three; the rest goes on the page the CTA points to.
- `headline` over 6 words → rewrite it; in a rack only the top third shows.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added with the `print` use-case (five forms plan, form 5). The logo and the headline sit in the top third, because a display rack hides the rest.

## Never do

- Never put the headline below the top third of the card.
- Never make a point a paragraph. One idea per point.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/rack-card']"]
- prop: marker
  label: Marker
  kind: select
  values: [dot, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='print/rack-card']"]
```
