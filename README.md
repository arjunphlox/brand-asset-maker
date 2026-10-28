# Brand Asset Maker (BAM) by HueGrid

BAM master is a HueGrid Studio framework for producing on-brand assets with an AI assistant. Brand Asset Maker (BAM) is the part of BAM master that participants keep: the spec, the archetypes and the skills your agent follows.

## What is inside

- `START.md`: start here. One prompt to paste into your own AI agent (Claude Code, Codex, Cursor or another): it forks BAM, reads your brand files, folders and links, writes your `brand/` folder with every value citing its source, and opens the screen.
- `operate.html`: the screen. It shows your repo, every post drawn and checked, and which file each step makes. `node bam-screen.mjs` loads your repo into it; open it in Chrome.
- `bam-screen.mjs`: the small script that does the loading (Node 18 or newer, nothing to install).
- `AGENTS.md` and `CLAUDE.md` (the same note): where an AI assistant starts when it opens this folder.
- `SPEC.md`: the contracts (tokens, fonts, template, inputs schema, checks, report, locked values, approvals, generators, feedback kinds).
- `archetypes/README.md` and `archetypes/_shared/base.css`: how an archetype is built and the shared plumbing it relies on.
- `archetypes/<use-case>/select.md` (`social-post`, `slides`, `banner`, `email`, `mockup`, `print`): which archetype fits which content and format. The `mockup` layouts are prompt recipes (`prompt.md`, no template): your agent sends a passing post and the filled prompt to your own image model (`skills/bam--mockup.md`).
- Sample archetypes:
  - `archetypes/social-post/carousel/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/contrast/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/event/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/headline/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/hiring/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/list/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/offer/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/partnership/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/quote/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/stat/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/agenda/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/bullets/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/chart/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/comparison/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/next-steps/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/numbers/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/process/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/questions/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/quote/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/section/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/stat/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/statement/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/thanks-contact/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/title/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/title-speaker/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/slides/two-column/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/banner/billboard/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/banner/custom/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/banner/half-page/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/banner/hero/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/banner/leaderboard/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/banner/link-preview/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/banner/mobile/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/banner/profile-cover/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/banner/rectangle/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/banner/skyscraper/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/email/header/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/mockup/bus-shelter/` (`spec.md`, `prompt.md`, `inputs.schema.json`)
  - `archetypes/mockup/card-on-desk/` (`spec.md`, `prompt.md`, `inputs.schema.json`)
  - `archetypes/mockup/cup-sleeve/` (`spec.md`, `prompt.md`, `inputs.schema.json`)
  - `archetypes/mockup/lanyard/` (`spec.md`, `prompt.md`, `inputs.schema.json`)
  - `archetypes/mockup/laptop-screen/` (`spec.md`, `prompt.md`, `inputs.schema.json`)
  - `archetypes/mockup/menu-on-table/` (`spec.md`, `prompt.md`, `inputs.schema.json`)
  - `archetypes/mockup/phone-in-hand/` (`spec.md`, `prompt.md`, `inputs.schema.json`)
  - `archetypes/mockup/shop-window/` (`spec.md`, `prompt.md`, `inputs.schema.json`)
  - `archetypes/mockup/t-shirt/` (`spec.md`, `prompt.md`, `inputs.schema.json`)
  - `archetypes/mockup/tote-bag/` (`spec.md`, `prompt.md`, `inputs.schema.json`)
  - `archetypes/print/card-back/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/print/card-front/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/print/flyer/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/print/menu/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/print/offer-flyer/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/print/postcard/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/print/poster/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/print/rack-card/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/print/sticker/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/print/table-tent/` (`spec.md`, `template.html`, `inputs.schema.json`)
- `skills/`: one prompt per lifecycle state (intake, encode, propose, approve, generate, feedback); `bam--suggest.md`, which tells your agent how to suggest a layout for what you want to make and say why, from the rules and the research behind each layout; `bam--make-it.md`, which tells your agent how to make a real post image without the engine, `bam--mockup.md`, which tells it how to turn a passing post into a mock-up photograph with your own image model and your own key, and `bam--expression.md`, which tells it how to read what your posts say about your brand's character against your own words.
- `docs/design/system/`: the System Design router and the visual principles; `visual/why-it-works.md` says on one page why each layout works, with the research behind it in `visual/sources.md`; `visual/expression.md` is the expression map: how a post's space, colour and type say something about the brand's character, read against your own character words (`skills/bam--expression.md`, measured in the page with `archetypes/_shared/expression-measure.js`).
- `workshop/`: the brand-folder form (`workshop/brand-folder.md`), the gap note template (`workshop/gap-note.md`), the ranked next-assets prompt (`workshop/next-assets.md`), the cold-handoff prompt (`workshop/cold-handoff.md`), a free font shortlist and the month-later self-audit.
- `LICENSE.md` and `NOTICE`.

## What is not inside

- No engine. Commands named in the spec (`npm run …`) refer to HueGrid's private reference implementation, which is not included. Your own agent makes the posts instead: `skills/bam--make-it.md`.
- No brand layer: `brand/` is empty on purpose, and your agent fills it from `START.md`. Yours is yours to write.
- No reference archetypes. The photograph layout (`announcement`) is not in BAM, so a post over a photograph is a gap note (`workshop/gap-note.md`). Only sample archetypes ship.
- No font files. Fonts are licensed to their owners; bring your own.

## How to use it

Open `START.md`, paste its prompt into your own AI assistant (Claude Code, Codex, Cursor or another), and answer what it asks. It forks BAM and writes your `brand/` folder from the files and links you give it. It reads `AGENTS.md` or `CLAUDE.md` first, then the skill for the state you are in. The agent asks, proposes, writes the brand files and makes the posts itself with `skills/bam--make-it.md`: one HTML file per post, saved as a PNG. If you bring layouts of your own, it encodes those first and offers the sample layouts only for the jobs yours do not cover. When a request fits no layout, it writes a gap note (`workshop/gap-note.md`). The cold-handoff prompt lives in `workshop/cold-handoff.md`: use it to test that your `brand/` folder stands on its own in a fresh chat.

## Licence

Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0): https://creativecommons.org/licenses/by-nc-sa/4.0/

- Share: copy and redistribute in any medium or format.
- Adapt: fork it, change it, build your own harness on it.
- Attribute HueGrid Studio and keep the frontmatter. Say what you changed.
- NonCommercial: not for commercial purposes without a written agreement.
- ShareAlike: share a changed version under the same licence.

Your own brand layer and the posts you make from these archetypes are yours. The BAM master name and the HueGrid marks are not licensed. See `LICENSE.md`.

BAM master is a HueGrid Studio framework. Learn more at huegrid.com.

## Provenance

BAM version v1.0.0, generated 2026-10-28. Contract 1.6.
