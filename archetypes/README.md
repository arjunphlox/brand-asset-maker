# Archetype library (shared layer)

An archetype is a brand-agnostic layout that encodes design principles as **slots**, a **hierarchy** order, **content budgets**, **bounded variation** and **checks**. It never carries a brand value: every color, size and font comes from `--brand-*` tokens via `_shared/base.css`, every allowed choice from `--v-*` variation vars.

Each archetype folder holds:

- `spec.md` — a System Design module (Tessor contract: frontmatter `title/scope/owns/see-also/implements`, `## Decisions`, `## Never do`, a `tessor-props` block for the variation parameters). Human-readable source of truth.
- `inputs.schema.json` — the machine contract the renderer and checks read: it starts with `"contractVersion": "1.0"` (a schema without it is refused). It declares slots and budgets, hierarchy, variation values, checks, fallbacks. Each text slot declares a `role` level: `h1` | `h2` | `h3` | `body` | `label` | `data-snippet`. The display face belongs to `h1`, `h2`, `h3` and `data-snippet`; `body` and `label` use the body face. The `role-face` check enforces it against the computed font, and the renderer stamps `data-role="<level>"` on every filled slot. A slot of `"kind": "image"` (with `"bleed": true` and `"alpha": "any" | "required" | "none"`) takes a row value of `{ "src", "focal": [x, y], "alt" }`: `src` is a file under `brand/assets/photos/`, `focal` is 0..1 of the source and drives the crop. Schemas with an image slot also run three checks, `alpha`, `crop` and `image-contrast`, that measure the real pixels rather than the CSS.
- `template.html` — the fragment (see `CLAUDE.md` → Contracts → Template). An image slot sits in a `.pg-photo` wrapper, and `base.css` turns the row's focal point into `object-position`.

Two optional schema fields (contract 1.4): `"ratios"` lists the formats the layout serves (a subset of its use-case's ratios in `poligraf.config.json`), and `"proposal": "optional"` tells the doctor the layout serves a job not every brand has, so its proposal is not required.

Three use-cases ship: `social-post` (headline, stat, quote, event, offer, list, hiring, contrast), `banner` (link-preview at 1200×630, profile-cover at 1584×396) and `email` (header at 1200×400). Sizes are in `cqi`, so 1cqi is 1% of the frame width: 10.8px on a post, 12px on a link preview or an email header, 15.84px on a profile cover.

`<use-case>/select.md` is the decision tree from content to archetype, with fallbacks when a budget is exceeded or a slot is missing.

Adding an archetype means all three files plus a `select.md` branch, written together, spec first. In a fork of Brand Asset Maker (BAM), the owner or a designer may add one, usually from a gap note that ended in ask (c) (`workshop/gap-note.md`). Never add a template without its spec and schema.
