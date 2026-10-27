---
skill: poligraf/expression
version: 1
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tags: [expression, encode, propose, feedback]
---

# Expression

**Verbs: Bring, Pick, Make.** Expression is what a post says about the brand's character: its qualitative, symbolic and subjective meaning. A geometric typeface, few colours, little information and a lot of space say *simple, sophisticated, machine-like*. A calligraphic typeface in bold red says *bold, raw, creative*. This skill tells you, the assistant, how to read that from the owner's inputs and posts, and how to show the owner where a post says something else.

Read `docs/design/system/visual/expression.md` first. It holds the map (the scales, the rows, the combinations and their evidence) and the numbers this skill uses.

## The rule that comes first

There are three kinds of rules, and they are applied in this order:

1. **Utility, "works for anyone":** can people see and read it? (`contrast`, `min-text`, `safe-zone`, `overflow`, `element-count`, `budget`, `logo-visible`, and the photograph checks.) A failure is a **must fix**.
2. **Brand, "looks like you":** is it this brand's colours, fonts, logo and facts? (`token-colors`, `font-loaded`, `role-face`, `logo-integrity`, `facts-consistent`.) A failure is a **must fix**.
3. **Expression, "says who you are":** does it say what the owner wants to say about the brand's character? A mismatch is always **your call**. It is never a must fix.

A fix for utility wins even when it moves the post away from the owner's words. A brand value stays even when the post would read closer to a word without it; changing it is the owner's decision (feedback kind `token`). Expression chooses only among posts that pass every utility and brand check. Never loosen a check, and never edit a post, to make it read as a word.

## Without the engine

You need the files and, for measuring, a browser. Without a browser, skip step 2 and ask the owner the scales in step 5; say that nothing was measured.

- `npm run expression` → steps 2 to 4 below, by hand.
- `npm run expression -- --section` → write the Expression section of `BRAND.md` yourself (step 6).
- The `expression` check in a report → your own line per post: what you measured and what it says, or "not measured".

## Procedure

1. **The words** (Bring). Intake question 10 gives the character words (fewer than seven is safe) for the brand's character, most important first. They go in `brand/expression.json` exactly as the owner wrote them:
   ```json
   { "contractVersion": "1.6", "words": [ { "word": "simple", "status": "locked", "source": "intake question 10" } ], "faces": {}, "prefer": {} }
   ```
   `locked` means the owner said it (you said). A word you drafted from other answers is `derived` (we guessed) until the owner confirms it. Look each word up in the map: it must be a scale's word, one of its synonyms, or a combination's word. If it is on none, do not guess. Ask: "Is *crafted* closer to *raw* or to *precise* for you?" If the owner names the kind of display typeface (a script, a calligraphic face, a brush face), write it under `faces.display.class`; those classes cannot be measured.

2. **Measure** (Bring and Pick). Open a post's HTML in a browser (Playwright, or Chrome's console), wait for the fonts, then run the whole of `archetypes/_shared/expression-measure.js` and call it:
   ```js
   await document.fonts.ready;
   pgMeasureExpression({ displayFamily: 'Your Display Font', bodyFamily: 'Your Body Font' })
   ```
   The two families are the first names in `--brand-font-display` and `--brand-font-body`. It returns the raw facts: ink share, filled slots, every painted colour with its area, font sizes, weights, capitals, tracking, corner radius and the faces' glyph traits. With Playwright: `await page.addScriptTag({ path: 'archetypes/_shared/expression-measure.js' })`, then `page.evaluate(...)`.
   For the brand file on its own (before any post exists), call `pgGlyphTraits('<display family>', <weight>)` on a page that loads `brand/fonts.css`, and read the colours, weight, tracking and radius from `tokens.css`. For the owner's past posts (question 7), call `pgImageColours('<data: URL of the image>')`: its largest share is the white-space proxy.

3. **Read** the measurements through the map. Turn the raw facts into the map's parameters (the Parameters table in `expression.md`: `whiteSpace = 1 − ink`, `colours` counts colours over 0.2% of the frame, and so on). For each scale, each row gives a position: with `at: [a, b]`, the value `a` is −1 and `b` is +1, in a straight line, clamped to −1..+1; a categorical row gives the value's own number. The scale's position is the mean of its rows. Then check each combination's `when`; a combination fires when every condition holds.
   Example, a stat post on a strong yellow accent ground: strong colour on 100% of the frame (row `accentShare` at [0.05, 0.5] → +1), colour strength 0.17 (row `chroma` at [0.04, 0.2] → +0.63), weight 400 (row `weight` at [350, 750] → −0.75), biggest text 7.9× the smallest (row `scaleRatio` at [2, 6] → +1). Quiet ↔ bold = (1 + 0.63 − 0.75 + 1) / 4 = +0.47: it reads **bold**.

