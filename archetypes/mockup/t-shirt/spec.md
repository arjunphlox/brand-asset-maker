---
title: T-shirt (mock-up)
scope: A photograph of the artwork printed on the chest of a plain T-shirt.
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

# T-shirt (mock-up)

A prompt layout (contract 1.5, `"kind": "prompt"`): no template, no frame. The owner's own agent sends one passing asset PNG and the filled `prompt.md` to the owner's own image model (GPT Image 2.5, or whichever OpenAI image model the owner uses) with the owner's own key. HueGrid never runs it.

**Principle carried:** the artwork is final. The scene changes; the design, the words, the logo and the colours do not.

## Why it works

- **The shirt shows the print as worn.** The `worn` setting with `people: person`, or `on-hanger` and `folded-flat`, shows the print in use. Pictures that help people imagine use shape how they judge a product (shown there for products, not shirts). ([MacInnis & Price 1987](../../../docs/design/system/visual/sources.md#macinnis-price-1987))
- **Imagined wearing can make it feel owned.** The print follows the knit and the folds of the cotton, so the owner can picture the shirt on. In their studies, imagining touching an object raised the feeling that it is one's own. ([Peck & Shu 2009](../../../docs/design/system/visual/sources.md#peck-shu-2009))
- **The print reads against the shirt.** `white-cotton`, `black-cotton` and `grey-marl` change the ground behind the print, and `colours-held` checks the colours stay as designed. Easy-to-perceive things, with a clear figure and high contrast, are liked more. ([Reber et al. 2004](../../../docs/design/system/visual/sources.md#reber-2004))
- **A worn logo is seen again and again.** A shirt is seen by the wearer and by others many times. People like things more the more often they see them, and `logo-intact` keeps the mark the same each time. ([Zajonc 1968](../../../docs/design/system/visual/sources.md#zajonc-1968))

## Slots

| Slot | Required | Takes | Notes |
|---|---|---|---|
| `artwork` | yes | a print sticker or label, or a square social post (1:1) (`accepts`: `print/sticker`, `print/poster`, `social-post/*@1:1`) | A PNG from a sample whose `report.json` entry has `pass: true`. Never a draft, never a failing sample |

## Scene (bounded variation)

| Parameter | Values | Default |
|---|---|---|
| `setting` | on-hanger · folded-flat · worn | on-hanger |
| `surface` | white-cotton · black-cotton · grey-marl | white-cotton |
| `light` | daylight · warm-indoor · soft-studio | daylight |
| `angle` | front · three-quarter | front |
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
  values: [on-hanger, folded-flat, worn]
  tab: Visual
  appliesTo:
    components: ["mockup/t-shirt"]
- prop: surface
  label: Surface
  kind: select
  values: [white-cotton, black-cotton, grey-marl]
  tab: Visual
  appliesTo:
    components: ["mockup/t-shirt"]
- prop: light
  label: Light
  kind: select
  values: [daylight, warm-indoor, soft-studio]
  tab: Visual
  appliesTo:
    components: ["mockup/t-shirt"]
- prop: angle
  label: Angle
  kind: select
  values: [front, three-quarter]
  tab: Visual
  appliesTo:
    components: ["mockup/t-shirt"]
- prop: people
  label: People
  kind: select
  values: [none, person]
  tab: Visual
  appliesTo:
    components: ["mockup/t-shirt"]
```
