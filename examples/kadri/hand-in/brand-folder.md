---
title: Brand folder
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
credit: "Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission."
---

Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission.

# Brand folder

The form for **Bring**, the first verb, as the Kadri owner filled it in. An agent read it and wrote Kadri's `brand/` folder with the intake and encode skills. These are the nine intake questions, word for word, with the owner's answers copied exactly.

Questions 1, 2 and 4 are required. A blank answer is not a problem: the agent guesses, and every guess is marked **we guessed** until you pick a post that uses it.

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
If blank: the agent suggests three free fonts, you pick one, and it is marked "we guessed". \
Answer: Hubot Sans for the logo and headings, Mona Sans for everything else. Files attached.

**4. Who it is for** (required) \
"Who is this for, in one sentence?" \
Answer: People who drink coffee every day and want good coffee without the ceremony.

**5. How it sounds** \
"Three words for how the brand sounds." \
If blank: the agent guesses three words from your other answers and marks them "we guessed". \
Answer: Direct, warm, concrete.

**6. Never say** \
"One thing the brand must never claim or say." \
If blank: the agent guesses from your other answers and marks it "we guessed". \
Answer: Never imply certifications, health benefits or a sourcing story we cannot prove.

**7. Posts you consider on-brand** \
"Link three existing posts or assets you consider on-brand." \
If blank: the agent starts from the library as it is. \
Answer: Two posts in posts/.

**8. Photographs** \
"Which photographs may we use for announcements, and where is the subject in each (the focal point)?" \
Attach the photographs; for each, say where the subject is. \
If blank: BAM has no photograph layout yet, so a post over a photo becomes a gap note. \
Answer:

**9. Where they run first** \
"Where will these run first: Instagram, LinkedIn, X?" \
If blank: the agent makes square (1:1) and portrait (4:5) posts. \
Answer:

Nothing else. A deck, a brand book or a website link can be attached as reference, but the agent reads only the form and the files it asks for. Anything it takes from elsewhere is marked we guessed.

The `brand/` folder the agent wrote from this form is in `examples/kadri/brand/`. Every value marked **we guessed** (`status: derived` in `locked.json`) is a question the brand has not answered yet.
