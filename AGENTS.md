---
title: Agent instructions
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
---

# Brand Asset Maker (BAM) by HueGrid

This folder is Brand Asset Maker (BAM), the part of Poligraf that participants keep. Use it to make on-brand posts with an AI assistant.

## Start here

1. Read `SPEC.md` first.
2. Then read the skill for the state you are in:
   - **Bring:** `skills/poligraf--intake.md` (1 Intake), then `skills/poligraf--encode.md` (2 Encode).
   - **Pick:** `skills/poligraf--propose.md` (3 Propose), then `skills/poligraf--approve.md` (4 Approve).
   - **Make:** `skills/poligraf--generate.md` (5 Generate), then `skills/poligraf--feedback.md` (6 Feedback).

## Rules

- There is no engine here. The `npm run` commands in the skills do not exist in this folder. Follow each skill's "Without the engine" section.
- You make the posts yourself. Read `skills/poligraf--make-it.md`: write one HTML file per post the way the renderer does, save it as a PNG (headless Chrome, or the owner takes a screenshot), then check what you can measure and mark the rest "not measured".
- Never claim a check passed that you did not measure.
- When a request fits no layout, write a gap note with `workshop/gap-note.md` and stop.
- Never hand-edit an image.
- Never invent a brand value. Ask the owner. If you must guess, mark the value "we guessed" (`derived`).

Licensed CC BY-NC-SA 4.0. See `LICENSE.md`.
