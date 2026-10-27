---
skill: bam-master/approve
version: 1
state: 4
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tags: [lifecycle, approve]
---

# Approve

**Verb: Pick.** Approve is the second half of Pick (Propose, then Approve): the owner picks one, and what they pick stops being a guess.

## Without the engine

No scripts? Do each step yourself, in the folder. Whenever a step makes a post image, follow `skills/bam--make-it.md`: you write the HTML and save the PNG, then check what you can measure.

- `npm run approve` → record the pick by hand in `rules/approvals.json`, with the fields `SPEC.md` names (sample, archetype, ratio, scheme, variation, inputs, date, generator). Use the PNG you made with `skills/bam--make-it.md`; put its sha256 in `pngSha256` if you can run a command, or leave it empty.
- Put the owner's reason for the pick, in their own words, in the entry's `why` field (one line, verbatim), and keep a dated line with the same words in `rules/decisions.md`.
- Ask the owner when this generator is for, in one line, and write it as the generator's `useWhen`.
- In `brand/locked.json`, change each value the sample depends on from `derived` to `locked`, with `promotedBy` set to the approval id. Promote the logo or the fonts only when their checks were measured, not only seen by eye.
- Write `generators/<name>.json` by hand from the picked sample.

**Goal:** turn an approved sample into a generator and lock what it depended on.

## Procedure

**Before picking, the two-second question.** Ask the owner: "What do you read first? It should be the first slot in the archetype's hierarchy." (`hierarchy[0]` in `inputs.schema.json`.) If the answer is another slot, it is not a pick: write it as feedback.

1. Ask the owner why they picked it, and when they will use it. Copy both answers word for word, never paraphrase. For each sample the owner approves: `npm run approve -- --run p<NN> --sample <id> --name <generator-name> --why "<the owner's words>" --use-when "<one line: when to use it>"`. `--why` lands in the approvals entry's `why` field and in the `rules/decisions.md` line the script writes; `--use-when` lands in the generator's `useWhen` and on its contact sheets. Both are optional (contract 1.4); with no answer, leave them out rather than inventing one. The script appends `rules/approvals.json`, promotes the sample's `derived` dependencies to `locked` (plus the logo asset the sample rendered, the reversed one on a scheme that chooses it, when `logo-integrity` and `logo-visible` passed, and `fonts.status` when `font-loaded` passed), copies the sample to `out/approved/<generator>/`, seeds `generators/<generator>.json`, and logs a line in `rules/decisions.md`.
2. For each rejected sample: write `feedback/NNNN-<slug>.md` with the owner's words and run the feedback skill before proposing again.
3. Ask the owner to name **one extension rule** for `rules/extension.md` in the form "A new [color / font weight / archetype] is allowed only if …". One is enough for a first pass.

## Exit criterion

At least one generator file exists and `rules/approvals.json` has its entry.

## Never do

- Never approve on the owner's behalf. When you are explicitly acting as the owner (a dry run, a demo), say so in rules/decisions.md and proceed.
- Never promote a `derived` value outside the approve script.
