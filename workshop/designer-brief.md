---
title: Designer brief template
author: HueGrid Studio
license: CC-BY-NC-ND-4.0
tier: sample
---

# Designer brief

Use this when a request fits no layout (exercise 4, and the feedback kind `designer`). Copy the block below into a new feedback file, `feedback/NNNN-<slug>.md`, and fill in every part. Then stop. No sketch, no mockup, no rough version.

A brief says what a designer would have to decide. It does not decide it. If you catch yourself describing a look ("a bit like…", "soft", "modern"), cross it out and write the decision instead.

## The template

```markdown
---
kind: designer
asked by: <who>
date: <YYYY-MM-DD>
---

## 1. What was asked, and what the content is
The request, word for word: "<…>"
The content: what the post must say or show, in one or two lines. List the facts (name, date, place) as exact strings.

## 2. Why no layout fits
The `select.md` question that failed, and why.
The slot, budget, check or principle the request breaks.

## 3. Layouts tried, and why each is not enough
| Layout | What it would keep | What it would lose |
|---|---|---|
| headline | | |
| stat | | |
| quote | | |
If one layout keeps the point, stop: it is a `selection` answer, not a brief.

## 4. Tokens used
The brand tokens the new layout would read (`--brand-paper`, `--brand-ink`, …).
Any value it needs that `tokens.css` does not have. Each one is a question for the owner (part 6), never a value you invent.

## 5. What a designer would need to decide
- Slots, with a budget for each (words, characters) and a role (`h1`, `body`, `label`, …).
- The hierarchy: which slot is read first.
- The bounded variation: what may change, and the allowed values.
- The checks: which existing checks apply, and anything new they would have to measure.
- The fallbacks: where the content goes when it does not fit.

## 6. Open questions
What the owner or the designer must answer before anyone draws. One question per line.
```

## A filled example: Kadri Coffee

> "Put Velvet Hour's gradient behind the post."

```markdown
---
kind: designer
asked by: the Kadri owner (practice brand)
date: 2026-10-20
---

## 1. What was asked, and what the content is
The request, word for word: "Put Velvet Hour's gradient behind the post."
The content: a post for Velvet Hour, one of Kadri's first two coffees. Its words are the
tasting notes printed on the bag: "Cocoa, caramel and toasted almond."

## 2. Why no layout fits
The words fit: `select.md` question 4 picks the headline (one line, 8 words or fewer).
The ground does not. Every layout paints one flat colour from `tokens.css` (paper, ink or
accent). The `token-colors` check fails any colour that is not in `tokens.css`, and a
gradient is many colours. A gradient ground is a new style, not a colour change.

## 3. Layouts tried, and why each is not enough
| Layout | What it would keep | What it would lose |
|---|---|---|
| headline | The tasting notes as the line | The gradient: the ground is flat paper, ink or coral |
| stat | Nothing: "250 g" is the bag size, not the point of this post | The tasting notes and the gradient |
| quote | The notes as the brand's own words, attributed to the Kadri team | The gradient, and the post now reads as a quote, not a coffee |

## 4. Tokens used
Read: `--brand-paper`, `--brand-ink`, `--brand-accent`, `--brand-accent-ink`, `--brand-muted`,
the display and body faces, the k (`logo.svg`) and the dark k (`logo-reversed.svg`).
Missing: the gradient's colours, its direction and where each colour stops. None were handed
in. A coffee-specific colour for Velvet Hour is missing too.

## 5. What a designer would need to decide
- Slots: the same as the headline (headline ≤ 8 words, kicker ≤ 4, CTA ≤ 3 and verb first),
  or fewer.
- Hierarchy: headline first, then kicker, then the k.
- Variation: one gradient per coffee, or one for the brand? Which direction may change?
- Checks: `contrast` measures text against one flat colour. On a gradient it would have to
  measure the lightest and darkest part under each line, the way the photograph check
  (`image-contrast`) does. `token-colors` would have to accept the gradient's colours as
  tokens. `logo-visible` must pass at the k's corner.
- Fallbacks: no gradient for this coffee → the headline on flat ink.

## 6. Open questions
- Which colours make the Velvet Hour gradient? Is there a file?
- Does Sunny Side get its own gradient?
- Where may gradients appear: every post, or only coffee posts?
- May text sit on the gradient, or only beside it?
```

Why this is a brief and not a colour fix: it sounds like a token, so it sounds like a one-line change in `tokens.css`. It is not. A token holds one flat colour, and no check can measure text on a gradient yet. Someone with the authority to design has to decide the five things in part 5 first.
