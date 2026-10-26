---
title: Brand folder
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Brand folder

The form for **Bring**, the first verb. You fill it in and put the files it asks for in one folder. Then your own agent reads it and writes your `brand/` folder, using the intake and encode skills (`skills/poligraf--intake.md`, `skills/poligraf--encode.md`). Nothing is sent to anyone. The folder is yours.

## What to fill in

Fill in this form and put the files it asks for in one folder named after the brand, at the root of your BAM fork:

```
<your-brand>/
  brand-folder.md     this form, filled in
  logo.svg            your logo (question 1)
  logo-reversed.svg   the reversed logo, if one exists (question 1)
  posts/              posts you consider on-brand (question 7)
  layouts/            your own layouts and guides, if you have them (question 7)
  fonts/              font files you are licensed to use, with their licences (question 3)
  photos/             photographs, if you have them (question 8)
```

Only `brand-folder.md` and `logo.svg` must be there. Leave out any folder you have nothing for. Then ask your agent: "Read `<your-brand>/brand-folder.md` and follow `skills/poligraf--intake.md`, then `skills/poligraf--encode.md`."

These are the ten intake questions, word for word. Answer in your own words; your agent copies your answers exactly.

Questions 1, 2 and 4 are required. A blank answer is not a problem: the agent guesses, and every guess is marked **we guessed** until you pick a post that uses it.

**1. Logo and wordmark** (required) \
"Which file is the logo? SVG preferred. Is there a text wordmark, and how is it spelled and cased?" \
Attach the logo file (SVG preferred, PNG works). If a reversed version exists, attach it too. \
Answer:

**2. Primary colour** (required) \
"What is the primary brand color, as a hex code?" \
If you do not know the hex, say "take it from my logo": the assistant reads it from the file and writes it like this: `#xxxxxx (read from logo.svg)`. A colour read from a file lands as "we guessed" until you pick a post that uses it. \
Answer:

**3. Fonts** \
"Do you have font files, or a free font you already use? If neither, I will suggest three." \
Attach only font files you are licensed to use, with the licence name. \
If blank: the agent suggests three free fonts, you pick one, and it is marked "we guessed". \
Answer:

**4. Who it is for** (required) \
"Who is this for, in one sentence?" \
Answer:

**5. How it sounds** \
"Three words for how the brand sounds." \
If blank: the agent guesses three words from your other answers and marks them "we guessed". \
Answer:

**6. Never say** \
"One thing the brand must never claim or say." \
If blank: the agent guesses from your other answers and marks it "we guessed". \
Answer:

**7. Your posts, layouts and guides** \
"Link three existing posts or assets you consider on-brand, and any layouts or guides you already use (Figma frames, templates, a brand guide)." \
Put posts in posts/ and layouts in layouts/: a Figma link (if your agent can open Figma), exported frames, templates or the pages of a brand guide. \
The agent reads them and never copies them into a post. If you bring layouts, the agent turns them into BAM layouts first and uses BAM's sample layouts only for the jobs yours do not cover (`skills/poligraf--encode.md`, "Your layouts first"). \
If blank: the agent starts from the BAM sample layouts. \
Answer:

**8. Photographs** \
"Which photographs may we use for announcements, and where is the subject in each (the focal point)?" \
Attach the photographs; for each, say where the subject is. \
If blank: BAM has no photograph layout yet, so a post over a photo becomes a gap note. \
Answer:

**9. Where they run first** \
"Where will these run first: Instagram, LinkedIn, X?" \
If blank: the agent makes square (1:1) and portrait (4:5) feed posts and a story (9:16). Each format has its own job: a story is a reminder, one fact plus a call to action. \
Answer:

**10. Its character** \
"Words for the brand's character, how it should look and feel, most important first (fewer than seven), and how strongly each (a little, clearly, very). For example: very simple, clearly warm, a little playful." \
This is how the brand looks, not how it sounds (question 5). The agent measures every post against these words and tells you where a post says something else. It never fails a post for it: that is your call. \
If blank: posts are checked only for being readable and on-brand. Nothing reads what they say about your character until you give the words. \
Answer:

Nothing else. A deck, a brand book or a website link can be attached as reference, but the agent reads only the form and the files it asks for. Anything it takes from elsewhere is marked we guessed.

## What your agent writes

```
brand/
  BRAND.md          one page, values copied from the files below, never paraphrased;
                    every value marked you said or we guessed
  tokens.css        --brand-* tokens
  locked.json       every token, asset and font marked you said (locked) or
                    we guessed (derived), and where it came from
  fonts.md          which font policy path applies and why
  fonts.css         @font-face rules
  voice.md          tone words, approved lines, never-claims
  expression.json   your character words (question 10) and, per layout, the look
                    that says them best (only if you answered question 10)
  brand.json        the name, the wordmark and the logo file
  intake.log.md     every question asked, your answer, what was guessed from it
  assets/           your logo (and photos/ if supplied)
  coverage.md       which jobs your own layouts cover, which they partly cover,
                    and which need a BAM sample or a gap note (only if you
                    brought layouts)
  proposals/        the inputs for your first set of posts
archetypes/
  <use-case>/<name>/  each of your own layouts, encoded (only if you brought them)
out/
  <run>/            each post as HTML and PNG, with what was measured
feedback/           the breaks you named and the gap notes you wrote
rules/decisions.md  one dated line per decision you made
```

Every value marked **we guessed** (`status: derived` in `locked.json`) is a question the brand has not answered yet. That list is the first thing to take back to whoever owns the brand.
