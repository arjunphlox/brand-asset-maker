---
title: Quote
scope: Someone's words, attributed. The quote reads as a measured block, the attribution as one grouped unit.
owns:
  - Slots quote · attribution · role · logo and their budgets
  - Measure discipline (line length) for a multi-line display block
  - Bounded variation: scheme, quote mark, align
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

# Quote

**Principle carried:** Rhythm → Flow (a fixed measure of 78cqi at the 7cqi quote step keeps a 30-word quote to 4–6 lines in the body face). Grouping → Navigate (attribution and role are one unit with tight internal spacing and a clear gap from the quote).

## Why it works

- **The line length stays fixed.** The `quote` has a 78cqi measure at 7cqi, which keeps 30 words to 4 to 6 lines. Line length and line spacing change how fast text is read on screen. ([Dyson 2004](../../../docs/design/system/visual/sources.md#dyson-2004))
- **The quote is big and has room.** The `quote` is the largest text, set in the body face. Reading speed holds steady above a critical print size and drops sharply below it, and 7cqi is well above the `min-text` floor. ([Legge & Bigelow 2011](../../../docs/design/system/visual/sources.md#legge-bigelow-2011))
- **Attribution and role form one unit.** `attribution` and `role` sit tight together with a clear gap from the `quote`. Things that sit close are seen as one group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **A named source makes it believable.** `attribution` is required, and an unattributed quote goes to `headline`. In 1951 persuasion studies, the same message changed more minds when it came from a source people trusted. ([Hovland & Weiss 1951](../../../docs/design/system/visual/sources.md#hovland-weiss-1951))

## How it comes across

**understated, credible.** Someone else's words: the post steps back and lets them be trusted. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `quote` | yes | ≤ 30 words, ≤ 180 chars | `body`: body face at the quote step (7cqi), dominant by size, never by face |
| `attribution` | yes | ≤ 4 words | `body`: body face, `--brand-weight-label` |
| `role` | no | ≤ 6 words | `label`: body face, muted, directly under attribution |
| `logo` | yes | asset | Corner inside the safe zone |

Hierarchy: quote > attribution > role > logo.

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `mark` | glyph · bar · none | glyph | An opening quote glyph in the body face and the accent, an accent bar, or nothing |
| `align` | start · center | start | Text alignment; with `center` the bar mark is suppressed (a bar is a start-side device) |
| `emphasis` | standard · giant | standard | `giant`: the quote at 9.5cqi in the accent text colour (on white, the brand's darker accent text colour where the accent itself fails contrast). Long quotes overflow and are caught by the overflow check |

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

## Do and Don't

Rendered on the practice brand, Kadri Coffee, at 1:1 on paper. `showcase.html` at the root of Brand Asset Maker (BAM) shows each pair side by side (in the engine repo the PNGs are in `docs/evidence/kadri/out/do-dont/`).

| | Post | What it shows |
|---|---|---|
| Do | [quote--do](../../../showcase.html#do-dont-quote) | One sentence, attributed. The words are big, and there is room around them. |
| Don't | [quote--dont](../../../showcase.html#do-dont-quote) | 28 words: a wall. It is inside the 30-word budget, so every check passes. The budget is a ceiling, not a target. Cut to the one sentence that matters. |

## Fallbacks

- `quote` over 30 words → cut once. Still over → `social-post/headline` with the strongest clause.
- `attribution` missing → refuse. An unattributed quote is a headline; use that archetype.

## Decisions

- 2026-09-29 — Slot roles renamed from faces to heading levels (Arjun, `upstream: true`): `quote → body, attribution → body, role → label`. The `role-face` check enforces the face per level (display for `h1`/`h2`/`h3`/`data-snippet`, body for `body`/`label`) and the renderer stamps `data-role`.

- 2026-09-29 — Quote text and glyph moved from the display face to the body face (upstream: true). Rule from HueGrid, adopted for the library: the display face is for heading levels H1 to H3 and for a dominant display-scale number; a quote is running text however large it is set. Dominance comes from size, not face.

- 2026-09-29 — Measure corrected after the first HueGrid renders: the draft said 18–26 characters per line, which is a text-face figure; at 7cqi in a condensed display face 78cqi gives 36–44 characters and 30 words sit in 4–5 lines. The template value stayed, the spec moved.
- 2026-09-29 — `mark: bar` with `align: center` is suppressed by the template; a centered bar has no side to sit on.
- 2026-09-29 — The quote step is fixed at 7cqi regardless of length. Auto-sizing to fit was rejected: it hides budget violations and produces two posts that "match" at different sizes.
- 2026-10-20 — 9:16 story (contract 1.4): no layout change. The centred block already sits on the story's centre line and passes every check at 9:16 for HueGrid and Kadri. Selection does not pick a quote for a story (no call to action): it becomes a headline (`../select.md`, step 0).
- 2026-10-26 — Anchored, never floating (Arjun, `upstream: true`): a block on the centre line of a tall post reads unresolved, so content anchors to the safe zone's edges in every format, the 9:16 story included (above its 340px reply-bar zone). On tall frames the logo and the first text slot grow with `--pg-logo` and `--pg-title` from `base.css`, since type is sized by width. A readability rule for every brand, not one brand's taste. The quote now anchors to the foot in every format, the square included; a centred quote keeps its logo at the top.

## Never do

- Never set the quote in the display face. Size makes it dominant; the face stays body.

- Never auto-fit the quote to length.
- Never split attribution and role into separate positions. They are one group.

## Editor controls (tessor-props)

```tessor-props
- prop: emphasis
  label: Emphasis
  kind: select
  values: [standard, giant]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/quote']"]
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/quote']"]
- prop: mark
  label: Quote mark
  kind: select
  values: [glyph, bar, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/quote']"]
- prop: align
  label: Alignment
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/quote']"]
```
