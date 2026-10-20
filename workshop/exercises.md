---
title: Workshop exercises
author: HueGrid Studio
license: CC-BY-NC-ND-4.0
tier: sample
---

# Exercises

Five exercises, in order. Each one ends on an exit criterion; do not start the next until it holds. Steps are written to the participant. Facilitator notes are written to the facilitator.

Each exercise sits under one of the three verbs (`README.md`): exercise 1 is **Bring**, exercise 2 is **Pick**, exercises 3 and 4 are **Make**, and exercise 5 tests what you brought.

## 1. State the brand

**Goal:** a populated `brand/` where every value is marked **you said** or **we guessed**, and you can say which is which.

**Setup:** an empty `brand/` on HueGrid's instance for this participant; the participant's hand-in received before the session (the brand-folder form and its files); `npm run doctor -- --json` run once on the empty layer and its output on screen. The worked example is Kadri Coffee, a fictional brand by Madhuri Maram: its hand-in (the form with answers 1 to 7, the coral k, the dark k, two posts, two font files) and the intake log the agent wrote from it, open side by side. The facilitator shows these; Brand Asset Maker (BAM) keeps the form and the encoded brand (`examples/kadri/`).

**Steps:**

1. Read the doctor's list aloud. It names every file the brand layer is missing. Nothing else will be asked.
2. Answer each question the agent asks, as written. You filled most of them in before the session on the brand-folder form (`brand-folder.md`); the agent asks only what the form left open. The fixed list, verbatim from `skills/poligraf--intake.md`:

   | Item | Question |
   |---|---|
   | logo | "Which file is the logo? SVG preferred. Is there a text wordmark, and how is it spelled and cased?" |
   | primary color | "What is the primary brand color, as a hex code?" |
   | fonts | "Do you have font files, or a free font you already use? If neither, I will suggest three." |
   | audience | "Who is this for, in one sentence?" |
   | tone | "Three words for how the brand sounds." |
   | never say | "One thing the brand must never claim or say." |
   | existing assets | "Link three existing posts or assets you consider on-brand." |
   | photographs | "Which photographs may we use for announcements, and where is the subject in each (the focal point)?" |
   | platforms | "Where will these run first: Instagram, LinkedIn, X?" |

   A question is asked only when the doctor flags its item. If your three sentences already answer one, it is not asked. Answer in your own words; the agent copies them verbatim.
3. Watch the scale run: `npm run scale -- "<your hex>"`. Twelve steps, each with its contrast on white and on black. The agent proposes paper, ink, accent-ink and muted from it, then runs it again with `--on <paper>,<ink>` to measure against the surfaces it chose.
4. Open `brand/locked.json`. For every token, say out loud: you said, or we guessed. Your hex is you said (the file writes `locked`). Paper, ink, muted, the weights, the trackings and the radius are we guessed (`derived`) unless you named them.
5. If you brought no fonts and named none, the agent proposes up to three free fonts, each with one sentence tying it to your answers. Choose one. It stays we guessed.
6. Write your own `intake.log.md` on paper or in a text file: each question asked, your answer verbatim, and what we guessed from it. Then compare it line by line with the log the agent wrote.
7. The facilitator re-runs the doctor until it passes.

**What the harness refuses to decide here:** what your brand is. It will derive a full palette from one hex, draft a voice from three sentences and propose fonts if you have none, but every value it inferred lands as we guessed (`derived`), and none becomes you said (`locked`) until you pick a post that depends on it. It will not invent a value to make the doctor pass, and it will not ask a question the doctor did not raise. The decision it leaves to you is the line between what you said and what was guessed. That line is `brand/locked.json`. Open it first whenever your brand changes hands.

**Facilitator notes:**

- *Timing:* 45 minutes. Steps 1 to 3 take 15; the locked.json walk and the participant's own log take the rest.
- *Common failure:* the participant answers the color question with a description or a range ("navy, or maybe teal"). Say: "The harness needs one hex. If you do not have it, we pick one now from your logo file, and it is marked derived until you approve a sample."
- *Common failure:* the participant wants to add things the doctor did not ask for (a secondary color, a second logo). Say: "Write it down. It is an extension, and extensions are decided after approval, not at intake."
- *Common failure:* "Just pick a font that looks good." Say: "The harness never picks silently. Three options, one sentence each, you choose. Your choice stays derived."
- If the context answers the voice questions, point at the Kadri log: tone ("Direct, warm, concrete.") and the never-claim were copied verbatim from the form, not asked.
- *The reveal (Kadri):* after step 6, open the answer key in the Kadri evidence README: what we guessed beside what Madhuri's brand guide says. We guessed paper `#ffffff`; the guide says cream `#FFF5DF`. We guessed ink `#4b1f15`; the guide says `#302037`. We guessed display weight 700 in Hubot Sans; the guide puts headings in Mona Sans 500. The short answer "Hubot Sans for the logo and headings" moved a whole role to the other face. Every gap was marked we guessed, so every gap is a question for the owner, not a mistake in the file.

