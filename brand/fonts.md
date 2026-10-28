# Fonts

**Policy path: (b) a named free font.** The owner chose Ranade + Amulya on 2026-10-28 (brand/intake.log.md). Downloaded from Fontshare on 2026-10-28 (owner approved): `Ranade_Complete.zip`, `Amulya_Complete.zip`.

| Role | Family | Weight | Licence | Source |
|---|---|---|---|---|
| Display (h1–h3, data) | Ranade | 700 (Bold); `Ranade-Variable.woff2`, axis 100–700 | ITF Free Font License (FFL) 2.0, 17 Aug 2026 ([fonts/FFL.txt](fonts/FFL.txt)) | https://www.fontshare.com/fonts/ranade |
| Body and label | Amulya | 500 (Medium); `Amulya-Variable.woff2`, axis 300–700 | ITF Free Font License (FFL) 2.0, 17 Aug 2026 ([fonts/FFL.txt](fonts/FFL.txt)) | https://www.fontshare.com/fonts/amulya |

Source: [figma-extract.json](sources/figma-extract.json), `graphicAssets.fontsBySegmentCount`: Ranade Variable Bold and Amulya Variable Medium / Medium Italic are the faces on the Graphic Assets page.

Not chosen: Hanken Grotesk (every heading and body line on the Figma Home page, same source, `pagesHome.fontsByCharacterCount`).

## Status

`fonts.status` in `locked.json`: **we guessed** (derived) until a post that loaded both families passes `font-loaded` and is picked.

## Files are local only

The FFL (section 02) forbids making the font files available through a repository or publicly accessible server. This fork is public, so:

- `brand/fonts/Ranade-Variable.woff2` and `brand/fonts/Amulya-Variable.woff2` are on this machine only, listed in `.gitignore`.
- `brand/fonts/FFL.txt` (the licence) is committed.
- A fresh clone has no font files: download both families from the links above and copy the two `Fonts/WEB/fonts/*-Variable.woff2` files into `brand/fonts/`.
- The FFL also forbids altering the files (no subsetting or format conversion).

## Load check

2026-10-28, headless Chromium (Playwright's headless shell), a page loading `fonts.css` and `tokens.css`: `document.fonts.check("700 72px Ranade")` true, `document.fonts.check("500 28px Amulya")` true, both faces `loaded`. This is not the `font-loaded` check of a post; it runs when the first post is made.
