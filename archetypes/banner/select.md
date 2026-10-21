---
title: Banner — selection
scope: Which banner archetype a piece of content should use, and what happens when its budgets or slots do not fit.
owns:
  - Format → job step for banners (which ratio, what it is for, which archetypes it allows)
  - Content → archetype decision tree for the banner use-case
  - Fallback order when a budget is exceeded
see-also:
  - ./link-preview/spec.md
  - ./profile-cover/spec.md
  - ./leaderboard/spec.md
  - ./rectangle/spec.md
  - ./half-page/spec.md
  - ./skyscraper/spec.md
  - ./billboard/spec.md
  - ./mobile/spec.md
  - ./hero/spec.md
  - ./custom/spec.md
  - ../social-post/select.md
  - ../email/select.md
  - ../../docs/design/system/visual/principles.md
implements:
  - ../../scripts/render.mjs (budget check + fallback suggestion)
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Banner — selection

A banner is an image that sits inside a page: a link preview, a profile cover, a display ad, the hero of the brand's own site. Its size is set by the platform, the ad network or the site. Each banner layout serves one format; `custom` serves any size the generator names.

## Step 0: the format names the job

| Format | Ratio | Size | Job | Archetype |
|---|---|---|---|---|
| Share card | 1.91:1 | 1200×630 | The image a link shows when it is shared (a page, a blog post, an Open Graph image) | link-preview |
| Profile cover | 4:1 | 1584×396 | The cover at the top of a LinkedIn page or profile | profile-cover |
| Leaderboard | 728x90 | 728×90 | A display ad across the top of a page (IAB) | leaderboard |
| Medium rectangle | 300x250 | 300×250 | A display ad in a sidebar or between paragraphs (IAB); the unit networks have most room for | rectangle |
| Half page | 300x600 | 300×600 | A tall sidebar display ad, when the message needs a line of support | half-page |
| Skyscraper | 160x600 | 160×600 | A narrow column ad beside a page (IAB) | skyscraper |
| Billboard | 970x250 | 970×250 | The widest standard display ad, at the top of a page (IAB) | billboard |
| Large mobile banner | 320x100 | 320×100 | A display ad on a phone, above or below the content | mobile |
| Website hero | 1920x600 | 1920×600 | The band at the top of the brand's own web page or landing page (not an ad) | hero |
| Custom | custom | any, 100 to 4000px a side | A slot whose size is none of the above (a partner site's slot, a venue screen) | custom |

**Display ads show at 1x.** A 728×90 is seen at 728×90, so the post floor (28px) cannot hold: `minTextPxByRatio` sets 12px for the small units, 14px for the half page and the billboard, 20px for the hero (judgement, `poligraf.config.json` `minTextPxNotes`). Every display layout carries a call to action; it is required.

**The four kinds of banner are different jobs.** An *ad network unit* (leaderboard to mobile) is bought space on someone else's page: one headline, a call to action, the logo, and the size is the slot's. A *site hero* is the top of the brand's own page: eyebrow, h1, body and button, inside the central 1280px a cover crop keeps. A *share card* (link-preview) is what a link shows when someone else posts it: no button, the title on the centre line. A *cover* (profile-cover) sits behind a profile photo: one line, no button. *Custom* is for a slot that is none of these sizes; it adapts by shape (wide at 3:1 or wider, tall at 3:5 or narrower, square-ish between), never by scaling.

**A new format re-runs selection.** A share card is never stretched into a cover, and a post is never cropped into a banner. Make each one from its own template.

## Step 1: the content picks the archetype

1. **Will the image show when someone shares a link?** → **link-preview**. The title is the page's short title, 10 words or fewer.
2. **Is it the cover of a profile or a company page?** → **profile-cover**. One line, 6 words or fewer, kept clear of the profile photo.
3. **Is it a display ad bought on a network or a partner site?** → the layout for that slot's size: **leaderboard** (728x90), **rectangle** (300x250), **half-page** (300x600), **skyscraper** (160x600), **billboard** (970x250), **mobile** (320x100). Each needs a call to action, verb first. When the network asks for several sizes, make each from its own layout; the headline may stay the same, the budgets differ (leaderboard and skyscraper 6 words, mobile 5).
4. **Is it the top band of the brand's own page?** → **hero** (1920x600): eyebrow, headline, body, call to action.
5. **Does the slot have a size that none of these has?** → **custom**, with `size: [w, h]` in the generator (`--size WxH` on the command line). A slot that has a named size uses its own layout, never custom at that size.
6. **Something else** (a printed banner, a banner over a photograph): no banner layout fits. Write a gap note (`workshop/gap-note.md`, feedback kind `designer`). Do not stretch a banner into it.

## Fallback order

| From | Trigger | To |
|---|---|---|
| link-preview | `title` over 10 words or 70 characters | the page's short title; rewrite |
| profile-cover | `tagline` over 6 words or 40 characters | cut it; the profile's own text says the rest |
| leaderboard, skyscraper | `headline` over 6 words | cut it to the claim; the landing page says the rest |
| mobile | `headline` over 5 words, `cta` over 2 | cut both; there is no room for a second line |
| rectangle, billboard, custom | `headline` over 8 words | cut it; the `sub` carries one supporting line |
| half-page, hero | `headline` over 10 words | cut it; the `sub` / `body` carries the rest |
| any display layout | `cta` missing | write one, verb first; a display ad always has one |
| custom | no `size`, or a side outside 100..4000px | refuse; name the slot's size. A size on a fixed ratio is refused too |
| any | `logo` asset missing | refuse to render; intake is incomplete |
| any | the image must go to a new format | re-run this selection for that format; never stretch the approved banner |

## Decisions

- 2026-10-21 — The banner use-case added with two sample layouts (contract 1.4). Each layout serves one format (schema `ratios`), so propose renders only that format for it. The profile cover's 568px left margin is an estimate, to re-measure on a real profile.

- 2026-10-21 — The web banner form (contract 1.5): eight layouts added beside the share card and the cover, so the use-case holds ten. Six display ad units at the IAB / Google sizes (sources in `poligraf.config.json` `safeZoneNotes`), the 1920x600 site hero and `custom`. Ratio keys name the size (`728x90`), since a ratio alone (91:11) would say nothing. The ad-unit safe zones and the 1x text floors are judgement, to re-measure; the hero's 320px side margins are an estimate of a 1280px cover crop.

## Never do

- Never stretch, crop or scale one banner into another format, and never render a named size through `custom`.
- Never put the only copy of a fact on a banner. The page it sits on must say it too.