**Exit:** the doctor passes; every token in `brand/locked.json` has a status and a source; the participant's own `intake.log.md` matches the agent's on every supplied value.

## 2. Watch the first sheet fail

**Goal:** read a break on the sheet, name its fix location, and say it before anything is touched.

**Setup:** `npm run propose -- --run p01` ready to run on the participant's brand; HueGrid's `p01` report and contact sheet open as the reference case; index cards, one per failing sample.

**Steps:**

1. Watch `npm run propose -- --run p01` render one sample per archetype, ratio and scheme. Open `out/p01/contact-sheet.html`.
2. Count the failures. A first sheet nearly always fails somewhere. HueGrid's own p01 failed 6 of 12: every paper sample failed `contrast`. The amber was 1.81:1 on white and the grey was 3.54:1.
3. For each failing sample, read the line under the post. It says what broke in plain words, with the check's name in small type after it. HueGrid's p01, in the words the contact sheet uses:

   ```
   Orange number text is too light to read on white: 1.8, it needs 3.  contrast
   Grey source text is too light to read on white at this small size: 3.5, it needs 4.5.  contrast
   ```

   Then open the card's details and read the expert line for the same failure, verbatim:

   ```
   div[number].pg-display "15y" 1.81 < 3 (#feb201 on #ffffff, 237.6px)
   div[source].pg-label "Plus Fortune 50 teams" 3.54 < 4.5 (#888888 on #ffffff, 30.24px)
   ```

   Read it left to right: which slot, what text, the measured ratio, the threshold it missed (3:1 at 36px and above, 4.5:1 below), the two colors, the size.
4. Ask the three questions from `drills.md`, in order. Is it the colour, or the words? The colour. Is it this one post, or all of them? Every paper post. The colour, all of them: a rendering break, and it is a token.
5. On the card, write the kind and the file. Do this before the facilitator touches anything.
6. Watch the facilitator apply exactly that change, and nothing else, then re-run as p02. Compare the two sheets.
7. If a failure is a decision only the owner can make, write it as an open note instead of a fix. Kadri Coffee's p01 failed its six accent samples on `logo-visible`, and nothing else:

   ```
   The logo disappears: on the red behind it, only 0% of the mark stands out, it needs 40%.  logo-visible
   ```

   The coral k vanished on the coral surface. The owner handed in a dark k. The options are the dark k on the coral surface (the alternate logo: a reversed logo chosen per scheme in `tokens.css`), or no accent scheme, and the owner chooses. Kadri's coral-text break did not show on that sheet: the coral is 3.00:1 on white, which passes for large words. It showed when a probe painted the coral at label size, in the headline's call to action:

   ```
   Red cta text is too light to read on white at this small size: 3, it needs 4.5.  contrast
   ```

   That one is the colour, all of them: a token, fixed with a darker coral for text on paper (`#cb492d`, 4.64:1).

HueGrid's fixes, for comparison: a text-only accent for the paper scheme, `--brand-accent-text-on-paper: #8c6201` (5.44:1 on white), applied through the `--pg-accent-text` scheme override; and `--brand-muted: #767676` (4.54:1). Both in `brand/tokens.css`, both `derived` until approval. The amber surfaces kept `#feb201`. p02 passed 12 of 12.

**What the harness refuses to decide here:** the fix. It measured 1.81:1 and knows the threshold. It does not decide whether HueGrid darkens its amber everywhere (no: the amber on the mark is the identity), adds a darker amber for text on white only (what HueGrid did), or stops setting amber text on paper at all. Each answer is a brand decision, and each lives in a different place. The harness also refuses the shortcut: it never edits the output, never tweaks a template to make one brand pass, and never hides the failure. You name the file first, because naming it is the decision.

**Facilitator notes:**

- *Timing:* 30 minutes. Ten on reading detail lines, ten on cards, ten on the re-run and comparison.
- *Common failure:* "Just make that one darker." Say: "That one is the output. Is it wrong everywhere this value appears? Then it is one line in `tokens.css`, and every future post has the fix."
- *Common failure:* "The template is wrong." Say: "The template reads only brand tokens. Find the token it read."
- *Common failure:* the participant reads a low-contrast logo note as a failure. Logos are exempt from text contrast; the check fails only when a mark vanishes. A visible mark under 3:1 is a brand call, noted, not failed.
- If the participant's sheet passes on the first run, use HueGrid p01 and Kadri p01 for steps 3 to 5 and say so. A clean first sheet is rare and is not a lesson.

