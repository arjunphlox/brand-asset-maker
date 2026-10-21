---
title: Tote bag (mock-up)
scope: A photograph of the artwork printed on a cotton tote bag, for a merchandise preview or a launch post.
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

# Tote bag (mock-up)

A prompt layout (contract 1.5, `"kind": "prompt"`): no template, no frame. The owner's own agent sends one passing asset PNG and the filled `prompt.md` to the owner's own image model (GPT Image 2.5, or whichever OpenAI image model the owner uses) with the owner's own key. HueGrid never runs it.

**Principle carried:** the artwork is final. The scene changes; the design, the words, the logo and the colours do not.

## Why it works

- **The bag is shown carried and used.** The `market-stall`, `cafe-counter` and `studio-backdrop` settings, with `people: hands` or `person`, show a bag in use. Pictures that help people imagine use shape how they judge a product. ([MacInnis & Price 1987](../../../docs/design/system/visual/sources.md#macinnis-price-1987))
- **Touch can make the bag feel owned.** `people: hands` and the canvas weave and soft folds the prompt asks for let the owner picture holding the bag. In their studies, imagining touching an object raised the feeling that it is one's own. ([Peck & Shu 2009](../../../docs/design/system/visual/sources.md#peck-shu-2009))
- **A tote travels, so the mark repeats.** A carried bag is seen in many places, and `artwork-unchanged` and `logo-intact` keep one design each time. People come to like things more the more often they see them. ([Zajonc 1968](../../../docs/design/system/visual/sources.md#zajonc-1968); [Keller 1993](../../../docs/design/system/visual/sources.md#keller-1993))
- **The print holds its colours on canvas.** `natural-canvas` and `black-canvas` change the ground, and `colours-held` checks the printed colours. A colour or logo becomes a brand asset when people link it to the brand through the same use, often. ([Romaniuk 2018](../../../docs/design/system/visual/sources.md#romaniuk-2018))

## Slots

| Slot | Required | Takes | Notes |
|---|---|---|---|
| `artwork` | yes | a print piece (a sticker or label fits best) or a square social post (1:1) (`accepts`: `print/sticker`, `print/poster`, `social-post/*@1:1`) | A PNG from a sample whose `report.json` entry has `pass: true`. Never a draft, never a failing sample |

## Scene (bounded variation)

| Parameter | Values | Default |
|---|---|---|
| `setting` | market-stall · cafe-counter · studio-backdrop | cafe-counter |
| `surface` | natural-canvas · black-canvas | natural-canvas |
| `light` | daylight · warm-indoor · soft-studio | daylight |
| `angle` | front · three-quarter · flat-lay | front |
| `people` | none · hands · person | none |

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
  values: [market-stall, cafe-counter, studio-backdrop]
  tab: Visual
  appliesTo:
    components: ["mockup/tote-bag"]
- prop: surface
  label: Surface
  kind: select
  values: [natural-canvas, black-canvas]
  tab: Visual
  appliesTo:
    components: ["mockup/tote-bag"]
- prop: light
  label: Light
  kind: select
  values: [daylight, warm-indoor, soft-studio]
  tab: Visual
  appliesTo:
    components: ["mockup/tote-bag"]
- prop: angle
  label: Angle
  kind: select
  values: [front, three-quarter, flat-lay]
  tab: Visual
  appliesTo:
    components: ["mockup/tote-bag"]
- prop: people
  label: People
  kind: select
  values: [none, hands, person]
  tab: Visual
  appliesTo:
    components: ["mockup/tote-bag"]
```
