---
skill: poligraf/feedback
version: 1
state: 6
author: HueGrid Studio
license: CC-BY-NC-ND-4.0
tags: [lifecycle, feedback]
---

# Feedback

**Verb: Make.** Feedback is the second half of Make (Generate, then Feedback): every break the owner names is fixed in its one file.

## Without the engine

No scripts? Do each step by hand, in the chat.

- The three questions, the ladder and the feedback file need no engine.
- Re-render → describe the affected samples again, with each check measured or marked "not measured".
- Append the line to `rules/decisions.md` by hand.

**Goal:** every note becomes a diff in exactly one fix location, and the harness records what it learned.

## Procedure

1. Write the note as `feedback/NNNN-<slug>.md`:
   ```
   ---
   run: g01
   sample: stat--1x1--paper--r1
   kind: (leave blank; triage fills it)
   ---
   <the owner's words, verbatim>
   ```
2. **Ask the three participant questions first**, in order, in the owner's words; then place the note on the ladder in step 3. A note is a **break**: a failed check or a review note.
   1. "Is it the colour, or the words?" Colour (any look value: a colour, a typeface, a weight) points at `token`; the words point at `voice`. Ask alongside it: "Did something that must never move, move?" A yes lands on `locked` (a drift).
   2. "Is it this one post, or all of them?" This one post → `input`. All of them → the answer to question 1 stands (`token` or `voice`); all of them and the layout is the reason (the copy does not fit, the post is the wrong kind of post) → `budget` or `selection`.
   3. "Do you want something new?" → `designer`: write the brief (`workshop/designer-brief.md`) and stop.
   The answers are the participant's map, not the decision. The ladder decides the kind; where the two seem to disagree, ask the ladder in order and write down why.
3. **Triage** to one of the seven kinds (`CLAUDE.md` → Feedback). Ask yourself in order:
   - Is it wrong everywhere the value appears? → `token`
   - Does it look right but say the wrong thing? → `voice`
   - Did something that must never move, move? → `locked`
     A `locked` note about the logo on a surface where it disappears needs the owner's reversed logo (contract 1.4: `brand.assets.logoReversed` in the config, chosen for that scheme with `--brand-logo-variant: reversed` in `tokens.css`, `derived` until a post on that scheme is picked) or a scheme exclusion in the generator; never a filter in a template.
   - Does the copy not fit, or the hierarchy collapse? → `budget`
   - Is only this row wrong? → `input`
     A failed `image-contrast` or `crop` is `input`, never a file edit. Try in order: scrim strength (`strong`), focal point, another photograph, layout `split`.
   - Is the content in the wrong archetype? → `selection`
   - Is a new style, layout or element being asked for (type on a photograph without a scrim, a tint, a side-by-side)? → `designer`
4. Apply the diff in that location only. For `budget` and `selection`, mark `upstream: true`: the change belongs to the shared library and is proposed there with a spec update.
5. For `designer`, do not improvise. Write the brief in the feedback file with the template in `workshop/designer-brief.md` (six parts: what was asked and what the content is, why no layout fits, the layouts tried and why each is not enough, tokens used, what a designer would need to decide with the slot budgets, open questions). Its Kadri example is the gradient brief. Stop.
6. Re-render the affected run. Compare the sheet before and after. Append to `rules/decisions.md`: date, feedback id, kind, file changed, one line on what was learned.

## Exit criterion

The feedback file has its `kind`, the decisions log has its line, and the re-render passes.

## Never do

- Never fix the output. Find the kind, fix the source, regenerate.
- Never triage a note to two kinds. If it seems to need two, it is two notes.
- Never fix a weak sample by adding an element. Rewrite or remove; the `element-count` check backs this.
