---
skill: poligraf/feedback
version: 1
state: 6
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tags: [lifecycle, feedback]
---

# Feedback

**Verb: Make.** Feedback is the second half of Make (Generate, then Feedback): every break the owner names is fixed in its one file.

## Without the engine

No scripts? Do each step yourself, in the folder. Whenever a step makes a post image, follow `skills/poligraf--make-it.md`: you write the HTML and save the PNG, then check what you can measure.

- The three questions, the ladder and the feedback file need no engine.
- Re-render → make the affected posts again with `skills/poligraf--make-it.md`, with each check measured or marked "not measured".
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
   3. "Do you want something new?" → `designer`: write a gap note (`workshop/gap-note.md`) and stop.
   Alongside question 1, when the post is readable and in the brand's own colours, fonts and words but feels wrong: "Does it say something else about who you are?" A yes points at `expression`. So does an answer on the sheet's scales that disagrees with the measurement, and an expression note (your call) the owner wants changed.
   The answers are the participant's map, not the decision. The ladder decides the kind; where the two seem to disagree, ask the ladder in order and write down why.
3. **Triage** to one of the eight kinds (`CLAUDE.md` → Feedback). **Precedence:** utility first ("works for anyone": can people see and read it?), then brand ("looks like you"), then expression ("says who you are"). A utility or brand fix wins even when it moves the post away from the owner's words; expression never loosens a check or bends a brand value. Ask yourself in order:
   - Is it wrong everywhere the value appears? → `token`
   - Does it look right but say the wrong thing? → `voice`
   - Did something that must never move, move? → `locked`
     A `locked` note about the logo on a surface where it disappears needs the owner's reversed logo (contract 1.4: `brand.assets.logoReversed` in the config, chosen for that scheme with `--brand-logo-variant: reversed` in `tokens.css`, `derived` until a post on that scheme is picked) or a scheme exclusion in the generator; never a filter in a template.
   - Does the copy not fit, or the hierarchy collapse? → `budget`
   - Is only this row wrong? → `input`
     A failed `image-contrast` or `crop` is `input`, never a file edit. Try in order: scrim strength (`strong`), focal point, another photograph, layout `split`.
   - Is the content in the wrong archetype? → `selection`
   - Is it readable and on-brand, but saying something else about the brand's character? → `expression`
     Fix in `brand/expression.json`, in order: the layout's preferred look (`prefer`); the words themselves, with the owner ("is this still what you want to say?"); a brand value, with the owner (then the note is `token`, not `expression`); the map row in `docs/design/system/visual/expression.md`, marked research or practice and flagged `upstream: true`. See `skills/poligraf--expression.md`.
   - Is a new style, layout or element being asked for (type on a photograph without a scrim, a tint, a side-by-side)? → `designer`
4. Apply the diff in that location only. For `budget`, `selection` and an `expression` change to the map, mark `upstream: true`: the change belongs to the layout library (`archetypes/` in your fork) and comes with a spec update.
5. For `designer`, do not improvise. Write a gap note in the feedback file with the template in `workshop/gap-note.md`: what was asked (word for word) and the facts; what BAM could not do and why (no layout, a missing input, or a missing brand value); what was tried; and exactly one ask: (a) more context from the owner, (b) a new value in the brand file, or (c) a new layout to define. Its Kadri example is the gradient note. Stop.
6. Re-render the affected run. Compare the sheet before and after. Append to `rules/decisions.md`: date, feedback id, kind, file changed, one line on what was learned.

## Exit criterion

The feedback file has its `kind`, the decisions log has its line, and the re-render passes.

## Never do

- Never fix the output. Find the kind, fix the source, regenerate.
- Never fix an expression note by editing the post, shrinking or recolouring anything, or loosening a check. Utility, then brand, then expression.
- Never triage a note to two kinds. If it seems to need two, it is two notes.
- Never fix a weak sample by adding an element. Rewrite or remove; the `element-count` check backs this.
