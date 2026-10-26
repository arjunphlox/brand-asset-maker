---
skill: poligraf/generate
version: 1
state: 5
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tags: [lifecycle, generate]
---

# Generate

**Verb: Make.** Generate is the first half of Make (Generate, then Feedback): the share-card generator makes posts from what was picked.

## Without the engine

No scripts? Do each step yourself, in the folder. Whenever a step makes a post image, follow `skills/poligraf--make-it.md`: you write the HTML and save the PNG, then check what you can measure.

- Count words and characters for each row against `inputs.schema.json` before anything else.
- `npm run render` → make each post yourself with `skills/poligraf--make-it.md`: one HTML file and one PNG per row and format in `out/g<NN>/`, and a report with each check as measured or "not measured". Never claim a pass you did not measure.
- Formats: for each format the posts go to, name its job from `archetypes/social-post/select.md` step 0 (feed post 1:1: the message; tall feed post 4:5: the message with more room; story 9:16: one fact plus a call to action) and re-run selection for it. Never make a story by stretching the square post.
- The message: write the shared facts once, as a table of exact strings (name, date, place). `facts-consistent` → for every post, quote each fact as it appears and mark it "exact" or "differs" against the table ("Nov 8" vs "8 November" differs). Fix a "differs" by copying the table's string, never by editing the table to match the post.
- The PNG comes from the HTML (headless Chrome or a screenshot). Never draw, paint or edit an image by hand.

**Goal:** many outputs from one approved generator, every one checked, none hand-edited.

## Procedure

1. If the owner describes content without naming a layout, suggest one first with `skills/poligraf--suggest.md` (the `select.md` rules, then the layouts' **Why it works** reasons) and agree it with them. Add rows to `generators/<name>.json`. Every row's inputs must pass the archetype budgets; check before rendering. If the owner's content does not fit, rewrite the copy with them or route to the fallback archetype named in `inputs.schema.json`. Never shrink type. Rows for image archetypes carry `image: { src, focal, alt }`, and every photograph must be a real file under `brand/assets/photos/`, never a placeholder.
2. **Formats are jobs.** For each format the campaign needs, run `archetypes/social-post/select.md` step 0: the format names its job and the archetypes it allows. A story (9:16) is a reminder, one fact plus a call to action, so a quote or a long line goes to a headline with a `cta`. A post approved at 1:1 is never scaled into 9:16; the generator lists the ratios (`"ratios": ["1:1", "4:5", "9:16"]`) and the template adapts the layout for each. A ratio whose job the archetype cannot do gets its own generator, from its own selection.
3. **One message, many posts.** When the posts share facts (a name, a date, a place), write `messages/<name>.json` (`{ "contractVersion": "1.4", "name", "facts": { "date": "8 November" }, "approvedLines": [] }`) with the owner's exact strings, set `"message": "<name>"` in the generator, and put `{ "fact": "date" }` in the rows instead of typing the date. `facts-consistent` then runs on every sample: a row that types "Nov 8" fails ("a detail does not match the other posts"). The fix is the row (kind `input`): reference the fact. A wrong fact is fixed once, in the message, and every row follows.
4. Widen `variation` only within the archetype's allowed values. The renderer refuses anything else. Wanting a value outside the set is a designer conversation (feedback kind `designer`).
4a. When the owner says how these posts should feel ("make the offers feel calm"), and the words are on the expression map, add `"appear": ["calm"]` to the generator (or to one row). It replaces the layout's own words for the `expression` check; pick the variation with `npm run expression -- --run out/<run> --layout <id> --appear "calm"` on a sheet rendered with `npm run propose -- --variants`. Utility and brand checks still come first.
5. If the generator has no `useWhen`, ask the owner when it is for and add the line (optional, contract 1.4: one line, their words, e.g. "a number printed on the bag"). The contact sheet shows it, so the next person picks the right generator, not the prettiest.
6. `npm run render -- --generator generators/<name>.json --run g<NN>`.
7. Open the contact sheet. The header shows the message's facts when there is one. Each row's outputs should differ only in what `variation` and `inputs` changed. Anything else that differs is a bug in the template (fix the layout and its spec) or a token leak (fix the brand file).
8. Hand the sheet to the owner for feedback.

## Exit criterion

`out/g<NN>/report.json` with `summary.failed = 0`, or every failure traced to a content decision.

## Never do

- Never edit outputs. Fix the source and re-render.
- Never add an ad-hoc template or a per-row style override.
- Never scale a post into a new format; re-run selection.
- Never type a fact the message holds; reference it.
