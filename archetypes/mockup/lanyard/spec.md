---
title: Event lanyard (mock-up)
scope: A photograph of the artwork as an event badge on a lanyard.
owns:
  - The artwork slot and the source formats it takes
  - The scene variation (setting, surface, light, angle, people) and its phrases
  - The fill-in prompt (prompt.md) and its review checklist
see-also:
  - ../select.md
  - ./prompt.md
  - ../../../skills/poligraf--mockup.md
implements:
  - ./prompt.md
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Event lanyard (mock-up)

A prompt layout (contract 1.5, `"kind": "prompt"`): no template, no frame. The owner's own agent sends one passing asset PNG and the filled `prompt.md` to the owner's own image model (GPT Image 2.5, or whichever OpenAI image model the owner uses) with the owner's own key. HueGrid never runs it.

**Principle carried:** the artwork is final. The scene changes; the design, the words, the logo and the colours do not.

## Why it works

- **The badge is shown where it is worn.** The `registration-desk`, `event-hall` and `flat-lay` settings show the badge in the places an event guest meets it, with real weight and a plain lanyard. Pictures that help people imagine use shape how they judge a product (shown there for products, not badges). ([MacInnis & Price 1987](../../../docs/design/system/visual/sources.md#macinnis-price-1987))
- **The name and logo read at a glance.** A badge is read in passing, face on. `text-intact` and `logo-intact` check the words and the mark are as designed, since people take the gist of an image from a very brief glance. ([Potter et al. 2014](../../../docs/design/system/visual/sources.md#potter-2014))
- **The same look repeats across an event.** Badges are seen in the hall, at the desk and in photos, so one unchanged design builds recognition by repeated exposure. `colours-held` keeps the colours the same each time. ([Keller 1993](../../../docs/design/system/visual/sources.md#keller-1993); [Romaniuk 2018](../../../docs/design/system/visual/sources.md#romaniuk-2018))
- **The brand stands out from a neutral setting.** The lanyard is plain, the clip is plain metal and other badges are face down, so the printed badge is the one thing that differs from its surroundings. Attention goes first to the region that differs most in size, contrast or colour. ([Itti & Koch 2001](../../../docs/design/system/visual/sources.md#itti-koch-2001))

## Slots

| Slot | Required | Takes | Notes |
|---|---|---|---|
| `artwork` | yes | a print badge or card, or a tall social post (4:5) (`accepts`: `print/card-front`, `print/table-tent`, `social-post/*@4:5`) | A PNG from a sample whose `report.json` entry has `pass: true`. Never a draft, never a failing sample |

## Scene (bounded variation)

| Parameter | Values | Default |
|---|---|---|
| `setting` | event-hall · registration-desk · flat-lay | registration-desk |
| `surface` | plastic-sleeve · card-only | card-only |
| `light` | daylight · warm-indoor · soft-studio | daylight |
| `angle` | front · top-down | front |
| `people` | none · person | none |

Each value has a phrase in `inputs.schema.json` (`variation.<key>.phrases`); the prompt reads only the phrase.

## Output

1024×1536 PNG (`output.size`). OpenAI's guide lists 1024×1024, 1536×1024 and 1024×1536 as the recommended sizes for its current image models; check your own model's docs for others.

## Checks

artwork-unchanged · text-intact · logo-intact · colours-held · no-other-brands · plausible

These are review checks (`review` in the schema), not engine checks: no CSS check can see a photograph the model made. The agent compares the output with the artwork by eye (vision) and reports each as pass, fail or not measured. A fail means: add the check's fix line to the prompt and generate again. Never edit the image.

| Check | Plain words |
|---|---|
| `artwork-unchanged` | the design changed |
| `text-intact` | the words changed or were added |
| `logo-intact` | the logo changed |
| `colours-held` | the colours shifted |
| `no-other-brands` | another brand appears |
| `plausible` | it doesn't look real |

## Fallbacks

- The artwork is not a format this recipe takes → re-run selection (`../select.md`), or make that asset first.
- The artwork's sample did not pass → refuse; fix the asset first. A mock-up never hides a break.

## Decisions

- 2026-10-21 — Added with the `mockup` use-case (contract 1.5, prompt layouts). Review checks replace engine checks; people default to `none` so no face is invented.

## Never do

- Never edit, retouch or paint over the image the model returns. Change the prompt and generate again.
- Never mock up an asset that failed a check.
- Never let the model write, translate or correct the words on the artwork.
- Never add another brand, device maker mark or watermark to the scene.

## Editor controls (tessor-props)

```tessor-props
- prop: setting
  label: Setting
  kind: select
  values: [event-hall, registration-desk, flat-lay]
  tab: Visual
  appliesTo:
    components: ["mockup/lanyard"]
- prop: surface
  label: Surface
  kind: select
  values: [plastic-sleeve, card-only]
  tab: Visual
  appliesTo:
    components: ["mockup/lanyard"]
- prop: light
  label: Light
  kind: select
  values: [daylight, warm-indoor, soft-studio]
  tab: Visual
  appliesTo:
    components: ["mockup/lanyard"]
- prop: angle
  label: Angle
  kind: select
  values: [front, top-down]
  tab: Visual
  appliesTo:
    components: ["mockup/lanyard"]
- prop: people
  label: People
  kind: select
  values: [none, person]
  tab: Visual
  appliesTo:
    components: ["mockup/lanyard"]
```
