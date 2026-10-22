---
source: files
families:
  - name: Mona Sans
    role: display and body (headings, labels and supporting text, per the kit's brand guide)
    license: SIL Open Font License 1.1
    licenseFile: brand/fonts/MonaSans-LICENSE.txt
    files:
      - { file: MonaSansVF.ttf, axes: "wght 200-900 (default 200), opsz 0-100" }
  - name: Hubot Sans
    role: the wordmark, the k symbol and the flavour badges only (per the kit's brand guide); not a post role
    license: SIL Open Font License 1.1
    licenseFile: brand/fonts/HubotSans-LICENSE.txt
    files:
      - { file: HubotSansVF-Regular.ttf, axes: "wdth 80-120 (default 80), wght 200-900 (default 200), ital 0-1" }
credit: "Kadri Coffee is fictional teaching material by Madhuri Maram."
---

# Fonts

Policy path in force: **(a) files supplied.** The Kadri Coffee demo brand asset kit ships both variable fonts in `fonts/` with their licences and a source receipt (`docs/sources-and-rights.md`). Copied unchanged into `brand/fonts/`; sha256 of each file in `brand/locked.json`.

- **Families (you said):** the kit's brand guide gives a typography table: Hubot Sans 800 (`wdth=110`) for the wordmark, the compact k and the flavour badges; Mona Sans 500 for product names, headings and small labels; Mona Sans 400 for tasting notes and supporting text. So on a post the display face (`h1`, `h2`, `h3`, `data-snippet`) is **Mona Sans** and the body face (`body`, `label`) is **Mona Sans**. Hubot Sans reaches a post only inside the logo files, which are outlined SVGs.
  *Open question for the owner:* the workshop's form-based encoding of Kadri (`examples/kadri/brand/`) says "Hubot Sans for the logo and headings". The kit says headings are Mona Sans 500. This folder follows the kit, as the owner named it the material to use. If the owner wants Hubot Sans headlines, that is one token change (`--brand-font-display`, plus `--brand-weight-display: 800` and `--brand-stretch-display: 110%`).
- **Weights (you said):** display 500, body 400, labels 500, from the guide's table. The variable files default to 200, so these must be set or every post renders thin.
- **Optical size (open):** the guide sets `opsz=16` for Mona Sans. Contract 1.5 has no token for it, so the browser picks the optical size from the font size (`font-optical-sizing: auto`). At display sizes that is the font's display end of the axis, not 16. Marked as a gap, not changed by hand.
- **Width:** Hubot Sans has a width axis; the guide uses `wdth=110` for the wordmark and badges. No post role uses Hubot Sans, so `--brand-stretch-display` is not set.
- **Tracking (we guessed):** display 0em (the guide gives tracking for the wordmark only); labels 0.06em.