**Exit:** every failing check has a kind and a file written down before any edit; the re-run passes, or each remaining failure is an open owner decision written as a feedback note.

## 3. Triage ten notes

**Goal:** name each of ten breaks with the three questions and put it in exactly one of the seven kinds, with its file.

**Setup:** `drills.md` printed for each participant; the key held by the facilitator until scoring (it is not in BAM); the three questions on the wall, with the seven-kind table from the spec beside them; a 15-minute timer.

**Steps:**

1. Read the two brand cards at the top of `drills.md`.
2. For each drill, ask the three questions in order:
   1. Is it the colour, or the words? (And alongside it: did something that must never move, move?)
   2. Is it this one post, or all of them?
   3. Do you want something new?

   Then find your answers in the table "Where the answers land" in `drills.md`: it gives the break kind (trigger, drift, rendering, voice), the kind and the file.
3. Write your answers, the break kind, the kind, the file, and whether the fix is `upstream: true`. One kind per note. Fifteen minutes, no discussion.
4. The facilitator reads the key. Score one point for each drill where both the kind and the file are right.
5. For each miss, argue it: say how you answered the three questions, and why. Then hear the ladder of seven kinds from the key, in order, and why an earlier rung holds, or why yours does not.
6. If a note still seems to need two kinds, split it into two notes and triage each. If both halves come out clean, the original was two notes.

**What the harness refuses to decide here:** what a note means. An owner's words never name a file, and nine of these ten notes come from samples where every check passed. The checks measure contrast, size, overflow and budget; they cannot tell that a number has a letter in it, that a line has been retired, or that a range reads like a result. The harness accepts a fix only with one kind attached, and never with two. Choosing the kind is the decision, and the kind is the lesson: it says where the brand was wrong, and whether the mistake was yours, the row's or the library's.

**Facilitator notes:**

- *Timing:* 40 minutes. Fifteen solo, five to score, twenty to argue.
- *Common failure:* triaging by the owner's vocabulary. An owner who says "font" is not always describing a token; an owner who says "design a card" is not always asking for a designer. Say: "Ignore the noun. Ask the questions in order."
- *Common failure:* choosing `input` for every copy problem. Say: "Would a rule in `voice.md` have stopped it? Then it is voice, and the row follows from the rule. Is it a fact that changed in one row? Then it is input."
- *Common failure:* fixing instead of triaging ("I would just cut the quote"). Say: "That is a diff. Which file is it in?"
- Drills 2, 4 and 6 are built to be mis-triaged. Expect them to carry most of the argument.

**Exit:** a score; every miss argued; the participant can recite the seven kinds and the file each one fixes without the table.

## 4. Write the designer brief

**Goal:** recognise a request no archetype fits, write the brief, and stop.

**Setup:** two request cards; `archetypes/social-post/select.md` printed; the template in `designer-brief.md` copied into a blank feedback file (its header already says `kind: designer`).

> "A carousel comparing our three plans."

> "The headline in our handwriting font over a photograph, no scrim."

**Steps:**

1. Pick one request, or a real one from your own brand that you suspect does not fit. Ask the third question first: do you want something new?
2. Walk `select.md` questions 1 to 5 aloud. For each, say yes or no and why.
3. Check the near miss: could the request become one or more posts in existing archetypes without losing its point? If it can, it is a `selection` answer, not a brief. Say which question chose the archetype and stop there.
4. If it cannot, write the brief in six parts. `designer-brief.md` is the fill-in template, with the Kadri gradient brief filled in as an example:
   - **What was asked, and what the content is:** the request, verbatim, and what the post must say, with its facts as exact strings.
   - **Why no layout fits:** the `select.md` question that failed, and which slot, budget, check or principle the request breaks.
   - **Existing layouts, and why each is not enough:** headline, stat and quote, one line each. Say what each would keep and what it would lose.
   - **Tokens used:** the brand tokens the new layout would read. Name any value it needs that `tokens.css` does not have. A missing value is a question for the owner, not a value you invent.
   - **What a designer would need to decide:** the slots and their budgets (words and characters per slot), the hierarchy, the bounded variation, the checks, the fallbacks. These are the parts of an archetype's `inputs.schema.json` and `spec.md`.
   - **Open questions:** what the owner or the designer must answer before anyone draws.
5. Stop. No sketch, no mockup, no rough version.

For the two cards, and one from Kadri:

