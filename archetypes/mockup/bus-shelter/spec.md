---
title: Bus-shelter poster (mock-up)
scope: A photograph of the artwork as a poster in the advertising panel of a bus shelter.
owns:
  - The artwork slot and the source formats it takes
  - The scene variation (setting, surface, light, angle, people) and its phrases
  - The fill-in prompt (prompt.md) and its review checklist
see-also:
  - ../select.md
  - ./prompt.md
  - ../../../skills/bam--mockup.md
implements:
  - ./prompt.md
  - ./inputs.schema.json
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Bus-shelter poster (mock-up)

A prompt layout (contract 1.5, `"kind": "prompt"`): no template, no frame. The owner's own agent sends one passing asset PNG and the filled `prompt.md` to the owner's own image model (GPT Image 2.5, or whichever OpenAI image model the owner uses) with the owner's own key. HueGrid never runs it.

**Principle carried:** the artwork is final. The scene changes; the design, the words, the logo and the colours do not.

## Why it works

- **The poster is seen as a passer-by sees it.** The upright panel with the `from-kerb` angle shows the poster at street distance, as people meet it in passing. People take the gist of an image from a very brief glance, so a poster that reads at once is the one this scene tests. ([Potter et al. 2014](../../../docs/design/system/visual/sources.md#potter-2014))
- **The colours stay the same in every light.** `light` (`daytime`, `dusk`, `night`) changes only the light on the poster, and `colours-held` checks that the colours did not shift. A colour or logo becomes a brand asset when people link it to the brand, and that link is built by using it the same way, often. ([Romaniuk 2018](../../../docs/design/system/visual/sources.md#romaniuk-2018))
- **The brand stays visible to the viewer.** `logo-intact` and `text-intact` make the logo and the name show as designed. In print ads, attention to the brand element helps people remember the brand. ([Pieters & Wedel 2004](../../../docs/design/system/visual/sources.md#pieters-wedel-2004))
- **A plain panel keeps the poster in front.** The prompt asks for plain metal around the glass and no other adverts or signs in the street. With nothing else competing, the poster is a clear figure on its ground, and things that are easy to perceive are liked more. ([Reber et al. 2004](../../../docs/design/system/visual/sources.md#reber-2004))

## Slots

| Slot | Required | Takes | Notes |
|---|---|---|---|
| `artwork` | yes | a print poster, or a tall social post (4:5) or story (9:16) (`accepts`: `print/poster`, `print/flyer`, `social-post/*@4:5`, `social-post/*@9:16`) | A PNG from a sample whose `report.json` entry has `pass: true`. Never a draft, never a failing sample |

## Scene (bounded variation)

| Parameter | Values | Default |
|---|---|---|
| `setting` | city-street · suburban-road | city-street |
| `surface` | backlit-panel · unlit-panel | backlit-panel |
| `light` | daytime · dusk · night | dusk |
| `angle` | straight-on · from-kerb | from-kerb |
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
  values: [city-street, suburban-road]
  tab: Visual
  appliesTo:
    components: ["mockup/bus-shelter"]
- prop: surface
  label: Surface
  kind: select
  values: [backlit-panel, unlit-panel]
  tab: Visual
  appliesTo:
    components: ["mockup/bus-shelter"]
- prop: light
  label: Light
  kind: select
  values: [daytime, dusk, night]
  tab: Visual
  appliesTo:
    components: ["mockup/bus-shelter"]
- prop: angle
  label: Angle
  kind: select
  values: [straight-on, from-kerb]
  tab: Visual
  appliesTo:
    components: ["mockup/bus-shelter"]
- prop: people
  label: People
  kind: select
  values: [none, person]
  tab: Visual
  appliesTo:
    components: ["mockup/bus-shelter"]
```
