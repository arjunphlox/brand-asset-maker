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

## Why it works

- **The post is shown ready for the hand.** `people: hands` is the only option, so a hand always holds the phone. A product shown ready for the viewer's hand helps them picture using it, and in their studies it raised purchase intention. ([Elder & Krishna 2012](../../../docs/design/system/visual/sources.md#elder-krishna-2012))
- **It shows the post as a viewer sees it.** The post sits under the glass at screen brightness, with no app interface or notifications around it, in a `cafe-table`, `street` or `sofa` setting. Pictures that help people imagine use shape how they judge a product (shown there for products, not posts). ([MacInnis & Price 1987](../../../docs/design/system/visual/sources.md#macinnis-price-1987))
- **The first look decides a lot.** A feed post is judged in a moment. People take the gist of an image from a very brief glance and judge the visual appeal of a page in about 50 ms, so the unchanged post must read at once. ([Potter et al. 2014](../../../docs/design/system/visual/sources.md#potter-2014); [Lindgaard et al. 2006](../../../docs/design/system/visual/sources.md#lindgaard-2006))
- **The brand stays the same across formats.** The recipe takes a 1:1, 4:5 or 9:16 post, and `logo-intact` and `colours-held` check the same mark and colours show in each. That is the same use, often, that builds a link to the brand. ([Romaniuk 2018](../../../docs/design/system/visual/sources.md#romaniuk-2018))

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
