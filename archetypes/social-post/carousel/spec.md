---
title: Carousel
scope: One slide of a carousel (a multi-image or document post read by swiping). The beat says which slide it is, the cover that hooks, a point that makes one point, or the close that says what to do. A generator's ordered `frames` put the slides in order.
owns:
  - Slots title · kicker · cue (cover) · index · heading · body (point) · heading · cta · handle (close) · logo, their budgets and the beat each belongs to
  - The beat variation and what each beat shows
  - The fixed logo corner across every slide of a set
see-also:
  - ../select.md
  - ../headline/spec.md
  - ../stat/spec.md
  - ../sequence-brief.md
  - ../../../docs/design/system/visual/principles.md
implements:
  - ./template.html
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Carousel

**Principle carried:** Hierarchy → Prioritise, per slide: each slide has one dominant line (the cover's title, a point's heading, the close's line), and nothing else on the slide is at display size. Repetition → Unify across slides: the logo sits in the same corner at the same size on every beat, and every slide of a set shares the scheme and the format, so the swipe reads as one thing.

A carousel is an ordered set. This layout is **one slide**; the set is a generator with `frames` (contract 1.5): one frame per slide, in order, each a normal sample with its own checks. A frame may be another layout (a stat as the materials slide), as long as that layout serves the set's format.

## Why it works

- **The cover works on its own.** The `title` is the only display-size line (11cqi) and the spec says it must work alone, because most people see only the cover. In web page studies, people judged visual appeal in about 50 ms, so the first look has to be clear. ([Lindgaard et al. 2006](../../../docs/design/system/visual/sources.md#lindgaard-2006))
- **Each slide makes one point.** A point slide has one `heading` (8cqi) and a `body` of at most 24 words, and a longer point is split into two slides. In learning studies, material given in parts at the viewer's own pace helps, and swiping is that pace. ([Mayer 2009](../../../docs/design/system/visual/sources.md#mayer-2009))
- **A fixed logo corner joins the slides.** The `logo` sits top left at the same size on every beat, and the whole set shares one scheme and format. Things that look alike are seen as one group, so the swipe reads as one set. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **The first and last slides are remembered.** The cover opens the set and the close holds the only `cta`. People remember the first and last items of a sequence best, so these two slides do the most work. ([Murdock 1962](../../../docs/design/system/visual/sources.md#murdock-1962))

## Slots

Each slot belongs to the beats named in its `when` (contract 1.5). A slot given on a beat that does not show it fails `budget` (rule `when`): the post would drop it.

| Slot | Beat | Required | Budget | Role |
|---|---|---|---|---|
| `title` | cover | yes | ≤ 7 words, ≤ 48 chars | `h1`: display face, dominant (11cqi). The hook: it must work alone, as most people see only the cover |
| `kicker` | cover | no | ≤ 4 words, ≤ 28 chars | `label`: body face, in the accent, above the title (the brand name or the message's `name` fact) |
| `cue` | cover | yes | ≤ 1 word, ≤ 5 chars | `label`: the swipe cue, the slide count ("1/5"), at the foot on the end side, followed by an arrow drawn in CSS (a stroke and a chevron in the on-surface colour) |
| `index` | point | yes | ≤ 1 word, ≤ 3 chars | `label`: the slide's number ("02"), in the accent, top right, opposite the logo |
| `heading` | point · close | yes | ≤ 10 words, ≤ 64 chars | `h2`: display face, 8cqi. The point, or the close's line |
| `body` | point | no | ≤ 24 words, ≤ 150 chars | `body`: body face, 4.4cqi, under the heading |
| `cta` | close | yes | ≤ 3 words, ≤ 20 chars, starts with a verb | `label`: body face, 3.4cqi, in the accent, under the line |
| `handle` | close | no | ≤ 2 words, ≤ 28 chars | `label`: the handle, the site ("example.com") or one short fact such as the date (a message reference), at the foot on the start side |
| `logo` | every beat | yes | asset | Top left inside the safe zone, the same corner and size on every beat |

Hierarchy: title > heading > kicker > index > body > cta > cue > handle > logo. Per beat that reads: cover title > kicker > cue > logo; point heading > index > body > logo; close heading > cta > handle > logo.

## Formats

1:1 (feed post) and 4:5 (tall feed post). Never 9:16: a story is its own format and job (`../select.md`, step 0).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair. Set it once for the whole set (the generator's `variation`), so every slide shares it |
| `beat` | cover · point · close | cover | Which slide this is: which slots show and where. Each frame of a set names its beat |

Everything else is fixed by the template: the logo corner, the sizes, the cue's arrow. A slide cannot move the logo, and a beat cannot borrow another beat's slots.

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

The checks judge one slide. Nothing yet measures the set as a whole (order, the logo box across slides, the slide count); the set's order is the generator's `frames` order, and the contact sheet shows it as one strip to review. Approving a whole set is not in contract 1.5: `npm run approve` approves one frame.

## Fallbacks

- `title` over budget → rewrite. The cover says one thing; the rest is what the points are for.
- `heading` over budget → rewrite, or split the point into two slides.
- `body` over 24 words → cut it, or move the rest to the post copy. Never shrink the type.
- `cta` over 3 words, or not starting with a verb → rewrite it (headline's CTA rule).
- More than 10 slides, or a slide that needs a layout this library lacks → a gap note (`workshop/gap-note.md`).
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-22 — Added as a sample layout (contract 1.5) from the sequence brief (`../sequence-brief.md`, now superseded): one layout with a `beat` variation, not three layouts, so the slides share one template and the logo cannot move between them. The set is a generator's ordered `frames` (engine, 1.5), so a frame may be another layout (a stat for a number). The beats per slot are declared with the schema's slot `when`, so `element-count` and `role-face` judge only the slots a beat shows. The swipe cue is drawn in CSS (no glyph, so no font dependency). Open questions 2 to 4 of the brief answered: 1:1 and 4:5; the close may share the cover's scheme (one scheme per set); three to five slides is the guidance, not a check.

## Never do

- Never move the logo between slides, or give one slide its own scheme, face or colour.
- Never put a CTA on a slide but the close.
- Never type a fact a message holds on any slide; reference it.
- Never render a carousel slide at 9:16.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/carousel']"]
- prop: beat
  label: Beat
  kind: select
  values: [cover, point, close]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/carousel']"]
```
