---
title: Next assets
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Next assets

This prompt gives you the list of the next assets your brand should make, ranked by how often you need them. Your agent asks what you make in a normal month, matches each item to a layout in Brand Asset Maker (BAM), and ranks the list. The items at the top that fit no layout are the gap notes worth writing first.

Run it once your `brand/` folder exists, after you have made a few posts. It takes about 15 minutes.

## The prompt

Paste this into your own agent, in your BAM folder:

```
Help me rank the next assets my brand should make. Follow AGENTS.md.

1. Ask me, one question at a time: which assets do I make in a normal month (posts, banners, emails, print, slides, anything), where each one goes, and how many of each I make per month. If there are files in brand/assets/references/ or a posts/ folder, read them first and ask me to confirm what you found. Write my answers word for word. Do not guess a number: if I do not know, write "not sure" and rank it last.
2. For each asset, pick the layout and format with the select.md files in archetypes/. Mark it:
   - "fits": a layout and format in BAM do this job now.
   - "needs a brand value": the layout exists, but my brand file lacks something it needs (name it).
   - "gap": no layout does this job.
3. Rank by how many per month, highest first. On a tie, "fits" comes first.
4. Write the table to next-assets.md at the root of this folder, with the columns: rank, asset, where it goes, per month, layout and format, status, next step. The next step is "make it" for a fit, the missing value for "needs a brand value", and "gap note" for a gap.
5. Write a gap note (workshop/gap-note.md) for the top gap only, then stop and show me the table.
```

## A good result

- Every number in the table is one you gave. "not sure" rows sit at the bottom.
- Each row names one layout and one format, or says "gap". No row stretches one format into another (a feed post is not a flyer).
- The top gap has one gap note with one ask. The other gaps stay as rows until you need them.
- You can read the first three rows and know what to make next week.

## Example: Kadri Coffee

The numbers below are made up for the practice brand. Use your own.

| Rank | Asset | Where it goes | Per month | Layout and format | Status | Next step |
|---|---|---|---|---|---|---|
| 1 | Tasting notes post | Instagram feed | 8 | `social-post/list`, 1:1 | fits | make it |
| 2 | Event reminder | Instagram story | 4 | `social-post/event`, 9:16 | fits | make it |
| 3 | New bag over a photo | Instagram feed | 2 | none | gap | gap note: ask (a), which photograph |
| 4 | Pop-up post | LinkedIn | 2 | `social-post/event`, 4:5 | fits | make it |
| 5 | Counter price card | print, in the shop | 1 | none | gap | (later) |
| 6 | Newsletter header | email | 1 | `email/header`, 3:1 | fits | make it |
| 7 | Velvet Hour post on its gradient | Instagram feed | not sure | `social-post/headline`, 1:1 | needs a brand value | the gradient's colours |

## Bring it to session two

Bring your table and your top gap note. In session two the group picks gaps that several people share, and turns one of them into a new layout.
