---
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
credit: "Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission."
---

Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission.

# Worked example: Kadri Coffee

Kadri Coffee is a small brand made with Poligraf from a short form: what the owner filled in, and the brand folder an agent wrote from it. Arjun uses it as his practice brand in session one. Use it to try the scenarios (`workshop/scenarios.md`) before you try your own brand, and for the cold handoff.

| File | What it is |
|---|---|
| `hand-in/brand-folder.md` | The filled form: what the owner answered (questions 1 to 7) |
| `brand/BRAND.md` | The brand in words: every value, its status, the fonts, the voice, the files, and the traps (its Refuse section) |
| `brand/tokens.css` | The brand tokens and the per-scheme rules |
| `brand/locked.json` | The status of every value: you said (`locked`) or we guessed (`derived`) |
| `brand/fonts.md` | Which font path applies, and the weights |
| `brand/fonts.css` and `brand/fonts/` | Hubot Sans (display) and Mona Sans (body). Part of the brand, free under OFL 1.1, licences beside them |
| `brand/voice.md` | Tone words, approved lines (none yet) and the never-claims |
| `brand/brand.json` | The name, the wordmark (none on posts) and the logo file |
| `brand/assets/logo.svg` | The coral k |
| `brand/assets/logo-reversed.svg` | The dark k, used on the coral surface |
| `generators/stat-bag.json` | The share-card generator the owner picked: the stat layout, 1:1, paper, two rows about the bag |
| `messages/kadri-popup.json` | The pop-up's facts (name, date, place), written once for every post that mentions them |

To make a post, put `brand/` at the root of your fork (or point your agent at `examples/kadri/brand/`) and follow `skills/poligraf--make-it.md`. For the cold handoff (`workshop/cold-handoff.md`), attach `examples/kadri/brand/`.

The first sheet's break (the coral k vanishes on the coral surface, `logo-visible`) and its fix (the dark k, chosen in `tokens.css`; the layout did not change) are in `showcase.html` at the root of Brand Asset Maker (BAM), with the story and a Do and a Don't for each layout.

Some files are not here: the intake log, the full list of traps, the feedback notes, the decisions and every post. When `BRAND.md` names `feedback/0001`, `feedback/0002`, `intake.log.md` or a proposal, it points to that full run. `BRAND.md` copies their values, so the folder stands on its own.
