---
title: Gap note template
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Gap note

A gap note is what your agent writes when Brand Asset Maker (BAM) cannot make what was asked. It is the feedback kind `designer` in the spec. Anyone can write one: a designer, an owner, or an agent. It needs no design words.

A gap note comes last. If the owner brought layouts of their own, the agent encodes those first and offers BAM's samples for the jobs they do not cover (`skills/poligraf--encode.md`, "Your layouts first"); a gap note is only for what neither covers. With no layouts brought, the samples come first.

Copy the block below into a new file, `feedback/NNNN-<slug>.md`, and fill in every part. Then stop. Do not make a sketch, a mockup or a rough version. A rough version quietly becomes the layout.

A gap note ends in **one** ask, never two. Pick the one that would unblock the post first:

- **(a) More context from the owner.** A fact, a file or a decision is missing. Example: "Which photograph, and where is the subject?"
- **(b) A new value in the brand file.** The layout exists, but the brand has no value for something it needs. Example: a second accent colour, a reversed logo.
- **(c) A new layout to define.** No layout in BAM does this job. Example: a post over a photograph, a folded brochure, a label with legal text.

## The template

```markdown
---
kind: designer
asked by: <who>
date: <YYYY-MM-DD>
ask: <a | b | c>
---

## 1. What was asked
The request, word for word: "<…>"
The content: what the post must say or show, in one or two lines.
The facts, as exact strings (name, date, place, price). If there is a message file, name it.

## 2. What BAM could not do, and why
Pick one reason and say it in a sentence:
- No layout: neither the owner's layouts nor BAM's samples in `archetypes/` do this job (name the `select.md` step that failed). A sample that would do it but the owner has not added is not a gap: offer it.
- Missing input: the request needs something nobody has given yet (a photograph, a figure, a date).
- A brand value is missing: the layout exists, but `tokens.css`, `locked.json` or the logo files lack a value it needs.
Name the slot, budget, check or format the request breaks.

## 3. What was tried
| Layout or fix tried | What it kept | What it lost |
|---|---|---|
| <your own layouts first, if any> | | |
| headline | | |
| stat | | |
| quote | | |
If one of them keeps the point, stop: make that post instead. That is a `selection` answer, not a gap.

## 4. The ask
One of these three, and only one.

(a) More context from the owner: the questions, one per line.

(b) A new value in the brand file: the token or file, what it is for, and which scheme or layout reads it.
    The owner supplies it; until then it is "we guessed" at best, never invented.

(c) A new layout to define. A spec needs:
    - Slots, each with a role (`h1`, `h2`, `h3`, `body`, `label`, `data-snippet`) and a budget (words, characters).
    - The hierarchy: which slot is read first, second, third.
    - The ratios (formats) it is for, and the job of each.
    - The bounded variation: what may change, and the allowed values.
    - The checks it runs (from `SPEC.md`), and anything new they would have to measure.
    - The fallbacks: where the content goes when it does not fit.
    If the owner already has a design for this job (a Figma frame, a page of their guide),
    encode that instead (`skills/poligraf--encode.md`, "Your layouts first").
    Otherwise a designer or the owner can define it in their fork as `archetypes/<use-case>/<name>/`,
    with `spec.md`, `inputs.schema.json` and `template.html` (see `archetypes/README.md`).
```

## A filled example: Kadri Coffee

> "Put Velvet Hour's gradient behind the post."

```markdown
---
kind: designer
asked by: the Kadri owner (practice brand)
date: 2026-10-20
ask: b
---

## 1. What was asked
The request, word for word: "Put Velvet Hour's gradient behind the post."
The content: a post for Velvet Hour, one of Kadri's first two coffees. Its words are the
tasting notes printed on the bag: "Cocoa, caramel and toasted almond."
The facts: none beyond the tasting notes.

## 2. What BAM could not do, and why
A brand value is missing. The words fit: `select.md` question 9 picks the headline (one line,
8 words or fewer). The ground does not. Every layout paints one flat colour from `tokens.css`
(paper, ink or accent). The `token-colors` check fails any colour that is not in `tokens.css`,
and the gradient's colours were never handed in.

## 3. What was tried
| Layout or fix tried | What it kept | What it lost |
|---|---|---|
| headline | The tasting notes as the line | The gradient: the ground is flat paper, ink or coral |
| stat | Nothing: "250 g" is the bag size, not the point of this post | The tasting notes and the gradient |
| quote | The notes as the brand's own words, attributed to the Kadri team | The gradient, and the post now reads as a quote |

## 4. The ask
(b) A new value in the brand file: the Velvet Hour gradient, as two or three hex colours, their
direction, and where each colour stops. It would be read by the headline's surface on one coffee's
posts. Owner, please also say whether text may sit on it, or only beside it.
```

Why this ends in (b) and not (c): the owner's first missing piece is the gradient's colours. Nobody can define a gradient layout without them. Once the colours exist, a second gap note may ask for (c): a layout whose `contrast` check measures the lightest and darkest part of the gradient under each line, the way a photograph check would.
