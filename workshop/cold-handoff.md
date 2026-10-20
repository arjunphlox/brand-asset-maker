---
title: Cold handoff
author: HueGrid Studio
license: CC-BY-NC-ND-4.0
tier: sample
---

# Cold handoff

The test that a brand layer stands on its own. Someone who has never met the brand opens a fresh chat in any AI assistant (Claude, ChatGPT, Cursor), attaches only the brand's `brand/` folder and Brand Asset Maker (BAM), and pastes the prompt below. No renderer is involved. If the answer is right, the brand layer and the spec carry the brand without anyone in the room.

## Attach

- The `brand/` folder: `BRAND.md`, `tokens.css`, `locked.json`, `fonts.md`, `fonts.css`, `voice.md`, `brand.json`, `assets/logo.svg`. Font files are not needed for this test.
- BAM. If the assistant cannot take a folder, attach at least the spec and `archetypes/social-post/stat/` (`spec.md`, `inputs.schema.json`, `template.html`).

Nothing else: no notes, no earlier chat, no explanation of the brand.

## The prompt

Paste it unchanged.

```
Using BRAND.md, list the tokens with their status, the font policy path, and which files you would use for a stat post. Then propose inputs for the stat archetype that fit its budgets. Do not render.
```

## What a pass looks like

Check the answer line by line with the brand's `tokens.css`, `locked.json` and `fonts.md` open beside it.

1. **Tokens.** Every `--brand-*` token in `tokens.css` is listed with the same value. None is missing, none is invented. Each status (you said or we guessed; `locked` or `derived` in `locked.json`) matches `locked.json`.
2. **Font policy path.** The path matches `fonts.md`: (a) files supplied, (b) a named free font, or (c) suggested. Families and weights match.
3. **Files for a stat post.** `archetypes/social-post/stat/template.html`, `inputs.schema.json` and `spec.md`; `archetypes/_shared/base.css`; `brand/tokens.css`; `brand/fonts.css` and the files it points to; `brand/assets/logo.svg`; the wordmark as spelled in `brand.json`. No photograph, no other archetype.
4. **Inputs.** `number` is 5 characters or fewer, symbols included. `label` is 6 words and 40 characters or fewer. `source`, if present, is 8 words and 48 characters or fewer. The counts are shown. Nothing breaks a never-claim in `voice.md`. If the brand supplied no real figure, the assistant says so rather than inventing one.
5. **Nothing rendered.** No image, no mockup, no HTML.

All five hold: pass.

## What a fail means

The fix is in `BRAND.md`. Never in the prompt.

`BRAND.md` is regenerated from `tokens.css`, `locked.json`, `fonts.md`, `voice.md` and `brand.json` (`skills/poligraf--encode.md`); where they disagree, those files win. Find the line that caused the failure and hand it to the owner:

| Symptom | Cause in `BRAND.md` |
|---|---|
| A value differs from `tokens.css` | Copied before a token changed and never regenerated |
| A status differs from `locked.json` | Not regenerated after an approval promoted values |
| A token is missing | The Visual section leaves it out, often a scheme override |
| A file is missing from the list | The Files section does not name it |
| Inputs break a never-claim | The Voice section paraphrases instead of copying |

If the assistant's list is right only because it read `tokens.css` and noticed `BRAND.md` disagrees, that is still a fail: the next reader may not look.

If inputs break a budget with BAM attached, run the prompt once more in a fresh chat. If it repeats, report it to HueGrid as a finding about the spec. BAM is shared as is; it is not edited.

Rewriting the prompt to explain what the file left out makes this chat pass and the next one fail. Do not do it.

## A worked fail

On 2026-10-01 HueGrid's own brand folder failed this test:

- `BRAND.md` lists `--brand-muted` as `#888888`; `tokens.css` has `#767676` (changed by feedback 0002).
- It omits `--brand-accent-text-on-paper` (`#8c6201`) and says the accent color is constant across schemes, while text on paper reads the darker amber.
- It lists both trackings as `derived`; `locked.json` has them `locked`.

Every one of these is a `BRAND.md` that was not regenerated after `tokens.css` or `locked.json` changed. The fix in each case is to regenerate it. The prompt stays as it is.

Kadri Coffee's `BRAND.md` was written after its approval (`apr-0001`). Check it the same way, on the copy in BAM: `examples/kadri/brand/`. Ten tokens turned from we guessed to you said when a post was picked; three stayed we guessed (`--brand-accent-ink`, `--brand-muted-on-ink`, and `--brand-logo-variant`, which puts the dark k on the coral surface). If the assistant reports any status differently from `locked.json`, it fails.
