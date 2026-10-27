---
skill: bam-master/mockup
version: 1
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tags: [make, mockup, prompt, image-model]
---

# Mock-up

**Verb: Make.** This skill turns one finished, passing asset into a mock-up photograph (the post on a tote bag, a story on a phone, a poster in a shop window) with **the owner's own image model and the owner's own key**: GPT Image 2.5, or whichever OpenAI image model the owner uses. You fill a prompt recipe, send it with the asset PNG, and review what comes back. HueGrid runs nothing here.

## Without the engine

This whole skill works without the engine. With the engine, `npm run mockup -- --layout mockup/<name> --artwork out/<run>/<post>.png --run <name>` does steps 1 and 2 for you and writes `out/<run>/<id>.prompt.md` and `out/<run>/mockup.json`. It never calls an image model.

## 1. Pick the recipe and the artwork

- **Recipe:** one folder under `archetypes/mockup/`, picked with `archetypes/mockup/select.md`. Each holds `spec.md`, `inputs.schema.json` and `prompt.md`.
- **Artwork:** one PNG of a finished asset that **passed**. With the engine: its sample in `report.json` has `"pass": true`. Without it: your report from `skills/bam--make-it.md` has no failed check (labelled fine or your call). Never mock up a post with a break; fix the post first.
- **Format fits:** the artwork's layout and ratio must match one of the recipe's `slots.artwork.accepts` patterns (`social-post/*@1:1` means any social post at 1:1; `print/*` any print layout). If none matches, pick another recipe or make that asset first.

## 2. Fill the prompt

Copy the text between `<!-- BEGIN PROMPT -->` and `<!-- END PROMPT -->` in `prompt.md`, then replace each placeholder:

- `{{setting}}`, `{{surface}}`, `{{light}}`, `{{angle}}`, `{{people}}`: pick a value from `variation.<key>.values` (the `default` if the owner did not choose) and paste its phrase from `variation.<key>.phrases`. No value outside the list.
- `{{artwork}}`: `a finished <use-case> (<layout> layout, <ratio>), supplied as a PNG`, for example `a finished social post (stat layout, 1:1), supplied as a PNG`.
- `{{size}}`: `output.size`, written as `1024 by 1536 pixels`.

Change nothing else in the prompt. Its numbered rules protect the brand: the artwork reproduced exactly, no text retyped or added, the logo and colours kept, no other brand, no watermark.

## 3. Send it to the owner's image model

Use the owner's own OpenAI account and key. Never put the key in a file you commit or share.

**Through the API**, send the PNG and the prompt to the image edits endpoint (multipart form, `POST https://api.openai.com/v1/images/edits`):

```
curl -s https://api.openai.com/v1/images/edits \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "model=<the owner's GPT Image 2.5 model>" \
  -F "image[]=@<absolute path to the artwork .png>" \
  -F "prompt=<<absolute path to a .txt holding the filled prompt>" \
  -F "size=<output.size, e.g. 1024x1536>"
```

OpenAI's image generation guide (read 2026-10-21, <https://developers.openai.com/api/docs/guides/image-generation>) names `gpt-image-2.5-sunburst` (when editing precision matters most) and `gpt-image-2.5-flare` (fast everyday generation), lists 1024×1024, 1536×1024 and 1024×1536 as the recommended sizes, and returns the image as base64 (PNG by default). Model names, the response field and any other option (quality, format) change: **check your API docs** before you run it. Decode the base64 to `out/<run>/<id>.png`.

**Through ChatGPT**, attach the PNG and paste the filled prompt. Ask for the size in words.

## 4. Review it

Open the result and the artwork side by side. Report each check in the recipe's `review` list as **pass**, **fail** or **not measured** (not measured when you cannot see images; then the owner looks).

| Check | Plain words |
|---|---|
| `artwork-unchanged` | the design changed |
| `text-intact` | the words changed or were added |
| `logo-intact` | the logo changed |
| `colours-held` | the colours shifted |
| `no-other-brands` | another brand appears |
| `plausible` | it doesn't look real |

Each check's `look` line says what to compare. A **fail**: add that check's `fix` line to the end of the prompt and generate again. After three tries, stop and tell the owner which check keeps failing; the guide warns that the model can struggle with brand elements and small text, so a post with larger words may suit the recipe better.

## Never do

- Never edit, retouch, crop or paint over the image the model returns. Change the prompt and generate again.
- Never mock up an asset that failed a check, or a format the recipe does not take.
- Never claim a review check passed that you did not look at.
- Never share a mock-up as a photograph of a real product. Call it a mock-up.
