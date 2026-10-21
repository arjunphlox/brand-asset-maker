---
title: Hiring
scope: A job post. A kicker says it is a job ("We're hiring"), the role leads, the details say where and what kind, and a CTA says how to apply.
owns:
  - Slots kicker · role · details · cta · logo and their budgets
  - The role-first hierarchy for a job post
  - Bounded variation: scheme, align, accent mark
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

# Hiring

**Principle carried:** Hierarchy → Prioritise (the role is the only element at display size). The kicker takes the accent, so the reader knows it is a job before they read the role.

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `kicker` | yes | ≤ 3 words, ≤ 20 chars | `label`: body face, in the accent, above the role ("We're hiring", "Join us") |
| `role` | yes | ≤ 5 words, ≤ 32 chars | `h1`: display face, dominant (12cqi). The job title |
| `details` | yes | ≤ 8 words, ≤ 48 chars | `body`: body face, 4.6cqi. Where and what kind ("Mill Lane, Saturdays, part time") |
| `cta` | no | ≤ 3 words, ≤ 20 chars, starts with a verb | `label`: body face, below the details ("Apply by Friday") |
| `logo` | yes | asset | Top left inside the safe zone (top centre when `align` is center) |

Hierarchy: role > kicker > details > cta > logo.

**A job is a fact.** Only the owner can post one. The agent never invents a role, pay, hours or perks.

## Formats

1:1 (feed post) and 4:5 (tall feed post).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment and logo position |
| `mark` | bar · none | bar | An accent bar on the start side of the block; suppressed when `align` is center |
| `cta` | text · pill | text | The CTA as text, or as one solid button: the accent surface with its own text colour. On the accent scheme the pair swaps, so the button turns ink |
| `highlight` | none · block | none | `block`: the role sits on solid accent tags, one per line (`--pg-accent` surface, `--pg-accent-on` text; the pair swaps on the accent scheme). One size step down (12cqi → 10.4cqi) with loosened leading so the tags fit the safe zone and never touch |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- `role` over 5 words → rewrite. The duties go in the post copy.
- `details` over 8 words → keep where and what kind. Pay, hours and perks go in the post copy, and only when the owner gave them.
- `cta` over 3 words, or not starting with a verb → rewrite it.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout (contract 1.4, `rules/decisions.md`). The kicker is required and in the accent: without it, a role title alone reads as a headline. The Kadri example role ("Pop-up barista") is demo copy written around the pop-up message, flagged in the generator's note.

- 2026-10-21 — `cta: pill` added as an opt-in cue from HueGrid's client work (inspiration only, `rules/decisions.md`). Kadri: all 48 samples (8 variation combinations × two formats × three schemes) pass the 11 checks.

- 2026-10-21 — `highlight: block` added as an opt-in cue from HueGrid's client work (Pifo Talks: the title set on solid highlight tags, one per line; inspiration only, `rules/decisions.md`). The `role` slot sits in a `.pg-title` wrapper that is `display: contents` by default, so default output is unchanged; with `block` the wrapper is the block box and the slot turns inline with `box-decoration-break: clone`, padding 0.08em by 0.22em of the tag size (written in cqi, as every template size is) and the brand radius. Hubot Sans's content area is about 1.4em tall, so tags overlapped by 31.6px at line-height 1.3; at 1.62 consecutive tags sit about 5px apart (measured on Kadri). At the full size the budget-length role spilled the 4:5 safe zone, so the tagged role takes one fixed size step down (12cqi → 10.4cqi): a property of the variation, not a fit to the copy. Works with `mark`, `align` and `cta: pill`. Kadri: all 96 samples (16 variation combinations × two formats × three schemes) pass the 11 checks.

## Never do

- Never invent a job, pay, hours or perks.
- Never show the bar on a centred block.
- Never accent the role. The kicker carries the accent.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/hiring']"]
- prop: align
  label: Alignment
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/hiring']"]
- prop: mark
  label: Accent mark
  kind: select
  values: [bar, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/hiring']"]
- prop: cta
  label: CTA style
  kind: select
  values: [text, pill]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/hiring']"]
- prop: highlight
  label: Title tags
  kind: select
  values: [none, block]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/hiring']"]
```
