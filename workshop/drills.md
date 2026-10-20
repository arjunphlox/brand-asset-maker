---
title: Triage drills
author: HueGrid Studio
license: CC-BY-NC-ND-4.0
tier: sample
---

# Triage drills

Ten breaks, written the way brand owners write them. A **break** is a failed check or a review note. Each comes from a real or realistic run on one of two brands. For each break, ask the three questions, name the break kind, then write the one kind and the one file it lands on, and whether the fix is `upstream: true`. The facilitator holds the key. You see it only after you have scored.

## The three questions

Ask them in order, in your own words. Questions 1 and 2 together place most breaks (the colour or the words; one post or all of them). Question 3 is the one that stops you: if the answer is yes, it is a brief, not a fix.

1. **Is it the colour, or the words?** "Colour" stands for any look value: a colour, a typeface, a weight. Ask alongside it: **did something that must never move, move?**
2. **Is it this one post, or all of them?**
3. **Do you want something new?**

## Where the answers land

Four break kinds name what went wrong: **trigger**, **drift**, **rendering**, **voice**. Each lands on one of seven kinds, and each kind has one file. The seven kinds are the expert layer; the key explains them.

| Your answers | Break kind | Kind | File |
|---|---|---|---|
| The words, all of them | voice | `voice` | `brand/voice.md` (+ the two traps, `rules/refusals.md`) |
| A request got through that the two traps should have stopped | trigger | `voice` or `locked` | the two traps, `rules/refusals.md`, and the file the trap protects (`brand/voice.md` or `brand/locked.json`) |
| Something that must never move, moved | drift | `locked` | `brand/locked.json` |
| The colour, all of them | rendering | `token` | `brand/tokens.css` (+ `brand/locked.json`) |
| This one post | rendering | `input` | the row in the share-card generator (`generators/<name>.json`) |
| All of them, and the layout is the reason | no break kind: the library is wrong | `budget` or `selection` | the archetype (`upstream: true`) |
| Something new | not a break: a brief | `designer` | `feedback/NNNN-<slug>.md` |

"Rendering" means the post came out wrong: the checks catch many of these, and the rest are a value or a row. Most rendering breaks are `token`; some are `input`.

## The two brands

**Kadri Coffee** (fictional, by Madhuri Maram, used with her permission). Whole bean coffee for people who drink coffee every day and want good coffee without the ceremony.

- Accent coral `#FF603E` (you said). Paper `#ffffff`, ink `#4b1f15`, muted `#cb492d`: we guessed all three from `npm run scale -- "#FF603E"` at intake. From p02 on, coral text on paper reads `#cb492d` (feedback 0001).
- Hubot Sans for display, Mona Sans for body (you said: "Hubot Sans for the logo and headings, Mona Sans for everything else. Files attached."). Display weight 700, chosen at intake (we guessed).
- Mark: the coral k (`logo.svg`), square corners, `#FF603E`. The owner also handed in a dark k (`logo-reversed.svg`). Wordmark "kadri", lowercase; no wordmark file, so posts show the k alone.
- Voice: "Direct, warm, concrete." Never imply certifications, health benefits or a sourcing story we cannot prove. No invented numbers: the only number handed in is the 250 g on the bag.
- The bag names two coffees: `01 / VELVET HOUR` (cocoa, caramel, toasted almond) and `02 / SUNNY SIDE` (peach, citrus, honey).
- Share-card generator `stat-bag`: rows `row-1` (`250 g` / `of whole bean coffee per bag` / `As printed on the Kadri bag`) and `row-2` (`250 g` / `Sunny Side: peach, citrus and honey` / `Tasting notes printed on the bag`).

**HueGrid** (the studio running this workshop).

- Accent `#feb201` on surfaces (mark, bars); accent text on paper `#8c6201`. Paper `#ffffff`, ink `#000000`, muted `#767676`.
- Display Magnet Headline Upright, always weight 400. Body Magnet.
- Mark: a 36px amber square. Wordmark "HUEGRID".
- Voice: precise, warm, unhurried. Approved lines: "Systems, Craft, Speed" · "Trusted, Together" · "Open for Oct, 2026" · "A tiny Design studio for funded startups". Never: superlatives about outcomes, client names without a written yes, "AI-powered" as a pitch, exclamation marks.
- Share-card generator `stat-facts`: rows `years` (`15y` / `with venture-backed startups` / `Plus Fortune 50 teams`) and `arms` (`4` / `arms, one studio` / `Studio, Playground, Store, Collective`).

## Drill 1

