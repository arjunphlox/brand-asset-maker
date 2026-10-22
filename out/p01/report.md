# Run p01: the Kadri pop-up event post (proposal)

Made 2026-10-22T13:58:19.642Z without the engine, by `out/p01/make.mjs` (template filled as the renderer does, PNG by Playwright/Chromium at 1x, checks measured in the browser). Message `messages/kadri-popup.json`: name = "Kadri Pop-up" · date = "8 November" · place = "Mill Lane Market". Variation: align: start, accent: none, rule: none, cta: pill, highlight: none, head: logo, foot: stack. Kadri Coffee is fictional teaching material by Madhuri Maram.

| Sample | Format | Scheme | Result | Failed checks |
|---|---|---|---|---|
| `event--1x1--paper` | 1:1 | paper | pass | none |
| `event--1x1--ink` | 1:1 | ink (logo reversed) | pass | none |
| `event--1x1--accent` | 1:1 | accent | pass | none |
| `event--4x5--paper` | 4:5 | paper | pass | none |
| `event--9x16--paper` | 9:16 | paper | pass | none |

Every check below was measured; none is "not measured". Thresholds: contrast 4.5:1 under 36px and 3:1 at 36px and above (WCAG); text 28px or larger; safe zone 72px all round at 1:1, 250 top and bottom at 4:5, 250 top and 340 bottom at 9:16 (the 9:16 numbers are an estimate, to re-measure); the logo shows when at least 40% of its opaque pixels reach 1.5:1 on their ground.

## event--1x1--paper

- `budget` pass: name: 2 of 5 words, 12 of 32 chars; date: 2 of 4 words, 10 of 24 chars; place: 3 of 6 words, 16 of 40 chars; cta: 3 of 3 words, 14 of 20 chars
- `contrast` pass: name #302037 on #fff5df at 118.8px: 13.97:1 (needs 3); date #302037 on #fff5df at 75.6px: 13.97:1 (needs 3); place #302037 on #fff5df at 49.7px: 13.97:1 (needs 3); cta #302037 on #ff603e at 30.2px: 5.04:1 (needs 4.5)
- `min-text` pass: name 118.80px; date 75.60px; place 49.68px; cta 30.24px (floor 28px)
- `safe-zone` pass: safe box 72,72 to 1008,1008 (config 72/72/72/72); logo 72,72-109,109; name 72,561-759,728; date 72,720-490,826; place 72,824-429,894; cta 102,950-369,993
- `overflow` pass: name scroll width 687 in 687, glyph box 72,561-759,728; date scroll width 418 in 418, glyph box 72,720-490,826; place scroll width 357 in 357, glyph box 72,824-429,894; cta scroll width 327 in 327, glyph box 102,950-369,993; block 589-1008
- `element-count` pass: 14 elements inside the frame; template 18, 4 empty optional slots removed
- `token-colors` pass: colours rendered: #302037, #ff603e, #fff5df; tokens: #fff5df, #302037, #ff603e
- `logo-integrity` pass: brand/assets/logo.svg sha256 6eb7bf1b410a530f44fbf715bc52ac836470cc5b38adcdd870ccb91d269bb50c; locked.json 6eb7bf1b410a530f44fbf715bc52ac836470cc5b38adcdd870ccb91d269bb50c; variant default
- `logo-visible` pass: 313 opaque pixels at 36.7x36.7px; 100.0% reach 1.5:1 on #fff5df (100.0% reach 3:1)
- `font-loaded` pass: document.fonts loaded: Mona Sans; check(500 Mona Sans)=true, check(400 Mona Sans)=true
- `role-face` pass: name role=h1 face=Mona Sans weight=500; date role=h2 face=Mona Sans weight=500; place role=body face=Mona Sans weight=400; cta role=label face=Mona Sans weight=500
- `facts-consistent` pass: name: "Kadri Pop-up" vs name "Kadri Pop-up" exact; date: "8 November" vs date "8 November" exact; place: "Mill Lane Market" vs place "Mill Lane Market" exact
- Approving this locks: --brand-accent-ink, --brand-muted, --brand-tracking-display, --brand-tracking-label, --brand-radius

## event--1x1--ink

