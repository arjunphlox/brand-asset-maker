---
skill: poligraf/make-it
version: 1
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tags: [make, render, no-engine]
---

# Make it

**Verb: Make.** This skill is how you, the assistant, make a real post image from Brand Asset Maker (BAM) without the engine. Propose, generate and feedback all point here. You write one HTML file per post, the same way the engine's renderer does, and save a PNG of it. Then you check what you can measure and say plainly what you did not measure.

## Without the engine

This whole skill is the path without the engine. It needs only files you can read and write. A command line with Chrome is useful, but not required.

## 1. Choose the post

Write down five things before you write any HTML:

- **Layout:** one archetype folder, for example `archetypes/social-post/stat/`. If the owner has not chosen one, suggest it first with `skills/poligraf--suggest.md` (the rules in `select.md`, then the layouts' reasons). Otherwise pick it with the `select.md` of its use-case: `archetypes/social-post/select.md` for posts, `archetypes/banner/select.md` for a link preview or a profile cover, `archetypes/email/select.md` for a newsletter header.
- **Format (ratio):** one of the ratios the layout serves. If its `inputs.schema.json` has a `ratios` list, pick from that list; otherwise any ratio of its use-case. The sizes:

  | Use-case | Ratio | Frame (px) | What it is |
  |---|---|---|---|
  | social-post | `1:1` | 1080×1080 | feed post |
  | social-post | `4:5` | 1080×1350 | tall feed post |
  | social-post | `9:16` | 1080×1920 | story |
  | banner | `1.91:1` | 1200×630 | link preview (share card) |
  | banner | `4:1` | 1584×396 | profile cover |
  | email | `3:1` | 1200×400 (shown at 600×200) | newsletter header |
  | print | `A5-portrait` | 874×1240 (148×210 mm at 150 dpi) | flyer to hand out |
  | print | `A4-portrait` | 1240×1754 (210×297 mm at 150 dpi) | flyer, poster or menu for a wall |

  The other print sizes are in `archetypes/print/select.md`; a print frame is its trim size, so text stays 17px (8 pt) or larger and 30px (5 mm) inside the edge. The frame sizes and safe zones are in `poligraf.config.json` → `useCases`, if your copy has it, and in `archetypes/_shared/base.css`.
- **Scheme:** `paper`, `ink` or `accent`. It must be one of the values in the schema's `variation.scheme.values`.
- **Variation:** every other key in the schema's `variation` (for the stat: `accent`, `position`). Use the `default` for any key you did not choose. A value outside `values` is not allowed.
- **Inputs:** the text for each slot. Count words and characters against `inputs.schema.json` now, before you write HTML. Over budget means you rewrite the words or pick another layout. Never shrink the type.
- **Facts:** if the request names a message file (`messages/<name>.json`), copy each fact you use exactly as it is written there, once. Do not change a fact to make it fit. If a fact breaks badly in a large headline (a hyphenated name such as "Northside Pop-up" can split at the hyphen), move it to a smaller slot such as the `kicker`, or put a different fact in the headline.

Name the post `<layout>--<ratio with x>--<scheme>`, for example `stat--1x1--paper`. Add `--<row id>` when one generator makes several posts, and `--<theme>` when the brand has themes and this one is not the default. Pick a run name such as `m01`.

## 2. Write `out/<run>/<post>.html`

Build one self-contained document in this order. The order matters: the brand's `tokens.css` comes after `base.css` so its overrides win.

```html
<!doctype html>
<html data-ratio="1:1" data-scheme="paper"><head><meta charset="utf-8"><style>
/* fonts */
...the whole of brand/fonts.css, with each url() fixed (see below)...
/* base */
...the whole of archetypes/_shared/base.css...
/* tokens */
...the whole of brand/tokens.css...
</style>
<style>
...the contents of the <style> block at the top of the layout's template.html...
</style>
</head><body>
...the template's fragment (everything after its </style>), filled in as below...
</body></html>
```

**Find the brand folder first.** In this skill, `brand/` means the owner's brand folder. It is usually `brand/` at the project root. Every path below (fonts, logo) is written from `out/<run>/` to that folder.

**Fix the font paths.** `brand/fonts.css` points at its files relative to `brand/` (`url("fonts/Name.ttf")`). Your HTML sits in `out/<run>/`, two folders down from the project root, so rewrite each one as `url("../../brand/fonts/Name.ttf")`. A wrong path does not show an error: the post quietly falls back to another font.

**Fill the fragment.**

1. Delete any HTML comments (`<!-- … -->`) in the fragment.
2. On the element with `class="pg-frame"`, add:
   - `data-ratio="<ratio>"` and `data-scheme="<scheme>"`;
   - `data-theme="<theme>"` only if the brand defines themes (`.pg-frame[data-theme="…"]` rules in `tokens.css`);
   - one `data-<key>="<value>"` for every variation key (the template's CSS selects on these, for example `[data-accent="number"]`);
   - one `style` attribute holding `--v-<key>: <value>` for every variation key and for `scheme`, sorted by key and joined with `; `.

   For the stat in the paper scheme with the defaults, the frame tag reads:
   `<div class="pg-frame" data-archetype="social-post/stat" data-ratio="1:1" data-scheme="paper" data-accent="number" data-position="bottom" style="--v-accent: number; --v-position: bottom; --v-scheme: paper">`
3. For each text slot (`data-slot="<name>"`, not an image):
   - Put the text inside the element. Escape `&` as `&amp;`, `<` as `&lt;`, `>` as `&gt;`, `"` as `&quot;` and `'` as `&#39;`.
   - Add `data-role="<role>"`, using the slot's `role` from `inputs.schema.json`.
   - If the slot has no text and carries `data-slot-optional`, delete the whole element. The `wordmark` slot takes the wordmark from `brand/brand.json`; if there is none, delete it.
4. For the logo (`<img data-slot="logo">`), set `src` to the path from `out/<run>/` to the logo file, for example `src="../../brand/assets/logo.svg"`.
   **Pick the logo variant first.** In `tokens.css`, find `--brand-logo-variant`. A value in `:root` (or a rule with no `[data-scheme]` or `[data-theme]`) is the starting point. A rule for this post's scheme (`.pg-frame[data-scheme="accent"]`) or theme replaces it. If the result is `reversed`, use the reversed logo (`brand/assets/logo-reversed.svg`, or the `logoReversed` file in `brand/brand.json`). If there is no `--brand-logo-variant`, use the default logo. If the brand asks for `reversed` and has no reversed file, stop and tell the owner.
5. Change nothing else. No extra elements, no inline colours, no new CSS. If the post needs something the template does not have, it is a gap note (`workshop/gap-note.md`).

## 3. Save the PNG

The PNG is the frame at its full size, from the table in step 1: for example 1080×1080 for 1:1, 1200×630 for a link preview, 1584×396 for a profile cover.

**If you can run commands**, the most reliable way is Playwright, which sets the page size exactly. With Node installed:

```
npx playwright install chromium
npx playwright screenshot --viewport-size=1080,1080 --wait-for-timeout=500 file://<absolute path to the .html> <absolute path to the .png>
```

- Use the frame size from step 1 as the viewport size: 4:5 `--viewport-size=1080,1350`, 9:16 `--viewport-size=1080,1920`, link preview `--viewport-size=1200,630`, profile cover `--viewport-size=1584,396`, email header `--viewport-size=1200,400`, A5 flyer `--viewport-size=874,1240`.
- The first line downloads a browser once (about 150 MB). After that, only the second line is needed.

Without Node, you can use Chrome itself, but check the result: recent versions of Chrome make the page about 87px shorter than the window, so the bottom of the post comes out blank.

```
<chrome> --headless --hide-scrollbars --window-size=1080,1080 --screenshot=<absolute path to the .png> <absolute path to the .html>
```

- macOS: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`
- Windows: `"C:\Program Files\Google\Chrome\Application\chrome.exe"`
- Linux: `google-chrome` or `chromium`
- For a sharper image at twice the size (what the engine saves), add `--force-device-scale-factor=2`.
- If Chrome refuses to start because it runs as root (some Linux containers), add `--no-sandbox`.
- If the bottom of the PNG is blank or the last line is cut, do not use that PNG: use Playwright, or the developer-tools capture below.

Use absolute paths. Open the PNG and look at it: the last line of the post must be whole, with the margin below it. If the text is in a plain system font, the font paths are wrong: fix them and save again.

**If you cannot run commands**, tell the owner: open `out/<run>/<post>.html` in Chrome, set the window so the post fits, and take a screenshot of the post only (on a Mac: Cmd+Shift+4, then drag around the post). Or use the browser's developer tools: right-click the post, Inspect, right-click the `pg-frame` element, Capture node screenshot.

Never draw, paint or edit the PNG. To change a post, change its inputs or the brand file, then write the HTML and save the PNG again.

## 4. Check what you can measure

Write a short report next to each post. One line per check from the schema's `checks`. Each line says either what you measured or "not measured". Never write "pass" for something you did not measure.

| Check | How to measure it here |
|---|---|
| `budget` | Count words and characters per slot against `inputs.schema.json`. Show the counts. |
| `contrast` | Resolve each text colour and its surface from `tokens.css` and `base.css` for this scheme (follow each `var()` to its hex). Use the WCAG formula: relative luminance L = 0.2126 R + 0.7152 G + 0.0722 B, each channel c/255 linearised (c ≤ 0.04045 ? c/12.92 : ((c+0.055)/1.055)^2.4); ratio = (L1 + 0.05) / (L2 + 0.05), lighter on top. Text 36px and larger needs 3:1; smaller text needs 4.5:1. Sizes in `cqi` are a share of the frame width: 1cqi = frame width / 100. That is 10.8px for a 1080-wide post, 12px for a link preview or an email header (1200 wide), 15.84px for a profile cover (1584 wide). |
| `token-colors` | Every colour in the HTML comes from `tokens.css` or `base.css`. You added none. |
| `font-loaded` | Each family in `--brand-font-display` and `--brand-font-body` has an `@font-face` in `fonts.css`, and each file it points to exists at the path you wrote. Looking at the PNG for the right face counts as a check by eye; say so. |
| `role-face` | Each slot's `data-role` matches the schema, and its class uses the right face: `pg-h1`, `pg-h2`, `pg-h3`, `pg-data` for the display face; `pg-body`, `pg-label` for the body face. |
| `logo-integrity` | The logo file is the one in `locked.json` (compare its sha256 if you can run a command), and it is the variant `tokens.css` asks for. |
| `element-count` | You added no element the template did not have. |
| `facts-consistent` | Only when the request names a message file. Quote each fact as it appears in the post and mark it "exact" or "differs". A fact in a `label` slot shows in capitals because of the style; the text you wrote is still exact, so say "exact (shown in capitals)". |
| `overflow` | Two things fail it: text that spills out of its box, and a word broken across two lines in the middle of the word ("EVERYDA" on one line, "Y." on the next). The style keeps a too-long word inside its box by breaking it, so nothing looks clipped: read every line of the PNG for a word cut in two. A break right after a hyphen or a dash, or at a soft hyphen the copy contains, is fine. To measure it, open the HTML in a browser and run the snippet below in the developer-tools console; it lists every broken word, and an empty list means none. The fix is shorter copy, another layout or another size variation, never smaller type. Without a browser, mark it "checked by eye, not measured". |
| `logo-visible`, `safe-zone`, `min-text` | Look at the PNG and say what you see ("the k is clear on white", "the label sits inside the margins"). Mark these "checked by eye, not measured" unless you measured them in a browser. The smallest text is 28px for posts and banners and 32px for the email header (it shows at half size). Work it out from the cqi size and the frame width. |

The broken-word snippet for `overflow` (the engine runs the same test):

```js
[...document.querySelectorAll('.pg-frame [data-slot]')].flatMap((el) => [...el.childNodes].filter((n) => n.nodeType === 3).flatMap((n) =>
  [...n.textContent.matchAll(/[^\s\u00AD\u200B\-\u2010\u2013\u2014/]+[\-\u2010\u2013\u2014/\u00AD]?/g)].filter((m) => {
    const tops = [];
    for (let i = 0; i < m[0].length; i++) {
      if (m[0][i] === '\u00AD') continue;
      const r = document.createRange(); r.setStart(n, m.index + i); r.setEnd(n, m.index + i + 1);
      const box = [...r.getClientRects()].filter((b) => b.width > 0).pop(); // the last box: a drawn hyphen belongs to the line above
      if (box && !tops.some((t) => Math.abs(t - box.top) < box.height / 2)) tops.push(box.top);
    }
    return tops.length > 1;
  }).map((m) => `${el.dataset.slot}: "${m[0]}"`)));
```

If the brand has character words (`brand/expression.json`), add one more line, `expression`: run `archetypes/_shared/expression-measure.js` in the page and read the result through `docs/design/system/visual/expression.md` (`skills/poligraf--expression.md`), or write "not measured". It never fails a post: a mismatch makes the label **your call**.

Then label the post the way the contact sheet does: **must fix** (a measured check failed), **your call** (nothing failed, but something needs the owner's decision), or **fine** (nothing failed and nothing is open). Say which checks were not measured. Ask the two-second question: "What do you read first? It should be the <first slot in `hierarchy`>."

## Never do

- Never hand-edit a PNG or the HTML of a finished post. Fix the input or the brand file and make it again.
- Never claim a check passed when you did not measure it.
- Never add a colour, a font or an element that is not in the brand files or the template.
- Never scale a post into another format. Make the other format from the template with its own `data-ratio`.
