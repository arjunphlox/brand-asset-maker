---
skill: poligraf/intake
version: 1
state: 1
author: HueGrid Studio
license: CC-BY-NC-ND-4.0
tags: [lifecycle, intake]
---

# Intake

**Verb: Bring.** Intake is the first half of Bring (Intake, then Encode): the participant brings a logo, a colour and answers; you turn them into `brand/`.

## Without the engine

No scripts? Do each step by hand, in the chat.

- `npm run doctor` → walk the nine questions in `workshop/brand-folder.md` (the fixed list below) and list each one that is blank. Ask only about those.
- `npm run scale` → measure each paper, ink and accent pair with the WCAG contrast formula and write the table: pair, ratio, pass at 4.5:1 or 3:1.
- `npm run fonts` → write the font name, licence and source URL in `brand/fonts.md`. The owner downloads the files. No font named? Suggest from `workshop/fonts-shortlist.md`.
- `npm run placeholder` → write "no photograph yet" in the notes. Never describe a photograph that does not exist.

**Goal:** turn whatever the brand has (minimum: a logo, a primary color, a few sentences of context) into a populated `brand/` where every inferred value is marked `derived`.

## Procedure

1. Run `npm run doctor -- --json`. It lists exactly what is missing. Ask only about those items. Never ask a question the doctor did not raise.
2. **Copy, never paraphrase.** Values supplied by the brand (hex codes, font names, wordmark spelling, lines of copy) go in verbatim with `status: locked` and `source: "supplied by <who/where>"`.
   **Read, not said.** An answer written as `#xxxxxx (read from logo.svg)` was read from a file, not stated by the owner. It goes in as `status: derived` with `source: "read from logo.svg"`. Only a value the owner states is `locked`.
3. **Fonts** follow the policy in `CLAUDE.md` → Contracts → Fonts, in order:
   - files present in `brand/fonts/` → record `source: files` in `brand/fonts.md`, write `brand/fonts.css`;
   - a named free font → record `source: free` with name, license, URL, then `npm run fonts` to fetch;
   - neither → propose up to three pairs from the OFL shortlist in `workshop/fonts-shortlist.md` (display + body, licence and source link given), each with one sentence tying it to the brand context, wait for a choice, record `source: suggested` with the names, OFL 1.1 and the links, mark the family `derived` (we guessed). A font off the list only after you have read its licence file.
   Never pick a font silently.
4. **Color.** With only a primary color: run `npm run scale -- "<hex>"` once with the primary, then again with `npm run scale -- "<hex>" --on <paper>,<ink>` after choosing paper and ink (the table and `recommended.textOn` then report contrast against those surfaces, not only white and black). Propose `--brand-paper`, `--brand-ink`, `--brand-accent`, `--brand-accent-ink`, `--brand-muted` from the scale's recommended pairs, write them to `tokens.css` with `status: derived, source: "scale of <hex>"`. Show the contrast table when proposing.
5. **Voice.** From the context, draft `brand/voice.md`: three tone words, three approved lines (only if supplied or clearly present in the context), and a "never claims" list. Ask the two voice questions from the fixed list if the context does not answer them.
5b. **Photographs.** Photographs go under `brand/assets/photos/`, each with the focal point the owner names (where the subject is). None supplied (question 8 blank) → leave the photograph layouts out: the doctor lists their proposals as optional. Only if the owner wants a photograph layout proposed anyway, generate a placeholder with `npm run placeholder` and mark it `derived`; a placeholder never becomes locked.
5c. **Reversed logo.** A reversed logo handed in with question 1 goes to `brand/assets/logo-reversed.svg`, bytes unchanged, `locked` in `locked.json` `assets` with its sha256, and its path in `poligraf.config.json` `brand.assets.logoReversed` (contract 1.4). Do not pick a scheme for it at intake: which surface shows it is decided when a sheet shows the main logo vanishing (feedback kind `locked`).
6. Write `brand/intake.log.md`: every question asked, the answer, and what was derived from it.
7. Re-run the doctor until it passes.

## The fixed question list

Ask a question only when the doctor flags its item.

| Item | Question |
|---|---|
| logo | "Which file is the logo? SVG preferred. Is there a text wordmark, and how is it spelled and cased?" |
| primary color | "What is the primary brand color, as a hex code?" |
| fonts | "Do you have font files, or a free font you already use? If neither, I will suggest three." |
| audience | "Who is this for, in one sentence?" |
| tone | "Three words for how the brand sounds." |
| never say | "One thing the brand must never claim or say." |
| existing assets | "Link three existing posts or assets you consider on-brand." (optional; used to tag which archetypes the brand already uses) |
| photographs | "Which photographs may we use for announcements, and where is the subject in each (the focal point)?" (optional; a placeholder from `npm run placeholder` stands in until then and stays derived) |
| platforms | "Where will these run first: Instagram, LinkedIn, X?" (chooses ratios) |

## Exit criterion

`npm run doctor` passes; `brand/locked.json` has a status for every token; `brand/intake.log.md` exists.

## Never do

- Never invent a value to make the doctor pass. Ask.
- Never write a raw color, size or font into a template. Intake writes only under `brand/`.