- `budget` pass: name: 2 of 5 words, 12 of 32 chars; date: 2 of 4 words, 10 of 24 chars; place: 3 of 6 words, 16 of 40 chars; cta: 3 of 3 words, 14 of 20 chars
- `contrast` pass: name #fff5df on #302037 at 118.8px: 13.97:1 (needs 3); date #fff5df on #302037 at 75.6px: 13.97:1 (needs 3); place #fff5df on #302037 at 49.7px: 13.97:1 (needs 3); cta #302037 on #ff603e at 30.2px: 5.04:1 (needs 4.5)
- `min-text` pass: name 118.80px; date 75.60px; place 49.68px; cta 30.24px (floor 28px)
- `safe-zone` pass: safe box 72,72 to 1008,1008 (config 72/72/72/72); logo 72,72-109,109; name 72,561-759,728; date 72,720-490,826; place 72,824-429,894; cta 102,950-369,993
- `overflow` pass: name scroll width 687 in 687, glyph box 72,561-759,728; date scroll width 418 in 418, glyph box 72,720-490,826; place scroll width 357 in 357, glyph box 72,824-429,894; cta scroll width 327 in 327, glyph box 102,950-369,993; block 589-1008
- `element-count` pass: 14 elements inside the frame; template 18, 4 empty optional slots removed
- `token-colors` pass: colours rendered: #fff5df, #302037, #ff603e; tokens: #fff5df, #302037, #ff603e
- `logo-integrity` pass: brand/assets/logo-reversed.svg sha256 551a9d1972fa0fc75bcafba5ba45bbd91c60b1b399b7c6bf9f7b59245373d17e; locked.json 551a9d1972fa0fc75bcafba5ba45bbd91c60b1b399b7c6bf9f7b59245373d17e; variant reversed
- `logo-visible` pass: 313 opaque pixels at 36.7x36.7px; 100.0% reach 1.5:1 on #302037 (100.0% reach 3:1)
- `font-loaded` pass: document.fonts loaded: Mona Sans; check(500 Mona Sans)=true, check(400 Mona Sans)=true
- `role-face` pass: name role=h1 face=Mona Sans weight=500; date role=h2 face=Mona Sans weight=500; place role=body face=Mona Sans weight=400; cta role=label face=Mona Sans weight=500
- `facts-consistent` pass: name: "Kadri Pop-up" vs name "Kadri Pop-up" exact; date: "8 November" vs date "8 November" exact; place: "Mill Lane Market" vs place "Mill Lane Market" exact
- Approving this locks: --brand-accent-ink, --brand-muted, --brand-tracking-display, --brand-tracking-label, --brand-radius, --brand-logo-variant

## event--1x1--accent

- `budget` pass: name: 2 of 5 words, 12 of 32 chars; date: 2 of 4 words, 10 of 24 chars; place: 3 of 6 words, 16 of 40 chars; cta: 3 of 3 words, 14 of 20 chars
- `contrast` pass: name #302037 on #ff603e at 118.8px: 5.04:1 (needs 3); date #302037 on #ff603e at 75.6px: 5.04:1 (needs 3); place #302037 on #ff603e at 49.7px: 5.04:1 (needs 3); cta #ff603e on #302037 at 30.2px: 5.04:1 (needs 4.5)
- `min-text` pass: name 118.80px; date 75.60px; place 49.68px; cta 30.24px (floor 28px)
- `safe-zone` pass: safe box 72,72 to 1008,1008 (config 72/72/72/72); logo 72,72-109,109; name 72,561-759,728; date 72,720-490,826; place 72,824-429,894; cta 102,950-369,993
- `overflow` pass: name scroll width 687 in 687, glyph box 72,561-759,728; date scroll width 418 in 418, glyph box 72,720-490,826; place scroll width 357 in 357, glyph box 72,824-429,894; cta scroll width 327 in 327, glyph box 102,950-369,993; block 589-1008
- `element-count` pass: 14 elements inside the frame; template 18, 4 empty optional slots removed
- `token-colors` pass: colours rendered: #302037, #ff603e; tokens: #fff5df, #302037, #ff603e
- `logo-integrity` pass: brand/assets/logo.svg sha256 6eb7bf1b410a530f44fbf715bc52ac836470cc5b38adcdd870ccb91d269bb50c; locked.json 6eb7bf1b410a530f44fbf715bc52ac836470cc5b38adcdd870ccb91d269bb50c; variant default
- `logo-visible` pass: 313 opaque pixels at 36.7x36.7px; 100.0% reach 1.5:1 on #ff603e (100.0% reach 3:1)
- `font-loaded` pass: document.fonts loaded: Mona Sans; check(500 Mona Sans)=true, check(400 Mona Sans)=true
- `role-face` pass: name role=h1 face=Mona Sans weight=500; date role=h2 face=Mona Sans weight=500; place role=body face=Mona Sans weight=400; cta role=label face=Mona Sans weight=500
- `facts-consistent` pass: name: "Kadri Pop-up" vs name "Kadri Pop-up" exact; date: "8 November" vs date "8 November" exact; place: "Mill Lane Market" vs place "Mill Lane Market" exact
- Approving this locks: --brand-accent-ink, --brand-muted, --brand-tracking-display, --brand-tracking-label, --brand-radius

## event--4x5--paper

