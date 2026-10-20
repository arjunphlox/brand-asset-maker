---
skill: poligraf/encode
version: 1
state: 2
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tags: [lifecycle, encode]
---

# Encode

**Verb: Bring.** Encode is the second half of Bring (Intake, then Encode): what the participant brought becomes one file.

## Without the engine

No scripts? Do each step yourself, in the folder. Whenever a step makes a post image, follow `skills/poligraf--make-it.md`: you write the HTML and save the PNG, then check what you can measure.

- `npm run doctor` → check by eye that every token in `brand/tokens.css` has a status in `brand/locked.json`.
- `npm run roles` → write the `:root` values in `brand/tokens.css` by hand, one comment per line that says where the value came from.
- The cold handoff needs no engine. Run it in a fresh chat as written.

**Goal:** `brand/BRAND.md` is the one file a fresh agent needs to work this brand correctly.

## Procedure

1. Write `brand/BRAND.md` with exactly five sections, values copied from `tokens.css`, `voice.md`, `locked.json`, `fonts.md`, `brand.json`:
   1. **Visual** — every token with its value and its status, labelled in the participant's words: **you said** for `locked`, **we guessed** for `derived`. The first row of each label carries the key once, "you said (locked)" and "we guessed (derived)"; every later row shows the plain label. Theme blocks (other themes from `roles.json`) and scheme overrides are listed with their values too.
   2. **Fonts** — families, weights, where the files come from (the policy path in force), and the fonts status from `locked.json` (a missing `fonts.status` reads as we guessed).
   3. **Voice** — tone words, approved lines, never-claims.
   4. **You said vs we guessed** — the two lists, plain words. One sentence names the keys: you said is `locked` and we guessed is `derived` in `locked.json`; approval (you pick one) is the only thing that turns a guess into something you said.
   5. **Files** — which asset to use where; the logo path; the wordmark.
2. Copy `rules/refusals.md` traps into a "Refuse" paragraph: at least one font trap ("swap the headline to X") and one voice trap (a claim the brand never makes).
3. **Cold handoff test.** Open a fresh chat with only `brand/` attached and this prompt: "Using BRAND.md, list the tokens, the font policy, and which files you would use for a stat post. Do not render." Pass = every value matches and the file list is right. If it fails, the fix is in `BRAND.md`, never in the prompt.

## Exit criterion

The cold handoff passes. Record the date in `rules/decisions.md`.

## Never do

- Never paraphrase a token value or a line of copy in `BRAND.md`.
- Never let `BRAND.md` disagree with `tokens.css`; `tokens.css` wins and `BRAND.md` is regenerated.
- Never write "you said" or "we guessed" into `locked.json`. They are labels in `BRAND.md` and the participant files; the keys stay `locked` and `derived`.
