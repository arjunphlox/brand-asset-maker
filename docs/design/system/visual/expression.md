---
title: Expression
scope: What a post says about the brand's character, how it is measured, and the shared map that links measured parameters to character words. The third kind of rule, after utility and brand.
owns:
  - The expression map (scales, parameter rows, combination rows), its evidence marks and its thresholds
  - The three kinds of rules (utility, brand, expression) and the precedence between them
  - The expression check and its "your call" severity
  - The semantic-differential review questions on the contact sheet
see-also:
  - ./principles.md
  - ./sources.md
  - ./why-it-works.md
  - ../../../../archetypes/_shared/expression-measure.js
  - ../../../../skills/poligraf--expression.md
implements: []
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Expression

Expression is what a post says about the brand's character: its qualitative, symbolic and subjective meaning. It comes from specific parameters set in specific ways, and from how they combine. A perfectly geometric typeface, with few colours, little information and a lot of empty space, says **simple, sophisticated, machine-like**. A calligraphic typeface in bold red says **bold, raw, creative**.

## Three kinds of rules

Every check belongs to one kind. The contact sheet and `report.json` say which (`kind` on each check result).

| Kind | The question | Same for every brand? | Checks | Can it fail a post? |
|---|---|---|---|---|
| **utility** ("works for anyone") | Can people see and read it? | Yes | `contrast`, `min-text`, `safe-zone`, `overflow`, `element-count`, `budget`, `logo-visible`, `alpha`, `crop`, `image-contrast` | Yes: must fix |
| **brand** ("looks like you") | Is it this brand's colours, fonts, logo and facts? | No: read from the brand file | `token-colors`, `font-loaded`, `role-face`, `logo-integrity`, `facts-consistent` | Yes: must fix |
| **expression** ("says who you are") | Does it say what the brand wants to say about its character? | No: read from the brand's own words | `expression` | Never: your call |

**Precedence.** Utility first, then brand, then expression.

