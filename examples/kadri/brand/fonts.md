---
source: files
families:
  - name: Hubot Sans
    role: display (logo and headings, per the owner)
    license: SIL Open Font License 1.1
    licenseFile: brand/fonts/HubotSans-LICENSE.txt
    files:
      - { file: HubotSansVF-Regular.ttf, axes: "wdth 80-120 (default 80), wght 200-900 (default 200), ital 0-1" }
  - name: Mona Sans
    role: body (everything else, per the owner)
    license: SIL Open Font License 1.1
    licenseFile: brand/fonts/MonaSans-LICENSE.txt
    files:
      - { file: MonaSansVF.ttf, axes: "wght 200-900 (default 200), opsz 0-100" }
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
credit: "Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission."
---

Kadri Coffee is fictional teaching material by Madhuri Maram, used with permission.

# Fonts

Policy path in force: **(a) files supplied.** The owner's answer, verbatim: "Hubot Sans for the logo and headings, Mona Sans for everything else. Files attached."

- **Families:** Hubot Sans (display) and Mona Sans (body). Supplied by the owner, so both families are `locked`.
- **Files:** `HubotSansVF-Regular.ttf` and `MonaSansVF.ttf` from the hand-in `fonts/`, copied unchanged into `brand/fonts/` with their licence files. `@font-face` rules in `brand/fonts.css`.
- **License:** SIL Open Font License 1.1 for both (the licence files came with the fonts). Free to embed; the copyright and licence notices travel with the files.
- **Weights (derived):** the owner named the families and no weights. Both files are variable and default to their lightest weight (200), so a weight has to be set or every post renders thin. Display 700: a bold that carries a headline and a stat number at display size, and leaves 800 and 900 unused until the owner says the brand is heavier. Body 400 (regular). Labels 600: uppercase labels at 30px need more than 400 to hold.
- **Width (derived):** Hubot Sans has a width axis (80 to 120, file default 80, condensed). `fonts.css` declares the file's range, so the posts render at the CSS default width, 100. Nothing in the hand-in says otherwise, and the token contract has no width token yet.
- **Tracking (derived):** display 0em (the face's own spacing; nothing supplied to change it); labels 0.06em (uppercase opens slightly).
