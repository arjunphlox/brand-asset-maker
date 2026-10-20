---
title: Workshop
author: HueGrid Studio
license: CC-BY-NC-ND-4.0
tier: sample
---

# Workshop

This folder is the workshop half of Brand Asset Maker (BAM), the part of Poligraf that participants keep. It holds five exercises, ten triage drills, the brand-folder form, the cold handoff prompt, the designer brief template (`designer-brief.md`), a free font shortlist (`fonts-shortlist.md`) and the month-later self-audit (`self-audit.md`). The facilitator holds the drills key; it is not in BAM. The other half of BAM is the spec, the three sample archetypes (`headline`, `stat`, `quote`), `base.css`, `select.md` and the six skills.

The session teaches the decisions the harness refuses to make. The harness renders and checks. It does not decide what your brand is, which file a failure belongs to, what a review note means, what a new layout should be, or whether your brand file can be trusted by someone who has never met you. You do.

## Three verbs

The harness has six states. You need three verbs:

| Verb | States | What you do |
|---|---|---|
| **Bring** | 1 Intake, 2 Encode | You answer the nine questions and bring your logo and colour. We write your brand file, `BRAND.md`, and mark every value **you said** or **we guessed**. |
| **Pick** | 3 Propose, 4 Approve | We show you a contact sheet of posts, each with its checks in plain words. You pick one. Picking turns what we guessed into what you said. |
| **Make** | 5 Generate, 6 Feedback | The share-card generator makes posts from what you picked. You name each break with three questions, and we fix it in the one file it belongs to. |

The six states stay in the spec and the skills; each skill's first line names its verb.

## Who it is for

People who own a brand's output without being designers: marketing professionals, solo founders, engineers. No design software is used. No code is written by participants.

## How it is run

- **The facilitator operates the harness.** Every render runs on HueGrid's own instance of Poligraf. Participants answer, read, triage and write; the facilitator runs the scripts and applies the diffs they name.
- **The engine is not in BAM.** Scripts, HueGrid's brand layer, HueGrid's font files and the `reference` archetypes (the photograph archetype `announcement`) are shown in the room and stay with HueGrid.
- **The practice brand** is Kadri Coffee, a fictional coffee brand by Madhuri Maram, used with her permission. Session one runs it live, and the drills use it beside HueGrid.
- **Length:** two sessions with homework between them. Session one: exercises 1 and 2 on Kadri. Homework: exercise 3, the drills, without the key. Between sessions, your hand-in is encoded and gets its first sheet. Session two: exercise 2 on your own sheet, then exercises 4 and 5. Exercise times are below.

### What to bring

The brand-folder form (`brand-folder.md`): the nine intake questions, filled in before the session, and the files they ask for.

| Item | Required | Notes |
|---|---|---|
| Logo file (question 1) | yes | SVG preferred. PNG works. Know the wordmark spelling and casing |
| Primary color (question 2) | yes | As a hex code. A description ("a warm orange") is not an answer |
| Who it is for (question 4) | yes | One sentence |
| How it sounds, what it must never say (questions 5 and 6) | no | Answer them if you can; left blank, we guess, and the guess is marked |
| Font files (question 3) | no | Only files you are licensed to use. They stay in your brand folder and are never added to BAM |
| Photographs (question 8) | no | Used only in the `announcement` demonstration. Know where the subject is in each (the focal point) |

### What you keep

- BAM, under CC BY-NC-ND 4.0 (see `LICENSE.md` in the BAM root): spec, sample archetypes, `base.css`, `select.md`, skills, this folder.
- Your brand layer: the `brand/` folder written for your brand (`BRAND.md`, `tokens.css`, `locked.json`, `fonts.md`, `fonts.css`, `voice.md`, `intake.log.md`, your logo and any files you brought), plus the breaks you named and the designer brief you wrote.
- Every contact sheet your brand produced: `contact-sheet.html`, the PNGs and `report.json` for each run.

Your brand layer and everything rendered from it are yours. BAM may be shared but not changed or sold; running this workshop needs a written agreement with HueGrid Studio.

## The five exercises

| # | Exercise | Decision it teaches | Where the decision lives | Time |
|---|---|---|---|---|
| 1 | State the brand | What you said and what we guessed | `brand/locked.json` (you said = `locked`, we guessed = `derived`), `brand/intake.log.md` | 45 min |
| 2 | Watch the first sheet fail | Which file a break is fixed in, named before anything is touched | `brand/tokens.css` for HueGrid's p01; in general the kind table in the spec | 30 min |
| 3 | Triage ten notes | Which break a note is (three questions), and which one of seven kinds it lands on | `feedback/NNNN-<slug>.md` (`kind`), `rules/decisions.md` | 40 min |
| 4 | Write the designer brief | When no archetype fits, and what a designer would have to decide | `archetypes/social-post/select.md` question 5; the brief in `feedback/` | 20 min |
| 5 | Cold handoff | Whether the brand layer stands on its own, and which file wins when two disagree | `brand/BRAND.md`, checked against `brand/tokens.css` and `brand/locked.json` | 30 min |

Full steps, facilitator notes and exit criteria: `exercises.md`. Drills: `drills.md` (the facilitator opens the key after scoring). Prompt for exercise 5: `cold-handoff.md`.

## The month-later test

A month after the session, without HueGrid's instance, could you do all five exercises in a different tool: a design app, a slide editor, a spreadsheet, any AI assistant? Run it on yourself.

1. Given a logo, a color and three sentences, list every brand value, mark each you said or we guessed, and keep that list in a file, not in your head.
2. Given a failing contrast number, name the file you would change before you change anything.
3. Given a break, ask the three questions, then name one of the seven kinds and one file. Never two.
4. Given a request nothing in your library fits, write a brief and stop.
5. Given your brand file, hand it to an assistant with no other context and get every value back right. If it gets one wrong, fix the brand file, not the question.

A "no" on any line points at the exercise that teaches it. BAM is enough to redo all five; the engine is not needed for any of them. For the files themselves, use the paper checklist in `self-audit.md`.
