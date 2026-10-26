---
skill: poligraf/suggest
version: 1
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tags: [pick, select, layout, rationale]
---

# Suggest a layout

**Verb: Pick.** Use this skill when someone tells you what they want to make, for example "a post about our pop-up on Saturday" or "a slide with last quarter's numbers". You suggest the form, the format and the layout, explain why in plain words, and name a runner-up. Then you make the layout with `skills/poligraf--make-it.md`.

Two things decide the suggestion, in this order:

1. **The rules decide what is allowed.** Each use-case's `select.md` is a decision tree from content to layout, with budgets and fallbacks. You never suggest a layout it rules out.
2. **Your judgement ranks and explains.** Where the rules leave a choice (two layouts fit, a rewrite would make another fit, or the request is unclear about what the news is), you choose with the layouts' reasons: the **Why it works** section in each `archetypes/<use-case>/<name>/spec.md`, and the one-page summary in `docs/design/system/visual/why-it-works.md`. Those reasons come from research on attention, reading, memory and persuasion, listed in `docs/design/system/visual/sources.md`.

## Without the engine

This whole skill works without the engine. It needs only the files above: read each candidate layout's **Why it works** section in its `spec.md`, and the "Cited for" line of each source it names in `sources.md`.

With the engine (Poligraf), `npm run why -- <use-case>/<layout> [<use-case>/<layout> …]` prints the reasons of the candidates side by side, each with the claim its source is cited for (`--use-case <name>` for every layout of a form, `--json` for a machine-readable list). Quote from that output. After the owner agrees, `npm run render` refuses a row that breaks a budget and names the fallback, which confirms step 5.

## 1. Read the request

Write down, in one line each:

- **The news:** the one thing the viewer must take away. Name its kind: a number, a date and a place, an offer, someone's words, a short list, a job, a partner, two things compared, a sequence of steps, or one line.
- **Where it goes:** feed, story, carousel, slide deck, web ad, link preview or profile cover, email, print (flyer, poster, menu, card, sticker), or a mock-up of a finished asset.
- **What the viewer should do:** come to something, buy, reply, apply, remember a fact, or nothing.
- **What you were given:** facts (or a message file, `messages/<name>.json`), a partner's mark, a photograph, a real old price.

If "where it goes" is missing, ask one multiple-choice question before anything else, for example: "Where will this go? (a) Instagram feed (b) Instagram story (c) a printed flyer (d) something else". Do not guess the destination: it picks the form.

## 2. Pick the form and the format

| Where it goes | Use-case | Read |
|---|---|---|
| Feed, story, carousel | `social-post` | `archetypes/social-post/select.md` |
| A talk or a deck | `slides` | `archetypes/slides/select.md` |
| A web ad, a site hero, a link preview, a profile cover | `banner` | `archetypes/banner/select.md` |
| A newsletter header | `email` | `archetypes/email/select.md` |
| Anything printed | `print` | `archetypes/print/select.md` |
| A finished asset shown in a real scene | `mockup` | `archetypes/mockup/select.md` |

Read step 0 of that `select.md` first, where it has one: the format names the job (a story is a reminder: one fact plus a call to action) and the layouts it allows.

## 3. Run the rules

**The owner's layouts first.** If `brand/coverage.md` exists, the owner brought layouts of their own: check those first (Encode put a branch for each at the top of `select.md`). When one of them does the job, it is the suggestion; a sample is the runner-up only if the owner added it. A **partly ready** layout can be suggested: list its guesses under "I need".

Ask the `select.md` questions in order, within the layouts the format allows. The first "yes" is the rule's choice. Note two more things as you go:

- **Near misses:** layouts that would fit after a small rewrite (a 6-character number is a headline; at 5 characters it is a stat).
- **Fallbacks:** the layout the tree sends the content to when a budget or slot does not fit.

