---
title: Social post — selection
scope: Which social-post archetype a piece of content should use, and what happens when its budgets or slots do not fit.
owns:
  - Format → job step (which ratio, what it is for, which archetypes it allows)
  - Content → archetype decision tree for the social-post use-case
  - Fallback order when a budget is exceeded
see-also:
  - ./headline/spec.md
  - ./stat/spec.md
  - ./quote/spec.md
  - ./announcement/spec.md
  - ../../docs/design/system/visual/principles.md
implements:
  - ../../scripts/render.mjs (budget check + fallback suggestion)
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Social post — selection

## Step 0: the format names the job

Pick the format first. A format is a job, not a size: each one says what the post is for and which archetypes may do it.

**`announcement` is not in Brand Asset Maker (BAM).** It is the photograph layout, a reference archetype that stays in the engine. In BAM, a request for a post over a photograph is a gap note (`workshop/gap-note.md`): ask (a) for the photograph and its focal point if none was given, or (c) for a new layout.

| Format | Ratio | Job | Archetypes it allows |
|---|---|---|---|
| Feed post | 1:1 | The message | stat · quote · announcement · headline |
| Tall feed post | 4:5 | The message, with more room | stat · quote · announcement · headline |
| Story | 9:16 | A reminder: one fact plus a call to action | headline with a `cta` (the fact is a line, the CTA says what to do) · stat (the fact is a number; the stat has no CTA slot, so the story's own link or sticker carries the action) |

**A new format re-runs selection.** A post approved at 1:1 is never scaled into 9:16: ask the questions below again with the story's job in mind. The template then adapts the layout for the ratio; nobody resizes a picture.

For a story: a quote is not a reminder (it has no call to action), so it becomes a headline with its strongest clause and a `cta`. An announcement's photograph belongs to the feed; the story says the one fact (date, place) and the call to action. A story with nothing to do ("follow us", no fact) is not a story's job: post nothing, or write a gap note (`workshop/gap-note.md`).

When the posts of one campaign share facts (a name, a date, a place), put them in a message file (`messages/<name>.json`) and reference them from the generator rows (`{ "fact": "date" }`). Every format then states each fact the same way, and the `facts-consistent` check fails a post that does not.

## Step 1: the content picks the archetype

Ask the questions in order, within the archetypes the format allows. The first "yes" chooses.

1. **Is the point a single number** (a metric, a count, a percentage, a price) and does it fit 5 characters including symbols? → **stat**. If the number needs more than 5 characters, it is a sentence: go to 4.
2. **Is it someone's words**, attributable, 30 words or fewer? → **quote**. Longer than 30 words: cut it (never shrink the type). Still too long → it is a summary, not a quote: go to 4.
3. **Is there a photograph the post cannot do without** (a place, a launch, a product, a person) **and one line about it?** → **announcement** (not in BAM: write a gap note). No photograph → 4.
4. **Can it be said in one line of 8 words or fewer?** → **headline**. If it needs a second sentence, it is a caption's job, not the image's. Keep the image to the line, put the rest in the post copy.
5. **None of the above** (a list, a comparison, a diagram): no archetype in this library fits. Write a gap note (`workshop/gap-note.md`, feedback kind `designer`). Do not improvise a template.

## Fallback order

| From | Trigger | To |
|---|---|---|
| stat | `number` over 5 chars | headline (the number becomes the line) |
| quote | `quote` over 30 words after one cut | headline (the strongest clause) |
| headline | `headline` over 8 words | rewrite; there is nowhere simpler to go |
| announcement | `image` missing | headline (the line stands alone) |
| announcement | `image-contrast` or `crop` fails | input fix first (scrim, focal point, photograph), then layout `split`; never edit the file |
| any | `logo` asset missing | refuse to render; intake is incomplete |
| quote | format is a story (9:16) | headline with the strongest clause and a `cta` |
| any | the post must go to a new format | re-run this selection for that format; never scale the approved post |

## Decisions

- 2026-09-29 — Three archetypes for the POC, all text plus logo. Photo-led archetypes wait until image handling (alpha, crops, focal points) has its own checks.
- 2026-09-29 — Announcement added as the first photograph archetype, once image handling (alpha, crop and focal point, text-over-image contrast) had its own checks. Replaces the 2026-09-29 note that photo-led archetypes wait.
- 2026-10-20 — Formats as jobs (contract 1.4): 9:16 story added with its own safe zone; each format names its job and the archetypes it allows. A new ratio re-runs selection; a sample is never scaled into it. Messages and `facts-consistent` keep facts identical across formats.

## Never do

- Never pick an archetype by which one "looks nicer". The content decides; variation decides the look.
- Never bypass a budget by shrinking type or adding a second text block.
- Never scale or crop an approved post into another format. Re-run selection for the format's job.