1. A utility failure is fixed even when the fix moves the post away from the brand's words. The brand adjusts and the post stays readable (Kadri's coral k uses the dark k on coral).
2. A brand value is kept even when the post would read closer to a word without it. To change the reading, change the brand value (kind `token`) with the owner; never loosen a utility threshold or bend a brand value inside one post.
3. Expression chooses only among posts that pass every utility and brand check. A preferred variation (the brand file's Expression section) that fails a utility check is not used.

## How the harness reads expression

1. **The owner's words** (intake question 10): character words (any number; fewer than seven is safe), in order of importance, recorded in `brand/expression.json` as **you said** (`locked`). Words drafted from other answers are **we guessed** (`derived`) until the owner confirms them. The harness never makes up a brand's character.
2. **Measure** the parameters in the table below: from each rendered post (`archetypes/_shared/expression-measure.js`, run in the page), from the brand file (tokens and the faces' glyphs) and from the owner's past posts.
3. **Read** the measurements through the map: each scale gets a position from -1 (its left word) to +1 (its right word), the mean of its parameter rows, each clamped. Combination rows fire on top.
4. **Compare** each word the owner gave with the post's position on that word's scale. Agreement is the position times the word's side (-1 or +1): 0.2 or more **says it**; between -0.2 and 0.2 **does not say it yet**; below -0.2 **reads the other way**, a mismatch.
   **How strongly** (Arjun, 2026-10-26): a post that says a word says it **a little** (0.2 to 0.4), **clearly** (0.4 to 0.7) or **very** (0.7 and above), the map's `degrees`. A word may carry a target `degree`; then a post at another degree gets a your-call note, and the pick prefers the post nearest the degree's centre (0.3, 0.55, 0.85) over the strongest. The bands are practice: an even split of the says-it range, to be checked against owners' answers on the sheet.
5. **Show** every mismatch to the owner: the `expression` check passes with a "your call" note, and the sheet lists it. None is fixed silently.
6. **Ask** the owner on the contact sheet: one scale per word ("simple ○○○○○ busy"), answered without seeing the measurement. An answer that disagrees with the measurement is feedback (`skills/poligraf--feedback.md`, kind `expression`).

## How each layout must come across

Every small variation changes how a post comes across: the same stat on a strong accent ground reads bold, playful and warm; on white it reads simple, plain and serious. So each layout also says how it must come across to the viewer, apart from the brand's character (Arjun, 2026-10-26).

1. **The layout's words.** Each layout's `inputs.schema.json` carries `"appear": { "words": [...], "why": "..." }`: one or two map words for what its job needs (a stat: confident, credible; a quote: understated, credible; an offer: energetic, cheerful), and its `spec.md` has a **How it comes across** section saying why. They are a default.
2. **Who can change them.** A brand replaces them for one layout in `brand/expression.json` `appear` (`{ "<layout id>": { "words": [...], "status", "source" } }`). One post asks for something else with `"appear": [...]` on the generator, a row or a frame. The post's ask wins, then the brand's, then the layout's.
3. **What each variation does.** `npm run propose -- --run <name> --variants` renders, besides every scheme, every other value of each variation key, one key at a time. `npm run expression -- --run out/<name>` compares each post with its twin (the same post with that key at its default) and lists, per layout and key, the words each value moves the post toward ("scheme (against paper): accent → warm, playful, bold, busy"; "align (against start): center → traditional"). A value that moves nothing measurable says "little change": the map cannot see it yet, and the owner's eye decides.
4. **Picking the variant.** Among the posts that pass every utility and brand check, the harness prefers the one that comes across closest: first the one that says the most of the layout's words and reads the other way on the fewest, then the same for the brand's words, then `fitScore` (the layout's words weigh 3 each, the brand's first word 2 and the others 1; `compareFit` in `scripts/lib/expression.mjs`). A post that says every layout word always beats one that reads the other way on any of them, however close the scores.
   **Several variants can give the same feeling** (Arjun, 2026-10-26). Two posts come across the same when every target word gets the same verdict (says it, not yet, reads the other way; `feelingOf`). They are equally good: the preference keeps the best one in `variation` and the others in `also`, every one of them is marked preferred on the sheet, and a series may rotate among them for variety. The quote on white or navy, with a bar or no mark, comes across the same way: understated and credible. When the owner approves one of them, it moves to `variation` and the others stay in `also`. `npm run expression -- --run out/<name> --write` drafts each layout's `prefer` this way (we guessed); `npm run expression -- --run out/<name> --layout social-post/stat --appear "simple,professional"` ranks the variants for one ask.
5. **How strongly.** Variants differ in how strongly they say a word: on the sheet the stat is very bold on a strong accent ground and a little bold on white. Every line says the degree with the word. Variants come across the same only when each word gets the same verdict and the same degree. When the brand input gives no degree for a word and the variants on the sheet differ, the harness does not choose: `npm run expression -- --run out/<name>` asks ("How confident should it be: a little, clearly or very?"), `npm run doctor` lists every brand word without one, and BRAND.md shows "not set: ask". The answer goes in as `degree` on the word (brand words, `appear` words as `{ "word", "degree" }`, a generator's `"word:degree"`).
6. **Reporting.** The `expression` check compares the post with the layout's words too: "This layout should come across confident; this post reads quiet (…)". A mismatch with either the layout's or the brand's words is a your-call note. The contact sheet asks the layout's scales first, then the brand's, and marks the preferred post "comes closest to how this layout should come across".

## Parameters

| Parameter | What is measured | How |
|---|---|---|
| `whiteSpace` | share of the frame with nothing on it | 1 − the share covered by glyph line boxes, images, the logo and painted shapes (6px grid) |
| `elements` | how many things are on the post | visible filled slots, the logo included |
| `colours` | how many colours the post paints | distinct colours (OKLab distance 0.03 merges near-equal ones) covering 0.2% of the frame or more, text included |
| `accentShare` | how much of the frame is in a strong colour | share of the frame painted in a colour with OKLCH chroma 0.06 or more |
| `chroma` | how strong the strongest colour is | highest OKLCH chroma among the colours counted in `colours` |
| `warmth` | warm or cool colour | over the whole frame, by area of the strong colours: hue 0–100° or 330–360° counts +1, 180–300° counts −1 (a warm ground reads warm; a small warm number on white barely does) |
| `red` | how much red | share of the frame in a strong colour with hue 0–45° or 340–360° |
| `groundChroma` | how strong the ground is | OKLCH chroma of the largest colour on the post (a white or black ground is near 0; a strong yellow ground is about 0.17) |
| `groundLight` | how light the ground is | OKLCH lightness of the largest colour |
| `scaleRatio` | how much bigger the biggest text is | largest font size / smallest |
| `shapes` | how many graphic marks | painted shapes (bars, panels, chips) besides the text |
| `displaySize` | how big the biggest text is | its font size as a share of the frame width, in % |
| `centred` | how much text is centred | share of the text slots set `text-align: center` (centred, symmetric layouts read classic and formal; text set from the left reads modern) |
| `levels` | levels of hierarchy | distinct text sizes in use, rounded to 2px |
| `detail` | supporting detail | share of the layout's optional text slots that are filled (a source, a label, supporting lines); none when the layout has no optional slots |
| `specific` | specific content | share of the filled text slots naming something specific: a number, a unit or currency, or a proper name mid-sentence |
| `spread` | text spread across the frame | horizontal distance between the outer text slot centres, as a share of the width; read only from 0.15 |
| `lines` | thin painted lines | painted shapes with one side at least 8 times the other (rules, the HueGrid lines); read only when there is one |
| `massY` | where the weight sits | centre of mass of the covered cells, top (0) to bottom (1); weight low in the frame reads settled and calm, weight high reads lifted and lively |
| `weight` | how heavy the display type is | heaviest weight among display roles |
| `upper` | how much is in capitals | share of the letters shown in capitals |
| `tracking` | how widely the display type is spaced | widest letter-spacing among display roles, in em |
| `radius` | how round the corners are | largest corner radius on a painted shape, else `--brand-radius`, in px |
| `faceClass` | what kind of typeface the display face is | the class the brand file states (`brand/expression.json` `faces.display.class`), else measured: a foot over 1.5 is a serif (stroke contrast 3 or more: didone; 1.4 or less: slab); a sans with an "o" at least 0.95 as wide as tall is geometric, with stroke contrast 1.5 or more humanist, else grotesque. Script, calligraphic and brush faces cannot be measured this way: the brand file states them. |
| `contrast` | stroke contrast of the display face | thickest / thinnest stroke of its "o" |
| `roundness` | how round the display face is | width / height of its "o" |

All of these are proxies. A number moves the reading; the owner's eye decides.

## The map

Each row links one parameter to one scale. `at: [a, b]` means the value `a` reads as the scale's left word (−1) and `b` as its right word (+1), straight in between and clamped outside. A categorical parameter gives each value its position. Each row is marked **research** (with the sources it cites, from [sources.md](./sources.md)) or **practice** (HueGrid practice, not a research finding). Words list the synonyms an owner may use; any other word is reported as "not in the map" for the agent to raise, never guessed.

| Scale | Left word reads from | Right word reads from | Evidence |
|---|---|---|---|
| simple ↔ busy | much white space, few elements, few colours | little space, many elements, many colours | research: Pieters et al. 2010 |
| quiet ↔ bold | little strong colour, light weight, small jump in scale | large areas of saturated colour, heavy weight, big jump in scale | research for colour: Labrecque & Milne 2012; weight: Henderson et al. 2004; scale: practice |
| precise ↔ raw | geometric and grotesque faces | script, calligraphic and brush faces | research: Henderson et al. 2004; Brumberger 2003 |
| soft ↔ hard | round corners, a round face | square corners, a narrow, angular face | research: Jiang et al. 2016 |
| warm ↔ cool | warm hues | cool hues | practice |
| refined ↔ everyday | the most space, one or two colours, high stroke contrast, wide tracking, light weight | little space, many colours, plain heavy type | research for space: Pracejus et al. 2006, 2013; vocabulary: Aaker 1997; type: practice |
| modern ↔ traditional | geometric and grotesque faces | old-style and transitional serifs | practice |
| playful ↔ serious | many colours, large areas of colour, warm hues | few colours, little colour, cool hues (blue reads competent) | research for blue: Labrecque & Milne 2012; the rest: practice |

**Combinations carry the meaning.** A single parameter rarely says a word alone: a geometric face reads sophisticated when the post is sparse and quiet, and playful or retro when the same face is dense and loud. The combination rows below encode the examples the owner gave. **Context changes it:** what a colour means depends on the category and the culture (Pracejus et al. 2013 found it for white space), so a mismatch is always the owner's call.

The machine-readable map, which the engine and an agent without it both read:

```json expression-map
{
  "agreement": { "says": 0.2, "mismatch": -0.2 },
  "degrees": [ { "id": "a little", "from": 0.2, "centre": 0.3 }, { "id": "clearly", "from": 0.4, "centre": 0.55 }, { "id": "very", "from": 0.7, "centre": 0.85 } ],
  "scales": [
    {
      "id": "simple-busy", "left": "simple", "right": "busy",
      "words": { "left": ["simple", "minimal", "minimalist", "sparse", "clean", "plain", "uncluttered", "calm"], "right": ["busy", "dense", "cluttered", "rich", "full", "maximal", "maximalist"] },
      "rows": [
        { "param": "whiteSpace", "at": [0.7, 0.35], "evidence": ["pieters-2010"] },
        { "param": "elements", "at": [3, 7], "evidence": ["pieters-2010"] },
        { "param": "colours", "at": [2, 5], "evidence": ["pieters-2010"] },
        { "param": "groundChroma", "at": [0.02, 0.15], "evidence": "practice" },
        { "param": "shapes", "at": [0, 3], "evidence": "practice" }
      ],
      "prefer": { "left": { "scheme": "paper", "accent": "none" }, "right": {} }
    },
    {
      "id": "quiet-bold", "left": "quiet", "right": "bold",
      "words": { "left": ["quiet", "subtle", "understated", "restrained", "unhurried", "muted"], "right": ["bold", "loud", "energetic", "exciting", "vibrant", "confident", "daring", "striking"] },
      "rows": [
        { "param": "accentShare", "at": [0.05, 0.5], "w": 0.5, "evidence": ["labrecque-milne-2012"] },
        { "param": "chroma", "at": [0.04, 0.2], "evidence": ["labrecque-milne-2012"] },
        { "param": "weight", "at": [250, 650], "evidence": ["henderson-2004"] },
        { "param": "scaleRatio", "at": [2, 8], "evidence": "practice" },
        { "param": "displaySize", "at": [8, 30], "w": 2, "evidence": "practice" },
        { "param": "massY", "at": [0.7, 0.3], "w": 0.25, "evidence": "practice" }
      ],
      "prefer": { "left": { "scheme": "paper", "accent": "none" }, "right": { "scheme": "accent" } }
    },
    {
      "id": "precise-raw", "left": "precise", "right": "raw",
      "words": { "left": ["precise", "machine-like", "technical", "exact", "engineered", "systematic", "rational"], "right": ["raw", "handmade", "handcrafted", "organic", "expressive", "creative", "rough", "artisanal"] },
      "rows": [
        { "param": "faceClass", "values": { "geometric": -1, "grotesque": -0.7, "slab": -0.3, "didone": -0.2, "serif": 0, "humanist": 0.2, "script": 1, "calligraphic": 1, "brush": 1 }, "evidence": ["henderson-2004", "brumberger-2003"] }
      ],
      "prefer": { "left": {}, "right": {} }
    },
    {
      "id": "soft-hard", "left": "soft", "right": "hard",
      "words": { "left": ["soft", "friendly", "approachable", "comfortable", "gentle", "cuddly", "welcoming"], "right": ["hard", "tough", "durable", "strong", "rugged", "solid", "robust"] },
      "rows": [
        { "param": "radius", "at": [16, 0], "evidence": ["jiang-2016"] },
        { "param": "roundness", "at": [1.0, 0.82], "evidence": ["jiang-2016"] }
      ],
      "prefer": { "left": {}, "right": {} }
    },
    {
      "id": "warm-cool", "left": "warm", "right": "cool",
      "words": { "left": ["warm", "cosy", "cozy", "inviting", "sunny"], "right": ["cool", "crisp", "fresh", "clinical", "icy"] },
      "rows": [
        { "param": "warmth", "at": [0.4, -0.4], "evidence": "practice" }
      ],
      "prefer": { "left": {}, "right": {} }
    },
    {
      "id": "refined-everyday", "left": "refined", "right": "everyday",
      "words": { "left": ["refined", "elegant", "luxurious", "luxury", "premium", "upscale", "prestigious", "exclusive", "sleek"], "right": ["everyday", "down-to-earth", "casual", "accessible", "affordable", "unpretentious", "homely"] },
      "rows": [
        { "param": "whiteSpace", "at": [0.72, 0.35], "evidence": ["pracejus-2006", "pracejus-2013"] },
        { "param": "colours", "at": [2, 5], "evidence": "practice" },
        { "param": "contrast", "at": [3, 1.2], "evidence": "practice" },
        { "param": "tracking", "at": [0.08, 0], "evidence": "practice" },
        { "param": "weight", "at": [300, 700], "evidence": "practice" },
        { "param": "groundChroma", "at": [0.02, 0.15], "evidence": "practice" }
      ],
      "prefer": { "left": { "scheme": "paper", "accent": "none" }, "right": {} }
    },
    {
      "id": "modern-traditional", "left": "modern", "right": "traditional",
      "words": { "left": ["modern", "contemporary", "innovative", "new", "progressive", "futuristic"], "right": ["traditional", "established", "classic", "heritage", "timeless", "old-world"] },
      "rows": [
        { "param": "faceClass", "values": { "geometric": -1, "grotesque": -0.8, "humanist": -0.3, "slab": 0.2, "didone": 0.4, "serif": 1, "script": 0.5, "calligraphic": 0.6, "brush": 0 }, "evidence": "practice" },
        { "param": "centred", "at": [0, 1], "evidence": "practice" }
      ],
      "prefer": { "left": {}, "right": {} }
    },
    {
      "id": "playful-serious", "left": "playful", "right": "serious",
      "words": { "left": ["playful", "fun", "cheerful", "quirky", "youthful", "whimsical", "joyful"], "right": ["serious", "formal", "professional", "competent", "reliable", "trustworthy", "credible", "dependable"] },
      "rows": [
        { "param": "colours", "at": [5, 2], "evidence": "practice" },
        { "param": "accentShare", "at": [0.5, 0.05], "evidence": "practice" },
        { "param": "warmth", "at": [0.5, -0.5], "evidence": ["labrecque-milne-2012"] },
        { "param": "spread", "at": [0.4, 0], "evidence": "practice" },
        { "param": "lines", "at": [6, 0], "w": 2, "evidence": "practice" }
      ],
      "prefer": { "left": { "scheme": "accent" }, "right": { "scheme": "paper" } }
    },
    {
      "id": "basic-considered", "left": "basic", "right": "considered",
      "words": { "left": ["basic", "generic", "shallow", "superficial", "bare"], "right": ["considered", "sophisticated", "thoughtful", "deep", "insightful", "intelligent", "well-thought-out"] },
      "rows": [
        { "param": "levels", "at": [1, 4], "evidence": "practice" },
        { "param": "detail", "at": [0, 1], "evidence": "practice" },
        { "param": "specific", "at": [0, 0.6], "evidence": "practice" }
      ],
      "note": "Arjun, 2026-10-26: sophisticated is how thoughtful and deep each piece of information is, and how deeply the layout and expression are thought through beyond the basics. These rows are signs only; the owner's answer on the sheet has the final say.",
      "prefer": { "left": {}, "right": {} }
    }
  ],
  "combinations": [
    {
      "id": "geometric-sparse",
      "when": [ { "param": "faceClass", "in": ["geometric", "grotesque"] }, { "scale": "simple-busy", "max": -0.3 }, { "scale": "quiet-bold", "max": 0.1 } ],
      "says": ["simple", "refined", "machine-like"],
      "evidence": ["pracejus-2006"], "note": "The owner's first example (Arjun, 2026-10-25). Space backed by research; the face in combination is practice."
    },
    {
      "id": "geometric-loud",
      "when": [ { "param": "faceClass", "in": ["geometric"] }, { "scale": "simple-busy", "min": 0.3 }, { "scale": "quiet-bold", "min": 0.3 } ],
      "says": ["playful", "retro"],
      "evidence": "practice", "note": "The same geometric face, dense and in loud colours."
    },
    {
      "id": "calligraphic-red",
      "when": [ { "param": "faceClass", "in": ["script", "calligraphic", "brush"] }, { "param": "red", "min": 0.1 }, { "scale": "quiet-bold", "min": 0.2 } ],
      "says": ["bold", "raw", "creative"],
      "evidence": ["labrecque-milne-2012"], "note": "The owner's second example (Arjun, 2026-10-25). Red backed by research; the face is practice."
    },
    {
      "id": "didone-space",
      "when": [ { "param": "faceClass", "in": ["didone"] }, { "param": "whiteSpace", "min": 0.6 } ],
      "says": ["elegant", "luxurious"],
      "evidence": ["pracejus-2006"], "note": "Space backed by research; the face is practice."
    }
  ]
}
```

`prefer` on a scale is a hint for the brand file's Expression section: the variation a layout should lean to for that word, used only where the layout has that key and value. The engine drafts each layout's preference from a contact sheet instead (the passing sample that agrees most with the owner's words) and uses the hints only to break a tie.

## Brand file: `brand/expression.json` and BRAND.md

`brand/expression.json` (contract 1.6, optional; absent, nothing about expression runs):

```json
{
  "contractVersion": "1.6",
  "words": [ { "word": "simple", "degree": "very", "status": "locked", "source": "intake question 10" } ],
  "faces": { "display": { "class": "geometric", "status": "derived", "source": "measured: o 1.00 wide, contrast 1.1, no foot" } },
  "appear": { "social-post/offer": { "words": ["calm", { "word": "refined", "degree": "a little" }], "status": "locked", "source": "the owner: our offers are never loud" } },
  "prefer": { "social-post/stat": { "variation": { "scheme": "paper", "accent": "none" }, "status": "derived", "source": "p01: stat--1x1--paper agrees most" } },
  "reading": { "generated": "…", "brand": { "simple-busy": -0.4 }, "posts": { "simple-busy": -0.6 } }
}
```

BRAND.md gains a section **Expression**, written by Encode and copied from this file: each word (you said / we guessed), what the brand file and the past posts say on its scale, every mismatch in plain words, and for each layout the preferred variation with the evidence behind it. Layouts choose inside those preferences; templates stay token-only.

## Decisions

- 2026-10-26 — The stat's decorative lines were removed (Arjun: they mean nothing and only decorate). The `lines` row stays on the map: thin lines that do a job (a rule, a divider) still read playful.

- 2026-10-26 — No staggered characters on a still post (Arjun: "that works in motion but not static since it affects legibility"). Characters at different heights belong to motion, as in a site's hero that moves on scroll; the stat's `stagger` option and the renderer's character split were removed.
- 2026-10-26 — Bold grows with thicker or bigger type, and playful has more ways in (Arjun). Reference point: the giant accent number on white is "a bit bold", 2.5 of 5, so it must measure a little bold (it does: 0.33). quiet / bold rows are now weighted (`w`, default 1; a scale is the weighted mean): display size counts double, accent area half, the position of the ink a quarter; the weight and size ranges widened. playful / serious gains two practice rows, each read only when present: `spread` (text spread across the width) and `lines` (thin painted lines, the HueGrid expanding lines). On the stat these are the variations `layout: column` and `block: solid`; a large dark number on a white block on a strong light accent ground reads clearly bold and clearly playful (Arjun's example; measured 0.64 and 0.48). White type on a light accent ground can fail contrast, so such a post keeps dark type.

- 2026-10-26 — Sophisticated means considered (Arjun: "how thoughtful and deep each info piece is and how deeply thought the expression, the layout, etc is beyond just the basics"). It left the refined / everyday scale (surface polish) for a new basic / considered scale, measured from signs in the content: levels of hierarchy, supporting detail filled, specific numbers and names (all practice). Pixels cannot see depth of thought, so the owner's answer on the sheet (basic ○○○○○ considered) has the final say. The geometric-sparse combination now says refined, not sophisticated.
- 2026-10-26 — Any number of character words; fewer than seven is safe (Arjun: more "complicates and narrows possibilities and dilutes the brand"). Seven or more is a warning, never a refusal. Order still sets the weight: the first word counts most. HueGrid's four, from Arjun: simple, sophisticated, bold, playful.
- 2026-10-26 — How strongly (Arjun: "how much bold, how much playful a variant is ... can be different across variants. That scale must also be shown or asked if not clearly defined in brand input"). Three degrees above the says-it line (a little, clearly, very; map `degrees`, practice). Every reading names the degree; an optional target `degree` on any word steers the pick toward that strength and flags a post at another one as your call; the same feeling now needs the same degree; an open degree is asked, never guessed.

- 2026-10-26 — Several variants can give the same feeling (Arjun). The pick is no longer one winner by score: variants whose every target word gets the same verdict are equally good (`prefer.also`), and a post that says every layout word always ranks above one that reads the other way, whatever the scores.
- 2026-10-26 — Each layout says how it must come across (Arjun: "every small variation to type, color, positions, graphic can change how it appears"). Layout default words in every schema (`appear`), overridable by the brand per layout and by one post; the variant is picked by the layout's words first, the brand's next, only among posts that pass every check. New parameters so variations register: `groundChroma` and `groundLight` (a light neutral ground reads clean and plain), `shapes` (graphic marks), `displaySize`, `centred` and `massY`; `warmth` now counts by frame share, so a small warm number on white no longer reads fully warm. New map words: plain, sleek. All the new rows are practice.
- 2026-10-25 — Expression added as the third kind of rule (Arjun). Utility clears what can be measured as right or wrong; expression is what is left, read from the owner's words through a sourced map, and it is never a must fix. Contract 1.6.

## Never do

- Never make up a brand's character. The words come from the owner; a drafted word is we guessed until confirmed.
- Never fail a post for expression, and never let a preference override a utility or brand check.
- Never edit a post to make it read as a word. Change the brand value, the preference or the map row, then make the post again.
- Never add a map row without marking it research (with a source from sources.md) or practice.
