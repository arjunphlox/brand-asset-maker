---
kind: designer
asked by: the Kadri owner
date: 2026-10-22
run: p01
sample: event--1x1--paper
ask: b
---

## 1. What was asked
The request, word for word: "I want an event icon to be added on top right of this artefact."
The content: the Kadri pop-up post from run p01 (`out/p01/event--1x1--paper.png`), with a small mark in the top right corner that says "this is an event".
The facts: name "Kadri Pop-up", date "8 November", place "Mill Lane Market", from `messages/kadri-popup.json`. The post itself does not change.

## 2. What BAM could not do, and why
A brand value is missing, and then a layout is missing. The Kadri Coffee kit has no event icon: its only marks are the k symbol, the wordmark and the three product badges (a capsule, a sun and a star, one per coffee), which name a coffee, not an event. Drawing one would be inventing a brand value. And even with a file, the event layout has one asset slot, `logo`, which sits top left; `element-count` fails any element the template does not have, and `logo-visible` and `logo-integrity` know one mark. The two-mark layout in BAM is `partnership`, a lockup of the brand and one named partner (`A × B`), which this is not.

## 3. What was tried
| Layout or fix tried | What it kept | What it lost |
|---|---|---|
| event, `series` slot (a text label in the top row, at the end side) | The post as it is, with a word such as "Pop-up" or "Free entry" top right; no new layout, every check still measured | It is a word, not an icon |
| event, `head: series` | Mirrors the row: the series word top left, the logo top right | Still no icon; the logo moves away from its spot |
| partnership | A second mark in the top row | It is a two-brand lockup: the mark reads as a partner, and the date and place lose their slots |
| headline with a `cta` | The one line and the action | The name, date and place as a block, and still no icon |

None keeps the point: an icon is a mark, not a word.

## 4. The ask
(b) A new value in the brand file: the event icon, as an SVG at `brand/assets/icon-event.svg`, with its sha256 and status in `locked.json` `assets`. It would be read by a top-right mark slot on event posts, on every scheme (so say whether it is one colour that the scheme recolours, like the k, or a fixed-colour mark, which would need a reversed file like the k has). Owner, please supply the file, or say which existing kit file counts as the event icon.

Why this ends in (b) and not (c): the first missing piece is the icon itself; nobody can define an icon slot's checks (`logo-visible` on a second mark, its size against the logo, its place in the safe zone) without the mark. Once the file exists, a second note asks for (c): an `event` variation or a new layout with a row-named asset slot top right, with its spec, schema and template written together.
