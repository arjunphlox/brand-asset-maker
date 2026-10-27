---
title: Print — selection
scope: Which print archetype a piece of content should use, at which printed size, and what happens when its budgets or slots do not fit.
owns:
  - Format → job step for print (which trim size, what it is for, which archetypes it allows)
  - Content → archetype decision tree for the print use-case
  - Fallback order when a budget is exceeded
see-also:
  - ./flyer/spec.md
  - ./poster/spec.md
  - ./menu/spec.md
  - ./offer-flyer/spec.md
  - ./card-front/spec.md
  - ./card-back/spec.md
  - ./postcard/spec.md
  - ./rack-card/spec.md
  - ./table-tent/spec.md
  - ./sticker/spec.md
  - ../social-post/select.md
  - ../../docs/design/system/visual/principles.md
implements:
  - ../../scripts/render.mjs (budget check + fallback suggestion)
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Print — selection

**Suggesting a layout to someone:** this tree decides what is allowed. To rank the options it allows and explain the pick, use each layout's **Why it works** section and `docs/design/system/visual/why-it-works.md` (`skills/bam--suggest.md`).

A print piece is held in a hand, pinned to a wall or stood on a table. Its size is a paper size, not a screen. Every print frame is its trim size at **150 dpi** (px = mm × 150 / 25.4), so one minimum text size serves every format: `minTextPx` 17 is 8pt. The proof PNG renders at `render.scale` 2, which is **300 dpi** at trim size, the resolution print shops ask for. Bleed (usually 3 mm a side) is not drawn and there is no PDF export yet: both are a later step, and the printer confirms the bleed and the colour profile. The frame is the trim line; text and logos stay 5 mm (30px) inside it.

## Step 0: the format names the job

| Format | Ratio key | Frame (150 dpi) | Job | Archetypes |
|---|---|---|---|---|
| A4 portrait (A3 at `render.scale` 3) | `A4-portrait` | 1240×1754 | On a wall or a noticeboard, read standing | flyer, poster, menu, offer-flyer |
| A5 portrait | `A5-portrait` | 874×1240 | Handed out, read in a few seconds in someone's hand | flyer, offer-flyer |
| A6 landscape | `A6-landscape` | 874×620 | A postcard: handed out or posted | postcard |
| A6 portrait | `A6-portrait` | 620×874 | One panel of a table tent, read across a table | table-tent |
| DL (99×210 mm) | `DL` | 585×1240 | A rack card: the top third shows in a display rack | rack-card |
| Business card (85×55 mm) | `card` | 502×325 | Kept in a wallet: the front is the brand, the back is the person | card-front, card-back |
| Sticker (3×3 in) | `sticker` | 450×450 | On a bag, a cup, a laptop: square or a die-cut circle | sticker |

A4, A5 and A6 share the proportion (1 : 1.414), but they are separate frames so 8pt stays 8pt. **A new format re-runs selection.** An A4 flyer is never printed on A5 by scaling, and a social post is never printed as a flyer: make each one from its own template.

## Step 1: the content picks the archetype

1. **Is it an event: a name or line, a date, a place?** → **flyer** (A5 to hand out, A4 to pin up). The date and place come from the message file, by reference.
2. **Is it one line, to be seen from across a room?** → **poster** (six words or fewer).
3. **Is it a list of items with prices, or a list of services?** → **menu** (two to eight rows; prices optional).
4. **Is it an offer with one short detail (Free, 20% off, ₹499)?** → **offer-flyer**.
5. **Is it a business card?** The front → **card-front** (the mark and the wordmark). The back → **card-back** (a name, a role, up to four contact lines).
6. **Is it a postcard: one line and a short note?** → **postcard**.
7. **Is it a leaflet for a rack: a line and three points?** → **rack-card**.
8. **Does it stand on a table: a line and what to do?** → **table-tent**.
9. **Is it a mark to stick on something?** → **sticker** (the logo, or the logo and one or two words).
10. **Something else** (a brochure with folds, a banner for a stall, a label with legal text, anything with a photograph): no print layout fits. Write a gap note (`workshop/gap-note.md`, feedback kind `designer`).

## Fallback order

| From | Trigger | To |
|---|---|---|
| flyer | `date` missing | ask for the date, or make a poster |
| flyer | `body` over 30 words | cut it, or move the rest to the event's other channels |
| poster | `headline` over 6 words | rewrite it, or make a flyer |
| menu | more than eight rows | two menus, or a shorter list; never smaller rows |
| offer-flyer | `detail` over 7 characters | say it in the offer line, or make a flyer |
| rack-card | fewer than three points | a postcard or a flyer |
| table-tent | `line` over 16 words | cut it; a list is a menu |
| card-front, sticker | no wordmark and no words | add the tagline or the word: a piece with no words fails `contrast` |
| any | `logo` asset missing | refuse to render; intake is incomplete |
| any | the piece must go to another paper size | re-run this selection for that format; never scale the approved piece |

## Decisions

- 2026-10-21 — The `print` use-case added with ten sample layouts (five forms plan, form 5). One dpi for every frame (150, so `minTextPx` 17 = 8pt); A5 has its own frame rather than the A4 frame printed small, which would make 8pt into 5.7pt. The 5 mm safe zone, the business card size and the sticker size are estimates, to re-measure against the printer's spec (`bam.config.json` safeZoneNotes). The flyer closes the Kadri gap note `kadri-flyer-gap-note.md`.

## Never do

- Never scale one print format into another, or a screen post into print.
- Never type a fact the message holds (a date, a place, a price). Reference it.
- Never treat the PNG proof as print-ready art. Bleed, the colour profile and the PDF come from the printer's spec, and the owner checks a printed proof: screen colours and printed ink differ.
