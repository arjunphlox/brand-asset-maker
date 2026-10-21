---
title: Laptop screen (mock-up)
scope: A photograph of a laptop on a desk showing the artwork on screen: a web banner, a link preview, an email header or a slide.
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

# Laptop screen (mock-up)

A prompt layout (contract 1.5, `"kind": "prompt"`): no template, no frame. The owner's own agent sends one passing asset PNG and the filled `prompt.md` to the owner's own image model (GPT Image 2.5, or whichever OpenAI image model the owner uses) with the owner's own key. HueGrid never runs it.

**Principle carried:** the artwork is final. The scene changes; the design, the words, the logo and the colours do not.

## Slots

| Slot | Required | Takes | Notes |
|---|---|---|---|
| `artwork` | yes | a banner (link preview, profile cover, web banner), an email header or a slide (`accepts`: `banner/*`, `email/*`, `slides/*`) | A PNG from a sample whose `report.json` entry has `pass: true`. Never a draft, never a failing sample |

## Scene (bounded variation)

| Parameter | Values | Default |
|---|---|---|
| `setting` | desk · cafe-table · meeting-room | desk |
| `surface` | silver-laptop · dark-laptop | silver-laptop |
| `light` | daylight · warm-indoor · soft-studio | daylight |
| `angle` | straight-on · three-quarter | three-quarter |
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
  values: [desk, cafe-table, meeting-room]
  tab: Visual
  appliesTo:
    components: ["mockup/laptop-screen"]
- prop: surface
  label: Surface
  kind: select
  values: [silver-laptop, dark-laptop]
  tab: Visual
  appliesTo:
    components: ["mockup/laptop-screen"]
- prop: light
  label: Light
  kind: select
  values: [daylight, warm-indoor, soft-studio]
  tab: Visual
  appliesTo:
    components: ["mockup/laptop-screen"]
- prop: angle
  label: Angle
  kind: select
  values: [straight-on, three-quarter]
  tab: Visual
  appliesTo:
    components: ["mockup/laptop-screen"]
- prop: people
  label: People
  kind: select
  values: [none, hands]
  tab: Visual
  appliesTo:
    components: ["mockup/laptop-screen"]
```
