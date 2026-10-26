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
- `npm run doctor` (your layouts) → for each layout you encoded, check the three rows of "Your layouts first" step 1 by eye and count the lines under **We guessed** in its `spec.md`.

**Goal:** `brand/BRAND.md` is the one file a fresh agent needs to work this brand correctly. If the owner brought layouts, they become BAM layouts before any sample is offered, and `brand/coverage.md` shows what they cover.

**The order.** If the owner brought layouts (intake step 5d): your layouts first, then what they cover, then samples only for the jobs nothing covers, then gap notes for the rest. If the owner brought none: the sample layouts, then posts and feedback, then gap notes, then new layouts from those gap notes. Skip "Your layouts first" in that case; nothing else changes.

## Procedure

1. Write `brand/BRAND.md` with exactly five sections, values copied from `tokens.css`, `voice.md`, `locked.json`, `fonts.md`, `brand.json`:
   1. **Visual** — every token with its value and its status, labelled in the participant's words: **you said** for `locked`, **we guessed** for `derived`. The first row of each label carries the key once, "you said (locked)" and "we guessed (derived)"; every later row shows the plain label. Theme blocks (other themes from `roles.json`) and scheme overrides are listed with their values too.
   2. **Fonts** — families, weights, where the files come from (the policy path in force), and the fonts status from `locked.json` (a missing `fonts.status` reads as we guessed).
   3. **Voice** — tone words, approved lines, never-claims.
   4. **You said vs we guessed** — the two lists, plain words. One sentence names the keys: you said is `locked` and we guessed is `derived` in `locked.json`; approval (you pick one) is the only thing that turns a guess into something you said.
   5. **Files** — which asset to use where; the logo path; the wordmark.
1b. **Expression** (only when `brand/expression.json` exists, intake step 5e). Add a sixth section, **Expression**, after Files: the owner's character words (you said / we guessed), what the brand file and the past posts say on each word's scale, every mismatch in plain words, the display face's class, and each layout's preferred look. With the engine, `npm run expression -- --posts <the owner's posts folder> --write --section` prints it; copy it in. Without it, follow `skills/poligraf--expression.md` steps 2 to 6. Show the owner every mismatch now; each one is their call, and none changes a token by itself. The preferred looks come after the first contact sheet (Propose), so the first version of this section may say "none yet".
2. Copy `rules/refusals.md` traps into a "Refuse" paragraph: at least one font trap ("swap the headline to X") and one voice trap (a claim the brand never makes).
3. **Cold handoff test.** Open a fresh chat with only `brand/` attached and this prompt: "Using BRAND.md, list the tokens, the font policy, and which files you would use for a stat post. Do not render." Pass = every value matches and the file list is right. If it fails, the fix is in `BRAND.md`, never in the prompt.

## Your layouts first

Only when the owner brought layouts, templates or a guide. Do this after `BRAND.md`, because a layout reads the brand's tokens.

1. **Read each layout for the three things BAM needs.** These are what make a layout something an agent can follow and a check can measure, instead of a picture it copies loosely:
   - **What goes where:** each piece of text, logo or image is a slot with a role (`h1`, `h2`, `h3`, `body`, `label`, `data-snippet`), and there is an order it is read in (the hierarchy). This is what makes the news the first thing a viewer sees.
   - **How much fits:** a word or character limit for each text slot. This is what keeps copy from spilling or the type from being shrunk to fit.
   - **Checks with a number:** the smallest text size, the contrast, the margin from the edge. A number can pass or fail; "keep it readable" cannot.
   For each layout, write a three-row table in `brand/intake.log.md`: the thing, and either where the owner gave it (the guide page, the Figma frame, their words) or "missing".
2. **Encode it as a BAM layout.** Write `archetypes/<use-case>/<name>/` the way the samples are written (`archetypes/README.md`): `spec.md`, `inputs.schema.json`, `template.html`, and a branch at the top of that use-case's `select.md` that sends the job to it. Then:
   - Set `"tier": "brand"` in the schema and `tier: brand` in the spec frontmatter. Add `covers:` to the spec frontmatter: the BAM jobs it does, named by the sample layout that does the same job (`covers: [social-post/stat]`), or `covers: []` when no sample does it.
   - **Copy, never paraphrase.** A limit the guide states goes in as stated: 6 words stays 6.
   - **Tokens only.** Map every colour and font in the layout to a `--brand-*` token. A colour the layout uses that is not in `tokens.css` is a question for the owner, never a raw value in the template.
   - **Every BAM check runs**, named or not. Where the guide gives a stricter number (larger text, more contrast), write it in the spec's Checks line. Where it gives a looser one, BAM's number stays and the spec says so: BAM's numbers come from reading research (`docs/design/system/visual/sources.md`).
3. **Fill what is missing, and mark it we guessed.** A missing limit comes from the sample that covers the same job (the stat's number is 5 characters at most), or else from the longest text in the owner's own posts of that layout. A missing hierarchy is read from the layout: largest first. Write each filled value in the spec under `## You said vs we guessed`, `### We guessed`, one line each with where it came from. When the owner confirms a line, move it to `### You said`.
4. **Ready or partly ready.** A layout is **ready** (used as it is) when the owner gave all three things and nothing is under **We guessed**. It is **partly ready** when you filled some of them: it can make posts now, and each guess is a question for the owner. A layout BAM cannot make (text over a photograph, a gradient ground) is not encoded: it is a gap note (step 7).
5. **Show what is covered.** Write `brand/coverage.md`, one row per job: the jobs the owner's layouts do, then every sample job for the formats the owner runs (question 9). Columns: job, your layout, status (**ready**, **partly ready** with the number of guesses, or **not covered**), next step. Show the owner this table before anything else.
6. **Offer samples only for the jobs nothing covers.** Ask one multiple-choice question that lists each not-covered job with the sample layout that does it, for example: "Nothing of yours covers these jobs: a date and a place (event), an offer (offer). Add BAM's samples for them? (a) add all (b) pick some (c) none for now". Write the answer in the next-step column ("sample added" or "not now"). A sample the owner adds is used as it is.
7. **Gap notes for the rest.** A job the owner needs that neither their layouts nor a sample covers, or a layout of theirs that BAM cannot make, is a gap note (`workshop/gap-note.md`). Name it in the table.

Propose then renders the owner's layouts first (`skills/poligraf--propose.md`), and the owner picks from those before any sample.

## Exit criterion

The cold handoff passes. Record the date in `rules/decisions.md`. If the owner brought layouts: `brand/coverage.md` exists, and every layout in it is encoded as ready or partly ready (its guesses listed in its `spec.md`) or named in a gap note.

## Never do

- Never paraphrase a token value or a line of copy in `BRAND.md`.
- Never let `BRAND.md` disagree with `tokens.css`; `tokens.css` wins and `BRAND.md` is regenerated.
- Never offer a sample layout for a job one of the owner's layouts already covers. Never redraw an owner's layout to look like a sample.
- Never write "you said" or "we guessed" into `locked.json`. They are labels in `BRAND.md` and the participant files; the keys stay `locked` and `derived`.