```
brand:  Kadri Coffee
run:    p01
sample: stat--1x1--paper (and every paper sample)
inputs: number "250 g" · label "of whole bean coffee per bag" · source "As printed on the Kadri bag"
checks: all pass
```

> The paper is too stark. Bright white looks clinical, like a pharmacy. Ours is cream, #FFF5DF. It's in our brand guide and on everything we print.

## Drill 2

```
brand:  HueGrid
run:    g05
sample: stat--1x1--ink--projects (and the 4:5 twin)
inputs: number "4O+" · label "projects since 2011" · source "Studio and Collective work"
checks: all pass
```

> The number font is off on this one. The zero is fat and round. Our zeros are narrow, like on the 15y post. Did the font file change?

## Drill 3

```
brand:  HueGrid
run:    g01
sample: stat--1x1--paper--arms
inputs: number "4" · label "arms, one studio" · source "Studio, Playground, Store, Collective"
checks: all pass
```

> This undersells it. I want the four arms as a 2×2 grid: Studio, Playground, Store, Collective, each with one line under it about what it does. Same palette and type as everything else, just four boxes.

## Drill 4

```
brand:  HueGrid
run:    g06
sample: quote--4x5--paper--client
inputs: quote "HueGrid is hands down the best design partner we have ever had. They 10x'd our launch week."
        attribution "Founder, Series A fintech"
checks: all pass (budget: 17 of 30 words, 91 of 180 characters)
```

> Too long. Nobody on Instagram reads three lines of quote, and it reads like an ad. Cut it to the first sentence.

## Drill 5

```
brand:  Kadri Coffee
run:    p01
sample: stat--1x1--accent (and every accent sample)
inputs: number "250 g" · label "of whole bean coffee per bag" · source "As printed on the Kadri bag"
checks: one fails. The contact sheet says:
        "The logo disappears: on the red behind it, only 0% of the mark stands out, it needs 40%."  logo-visible
        Details: "logo vanishes: 0.00 of 313 opaque logo px reach 1.5:1 and 0.00 reach 3:1
        against #ff603e; wordmark absent (need >= 0.4 at 1.5:1, or >= 0.1 with a visible wordmark)"
```

> On the coral posts our k is gone. It's coral on coral, there is just an empty corner. Nothing goes out like that. We have a dark k for exactly this.

## Drill 6

```
brand:  Kadri Coffee
run:    g02
sample: stat--1x1--paper--velvet
inputs: number "01" · label "Velvet Hour" · source "Tastes like cocoa, caramel and toasted almond"
checks: all pass
```

> The 01 is just the number on our bag. Velvet Hour is coffee 01, Sunny Side is 02. Huge like that, it reads like we're claiming to be number one. The words are fine. Can you design a product card for this instead?

## Drill 7

```
brand:  HueGrid
run:    g01
sample: stat--1x1--paper--years (and every years sample)
inputs: number "15y" · label "with venture-backed startups" · source "Plus Fortune 50 teams"
checks: all pass
```

> It's been sixteen years since September. The years post still says 15y. Everything else on it is right.

## Drill 8

```
brand:  Kadri Coffee
run:    probe-quote30
sample: quote--1x1--paper
inputs: quote "Sunny Side tastes like peach, citrus and honey. Velvet Hour tastes like cocoa, caramel
        and toasted almond. Brew them the way you like, any morning, any mug, any day."
        attribution "The Kadri team" · role "On our first two coffees"
checks: all pass (budget: 29 of 30 words, 165 of 180 characters)
```

> The quote post is a wall. Eight lines of text fill the square, and the big quote mark is jammed right under our k. Every word is ours and true. Can it breathe?

## Drill 9

```
brand:  HueGrid
run:    g07
sample: headline--1x1--ink--tiny
inputs: kicker "HueGrid Studio" · headline "A tiny Design studio for funded startups" · cta "huegrid.com"
checks: all pass
```

> Please stop using "for funded startups". Half our work this year was with bigger teams, and founders without funding read it as "not for you". The post looks fine. I don't want that line anywhere anymore.

## Drill 10

```
brand:  Kadri Coffee
run:    p02
sample: headline--4x5--paper, stat--4x5--paper (and every paper and ink sample)
inputs: as proposed
checks: all pass
```

> The headlines and the big numbers look heavy and loud, like the label on the bag. In our guide, headings are Mona Sans Medium. Hubot is only for the wordmark, the k and the badges. The quotes are fine.

## Answer sheet

Write your answers to the three questions in a few words, then the break kind, the kind and the file.

| Drill | Your answers | Break kind | Kind | File | `upstream: true`? |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |
| 7 | | | | | |
| 8 | | | | | |
| 9 | | | | | |
| 10 | | | | | |
