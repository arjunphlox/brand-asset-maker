---
title: Mock-up — selection
scope: Which mock-up recipe a finished asset should go into, which source formats each recipe takes, and what happens when nothing fits.
owns:
  - Object → recipe decision tree for the mockup use-case
  - The source formats (use-case, layout, ratio) each recipe accepts
  - Refusals and fallbacks for mock-ups
see-also:
  - ./tote-bag/spec.md
  - ./phone-in-hand/spec.md
  - ./laptop-screen/spec.md
  - ../social-post/select.md
  - ../banner/select.md
  - ../email/select.md
  - ../../skills/poligraf--mockup.md
implements:
  - ../../scripts/mockup.mjs (accepts check + refusal)
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Mock-up — selection

A mock-up is a photograph of a finished asset in use: printed on a bag, on a phone, in a window. Its layouts are **prompt recipes** (contract 1.5, `"kind": "prompt"`): `spec.md`, `inputs.schema.json` and `prompt.md`, no template. The owner's own agent sends one passing asset PNG and the filled prompt to the owner's own image model with the owner's own key (`skills/poligraf--mockup.md`). The engine fills prompts (`npm run mockup`); it never calls a model.

## Step 0: the artwork must pass first

Only a sample that passed its checks goes into a mock-up (`report.json` sample `"pass": true`). A failing sample is refused: a mock-up never hides a break. Fix the asset, then mock it up.

## Step 1: the object picks the recipe

| The owner wants to see it… | Recipe | Takes (`accepts`) |
|---|---|---|
| printed on a tote bag | tote-bag | `print/sticker`, `print/poster`, `social-post/*@1:1` |
| on the sleeve of a takeaway cup | cup-sleeve | `print/sticker`, `social-post/*@1:1` |
| as a poster in a shop window | shop-window | `print/poster`, `print/flyer`, `print/offer-flyer`, `social-post/*@4:5`, `social-post/*@9:16` |
| on a phone, as people will scroll past it | phone-in-hand | `social-post/*` (1:1 and 4:5 as a feed post, 9:16 as a story) |
| on a laptop screen | laptop-screen | `banner/*`, `email/*`, `slides/*` |
| as a poster in a bus shelter | bus-shelter | `print/poster`, `print/flyer`, `social-post/*@4:5`, `social-post/*@9:16` |
| as a business card on a desk | card-on-desk | `print/card-front`, `print/card-back` |
| printed on a T-shirt | t-shirt | `print/sticker`, `print/poster`, `social-post/*@1:1` |
| as an event badge on a lanyard | lanyard | `print/card-front`, `print/table-tent`, `social-post/*@4:5` |
| as a menu on a café table | menu-on-table | `print/menu`, `print/table-tent` |

A pattern is `<use-case>/<layout or *>[@<ratio>]`. When the asset is not a format the recipe takes, make that format first (a new format re-runs its own use-case's selection); never stretch a post to fit an object.

## Step 2: the scene

Every recipe has the same five scene keys, each a bounded list with a phrase per value: `setting`, `surface`, `light`, `angle`, `people`. `people` defaults to `none` (or `hands` on the phone), so no face is invented unless the owner asks for one.

## Fallbacks

| From | Trigger | To |
|---|---|---|
| any | the artwork's sample did not pass | refuse; fix the asset first |
| any | the artwork is not a format the recipe takes | make that format first, or pick a recipe that takes it |
| any | the object is not in the table (a van, a billboard on a building, packaging) | write a gap note (`workshop/gap-note.md`, kind `designer`), ask (c): a new recipe |
| any | a review check fails three times | stop and tell the owner which check; a post with larger words may suit the recipe better |

## Decisions

- 2026-10-21 — The `mockup` use-case added with ten sample recipes (contract 1.5: prompt layouts, `review` checks, `npm run mockup`, `mockup.json`). The image model is the owner's (GPT Image 2.5, as Arjun named it); HueGrid never calls it. The `print` and `slides` patterns name use-cases built in parallel on 2026-10-21; until they land, those recipes take only the social-post, banner and email formats listed.

## Never do

- Never edit the image a model returns. A failed review check changes the prompt, and the owner generates again.
- Never mock up a failing asset.
- Never put another brand, a device maker mark or a watermark in the scene.
