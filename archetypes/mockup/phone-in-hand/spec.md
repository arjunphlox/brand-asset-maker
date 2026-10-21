---
title: Phone in hand (mock-up)
scope: A photograph of a hand holding a phone that shows the artwork on screen: a feed post or a story as people will see it.
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

# Phone in hand (mock-up)

A prompt layout (contract 1.5, `"kind": "prompt"`): no template, no frame. The owner's own agent sends one passing asset PNG and the filled `prompt.md` to the owner's own image model (GPT Image 2.5, or whichever OpenAI image model the owner uses) with the owner's own key. HueGrid never runs it.

**Principle carried:** the artwork is final. The scene changes; the design, the words, the logo and the colours do not.

## Slots

| Slot | Required | Takes | Notes |
|---|---|---|---|
| `artwork` | yes | a social post in any format: 1:1 or 4:5 as a feed post, 9:16 as a story (`accepts`: `social-post/*`) | A PNG from a sample whose `report.json` entry has `pass: true`. Never a draft, never a failing sample |

## Scene (bounded variation)

| Parameter | Values | Default |
|---|---|---|
| `setting` | cafe-table · street · sofa | cafe-table |
| `surface` | dark-phone · light-phone | dark-phone |
| `light` | daylight · warm-indoor · soft-studio | daylight |
| `angle` | straight-on · over-shoulder | straight-on |
| `people` | hands | hands |

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

- 2026-10-21 — Added with the `mockup` use-case (contract 1.5, prompt layouts). Review checks replace engine checks; people default to `hands` so no face is invented.

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
  values: [cafe-table, street, sofa]
  tab: Visual
  appliesTo:
    components: ["mockup/phone-in-hand"]
- prop: surface
  label: Surface
  kind: select
  values: [dark-phone, light-phone]
  tab: Visual
  appliesTo:
    components: ["mockup/phone-in-hand"]
- prop: light
  label: Light
  kind: select
  values: [daylight, warm-indoor, soft-studio]
  tab: Visual
  appliesTo:
    components: ["mockup/phone-in-hand"]
- prop: angle
  label: Angle
  kind: select
  values: [straight-on, over-shoulder]
  tab: Visual
  appliesTo:
    components: ["mockup/phone-in-hand"]
- prop: people
  label: People
  kind: select
  values: [hands]
  tab: Visual
  appliesTo:
    components: ["mockup/phone-in-hand"]
```
