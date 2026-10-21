---
title: Workshop scenarios
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Scenarios

Eight requests for Kadri Coffee, the practice brand. Each one has a prompt you paste into your own agent and a description of a good result. Some fit the layouts in Brand Asset Maker (BAM). Some do not, and then the good result is a gap note (`gap-note.md`), not a post.

In session one, Arjun shows scenarios 1, 2 and 3, and the gap note from scenario 7. Scenarios 4 to 8 are for the week between the sessions. You can pick 2, 3 or 5 of them, or write your own. Run them on your own brand as well as on Kadri: your brand is where the gaps that matter to you show up.

## Before you start

1. Fork BAM on GitHub (https://github.com/huegrid/brand-asset-maker), or download it as a zip and unzip it into a folder. You need an agent that can read and write files in that folder; to save PNGs itself it also needs to run commands, with Chrome or Node installed (`skills/poligraf--make-it.md`, step 3).
2. To work on Kadri, copy `examples/kadri/brand/`, `examples/kadri/generators/` and `examples/kadri/messages/` to the root of the folder, so you have `brand/`, `generators/` and `messages/` beside `SPEC.md`. To work on your own brand, write your own `brand/` first (`brand-folder.md`).
3. Open the folder with your agent: Claude, Cursor, Codex or another. It reads `AGENTS.md` or `CLAUDE.md` first.

Your agent makes the posts itself, with `skills/poligraf--make-it.md`: one HTML file and one PNG per post in `out/<run>/`, and a short report of what it measured. Anything it could not measure it marks "not measured".

## Session one

### 1. Instagram post about the 250 g bag

```
Make an Instagram feed post for Kadri Coffee that says each bag holds 250 g of whole bean coffee. Follow AGENTS.md, pick the layout with archetypes/social-post/select.md, and make the post with skills/poligraf--make-it.md. Show me the PNG and the report.
```

**A good result:** the agent picks the **stat** layout at **1:1** (a single number, 5 characters or fewer). It may reuse `generators/stat-bag.json` row 1: number "250 g", label "of whole bean coffee per bag", source "As printed on the Kadri bag". It counts the budgets (5 characters, 6 words, 6 words). It writes `out/<run>/stat--1x1--paper.html` and a 1080×1080 PNG: the coral k top left, "250 g" large in Hubot Sans in the darker text coral (`#cb492d`), the label below it in Mona Sans. The report gives the contrast it measured (`#cb492d` on `#ffffff` is 4.64:1; the ink `#4b1f15` on white is 13.94:1) and marks the checks it could only see by eye.

### 2. LinkedIn post for the pop-up

```
Make a LinkedIn post for the Kadri pop-up on 8 November at Mill Lane Market. Use the facts in messages/kadri-popup.json exactly as written there. Follow AGENTS.md and make the post with skills/poligraf--make-it.md.
```

**A good result:** the agent picks the **event** layout at **4:5** (a tall feed post: the message with more room), because `select.md` asks "is it an event?" first. The name, the date and the place each get a slot, and it copies them exactly from the message file: "Kadri Pop-up", "8 November", "Mill Lane Market". A `cta` is 3 words or fewer and starts with a verb. The report quotes each fact as it appears in the post and marks it "exact". It writes no "Nov 8" and no "Mill Lane".

The **headline** layout at **4:5** is a good result too, if the owner asks for one line rather than the details: 8 words or fewer (for example "Taste both coffees at Mill Lane Market"), with the facts copied the same way.

### 3. A5 printed flyer for the pop-up

```
Make an A5 printed flyer for the Kadri pop-up on 8 November at Mill Lane Market, to hand out at the market. Follow AGENTS.md, pick the layout with archetypes/print/select.md, and make it with skills/poligraf--make-it.md.
```

**A good result:** a flyer. The agent picks the **flyer** layout at **A5-portrait** (`archetypes/print/select.md`: an event with a name, a date and a place, handed out). It does not stretch a 4:5 post to A5: the A5 frame is the trim size at 150 dpi, 874×1240 px (148×210 mm). It takes the name, the date and the place from the message file and copies them exactly: "Kadri Pop-up" as the kicker, "8 November" and "Mill Lane Market" as the details. It counts the budgets: a headline of 8 words or fewer (for example "Good coffee. Your way."), a body of 30 words or fewer (the tasting notes from the bags), and a `cta` of 3 words or fewer that starts with a verb ("Come say hello"). Every line of text is 17px or more, which is 8 pt on paper, and sits 30px (5 mm) inside the trim. The report names each check and says measured or "not measured". It also says what is still open: bleed is not drawn, there is no PDF yet, and the printer confirms the bleed and colour profile, so the owner checks a printed proof.

## For the week

### 4. Instagram story the day before

```
Make an Instagram story for Kadri that reminds people the pop-up is tomorrow, 8 November, at Mill Lane Market. Use messages/kadri-popup.json. Follow AGENTS.md and make it with skills/poligraf--make-it.md.
```

**A good result:** the **event** layout at **9:16** (1080×1920). A story is a reminder: one fact plus a call to action. The agent makes it from the template with `data-ratio="9:16"`; it does not stretch a square post. The text sits on the centre line, clear of the top 250px and the bottom 340px. The date and place are copied from the message file. The `cta` starts with a verb and is 3 words or fewer. The **headline** layout at **9:16** with a `cta` is a good result too, made the same way; keep "8 November" on one line (put it in the kicker if the headline breaks it).

### 5. A customer quote

```
Make an Instagram post with this quote from our customer Priya: "Kadri's single-origin beans give me focus all morning." Follow AGENTS.md.
```

**A good result:** the agent refuses this line before it makes anything. It quotes the never-claim from `brand/BRAND.md` ("Never imply certifications, health benefits or a sourcing story we cannot prove."): "single-origin" is a sourcing story and "focus" is a health benefit. It also notes the rule that Kadri quotes no person unless the owner supplies the person and the words. It asks for another line, or offers a line the brand says itself, attributed to the Kadri team. Once there is a clean line, it makes a **quote** post at **1:1** (30 words or fewer, in the body face).

### 6. Three posts for one campaign

```
Make three posts for the Kadri pop-up: an Instagram feed post, a LinkedIn post and an Instagram story. All three must state the same date and place. Use messages/kadri-popup.json. Follow AGENTS.md and make them with skills/poligraf--make-it.md.
```

**A good result:** three posts from one message: 1:1, 4:5 and 9:16, each made from its template for its own format. Every mention of the date reads "8 November" and every mention of the place reads "Mill Lane Market", copied from the message file. The report has a small table: each post, each fact as it appears, "exact" or "differs". A "differs" is fixed in the post, never by changing the message file.

### 7. A post over a photo of the pop-up stall (the gap note)

```
Make an Instagram post with a photo of the Kadri pop-up stall and one line over it. Follow AGENTS.md.
```

**A good result:** no post. The photograph layout (`announcement`) is not in BAM, and no BAM layout places text on a photograph: that needs a scrim and a contrast check on the pixels under each line. The agent says so and writes a gap note. The note ends in **one** ask. **(a) More context** is right when the first thing missing is the photograph itself (which file, and where the stall sits in it): Kadri's example ships no photograph. **(c) A new layout** is right when the photograph exists, as in the session-one demo: the note then lists the image slot, its focal point, the scrim, the line and the logo with their budgets, the hierarchy, the feed formats (1:1 and 4:5), and a contrast check measured on the photograph. It does not put the headline layout over the photo by hand.

### 8. A price card for the counter

```
Make a price card for the Kadri counter that shows Velvet Hour and Sunny Side with their prices. Follow AGENTS.md.
```

**A good result:** a menu, and no invented prices. A counter card that lists items with prices is the **menu** layout at **A4-portrait** (`archetypes/print/select.md`, step 3). The agent writes two rows, one per coffee, with the tasting notes printed on each bag. Kadri has set no prices, so it asks the owner for them, or leaves each price as a visible blank for the owner to fill, and says so in the report. It never makes a price up.

## More layouts to try

Eight more layouts, one prompt each, all on Kadri. Each has an example generator in `examples/kadri/generators/` that you can reuse or change. Two of them use demo copy: Kadri has made no offer and posted no job, so the offer and the job were written for the layout. On your own brand, use only an offer or a job the owner gave you.

**Event** (`social-post/event`, 1:1, 4:5 or 9:16; generator `event-popup.json`):

```
Make an Instagram post for the Kadri pop-up with the event layout. Take the name, date and place from messages/kadri-popup.json, exactly as written. Show the CTA as a button (cta: pill). Follow AGENTS.md and make it with skills/poligraf--make-it.md.
```

**Offer** (`social-post/offer`, 1:1, 4:5 or 9:16; generator `offer-popup.json`):

```
Make an Instagram post with the offer layout from examples/kadri/generators/offer-popup.json. Check the detail is 7 characters or fewer. Then try the accent scheme and tell me what colour the button turns. Follow AGENTS.md and make it with skills/poligraf--make-it.md.
```

**List** (`social-post/list`, 1:1 or 4:5; generator `list-notes.json`):

```
Make two Instagram posts with the list layout: Sunny Side's three tasting notes, once numbered and once stacked (style: stacked, accent: last). Take the notes from examples/kadri/generators/list-notes.json. Follow AGENTS.md and make them with skills/poligraf--make-it.md.
```

**Hiring** (`social-post/hiring`, 1:1 or 4:5; generator `hiring-popup.json`):

```
Make a LinkedIn post with the hiring layout from examples/kadri/generators/hiring-popup.json, at 4:5. The date and place must match messages/kadri-popup.json exactly. Follow AGENTS.md and make it with skills/poligraf--make-it.md.
```

**Contrast** (`social-post/contrast`, 1:1 or 4:5; generator `contrast-way.json`):

```
Make an Instagram post with the contrast layout from examples/kadri/generators/contrast-way.json: the belief first, then Kadri's answer on the panel. Try offset: stack and claim: outline, and tell me which reads the answer faster. Follow AGENTS.md and make it with skills/poligraf--make-it.md.
```

**Link preview** (`banner/link-preview`, 1200×630; generator `link-notes.json`):

```
Make the share image for a Kadri page about Sunny Side's tasting notes, with the link-preview layout. Pick it with archetypes/banner/select.md. Try the hairline (rule: hairline). Follow AGENTS.md and make it with skills/poligraf--make-it.md.
```

**Profile cover** (`banner/profile-cover`, 1584×396; generator `cover-line.json`):

```
Make a LinkedIn cover for Kadri with the line "GOOD COFFEE. YOUR WAY." Use the profile-cover layout and keep the left 568px empty for the profile photo. Follow AGENTS.md and make it with skills/poligraf--make-it.md.
```

**Email header** (`email/header`, 1200×400, shown at 600×200; generator `email-popup.json`):

```
Make the header image for a Kadri newsletter about the pop-up, with the email header layout. Use messages/kadri-popup.json for the name and the place. Check that no text is smaller than 32px. Follow AGENTS.md and make it with skills/poligraf--make-it.md.
```

**A good result** for each: the agent names the layout and the format, counts the budgets before it writes HTML, copies every fact from the message file exactly, and writes a report that marks what it did not measure. For the profile cover it says that the 568px margin is an estimate.

## After the scenarios: rank your next assets

Once you have made a few posts on your own brand, run `next-assets.md`. Your agent asks what you make in a normal month, matches each item to a layout and ranks the list by how often you need it. Bring the table and your top gap note to session two.

## Optional: the cold handoff

To test that a brand folder stands on its own, run `cold-handoff.md` in a fresh chat with only that `brand/` folder and BAM attached. Try it on Kadri first, then on your own brand.