- `budget` pass: name: 2 of 5 words, 12 of 32 chars; date: 2 of 4 words, 10 of 24 chars; place: 3 of 6 words, 16 of 40 chars; cta: 3 of 3 words, 14 of 20 chars
- `contrast` pass: name #302037 on #fff5df at 118.8px: 13.97:1 (needs 3); date #302037 on #fff5df at 75.6px: 13.97:1 (needs 3); place #302037 on #fff5df at 49.7px: 13.97:1 (needs 3); cta #302037 on #ff603e at 30.2px: 5.04:1 (needs 4.5)
- `min-text` pass: name 118.80px; date 75.60px; place 49.68px; cta 30.24px (floor 28px)
- `safe-zone` pass: safe box 72,250 to 1008,1100 (config 72/250/72/250); logo 72,250-109,287; name 72,653-759,820; date 72,813-490,919; place 72,916-429,986; cta 102,1042-369,1085
- `overflow` pass: name scroll width 687 in 687, glyph box 72,653-759,820; date scroll width 418 in 418, glyph box 72,813-490,919; place scroll width 357 in 357, glyph box 72,916-429,986; cta scroll width 327 in 327, glyph box 102,1042-369,1085; block 681-1100
- `element-count` pass: 14 elements inside the frame; template 18, 4 empty optional slots removed
- `token-colors` pass: colours rendered: #302037, #ff603e, #fff5df; tokens: #fff5df, #302037, #ff603e
- `logo-integrity` pass: brand/assets/logo.svg sha256 6eb7bf1b410a530f44fbf715bc52ac836470cc5b38adcdd870ccb91d269bb50c; locked.json 6eb7bf1b410a530f44fbf715bc52ac836470cc5b38adcdd870ccb91d269bb50c; variant default
- `logo-visible` pass: 313 opaque pixels at 36.7x36.7px; 100.0% reach 1.5:1 on #fff5df (100.0% reach 3:1)
- `font-loaded` pass: document.fonts loaded: Mona Sans; check(500 Mona Sans)=true, check(400 Mona Sans)=true
- `role-face` pass: name role=h1 face=Mona Sans weight=500; date role=h2 face=Mona Sans weight=500; place role=body face=Mona Sans weight=400; cta role=label face=Mona Sans weight=500
- `facts-consistent` pass: name: "Kadri Pop-up" vs name "Kadri Pop-up" exact; date: "8 November" vs date "8 November" exact; place: "Mill Lane Market" vs place "Mill Lane Market" exact
- Approving this locks: --brand-accent-ink, --brand-muted, --brand-tracking-display, --brand-tracking-label, --brand-radius

## event--9x16--paper

- `budget` pass: name: 2 of 5 words, 12 of 32 chars; date: 2 of 4 words, 10 of 24 chars; place: 3 of 6 words, 16 of 40 chars; cta: 3 of 3 words, 14 of 20 chars
- `contrast` pass: name #302037 on #fff5df at 118.8px: 13.97:1 (needs 3); date #302037 on #fff5df at 75.6px: 13.97:1 (needs 3); place #302037 on #fff5df at 49.7px: 13.97:1 (needs 3); cta #302037 on #ff603e at 30.2px: 5.04:1 (needs 4.5)
- `min-text` pass: name 118.80px; date 75.60px; place 49.68px; cta 30.24px (floor 28px)
- `safe-zone` pass: safe box 72,250 to 1008,1580 (config 72/250/72/340); logo 72,250-109,287; name 72,737-759,904; date 72,896-490,1002; place 72,999-429,1069; cta 102,1522-369,1565
- `overflow` pass: name scroll width 687 in 687, glyph box 72,737-759,904; date scroll width 418 in 418, glyph box 72,896-490,1002; place scroll width 357 in 357, glyph box 72,999-429,1069; cta scroll width 327 in 327, glyph box 102,1522-369,1565; block 765-1065
- `element-count` pass: 14 elements inside the frame; template 18, 4 empty optional slots removed
- `token-colors` pass: colours rendered: #302037, #ff603e, #fff5df; tokens: #fff5df, #302037, #ff603e
- `logo-integrity` pass: brand/assets/logo.svg sha256 6eb7bf1b410a530f44fbf715bc52ac836470cc5b38adcdd870ccb91d269bb50c; locked.json 6eb7bf1b410a530f44fbf715bc52ac836470cc5b38adcdd870ccb91d269bb50c; variant default
- `logo-visible` pass: 313 opaque pixels at 36.7x36.7px; 100.0% reach 1.5:1 on #fff5df (100.0% reach 3:1)
- `font-loaded` pass: document.fonts loaded: Mona Sans; check(500 Mona Sans)=true, check(400 Mona Sans)=true
- `role-face` pass: name role=h1 face=Mona Sans weight=500; date role=h2 face=Mona Sans weight=500; place role=body face=Mona Sans weight=400; cta role=label face=Mona Sans weight=500
- `facts-consistent` pass: name: "Kadri Pop-up" vs name "Kadri Pop-up" exact; date: "8 November" vs date "8 November" exact; place: "Mill Lane Market" vs place "Mill Lane Market" exact
- Approving this locks: --brand-accent-ink, --brand-muted, --brand-tracking-display, --brand-tracking-label, --brand-radius
