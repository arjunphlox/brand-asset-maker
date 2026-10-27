---
title: Agent instructions
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
---

# Brand Asset Maker (BAM) by HueGrid

This folder is Brand Asset Maker (BAM), the part of BAM master that participants keep. Use it to make on-brand posts with an AI assistant.

## Start here

0. If `brand/` has no `BRAND.md` yet, open `START.md` and follow the prompt in it: it is how the owner brings their brand.
1. Read `SPEC.md` first.
2. Then read the skill for the state you are in:
   - **Bring:** `skills/bam--intake.md` (1 Intake), then `skills/bam--encode.md` (2 Encode).
   - **Pick:** `skills/bam--propose.md` (3 Propose), then `skills/bam--approve.md` (4 Approve).
   - **Make:** `skills/bam--generate.md` (5 Generate), then `skills/bam--feedback.md` (6 Feedback).

## Rules

- There is no engine here. The `npm run` commands in the skills do not exist in this folder. Follow each skill's "Without the engine" section.
- When the owner says what they want to make but not which layout, read `skills/bam--suggest.md`: follow the `select.md` rules, then use each layout's **Why it works** reasons to suggest one layout and a runner-up, in plain words.
- You make the posts yourself. Read `skills/bam--make-it.md`: write one HTML file per post the way the renderer does, save it as a PNG (headless Chrome, or the owner takes a screenshot), then check what you can measure and mark the rest "not measured".
- Never claim a check passed that you did not measure.
- For a mock-up (the post on a tote bag, a phone, a shop window), read `skills/bam--mockup.md`: you send a passing post and the filled prompt to the owner's own image model with the owner's own key, then review the result. Never edit the image it returns.
- If the owner brings layouts, templates or a guide of their own, encode those first (`skills/bam--encode.md`, "Your layouts first"): show what they cover in `brand/coverage.md`, and offer the sample layouts only for the jobs they do not cover.
- When a request fits no layout, write a gap note with `workshop/gap-note.md` and stop.
- If the owner gave character words (intake question 10), read `skills/bam--expression.md`: measure what each post says about the brand's character and show every mismatch. It is always the owner's call, never a must fix; a post must be readable and in the brand first.
- Never hand-edit an image.
- Never invent a brand value. Ask the owner. If you must guess, mark the value "we guessed" (`derived`).

Licensed CC BY-NC-SA 4.0. See `LICENSE.md`.
