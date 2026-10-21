---
title: Workshop
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Workshop

This folder is the workshop half of Brand Asset Maker (BAM), the part of Poligraf that participants keep. It holds eight practice scenarios (`scenarios.md`), the brand-folder form (`brand-folder.md`), the gap note template (`gap-note.md`), the ranked next-assets prompt (`next-assets.md`), the cold handoff prompt (`cold-handoff.md`), a free font shortlist (`fonts-shortlist.md`) and the month-later self-audit (`self-audit.md`). The other half of BAM is the spec, the 57 sample layouts in six forms (social post with carousel, slides, web banner, print, email header, and the image mock-up recipes), `base.css`, `select.md` and the skills.

You fork BAM and use it with your own agent (Claude, Cursor, Codex or another) on your own brand. You never need HueGrid to make a post. Your agent writes your brand folder, makes your posts and checks them. When a request fits no layout, it writes a gap note.

## Three verbs

BAM has six states. You need three verbs:

| Verb | States | What you do |
|---|---|---|
| **Bring** | 1 Intake, 2 Encode | You answer the nine questions and bring your logo and colour. Your agent writes your brand file, `BRAND.md`, and marks every value **you said** or **we guessed**. |
| **Pick** | 3 Propose, 4 Approve | Your agent makes a set of posts, each with its checks in plain words. You pick one. Picking turns what was guessed into what you said. |
| **Make** | 5 Generate, 6 Feedback | Your agent makes posts from what you picked. You name each break with three questions, and the agent fixes it in the one file it belongs to. |

The six states stay in the spec and the skills. Each skill's first line names its verb.

## Who it is for

People who own a brand's output without being designers: marketing professionals, solo founders, engineers. No design software is used.

## The two sessions

Two sessions of two hours, online, 8 to 10pm Singapore time (SGT).

- **Session one, Thursday 22 October 2026.** Arjun shows Kadri Coffee as his practice brand in three scenarios (`scenarios.md`, 1 to 3): a post that fits, a campaign post with facts written once, and a request that fits no layout and ends in a gap note. He also shows the engine, HueGrid's private version of Poligraf, briefly. You do not need it: everything you do in the week runs on BAM and your own agent.
- **The week between.** Try scenarios 4 to 8 on Kadri, or pick 2, 3 or 5 of them, or write your own. Then do the same on your own brand. Keep the posts that work and the gap notes for the ones that do not. Then run `next-assets.md` to rank the next assets your brand should make, by how often you need them.
- **Session two, Thursday 29 October 2026.** Your journeys: what you made, where it broke, what you tried. Pitfalls and tips from the group. How to extend BAM into your own harness: new layouts from your gap notes, your own skills. Resources to help you think like a designer.

**The practice brand** is Kadri Coffee, a fictional coffee brand by Madhuri Maram, included with her permission. Its files are in `examples/kadri/`.

## What to bring

Your own brand, and the brand-folder form (`brand-folder.md`) filled in. Your agent reads the form and writes your `brand/` folder.

| Item | Required | Notes |
|---|---|---|
| Logo file (question 1) | yes | SVG preferred. PNG works. Know the wordmark spelling and casing |
| Primary colour (question 2) | yes | As a hex code. A description ("a warm orange") is not an answer |
| Who it is for (question 4) | yes | One sentence |
| How it sounds, what it must never say (questions 5 and 6) | no | Answer them if you can. If you leave them blank, the agent guesses and marks the guess |
| Font files (question 3) | no | Only files you are licensed to use. They stay in your brand folder |
| Photographs (question 8) | no | BAM has no photograph layout yet. A post over a photo is a gap note |

You also need an AI agent that can read and write files in a folder. If it can run commands and you have Chrome installed, it can save the PNGs itself. If not, you open each post in Chrome and take a screenshot.

## What you keep

- BAM, under CC BY-NC-SA 4.0 (see `LICENSE.md` in the BAM root). You may fork it, change it and build on it. Credit HueGrid Studio, keep it non-commercial, and share changed versions under the same licence.
- Your brand layer: the `brand/` folder your agent wrote (`BRAND.md`, `tokens.css`, `locked.json`, `fonts.md`, `fonts.css`, `voice.md`, `intake.log.md`, your logo and any files you brought).
- Every post you made (`out/<run>/`: the HTML, the PNG and the report), your feedback notes and your gap notes.
- Your ranked list of next assets (`next-assets.md` at the root of your fork).

Your brand layer and everything you make from it are yours.

## The month-later test

A month after the sessions, could you do these in any tool, with any AI assistant?

1. Given a logo, a colour and three sentences, list every brand value, mark each you said or we guessed, and keep that list in a file.
2. Given a failing contrast number, name the file you would change before you change anything.
3. Given a break, ask the three questions, then name one of the seven kinds and one file. Never two.
4. Given a request nothing in your library fits, write a gap note with one ask and stop.
5. Given your brand file, hand it to an assistant with no other context and get every value back right. If it gets one wrong, fix the brand file, not the question.

A "no" on any line is a place to practise. For the files themselves, use the paper checklist in `self-audit.md`.
