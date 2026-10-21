---
title: Slides — selection
scope: Which slide layout a piece of a talk should use, how a deck is put together from them, and what happens when its budgets or slots do not fit.
owns:
  - Format → job step for slides
  - Content → layout decision tree for the slides use-case (intro, content, outro)
  - The deck rule (one idea per slide, the shared chrome) and the fallback order when a budget is exceeded
see-also:
  - ./title/spec.md
  - ./bullets/spec.md
  - ./chart/spec.md
  - ../social-post/select.md
  - ../../docs/design/system/visual/principles.md
implements:
  - ../../scripts/render.mjs (budget check + fallback suggestion)
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Slides — selection

**Suggesting a layout to someone:** this tree decides what is allowed. To rank the options it allows and explain the pick, use each layout's **Why it works** section and `docs/design/system/visual/why-it-works.md` (`skills/poligraf--suggest.md`).

A slide is one frame of a deck, shown on a projector, in a video call or as a thumbnail in a shared file. A deck is many slides that must read as one thing: every slides layout shares the same chrome (the logo top left, the optional footer bottom left, the optional page number bottom right), set in `base.css`.

## Step 0: the format names the job

| Format | Ratio | Size | Job | Layouts |
|---|---|---|---|---|
| Slide | 16:9 | 1920×1080 | One idea of a talk or a pitch, read from across a room or in a call | all 16 below |

The safe zone (96px all round) and the smallest text (24px) are estimates, to re-measure (`poligraf.config.json` safeZoneNotes). **A new format re-runs selection.** A slide is never cropped into a post, and a post is never stretched into a slide: a 4:3 or a portrait deck is a new format, not a scaled one.

## Step 1: where in the deck

| Part | Layouts |
|---|---|
| Intro (opens the deck) | `title`, `title-speaker`, `agenda` |
| Content (the body) | `section`, `statement`, `bullets`, `two-column`, `stat`, `numbers`, `quote`, `process`, `comparison`, `chart` |
| Outro (closes it) | `thanks-contact`, `next-steps`, `questions` |

A deck opens with one intro slide (two with an agenda), runs one content slide per idea, opens each part with a `section` when there are three parts or more, and closes with one outro slide.

## Step 2: the content picks the layout

1. **The first slide?** A named speaker → **title-speaker**. Otherwise → **title**.
2. **What the deck covers, in three to six parts?** → **agenda**. Two parts need no agenda.
3. **The start of a part?** → **section** (number and name, nothing else).
4. **One line the room should remember?** → **statement** (14 words or fewer).
5. **Someone else's words, with a name to attribute them to?** → **quote**. No name → **statement**, in the brand's own voice.
6. **Numbers?**
   - one number → **stat**;
   - three numbers of the same kind → **numbers**;
   - two to six values of one measure, to compare → **chart** (every bar from zero, each number printed).
7. **Steps that happen in order (three to five)?** → **process**.
8. **Two things side by side?** One short line each, one side better (before and after, A against B) → **comparison**. A paragraph each → **two-column**.
9. **Three to five points?** → **bullets**.
10. **The last slide?** Things the audience should do, with one call to action → **next-steps**. Thanks and how to reach you → **thanks-contact**. Time for questions → **questions**.
11. **Something else** (a photograph, a diagram, a table, a trend over time): no slides layout fits. Write a gap note (`workshop/gap-note.md`, feedback kind `designer`). Do not stretch another layout into it.

## Fallback order

**Too much for one slide → more slides, never smaller type.** Every budget below is sized so the text clears 24px at 1920×1080.

| From | Trigger | To |
|---|---|---|
| bullets | more than five points | two bullets slides (split by theme), or cut to five |
| bullets | a point over 12 words | cut it; the speaker says the rest |
| bullets | two points | two-column, or comparison when they are opposites |
| agenda | more than six items | group them into six parts |
| agenda | fewer than three items | no agenda, or bullets |
| process | more than five steps | group into five, or two process slides |
| process | two steps | comparison |
| statement | over 14 words or 90 characters | cut it to the claim, or bullets |
| stat | a number over 6 characters | statement |
| numbers | one or two numbers | stat (one slide each), or chart when they compare |
| numbers | more than three | chart (one measure) or two numbers slides |
| chart | one value | stat |
| chart | more than six bars | keep the six that matter, or split the chart |
| chart | values in different units, or a negative value | refused (`budget` rule `scale`): fix the row; never draw the bar by hand |
| comparison | a side over 16 words | two-column |
| quote | over 36 words | cut to the sentence that matters |
| quote | no one to attribute it to | statement |
| thanks-contact | no contact to give | questions |
| next-steps | no call to action | thanks-contact |
| title-speaker | no speaker | title |
| any | `logo` asset missing | refuse to render; intake is incomplete |

## The deck rule

- One idea per slide. A slide that needs two of the layouts above is two slides.
- The footer is the deck's short title and is the same on every slide; the page number counts the slides. Both are optional, and a title slide usually leaves them out.
- A fact the message holds (`messages/<name>.json`: a name, a date, a place) is referenced (`{ "fact": "date" }`), never typed, on every slide that states it, the footer included.

## Decisions

- 2026-10-21 — The slides use-case added with 16 sample layouts (3 intro, 10 content, 3 outro; contract 1.5). One format, 16:9 at 1920×1080. The safe zone (96px) and `minTextPx` (24) are judgements, to re-measure on a real call and a real room. The chart's bar lengths come from the new optional slot field `scale`; the deck as one ordered set of frames is the generator field `frames` (added separately in 1.5).

## Never do

- Never shrink the type to fit more on a slide. Split the slide.
- Never move the logo, the footer or the page number on one slide of a deck.
- Never draw a bar by hand, start one anywhere but zero, or chart values in different units.
- Never stretch, crop or scale a slide into another format.