If no layout fits (neither the owner's nor a sample the owner added), stop and write a gap note (`workshop/gap-note.md`). If a sample the owner has not added would fit, offer it first: "No layout of yours does this; BAM's <layout> does. Add it?" Do not stretch a layout to fit.

## 4. Rank with the reasons

Only when step 3 leaves more than one sound option, open the **Why it works** section of each one and ask:

- **What should the viewer see first?** Each layout makes one element the largest. Pick the layout whose largest element is the news (a number in a stat, the role in a hiring post, the deal in an offer).
- **What should they do, and is there one clear way to do it?** Prefer the layout that gives the action one place.
- **How long will they look?** A feed post, an ad or a poster in passing gets a glance; a slide or a menu gets a read. Prefer fewer words for a glance.
- **Is trust part of the job?** Someone's words need a name (quote). Use this only where the layout's own reasons say so.

Pick the layout whose reasons fit the viewer's job best. Keep the next best as the runner-up, and say when it would be the better choice. When the choice between them is your judgement and no rule settles it (a counter sign could be a flyer or a table tent), say that it is your judgement.

## 5. Check the budgets now

Draft the inputs for each slot and count words and characters against `inputs.schema.json`. Over budget means you rewrite the words or move to the fallback. Never plan to shrink the type. If the request names a message file, copy its facts exactly.

- **Mark what you wrote.** Any slot text the owner did not give (a call to action, a label) is your draft: mark it "(draft)" and list it under "I need" for their yes. Only the owner's words, their approved lines in `voice.md` and message facts are not drafts.
- **Numbers need the owner.** A figure from the chat is an input, not a fact you can check. If `voice.md` or `BRAND.md` asks for sourced figures, ask where it comes from before you make it.
- **A reason needs its slot filled.** If a reason depends on a slot (an end date prompts action only when there is a date), ask for that input or leave the reason out.

## 6. Answer in this shape

Keep it short. Use the participant's words (layout, format, post).

```
Suggested: <form> · <format and its job> · <layout>
Why:
- <reason 1 in plain words> (<source short name, from the spec>)
- <reason 2> (<source>)
Runner-up: <layout>, better if <condition>.
Draft: <slot>: "<text>" (<count> of <budget>) … one line per slot
I need: <missing fact or file>, or "nothing, ready to make".
Next: make it with skills/poligraf--make-it.md.
```

Example, for "a post for the Kadri pop-up at Mill Lane Market on 8 November, for Instagram":

```
Suggested: social post · feed post 1:1 (the message) · event
Why:
- Name, date and place sit together as one block, so they read as one fact (Wertheimer 1923).
- People who know when and where they will act are more likely to act (Gollwitzer 1999).
Runner-up: headline at 9:16 with a call to action, for a story the week of the pop-up.
Draft: name: "Kadri Pop-up" (fact) · date: "8 November" (fact) · place: "Mill Lane Market" (fact) · cta: "See you there" (draft, 3 of 3 words)
I need: your yes on the call to action, or your own words.
Next: make it with skills/poligraf--make-it.md.
```

## Rules

- Never suggest a sample layout over one of the owner's own layouts that does the same job.
- Never suggest a layout that `select.md` rules out for this content or format. Your judgement chooses only among what the rules allow.
- Every reason you give comes from the chosen layout's **Why it works** section or from `docs/design/system/visual/why-it-works.md`, with the source named there. Never invent a finding, a study or a number. If the spec marks a reason "HueGrid practice, not a research finding", say so.
- The owner's own layout needs no research reason to be chosen: it is chosen because it is theirs and it does the job. If its spec has no **Why it works** section, say so, and give reasons only from the sample it `covers`, naming that sample.
- Never cite a source for more than its "Cited for" line in `sources.md`.
- One suggestion and one runner-up. A list of every layout is not a suggestion.
- When the request is unclear about the news, the destination or the action, ask one multiple-choice question, then suggest.
- `announcement` (a post over a photograph) is not in Brand Asset Maker (BAM). A request for one is a gap note.
