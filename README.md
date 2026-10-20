# Brand Asset Maker (BAM) by HueGrid

Poligraf is a HueGrid Studio framework for producing on-brand assets with an AI assistant. Brand Asset Maker (BAM) is the part of Poligraf that participants keep: the spec, the archetypes and the operating prompts.

## What is inside

- `showcase.html`: open it first. One page: a break and its fix, a story post, a Do and a Don't for each layout, and what each check means.
- `AGENTS.md` and `CLAUDE.md` (the same note): where an AI assistant starts when it opens this folder.
- `SPEC.md`: the contracts (tokens, fonts, template, inputs schema, checks, report, locked values, approvals, generators, feedback kinds).
- `archetypes/README.md` and `archetypes/_shared/base.css`: how an archetype is built and the shared plumbing it relies on.
- `archetypes/social-post/select.md`: which archetype fits which content.
- Sample archetypes:
  - `archetypes/social-post/headline/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/quote/` (`spec.md`, `template.html`, `inputs.schema.json`)
  - `archetypes/social-post/stat/` (`spec.md`, `template.html`, `inputs.schema.json`)
- `skills/`: one operating prompt per lifecycle state (intake, encode, propose, approve, generate, feedback).
- `docs/design/system/`: the System Design router and the visual principles.
- `workshop/`: workshop material, including the cold-handoff prompt (`workshop/cold-handoff.md`).
- `examples/kadri/`: a worked example brand, start with its `README.md`. Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission.
- `LICENSE.md` and `NOTICE`.

## What is not inside

- No renderer. Commands named in the spec refer to a reference implementation that is not distributed.
- No brand layer but one small worked example (`examples/kadri/`). Yours is yours to write.
- No reference archetypes (the photograph-grade ones). Only sample archetypes ship.
- No font files, except the worked example's two OFL fonts, each beside its licence. Fonts are licensed to their owners; bring your own.

## How to use it

Attach `SPEC.md`, `skills/`, the `archetypes/` folder and your own `brand/` folder to any AI assistant, then follow the skill for the state you are in. The assistant asks, proposes and writes rules; anything that renders or checks must implement the spec. The cold-handoff prompt lives in `workshop/cold-handoff.md`: use it to test that your `brand/` folder stands on its own in a fresh chat.

## Licence

Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0): https://creativecommons.org/licenses/by-nc-nd/4.0/

- Share: copy and redistribute in any medium or format.
- Attribute HueGrid Studio and keep the frontmatter.
- NonCommercial: not for commercial purposes without a written agreement.
- NoDerivatives: if you remix, transform or build upon BAM, you may not distribute the modified material.

Your own brand layer and the assets you render from these archetypes are yours. The Poligraf name and the HueGrid marks are not licensed. See `LICENSE.md`.

Poligraf is a HueGrid Studio framework. Learn more at huegrid.com.

## Provenance

BAM version v1.0.0, generated 2026-10-20. Contract 1.4.
