---
title: Shop-window poster (mock-up)
scope: A photograph of the artwork as a poster taped inside a shop window, seen from the pavement.
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

# Shop-window poster (mock-up)

A prompt layout (contract 1.5, `"kind": "prompt"`): no template, no frame. The owner's own agent sends one passing asset PNG and the filled `prompt.md` to the owner's own image model (GPT Image 2.5, or whichever OpenAI image model the owner uses) with the owner's own key. HueGrid never runs it.

**Principle carried:** the artwork is final. The scene changes; the design, the words, the logo and the colours do not.

## Why it works

- **The poster is read from the pavement.** The `from-pavement` and `straight-on` angles show the poster as a passer-by sees it, at a distance and for a moment. People take the gist of an image from a very brief glance. ([Potter et al. 2014](../../../docs/design/system/visual/sources.md#potter-2014))
- **Glare must not hide the words.** The prompt allows faint reflections on the glass but never over the words, and `text-intact` checks it. Text needs enough contrast against its background to be read, and a reflection that cuts it hides the message (WCAG sets the ratios for screens, not shop glass). ([W3C 2023 (WCAG 2.2)](../../../docs/design/system/visual/sources.md#wcag-22))
- **The shop front keeps one brand in view.** The interior behind is out of focus and has no signs, and `no-other-brands` checks it. The poster is the one clear figure against its ground, and easy-to-perceive things are liked more. ([Reber et al. 2004](../../../docs/design/system/visual/sources.md#reber-2004))
- **The colours hold in any weather.** `light` (`overcast`, `evening-glow`, `bright-sun`) changes only the light, and `colours-held` checks the poster's colours did not shift. Using brand colours the same way, often, builds the link to the brand. ([Romaniuk 2018](../../../docs/design/system/visual/sources.md#romaniuk-2018))

## Slots

| Slot | Required | Takes | Notes |
|---|---|---|---|
| `artwork` | yes | a print poster or flyer, or a tall social post (4:5) or story (9:16) (`accepts`: `print/poster`, `print/flyer`, `print/offer-flyer`, `social-post/*@4:5`, `social-post/*@9:16`) | A PNG from a sample whose `report.json` entry has `pass: true`. Never a draft, never a failing sample |

## Scene (bounded variation)

| Parameter | Values | Default |
|---|---|---|
| `setting` | high-street · market-hall · quiet-lane | quiet-lane |
| `surface` | clear-glass · framed-window | clear-glass |
| `light` | overcast · evening-glow · bright-sun | overcast |
| `angle` | straight-on · from-pavement | straight-on |
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
  values: [high-street, market-hall, quiet-lane]
  tab: Visual
  appliesTo:
    components: ["mockup/shop-window"]
- prop: surface
  label: Surface
  kind: select
  values: [clear-glass, framed-window]
  tab: Visual
  appliesTo:
    components: ["mockup/shop-window"]
- prop: light
  label: Light
  kind: select
  values: [overcast, evening-glow, bright-sun]
  tab: Visual
  appliesTo:
    components: ["mockup/shop-window"]
- prop: angle
  label: Angle
  kind: select
  values: [straight-on, from-pavement]
  tab: Visual
  appliesTo:
    components: ["mockup/shop-window"]
- prop: people
  label: People
  kind: select
  values: [none, person]
  tab: Visual
  appliesTo:
    components: ["mockup/shop-window"]
```