4. **Compare** each word with its scale. Agreement = the word's side (−1 for the left word, +1 for the right) × the scale's position. 0.2 or more: it **says** the word. Below −0.2: it **reads the other way**, a mismatch. In between: it **does not say it yet**. A word that only a combination carries says it when that combination fires. In the example, the owner's word *unhurried* is on the quiet side (−1): agreement −0.47, a mismatch.
   **How strongly.** A post that says a word says it **a little** (agreement 0.2 to 0.4), **clearly** (0.4 to 0.7) or **very** (0.7 and above; the map's `degrees`). Always say the degree with the word ("very bold, a little playful"): two variants can both be bold and still differ in how bold. A word may carry a target `degree` (`{ "word": "bold", "degree": "a little" }` in `brand/expression.json`, in `appear`, or `"bold:a little"` on a generator). With a target, a post at another degree is a your-call note ("bold was asked for a little; this post is very bold (too much)"), and the pick prefers the post nearest that degree, not the strongest.

5. **Show every mismatch, and ask** (Pick). Never fix one silently. For each post, write one line in the owner's words, with the two or three measurements that weigh most:
   > You said unhurried; this post reads bold (strong colour on 100%, biggest text 7.9× the smallest). It says precise and warm. A brand call, not a failure.
   Label the post **your call**. Then ask the owner one scale per word, before they read your line, as a five-point semantic differential (Osgood et al. 1957):
   > How does it read to you? quiet ○ ○ ○ ○ ○ bold
   Write the answer next to your measurement (`round(3 + 2 × position)` on the same five points).

6a. **How each layout must come across** (Pick and Make). Every variation changes how a post comes across: the same stat reads bold, playful and warm on a strong accent ground and simple, plain and serious on white. Each layout says what its job needs in its `inputs.schema.json` `appear.words` (a stat: confident, credible) and its spec's **How it comes across** section. The brand may replace them for one layout (`brand/expression.json` `appear`), and one post may ask for something else (`"appear": [...]` on the generator, a row or a frame); the post's ask wins, then the brand's, then the layout's.
   - **See what each variation does.** Render each other value of every variation key, one key at a time (`npm run propose -- --variants`), measure each post (step 2), and compare it with its twin, the same post with that key at its default: the scale shifts of 0.15 or more are the words that value moves the post toward. Tell the owner in one line per key: "scheme (against paper): accent → warm, playful, bold, busy; align (against start): center → traditional". A value that moves nothing measurable is "little change": say so, and let the owner's eye decide.
   - **Pick the variant.** Only among posts that pass every utility and brand check, score each post: each layout word's agreement × 3, the brand's first word × 2, the others × 1 (a combination that says a word counts in full). Rank first by how many layout words a post says (minus those it reads the other way), then the same for the brand's words, then by that score. Several variants can give the same feeling: posts whose every word gets the same verdict (says it, not yet, reads the other way) are equally good. Name them all ("on white or navy, with a bar or no mark: all four come across understated and credible"), keep the best in `prefer.variation` and the others in `prefer.also`, and let a series rotate among them. Say which posts and why, in the owner's words.
   - **How strongly, and ask when it is open.** Show how strongly each variant says each word ("accent: very bold (0.82); paper: a little bold (0.31)"). When a word has no target degree and the variants differ, the harness would be choosing the strength for the owner, so ask instead: "The stat's variants range from a little to very confident. How confident should it be: a little, clearly or very?" Ask every brand word without a degree once (`npm run doctor` lists them). Record the answer as `degree`; never guess one. `npm run expression -- --run out/<run>` prints these questions; `--appear "confident:clearly"` ranks for a degree. Variants come across the same only when every word gets the same verdict **and** the same degree.
   - **Report.** For a post that reads the other way from a layout word, write: "This layout should come across confident; this post reads quiet (…). A brand call, not a failure." Ask the layout's scales first on the sheet. The five points are the degree as the owner sees it: 1 or 5 is very, 2 or 4 a little to clearly, 3 neither.

6. **The Expression section of `BRAND.md`** (Bring, after Encode's five sections). Copy, never paraphrase, from `brand/expression.json`:
   - each word, with **you said** or **we guessed**, and how strongly (or "not set: ask");
   - what the brand file says on its scale, what the past posts say, and what the last sheet says;
   - every mismatch, in the plain line of step 5;
   - the display face's class and whether the owner said it or it was measured;
   - for each layout, how it should come across and the **preferred look**: the variation of the passing post on the sheet that comes closest (step 6a). Write it in `prefer` as `derived`. A key that changes what is on the post (the carousel's `beat`) is never a preference. When the owner picks a post with that look, the preference becomes `locked`.
   Layouts choose inside those preferences. Templates stay token-only: a preference is a variation the layout already allows, never a new value.

7. **Learn from the answer** (Make). An answer that disagrees with the measurement, or a mismatch the owner cares about, is feedback of kind `expression` (`skills/poligraf--feedback.md`). Try in order: the layout's preferred variation; the words themselves ("is this still what you want to say?"); a brand value, with the owner (that is kind `token`); the map row, marked research or practice, as a change to the shared library. Never edit the post.

## Exit criterion

Every word is on the map and marked you said or we guessed. Every post on the sheet has an expression line (measured, or "not measured"). Every mismatch was shown to the owner. `BRAND.md` has its Expression section.

## Never do

- Never make up a brand's character. Ask for the words; mark drafted ones we guessed.
- Never fail a post for expression, and never let a preference override a utility or brand check.
- Never edit a post, shrink or recolour anything, or add an element to make a post read as a word.
- Never add a map row without marking it research (with a source from `docs/design/system/visual/sources.md`) or practice.
- Never show the owner your measurement before they answer the scale.
