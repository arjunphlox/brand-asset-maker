# Fonts

**Policy path: (b) a named free font.** The owner chose Ranade + Amulya on 2026-10-28 (brand/intake.log.md). No font files were supplied, so `brand/fonts/` is empty until the files are downloaded.

| Role | Family | Weight | Licence | Source |
|---|---|---|---|---|
| Display (h1–h3, data) | Ranade | 700 (Bold), variable file | ITF Free Font License, to confirm from the licence file in the download | https://www.fontshare.com/fonts/ranade |
| Body and label | Amulya | 500 (Medium), variable file | ITF Free Font License, to confirm from the licence file in the download | https://www.fontshare.com/fonts/amulya |

Source: [figma-extract.json](sources/figma-extract.json), `graphicAssets.fontsBySegmentCount`: Ranade Variable Bold and Amulya Variable Medium / Medium Italic are the faces on the Graphic Assets page.

Not chosen: Hanken Grotesk (every heading and body line on the Figma Home page, same source, `pagesHome.fontsByCharacterCount`).

## Status

`fonts.status` in `locked.json`: **we guessed** (derived) until a post that loaded both families passes `font-loaded` and is picked.

## To do (owner)

1. Download Ranade and Amulya from the links above.
2. Put `Ranade-Variable.woff2` and `Amulya-Variable.woff2` in `brand/fonts/`, with the licence file beside them.
3. Read the licence; if it is not the ITF Free Font License, tell your agent so this file is corrected.

Until then, `fonts.css` points at files that are not there, and every post fails `font-loaded`.
