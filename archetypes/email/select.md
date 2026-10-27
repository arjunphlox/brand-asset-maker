---
title: Email — selection
scope: Which email archetype a piece of content should use, and what happens when its budgets or slots do not fit.
owns:
  - Format → job step for email images
  - Content → archetype decision tree for the email use-case
  - Fallback order when a budget is exceeded
see-also:
  - ./header/spec.md
  - ../banner/select.md
  - ../social-post/select.md
  - ../../docs/design/system/visual/principles.md
implements:
  - ../../scripts/render.mjs (budget check + fallback suggestion)
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Email — selection

**Suggesting a layout to someone:** this tree decides what is allowed. To rank the options it allows and explain the pick, use each layout's **Why it works** section and `docs/design/system/visual/why-it-works.md` (`skills/bam--suggest.md`).

An email image is shown at half its size: a 1200×400 header appears at 600×200 in most email clients. Some clients hide images until the reader allows them, so an email image repeats what the email says.

## Step 0: the format names the job

| Format | Ratio | Size | Job | Archetype |
|---|---|---|---|---|
| Newsletter header | 3:1 | 1200×400, shown at 600×200 | The top of a newsletter: what this issue is about | header |

## Step 1: the content picks the archetype

1. **Is it the image at the top of an email?** → **header**. One headline, 8 words or fewer, and a kicker for the issue or topic.
2. **Something else** (an image inside the email body, a signature, a button): no email layout fits. Write a gap note (`workshop/gap-note.md`, feedback kind `designer`).

## Fallback order

| From | Trigger | To |
|---|---|---|
| header | `headline` over 8 words or 48 characters | rewrite; the email body says the rest |
| any | `logo` asset missing | refuse to render; intake is incomplete |

## Decisions

- 2026-10-21 — The email use-case added with one sample layout (contract 1.4). Its `minTextPx` is 32, higher than a post's 28, because the image shows at half size: 32px here is 16px on screen.

## Never do

- Never put the only copy of a fact in an email image.
- Never set text below 32px in an email image.
