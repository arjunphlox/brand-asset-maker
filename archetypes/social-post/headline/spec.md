---
title: Headline
scope: One line carries the post. A kicker may set it up, a CTA may follow it. Nothing else competes.
owns:
  - Slots headline · kicker · cta · logo and their budgets
  - The single-dominant-element hierarchy for a text-only post
  - Bounded variation: scheme, align, size step, accent mark
see-also:
  - ../select.md
  - ../stat/spec.md
  - ../quote/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Headline

**Principle carried:** Hierarchy → Prioritise. One element dominates by scale; everything else is subordinate by scale, never by weight. Contrast → Distinguish is carried by the scheme (surface vs on-surface pair from brand tokens).

## Why it works

- **One line is read first.** The `headline` is 12cqi (15cqi at `size` 2) and everything else is smaller. Attention goes first to the region that differs most from its surroundings in size, contrast or colour. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))
- **Short lines suit scanning.** The `headline` is at most 8 words, set at the start edge with the `kicker` above it. On screen, people scan more than they read, looking at the first words and down the left edge. ([Nielsen 2006](../../../docs/design/system/visual/sources.md#nielsen-2006))
- **The call to action starts with a verb.** The `cta` is three words or fewer and starts with a verb, such as "Book a seat", so it says what to do. (HueGrid practice, not a research finding)
- **The colours are easy to read.** The `scheme` pair comes from brand tokens and `contrast` checks it at 4.5:1 (3:1 at 36px and above). In one study, the same statement was judged true more often in a colour that was easier to read. ([W3C 2023 (WCAG 2.2)](../../../docs/design/system/visual/sources.md#wcag-22); [Reber & Schwarz 1999](../../../docs/design/system/visual/sources.md#reber-schwarz-1999))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `headline` | yes | ≤ 8 words, ≤ 64 chars | `h1`: display face, weight `--brand-weight-display`, dominant |
| `kicker` | no | ≤ 4 words | `label`: body face, uppercase tracked, sits above the headline |
| `cta` | no | ≤ 3 words, ≤ 20 chars, starts with a verb | `label`: body face, sits below, may take the accent |
| `logo` | yes | asset | Anchored to a corner inside the safe zone, never larger than 12% of the frame width |

Hierarchy: headline > kicker > cta > logo.

**The CTA rule.** A call to action says what to do: 3 words or fewer, and the first word is a verb ("Find us Saturday", "Taste both roasts", "Book a seat"). "Nov 8" or "Our new beans" is not a call to action: it is a fact or a second headline. No check reads verbs; the proposal counts the words and names the verb, and the owner confirms it.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment and logo corner |
| `size` | 1 · 2 | 1 | Headline size step (1 = 12cqi, 2 = 15cqi). Never below 1 |
| `mark` | bar · none | bar | An accent bar on the start side of the block; suppressed when `align` is center |

Everything else is fixed by the template. A brand cannot ask for a third alignment or a size 3; that is a designer conversation.

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Do and Don't

Rendered on the practice brand, Kadri Coffee, at 1:1 on paper. `showcase.html` at the root of Brand Asset Maker (BAM) shows each pair side by side (in the engine repo the PNGs are in `docs/evidence/kadri/out/do-dont/`).

| | Post | What it shows |
|---|---|---|
| Do | [headline--do](../../../showcase.html#do-dont-headline) | One line leads. The kicker sets it up, and the CTA starts with a verb ("Visit Mill Lane"). |
| Don't | [headline--dont](../../../showcase.html#do-dont-headline) | Two headlines in one post, and a date where the CTA should be. Every check passes. Only the two-second question catches it. |

## Fallbacks

- `headline` over budget → rewrite. There is no simpler archetype.
- `cta` over 3 words, or not starting with a verb → rewrite it as a verb plus at most two words. A fact without a verb (a date, a place) belongs in the kicker or in the message.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-09-29 — Slot roles renamed from faces to heading levels (Arjun, `upstream: true`): `headline → h1, kicker → label, cta → label`. The `role-face` check enforces the face per level (display for `h1`/`h2`/`h3`/`data-snippet`, body for `body`/`label`) and the renderer stamps `data-role`.

- 2026-09-29 — Headline size is a two-step ladder in `cqi` so 1:1 and 4:5 share one template. A third step was rejected: past 15cqi an 8-word line wraps to four lines and the hierarchy collapses.
- 2026-10-20 — 9:16 story (contract 1.4), adapted not scaled (`upstream: true`): sizes stay in `cqi` (same width, same line length); at `[data-ratio="9:16"]` the block sits on the centre line and the `cta` drops to the foot of the safe zone, where the thumb is; a centred story keeps the logo at the top so the CTA owns the foot. Selection picks the headline for a story only with a `cta` (`../select.md`, step 0).

- 2026-10-20 — The `cta` is verb-first, 3 words or fewer (ux-copy borrowing, `docs/plans/2026-10-20-package-borrowings.md` §5). Stated as a rule in this spec and the propose skill, not a check: deciding whether a word is a verb needs language judgement no script here makes reliably, and a guessed check would be a wish. `upstream: true`.

## Never do

- Never show the bar on a centered block; it has no side to sit on.
- Never let the kicker or CTA exceed the label size. If a CTA "needs to be bigger" it is the headline.
- Never add a second headline. Two dominant elements is no hierarchy.
- Never write a CTA that does not start with a verb. A CTA without one is a second headline or a fact.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/headline']"]
- prop: align
  label: Alignment
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/headline']"]
- prop: size
  label: Headline size step
  kind: number
  min: 1
  max: 2
  step: 1
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/headline']"]
- prop: mark
  label: Accent mark
  kind: select
  values: [bar, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/headline']"]
```
