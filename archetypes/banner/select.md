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

A banner is an image that sits inside someone else's page: a link preview, a profile cover. Its size is set by the platform. Each banner layout serves one format.

## Step 0: the format names the job

| Format | Ratio | Size | Job | Archetype |
|---|---|---|---|---|
| Share card | 1.91:1 | 1200×630 | The image a link shows when it is shared (a page, a blog post, an Open Graph image) | link-preview |
| Profile cover | 4:1 | 1584×396 | The cover at the top of a LinkedIn page or profile | profile-cover |

**A new format re-runs selection.** A share card is never stretched into a cover, and a post is never cropped into a banner. Make each one from its own template.

## Step 1: the content picks the archetype

1. **Will the image show when someone shares a link?** → **link-preview**. The title is the page's short title, 10 words or fewer.
2. **Is it the cover of a profile or a company page?** → **profile-cover**. One line, 6 words or fewer, kept clear of the profile photo.
3. **Something else** (a website hero, a display ad, a printed banner): no banner layout fits. Write a gap note (`workshop/gap-note.md`, feedback kind `designer`). Do not stretch a banner into it.

## Fallback order

| From | Trigger | To |
|---|---|---|
| link-preview | `title` over 10 words or 70 characters | the page's short title; rewrite |
| profile-cover | `tagline` over 6 words or 40 characters | cut it; the profile's own text says the rest |
| any | `logo` asset missing | refuse to render; intake is incomplete |
| any | the image must go to a new format | re-run this selection for that format; never stretch the approved banner |

## Decisions

- 2026-10-21 — The banner use-case added with two sample layouts (contract 1.4). Each layout serves one format (schema `ratios`), so propose renders only that format for it. The profile cover's 568px left margin is an estimate, to re-measure on a real profile.

## Never do

- Never stretch, crop or scale one banner into another format.
- Never put the only copy of a fact on a banner. The page it sits on must say it too.