- *The carousel* is a comparison (`select.md` question 5). Every archetype is one frame with one dominant element; three plans side by side are three equals, which is no hierarchy. A carousel is several frames, and nothing in the library sequences frames.
- *The handwriting headline* asks for two things the library does not have. A third face: the font contract has a display face and a body face, and a new one is an extension rule (`rules/extension.md`, "A new [thing] is allowed only if …"). And type on a photograph without a scrim: the `announcement` archetype, shown in the room, carries a scrim because its `image-contrast` check measures the pixels under each line of text. Removing the scrim is a new style, not a variation.
- *Kadri: "Put Velvet Hour's gradient behind the post."* It sounds like a colour, so it sounds like a token. It is not. `tokens.css` holds flat colours only, and the `token-colors` check fails any colour outside them. A gradient ground is a new style: a designer brief. Its "Tokens used" part names what is missing: the gradient colours, none of which were handed in. Its "Open questions" part asks the owner where gradients may appear, and whether text may sit on them. The whole brief is filled in at the end of `designer-brief.md`.

**What the harness refuses to decide here:** a new layout. When no archetype fits, the agent writes a brief and stops; it does not improvise a template, bend a budget or slip a second text block into an existing one. Neither do you. The decision taught is recognising the edge of the library and writing down what someone with the authority to design would have to decide. A brief that names those decisions is worth more than a mockup that makes them silently.

**Facilitator notes:**

- *Timing:* 20 minutes. Five on `select.md`, ten on the brief, five reading one brief aloud.
- *Common failure:* the brief describes the look (colors, positions, "a bit like Apple's pricing page"). Say: "That is a sketch in words. What would a designer have to decide? Slots, budgets, hierarchy, checks."
- *Common failure:* splitting the carousel into three stat posts to avoid the brief. Say: "If the comparison survives as three separate posts, you have found a selection answer, and that is better than a brief. If the comparison is the point, it does not survive."
- *Common failure:* "Can you just try it?" Say: "The harness refuses, and so do we. A tried layout becomes the layout."

**Exit:** a feedback file with `kind: designer` and the six parts, or a `selection` answer naming the `select.md` question that chose it; nothing rendered.

## 5. Cold handoff

**Goal:** prove your brand layer works in the hands of someone who has never met your brand, using only BAM and that folder.

**Setup:** each participant's `brand/` folder exported after exercises 1 and 2, with `BRAND.md` written by the agent (the encode skill); Kadri Coffee's encoded `brand/` folder (in BAM at `examples/kadri/brand/`: `BRAND.md`, `tokens.css`, `locked.json`, `fonts.css` and its fonts, both logos); the BAM zip (`brand-asset-maker.zip`); a laptop with any AI assistant. By default, each participant swaps with Kadri: the participant runs Kadri, the facilitator runs the participant's folder. A swap between two participants happens only when both owners agree; a company brand may need its own policy's approval first.

**Steps:**

1. Swap brand folders: with Kadri by default, or with another participant when both owners agree.
2. Open a fresh chat in any AI assistant. Attach only that `brand/` folder and BAM.
3. Paste the prompt from `cold-handoff.md`, unchanged.
4. Check the answer against the pass list in `cold-handoff.md`, line by line, with that brand's `tokens.css` and `locked.json` open beside it.
5. If it fails, find the line in `BRAND.md` that caused the failure. Write it down for the owner. Do not improve the prompt.
6. Hand the folder and your findings back. The owner's fix is in `BRAND.md`, regenerated from `tokens.css`, `locked.json`, `fonts.md` and `voice.md`.

**What the harness refuses to decide here:** which file is true when two disagree. `tokens.css` and `locked.json` win; `BRAND.md` is regenerated from them and never hand-corrected around them. The harness also refuses to let a prompt carry the brand. If the handoff only works because the question explained what the file left out, the next person who opens the file without that question gets it wrong. The decision taught is whether your brand layer stands on its own, and where to fix it when it does not.

**Facilitator notes:**

- *Timing:* 30 minutes. Ten to run, ten to check, ten to hand back and discuss.
- *Common failure:* the participant edits the prompt ("note that muted is locked"). Say: "That fixes this chat. Which line of `BRAND.md` would have made the note unnecessary?"
- *Common failure:* the assistant reports a status as `derived` that `locked.json` has as `locked`. That is `BRAND.md` not regenerated after an approval. It happened to HueGrid's own brand folder; `cold-handoff.md` gives the date and values.
- *Common failure:* the assistant offers to render or draw the post. There is no renderer in this exercise. Ignore the offer and check the text.

**Exit:** a pass, or a written list of the `BRAND.md` lines that caused the failure, handed to the owner.
