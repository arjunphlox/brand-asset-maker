---
title: Business card on a desk (mock-up)
scope: A photograph of a business card lying on a desk, with a stack of the same card behind it.
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

# Business card on a desk (mock-up)

A prompt layout (contract 1.5, `"kind": "prompt"`): no template, no frame. The owner's own agent sends one passing asset PNG and the filled `prompt.md` to the owner's own image model (GPT Image 2.5, or whichever OpenAI image model the owner uses) with the owner's own key. HueGrid never runs it.

**Principle carried:** the artwork is final. The scene changes; the design, the words, the logo and the colours do not.

## Why it works

- **The card is shown ready to pick up.** The card lies on a `wooden-desk`, `stone-desk` or `linen` with real thickness and a soft contact shadow, and `people: hands` can add a pair of hands. A product shown ready for the viewer's hand helps them picture using it, and pictures that help people imagine use shape how they judge a product (shown there for products, not cards). ([Elder & Krishna 2012](../../../docs/design/system/visual/sources.md#elder-krishna-2012); [MacInnis & Price 1987](../../../docs/design/system/visual/sources.md#macinnis-price-1987))
- **Imagined touch can make the card feel owned.** The `uncoated-card` or `matte-card` stock and the close `top-down` view let the owner see the card as a thing to hold. In their studies, imagining touching an object raised the feeling that it is one's own. ([Peck & Shu 2009](../../../docs/design/system/visual/sources.md#peck-shu-2009))
- **The same card shows up in every scene.** `artwork-unchanged`, `logo-intact` and `colours-held` make the card look the same on wood, stone or linen. Using brand elements the same way, often, is how people link them to the brand. ([Romaniuk 2018](../../../docs/design/system/visual/sources.md#romaniuk-2018))
- **A calm surface keeps the card as the subject.** The prompt asks for a plain surface and no other brand marks in view. A clear figure against its ground is easier to perceive, and easy-to-perceive things are liked more. ([Reber et al. 2004](../../../docs/design/system/visual/sources.md#reber-2004))

## Slots

| Slot | Required | Takes | Notes |
|---|---|---|---|
| `artwork` | yes | a print business card (front or back) (`accepts`: `print/card-front`, `print/card-back`) | A PNG from a sample whose `report.json` entry has `pass: true`. Never a draft, never a failing sample |

## Scene (bounded variation)

| Parameter | Values | Default |
|---|---|---|
| `setting` | wooden-desk · stone-desk · linen | wooden-desk |
| `surface` | matte-card · uncoated-card | uncoated-card |
| `light` | daylight · warm-indoor · soft-studio | daylight |
| `angle` | top-down · low-angle | top-down |
| `people` | none · hands | none |

Each value has a phrase in `inputs.schema.json` (`variation.<key>.phrases`); the prompt reads only the phrase.

## Output

1536×1024 PNG (`output.size`). OpenAI's guide lists 1024×1024, 1536×1024 and 1024×1536 as the recommended sizes for its current image models; check your own model's docs for others.

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
  values: [wooden-desk, stone-desk, linen]
  tab: Visual
  appliesTo:
    components: ["mockup/card-on-desk"]
- prop: surface
  label: Surface
  kind: select
  values: [matte-card, uncoated-card]
  tab: Visual
  appliesTo:
    components: ["mockup/card-on-desk"]
- prop: light
  label: Light
  kind: select
  values: [daylight, warm-indoor, soft-studio]
  tab: Visual
  appliesTo:
    components: ["mockup/card-on-desk"]
- prop: angle
  label: Angle
  kind: select
  values: [top-down, low-angle]
  tab: Visual
  appliesTo:
    components: ["mockup/card-on-desk"]
- prop: people
  label: People
  kind: select
  values: [none, hands]
  tab: Visual
  appliesTo:
    components: ["mockup/card-on-desk"]
```
