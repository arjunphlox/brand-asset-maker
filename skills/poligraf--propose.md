---
skill: poligraf/propose
version: 1
state: 3
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tags: [lifecycle, propose]
---

# Propose

**Verb: Pick.** Propose is the first half of Pick (Propose, then Approve): you show a contact sheet so the owner can pick.

## Without the engine

No scripts? Do each step yourself, in the folder. Whenever a step makes a post image, follow `skills/poligraf--make-it.md`: you write the HTML and save the PNG, then check what you can measure.

- `npm run propose` → for each archetype × ratio × scheme, make the post yourself with `skills/poligraf--make-it.md`: one HTML file and one PNG in `out/p<NN>/`, named `<layout>--<ratio>--<scheme>`.
- For each check from `inputs.schema.json`, write what you measured (a contrast ratio by the WCAG formula, a word count) or write "not measured". Never claim a pass you did not measure.
- The contact sheet is the set of PNGs with these reports, with the `derived` values each one depends on. Label each one must fix, your call or fine, and ask the two-second question for each: "What do you read first? It should be the <`hierarchy[0]`>."
- Every `cta` is 3 words or fewer and starts with a verb. Name the verb.
- Formats: describe each ratio as its job (`archetypes/social-post/select.md` step 0): 1:1 feed post, the message; 4:5 tall feed post, the message with more room; 9:16 story, one fact plus a call to action. For a story, make it from the template with `data-ratio="9:16"` and say where the text sits against the safe zone (250px top, 340px bottom at 1080×1920, an estimate). Never present a 9:16 sample as a stretched 1:1.
- If the brand already has a campaign's facts (a date, a place), list them as a message table of exact strings; every proposal that mentions one copies it verbatim.

**Goal:** one checked sample per archetype × ratio so the brand owner approves a system, not a picture.

## Procedure

1. For each archetype under the use-case, write `brand/proposals/<archetype>.json` with `inputs` drawn from the brand context and `voice.md` approved lines. Count words and characters against `inputs.schema.json`. If a budget cannot be met with real content, say so: that is a finding, not a reason to bend the budget.
   **A `cta` is 3 words or fewer and starts with a verb** ("Visit Mill Lane", "Taste both roasts"). No check reads verbs: name the verb in the proposal `notes`. A fact without a verb ("8 November") is not a CTA; put it in the kicker, or leave the CTA empty.
2. Image slots need a file under `brand/assets/photos/` and a focal point in the row. If the brand supplied none, generate a placeholder with `npm run placeholder`, say so in the proposal `notes`, and treat the sample as proving the archetype, not the photograph.
3. Read `archetypes/social-post/select.md` step 0. Every ratio in `poligraf.config.json` is a format with a job: 1:1 the message, 4:5 the message with more room, 9:16 the story (a reminder: one fact plus a call to action). Propose proves each archetype at every ratio, so the sheet shows how each layout adapts; selection still decides which archetype does a format's job. A headline proposal with a `cta` shows the story's job best; without one, say so in the proposal `notes`.
4. Run `npm run propose -- --run p<NN>`. It renders every ratio and every scheme listed in `poligraf.config.json` `useCases.<uc>.schemes` (paper, ink and accent for social-post), not only the default and one alternate, so a logo that vanishes on any scheme fails `logo-visible` here, before approval.
5. Open `out/p<NN>/contact-sheet.html`. Each card carries one label: **must fix** (a check failed), **your call** (every check passed, but a note asks the owner for a brand decision, such as a logo that shows only faintly), **fine**. For every must fix, name the fix location (the seven kinds in `CLAUDE.md`) and apply it. Re-run. Do not present a sheet with failures you could fix. A your call goes to the owner as a question, not a fix.
5b. Read each card's two-second question yourself: "What do you read first? It should be the <first slot>." A post that passes every check but leads with the wrong thing (two headlines, a quote wall) is not ready; rewrite the words.
6. Present the sheet with, per sample, the `derivedDependencies` list: "approving this locks these values."

## Exit criterion

A contact sheet where every sample passes, or where each failure is explained as a content or brand finding the owner must decide on.

## Never do

- Never edit a PNG or an HTML under `out/`.
- Never tweak a template to make one brand's sample pass. A template change is a change to the layout for every brand: write its spec first.
- Never approve a generator on a placeholder image.
- Never scale a 1:1 sample to make the 9:16 one. Each ratio is rendered from the template, which adapts its layout.
