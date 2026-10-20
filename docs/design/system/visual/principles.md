---
title: Principles
scope: The five composition principles every archetype must name in its spec, and how each is enforced by a check rather than by taste.
owns:
  - The principle → enforcement table
  - The rule that an archetype declares which principles it carries
see-also:
  - ../README.md
  - ../../../archetypes/README.md
implements:
  - ../../../scripts/check.mjs
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Principles

| Principle | Question it answers | Enforced by |
|---|---|---|
| Hierarchy → Prioritise | What do I read first? | One display-size slot per archetype; `element-count`; budgets; `role-face` (display face only for `h1`–`h3`/`data-snippet`) |
| Contrast → Distinguish | Can I tell figure from ground? | `contrast` (4.5:1 normal, 3:1 at ≥36px) on every text/background pair; `logo-visible` (the mark must not vanish: at least 0.4 of its opaque pixels reach 1.5:1 against its surface, or 0.1 with a visible wordmark; logos are exempt from the 3:1 text rule and get a note instead); `image-contrast` (text over a photograph is measured against the pixels beneath it: the 10th-percentile pixel must clear the same threshold); `logo-visible` uses the measured ground when the mark sits on a photograph; schemes resolved from tokens only |
| Balance → Anchor | Does the frame feel settled? | Block position + logo on the opposite corner (stat); safe-zone check; `crop` (the focal point of a photograph sits inside the safe zone, never under text or the logo) |
| Grouping → Navigate | Which things belong together? | Attribution+role as one group (quote); fixed internal spacing in `cqi` |
| Rhythm → Flow | Does the eye move without stumbling? | Fixed measure at display size (quote); `min-text`; no auto-fit |

An archetype spec names the principles it carries in its opening paragraph. A principle with no check behind it is a wish, not a rule.

## Rule: the display face is for headings

The brand's display face (`--brand-font-display`) is used only where an element is the H1, H2 or H3 of its surface, or a dominant display-scale data snippet. Everything else, quotes included, is set in the body face and earns dominance by size. A slot's `role` in `inputs.schema.json` is a heading level: `h1` | `h2` | `h3` | `body` | `label` | `data-snippet`. `h1`, `h2`, `h3` and `data-snippet` take the display face (classes `.pg-h1`, `.pg-h2`, `.pg-h3`, `.pg-data`); `body` and `label` take the body face (`.pg-body`, `.pg-label`). The `role-face` check enforces this: for every roled `[data-slot]`, the computed font-family's first family must equal the brand's display family (levels above) or body family (the rest), read from `--brand-font-display` / `--brand-font-body`, and the slot's `data-role` must equal its schema role.

## Rule: a photograph is measured, never trusted

A photograph is content the harness cannot read from CSS, so it is checked from its pixels. `alpha` decodes the real pixels and rejects a painted checkerboard or the wrong transparency. `crop` maps the focal point through the cover crop and rejects a subject that is cut away, outside the safe zone or under type. `image-contrast` screenshots the ground with text hidden and measures each text element against the pixels beneath it. A failure is fixed in the input row (focal point, photograph), in the layout or scrim, or in the archetype, never in the file: no tint, no darkening, no blur, no hand-crop.

## Decisions

- 2026-09-29 — Photographs enter through `social-post/announcement` (`upstream: true`) with three pixel-level checks: `alpha`, `crop` (carries Balance → Anchor) and `image-contrast` (carries Contrast → Distinguish, p10 of the pixels under each text). A photograph is never approved on trust and its fix is never in the file.

- 2026-09-29 — Slot roles renamed from faces to heading levels (Arjun, adopted library-wide, `upstream: true`); new `role-face` check enforces the face per level. `.pg-display` stays one release as an alias of `.pg-h1`.

- 2026-09-29 — Display face restricted to heading roles (HueGrid rule, adopted library-wide). Quote moved to the body face.

- 2026-09-29 — Principles enter Poligraf only through archetypes. They are not taught to the person making posts; they are compiled into templates and checks.

## Never do

- Never add a principle to a spec without naming the check that enforces it.
