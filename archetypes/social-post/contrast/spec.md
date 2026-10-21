---
title: Contrast
scope: Two short statements. The claim people believe, then the counter that answers or overturns it ("X isn't Y. It's Z."), the counter on a solid accent panel.
owns:
  - Slots claim · counter · tagline · logo and their budgets
  - The two-statement rule and the counter panel
  - Bounded variation: scheme, offset, claim panel, join, foot hairline
see-also:
  - ../select.md
  - ../headline/spec.md
  - ../list/spec.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Contrast

**Principle carried:** Contrast → Emphasis (two statements at one size; the counter wins by its solid panel, not by a bigger size, so the eye reads claim then counter and lands on the answer). Proximity → Flow (`stagger` steps the counter down and toward the end edge, so the pair reads on a diagonal, top-left to lower-right).

## Why it works

- **The eye reads claim, then counter.** `claim` and `counter` are both `h2` at 6cqi, so they have the same shape. When two things share a structure, people line them up part by part and notice how they differ. ([Gentner & Markman 1997](../../../docs/design/system/visual/sources.md#gentner-markman-1997))
- **The panel sets the counter apart.** The `counter` sits on a solid `--pg-accent` panel while the `claim` is on the surface. An item set apart from items that are alike is remembered better, and the two statements are alike in size and face. ([von Restorff 1933](../../../docs/design/system/visual/sources.md#von-restorff-1933))
- **Two short statements are easy to hold.** Each statement is at most 10 words, and there are only two. The working limit is about three to five chunks, so the pair fits with room to spare. ([Cowan 2001](../../../docs/design/system/visual/sources.md#cowan-2001))
- **The panel text stays readable.** The counter's text uses `--pg-accent-on` on `--pg-accent`, and `contrast` checks the pair against 4.5:1 (3:1 at 36px and above). ([W3C 2023 (WCAG 2.2)](../../../docs/design/system/visual/sources.md#wcag-22))

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `claim` | yes | ≤ 10 words, ≤ 60 chars | `h2`: display face, 6cqi. The belief, said plainly, on the surface |
| `counter` | yes | ≤ 10 words, ≤ 60 chars | `h2`: display face, 6cqi, on a solid accent panel (`--pg-accent`, text `--pg-accent-on`) |
| `tagline` | no | ≤ 6 words, ≤ 32 chars | `label`: body face, at the foot, end side |
| `logo` | yes | asset | At the foot, start side, inside the safe zone |

Hierarchy: claim > counter > tagline > logo. This is reading order: the claim is read first, the counter second. The counter carries the emphasis through its panel.

## Formats

1:1 (feed post) and 4:5 (tall feed post). Not 9:16: a story is a reminder with one fact and a call to action. A contrast's story is a headline with the counter as the line.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair. The panel reads `--pg-accent` / `--pg-accent-on`, which `base.css` swaps on the accent scheme, so the panel turns ink with accent text there |
| `offset` | stagger · stack | stagger | `stagger`: the counter panel sits below the claim, flush with the end edge of the safe zone. `stack`: both start-aligned |
| `claim` | plain · outline | plain | `outline`: a 0.2cqi `--pg-muted` border around the claim, with the counter's padding and radius |
| `join` | panel · inline | panel | `inline`: claim and counter run as one paragraph at one size (6.4cqi), no panel; the counter steps to the body weight (`--brand-weight-body`) in the display face. `offset` and `claim` do not apply |
| `rule` | none · hairline | none | `hairline`: a 0.2cqi `--pg-muted` line in the foot row, from the logo to the tagline (the pattern of event and link-preview) |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Fallbacks

- One sentence only (no counter, or no claim) → `social-post/headline` with that sentence.
- More than two sentences → cut to two. Three short statements are a list: `social-post/list` with `style: stacked`.
- A statement over 10 words or 60 characters → rewrite it. Never shrink the type.
- The tagline over budget → rewrite it, or leave it out.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout (contract 1.4, `rules/decisions.md`, `upstream: true`). Inspiration: a "Contrast Statements" template from HueGrid's client work (inspiration only; the client is named in the engine's `rules/decisions.md`): the claim, then the counter on a solid panel, offset on a diagonal; logo bottom left with a hairline to a small tagline bottom right. Only what tokens, slots and `cqi` carry was taken; none of its colours, fonts, copy, gradients, texture, illustrations or shadowed cards. Fills `select.md`'s "a comparison" gap for the two-statement case. Both statements are `h2` at 6cqi: a first draft at 6.6cqi with a 76% measure spilled the 4:5 safe zone with both statements at budget and the claim outlined, so the size came down and the measure went up to 80%. A wrapped counter's panel takes the full measure (CSS sizes a wrapped box to the space it may use, not its longest line), so it reads as a fixed card with the text on its start edge. The foot hairline keeps a 6cqi minimum so it never collapses beside a long tagline. Kadri: p06 6/6 (1:1 and 4:5 × three schemes) and every variation combination × both formats × three schemes pass the 11 checks.

- 2026-10-21 — `join: inline` added from public reference posts Arjun shared (Shillington, Room Fifty; inspiration only, nothing copied, `rules/decisions.md`): the belief and the answer as one sentence pair, the turn carried by weight. Both slots stay `h2` in the display face: `role-face` checks the face against the schema role, and a role cannot change with a variation, so the counter keeps the display face and steps down to `--brand-weight-body` (400 for Kadri against 700). The panel, the outline and the stagger are switched off inside `inline`; those combinations render the same as `inline` alone and still pass. Kadri: all 96 contrast samples (16 combinations × 1:1 and 4:5 × three schemes) pass the 11 checks.

## Never do

- Never add a third statement, or drop one. One sentence is a headline; three are a list.
- Never make the counter bigger than the claim to show it is the answer. The panel (or, with `join: inline`, the weight) does that.
- Never put the claim on the solid panel. The panel belongs to the answer.
- Never paint the panel in a colour outside the scheme's accent pair.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/contrast']"]
- prop: offset
  label: Offset
  kind: select
  values: [stagger, stack]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/contrast']"]
- prop: claim
  label: Claim panel
  kind: select
  values: [plain, outline]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/contrast']"]
- prop: rule
  label: Foot hairline
  kind: select
  values: [none, hairline]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/contrast']"]
- prop: join
  label: Join
  kind: select
  values: [panel, inline]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/contrast']"]
```
