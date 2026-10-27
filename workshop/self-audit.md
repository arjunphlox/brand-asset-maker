---
title: Month-later self-audit
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Month-later self-audit

A paper checklist. Print it, open your brand folder, and tick each line. No engine, no assistant. It takes about twenty minutes. Do it a month after the workshop, and again whenever someone new starts making posts.

Each "no" points at the skill or file that covers it. Fix the file, not the checklist.

## 1. Every value has a status (Bring: `skills/bam--encode.md`)

Open `brand/BRAND.md` and `brand/locked.json`.

- [ ] Every colour in `BRAND.md` says **you said** or **we guessed**.
- [ ] Every typeface and weight says **you said** or **we guessed**.
- [ ] The logo file, and the reversed logo if you have one, say **you said** or **we guessed**.
- [ ] Each status in `BRAND.md` matches `locked.json` (you said = `locked`, we guessed = `derived`).
- [ ] Count them: values in `BRAND.md`: ____ · values with a status: ____ . The two numbers are the same.

## 2. No raw values in the layouts (spec: Template)

Open each `template.html` you use.

- [ ] No colour written as `#` and six characters, or as `rgb(…)`.
- [ ] No size in `px`. Sizes are in `cqi`.
- [ ] No typeface named. Faces come from `--brand-font-display` and `--brand-font-body`.
- [ ] Every value is a `var(--brand-…)`, `var(--pg-…)` or `var(--v-…)`.

## 3. Budgets counted (Make: `skills/bam--make-it.md`)

Take your last three posts.

- [ ] For each slot, count the words and characters, and write them next to the limit in `inputs.schema.json`.
- [ ] Nothing is over. If something is, rewrite the words or use another layout. Never shrink the type.
- [ ] Every call to action is 3 words or fewer and starts with a verb.
- [ ] Every fact (a name, a date, a place) is written exactly as it is in the message (`messages/<name>.json`), if you have one.

## 4. Both traps are written down (Make: `skills/bam--feedback.md`)

Open `rules/refusals.md`.

- [ ] It has at least two traps: requests that sound fine and must be refused.
- [ ] Each trap says what to do instead, and which file it protects.
- [ ] Read the last ten requests you got. Any that a trap should have stopped? Add it.

## 5. One pick, with a why (Pick: `skills/bam--approve.md`)

Open `rules/approvals.json` and `rules/decisions.md`.

- [ ] There is at least one approval.
- [ ] It has a `why`, in the owner's own words, not yours.
- [ ] Its share-card generator (`generators/<name>.json`) has a `useWhen` line: when to reach for it.
- [ ] `rules/decisions.md` has a dated line for the pick and for every fix since.

## 6. The brand file stands on its own (`cold-handoff.md`)

- [ ] Hand `brand/` and `SPEC.md` to an assistant in a fresh chat with the prompt in `cold-handoff.md`. Every value comes back right.
- [ ] If one came back wrong, you fixed `BRAND.md`, not the prompt.

## Score

Lines ticked: ____ of 22. Each unticked line is one change in one file. Write the file next to the line before you change anything.
