# Poligraf System Design

Tessor-shaped System Design for this harness. Modules carry YAML frontmatter (`title`, `scope`, `owns`, `see-also`, `implements`), `## Decisions` and `## Never do`. Archetype specs under `archetypes/**/spec.md` follow the same contract and are the primary modules; `npm run manifest` parses both trees.

- `visual/principles.md` — the five principles and their enforcing checks (shared).
- `visual/why-it-works.md` — one page, every form and layout: why each one works for the viewer, with sources (shared).
- `visual/sources.md` — the checked research and standards those reasons cite, each with the one claim it supports (shared).
- `visual/expression.md` — what a post says about the brand's character: the three kinds of rules (utility, brand, expression) and their order, the parameters, and the sourced expression map (shared).
- `usecases/<use-case>.md` — per-brand notes on how this brand uses a use-case (project-owned).

Working rules: every learning is a dated entry in the owning module's Decisions; archetype-level learnings are proposed upstream.
