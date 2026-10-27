---
title: Event
scope: A post that says what is happening, when and where. The name leads, the date reads second, the place third, and a CTA may say what to do.
owns:
  - Slots name · date · place · speaker · speakerRole · series · cta · logo and their budgets
  - The name-date-place hierarchy for an event post
  - Bounded variation: scheme, align, accent target, rule, cta, highlight, head, foot
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

# Event

**Principle carried:** Hierarchy → Prioritise (three levels by size: the name in the display face, the date one step down in the display face, the place in the body face). Grouping → Navigate (name, date and place are one block; the CTA sits apart from it).

## Why it works

- **Name, date and place read in order.** The `name` is 11cqi, the `date` 7cqi and the `place` 4.6cqi. In print ads, the attention a text element gets grows with its surface size, so the largest text is read first. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **The details form one block.** `name`, `date` and `place` sit close together, and the `cta` sits apart from them. Things that sit close are seen as one group. ([Wertheimer 1923](../../../docs/design/system/visual/sources.md#wertheimer-1923))
- **A date and place make acting easy.** `date` and `place` are required slots. People who know when and where they will act are much more likely to act. ([Gollwitzer 1999](../../../docs/design/system/visual/sources.md#gollwitzer-1999))
- **One accent marks one thing.** The `accent` variation colours the `date`, the `cta` or nothing, never two. One item that differs by a single feature, such as colour, is found at once. ([Treisman & Gelade 1980](../../../docs/design/system/visual/sources.md#treisman-gelade-1980))

## How it comes across

**inviting, energetic.** It asks people to come: open and lively. Among the variants that pass every check, the harness prefers the one that reads closest to these words; a brand can replace them for this layout, and one post can ask for something else (`docs/design/system/visual/expression.md`).

## Slots

| Slot | Required | Budget | Role |
|---|---|---|---|
| `name` | yes | ≤ 5 words, ≤ 32 chars | `h1`: display face, dominant (11cqi) |
| `date` | yes | ≤ 4 words, ≤ 24 chars | `h2`: display face, 7cqi. The day, and the time if there is one ("8 November", "Sat 8 Nov, 10am") |
| `place` | yes | ≤ 6 words, ≤ 40 chars | `body`: body face, 4.6cqi. Where to go. The full address goes in the post copy |
| `speaker` | no | ≤ 4 words, ≤ 32 chars | `h3`: display face, 6cqi. For a talk: who speaks, under the name |
| `speakerRole` | no | ≤ 6 words, ≤ 40 chars | `body`: body face, 4.2cqi, under the speaker ("Head baker, Northside"). Shown only with a `speaker` |
| `series` | no | ≤ 4 words, ≤ 28 chars | `label`: body face, in the top row. The series or the kind of event ("Northside Talks · Free") |
| `cta` | no | ≤ 3 words, ≤ 20 chars, starts with a verb | `label`: body face, sits below the block |
| `logo` | yes | asset | Top left inside the safe zone (top centre when `align` is center) |

Hierarchy: name > speaker > speakerRole > date > place > series > cta > logo. Without a talk the three optional slots are empty and the order is name > date > place > cta > logo, as before.

**Facts come from the message.** When the posts of one event share a name, a date and a place, they live in `messages/<name>.json` and the generator rows reference them (`{ "fact": "date" }`). The `facts-consistent` check then fails any post that states a fact in another form.

## Formats

1:1 (feed post), 4:5 (tall feed post) and 9:16 (story: the reminder). The block anchors to the foot of the safe zone in every format (at 9:16, above the 340px reply-bar zone).

## Variation (bounded)

| Parameter | Values | Default | What it may change |
|---|---|---|---|
| `scheme` | paper · ink · accent | paper | Surface and on-surface pair |
| `align` | start · center | start | Text alignment; with `center` the logo moves to the top centre |
| `accent` | date · cta · none | date | Which one element takes the accent colour. Never two |
| `rule` | none · hairline | none | A hairline from the logo to the far edge of the safe zone (opt-in) |
| `cta` | text · pill | text | The CTA as text, or as one solid button: the accent surface with its own text colour. On the accent scheme the pair swaps, so the button turns ink |
| `head` | logo · series | logo | The top row. `logo`: the logo at the start side, the `series` (if any) at the end. `series`: the row mirrors, so the series reads first at the start side and the logo sits at the end. Without a series, `series` only moves the logo to the end |
| `foot` | stack · split | stack | `stack`: speaker, role, date and place one under the other. `split`: the speaker and role at the start side, the date and place at the end side, last baselines aligned at the foot of the block (the date steps down to 5.2cqi and the role to 3.8cqi, so the two columns share one row). Not at 9:16: the story stacks |
| `highlight` | none · block | none | `block`: the name sits on solid accent tags, one per line (`--pg-accent` surface, `--pg-accent-on` text; the pair swaps on the accent scheme). One size step down (11cqi → 9.6cqi) with loosened leading so the tags fit the safe zone and never touch |

The `rule`, `cta`, `highlight`, `head` and `foot` options are optional cues (see Decisions); the defaults keep the plain layout. With `cta: pill` the button is the accent surface; set `accent` to `none` or keep one accent text element beside it.

## Checks

contrast · min-text · safe-zone · overflow · element-count · token-colors · logo-integrity · logo-visible · font-loaded · role-face · budget

`facts-consistent` runs too when the generator names a message.

## Fallbacks

- `date` missing → this is not an event post yet. Ask for the date, or say the one line as a headline.
- `name` over 5 words → rewrite. The name is a name; the description goes in the post copy.
- `place` over 6 words → keep where to go ("Harbour Market"). The full address goes in the post copy.
- `cta` over 3 words, or not starting with a verb → rewrite it.
- `speaker` over 4 words → the name only; titles and credentials go in `speakerRole` or the post copy.
- `speakerRole` over 6 words → one short line ("Head baker, Northside"); the rest goes in the post copy.
- `series` over 4 words → name the series ("Northside Talks · Free"); rewrite it.
- `logo` missing → refuse; intake incomplete.

## Decisions

- 2026-10-21 — Added as a sample layout (contract 1.4, `rules/decisions.md`). The date is `h2` in the display face, so it reads as a heading and not as running text. A time goes in the same slot as the date: two small slots for date and time were tried in the plan and dropped, because they split one fact into two lines.
- 2026-10-21 — Rendered on Kadri with the pop-up message: 9/9 in propose `p05` (1:1, 4:5 and 9:16 × three schemes), 3/3 with `facts-consistent` from the generator `event-popup`.

- 2026-10-21 — Two opt-in cues from HueGrid's client work (inspiration only, `rules/decisions.md`): `rule: hairline` (a 0.2cqi line in `--pg-muted` from the logo to the far edge) and `cta: pill` (one solid button). Kadri: all 216 samples (24 variation combinations × 1:1, 4:5 and 9:16 × three schemes) pass the 11 checks.

- 2026-10-21 — `highlight: block` added as an opt-in cue from HueGrid's client work (Pifo Talks: the title set on solid highlight tags, one per line; inspiration only, `rules/decisions.md`). The `name` slot sits in a `.pg-title` wrapper that is `display: contents` by default, so default output is unchanged; with `block` the wrapper is the block box and the slot turns inline with `box-decoration-break: clone`, padding 0.08em by 0.22em of the tag size (written in cqi, as every template size is) and the brand radius. Hubot Sans's content area is about 1.4em tall, so tags overlapped by 31.6px at line-height 1.3; at 1.62 consecutive tags sit about 5px apart (measured on Kadri). At the full size the budget-length name spilled the 4:5 safe zone, so the tagged name takes one fixed size step down (11cqi → 9.6cqi): a property of the variation, not a fit to the copy. Works with `rule` and `cta: pill`. Kadri: all 2304 event samples in the sweep pass the 11 checks (192 variation combinations × 1:1, 4:5 and 9:16 × three schemes for the proposal, plus 576 for a demo talk row).

- 2026-10-21 — A talk: optional `speaker`, `speakerRole` and `series`, and opt-in `head: series` and `foot: split`, from the talk and webinar posts HueGrid made for two clients (Women in Product and Pifo Talks: a series line top left, the logo top right, the talk title, the speaker, the date and time at the foot on the far side; inspiration only, `rules/decisions.md`). No headshot, gradient or glass shape: BAM has no photographs. The new wrappers (`.pg-foot`, `.pg-who`, `.pg-when`) are `display: contents` unless `foot: split`, so a post without a talk renders byte for byte as before. A `speakerRole` without a `speaker` is dropped by the template (`:has()`), with no engine change: the role never stands alone. `foot: split` falls back to `stack` at 9:16. Kadri has no talk: the sweep's talk row is demo copy ("Brewing at home", a fictional host "Mira Sol"), flagged in the evidence README. Kadri: all 2304 event samples in the sweep pass the 11 checks (192 variation combinations × 1:1, 4:5 and 9:16 × three schemes for the proposal, plus 576 for a demo talk row).
- 2026-10-26 — Anchored, never floating (Arjun, `upstream: true`): a block on the centre line of a tall post reads unresolved, so content anchors to the safe zone's edges in every format, the 9:16 story included (above its 340px reply-bar zone). On tall frames the logo and the first text slot grow with `--pg-logo` and `--pg-title` from `base.css`, since type is sized by width. A readability rule for every brand, not one brand's taste.

## Never do

- Never show a `speakerRole` without a `speaker`: the template drops it. A role with no name says nothing; ask for the name or leave both out.
- Never put a person on a talk post who has not agreed to speak; a speaker is a fact the owner supplies, never a guess.
- Never type a fact the message holds. Reference it.
- Never accent two elements.
- Never put the place above the date. The date is what people check first.
- Never add a second date line for the time. One date slot holds both.

## Editor controls (tessor-props)

```tessor-props
- prop: scheme
  label: Scheme
  kind: select
  values: [paper, ink, accent]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/event']"]
- prop: align
  label: Alignment
  kind: select
  values: [start, center]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/event']"]
- prop: accent
  label: Accent target
  kind: select
  values: [date, cta, none]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/event']"]
- prop: rule
  label: Hairline rule
  kind: select
  values: [none, hairline]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/event']"]
- prop: cta
  label: CTA style
  kind: select
  values: [text, pill]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/event']"]
- prop: highlight
  label: Title tags
  kind: select
  values: [none, block]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/event']"]
- prop: head
  label: Top row
  kind: select
  values: [logo, series]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/event']"]
- prop: foot
  label: Speaker and date
  kind: select
  values: [stack, split]
  tab: Visual
  appliesTo:
    elements: [".pg-frame[data-archetype='social-post/event']"]
```
