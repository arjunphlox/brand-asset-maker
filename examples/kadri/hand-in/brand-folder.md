---
title: Brand folder
author: HueGrid Studio
license: CC-BY-NC-ND-4.0
tier: sample
credit: "Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission."
---

Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission.

# Brand folder

What a participant hands in before the session, and the shape it comes back in. This is the first half of **Bring**: you answer, we write the brand folder. The facilitator runs intake on it during exercise 1; the folder that comes back is the participant's to keep.

## What to hand in

A filled-in form and the files it asks for, in one folder (or zip) named after the brand. Fill it in before the session. These are the nine intake questions, word for word; the facilitator's doctor prints the same form. Answer in your own words; we copy your answers exactly.

Questions 1, 2 and 4 are required. A blank answer is not a problem: we guess, and every guess is marked **we guessed** until you pick a post that uses it.

**1. Logo and wordmark** (required) \
"Which file is the logo? SVG preferred. Is there a text wordmark, and how is it spelled and cased?" \
Attach the logo file (SVG preferred, PNG works). If a reversed version exists, attach it too. \
Answer: The k symbol: `logo.svg` (coral). The reversed one is `logo-reversed.svg` (dark). The wordmark is "kadri", all lowercase.

**2. Primary colour** (required) \
"What is the primary brand color, as a hex code?" \
Answer: #FF603E

**3. Fonts** \
"Do you have font files, or a free font you already use? If neither, I will suggest three." \
Attach only font files you are licensed to use, with the licence name. \
If blank: we suggest three free fonts, you pick one, and it is marked "we guessed". \
Answer: Hubot Sans for the logo and headings, Mona Sans for everything else. Files attached.

**4. Who it is for** (required) \
"Who is this for, in one sentence?" \
Answer: People who drink coffee every day and want good coffee without the ceremony.

**5. How it sounds** \
"Three words for how the brand sounds." \
If blank: we guess three words from your other answers and mark them "we guessed". \
Answer: Direct, warm, concrete.

**6. Never say** \
"One thing the brand must never claim or say." \
If blank: we guess from your other answers and mark it "we guessed". \
Answer: Never imply certifications, health benefits or a sourcing story we cannot prove.

**7. Posts you consider on-brand** \
"Link three existing posts or assets you consider on-brand." \
If blank: we start from the library as it is. \
Answer: Two posts in posts/.

**8. Photographs** \
"Which photographs may we use for announcements, and where is the subject in each (the focal point)?" \
Attach the photographs; for each, say where the subject is. \
If blank: a placeholder photograph stands in, marked "we guessed", and is never approved. \
Answer:

**9. Where they run first** \
"Where will these run first: Instagram, LinkedIn, X?" \
If blank: we make square (1:1) and portrait (4:5) posts. \
Answer:

Nothing else. A deck, a brand book or a website link can be attached as reference, but the harness reads only the form and the files it asks for; everything else the facilitator infers lands as we guessed.

## What comes back

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
  intake.log.md     every question asked, your answer, what we guessed from it
  assets/           your logo (and photos/ if supplied)
  proposals/        the inputs used for your first sheet
out/
  p01/              your first contact sheet, PNGs and report.json
  p02/              the sheet after the fixes you named
feedback/           the breaks you named and the designer brief you wrote
rules/decisions.md  one dated line per decision you made
```

Every value marked **we guessed** (`status: derived` in `locked.json`) is a question the brand has not answered yet. That list is the first thing to take back to whoever owns the brand.
