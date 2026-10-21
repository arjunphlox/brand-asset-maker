---
title: Menu on a table — prompt
scope: The fill-in prompt for mockup/menu-on-table. The engine (or your agent) replaces each {{placeholder}} and sends only the text between the markers.
author: HueGrid Studio
license: CC-BY-NC-SA-4.0
tier: sample
---

# Menu on a table: the prompt

Fill every `{{placeholder}}`: `{{artwork}}` describes the attached PNG, `{{size}}` is `output.size` in `inputs.schema.json`, and every other placeholder is the phrase of the chosen variation value (`variation.<key>.phrases`). Send the artwork PNG with the text between the markers, nothing else. Never edit what comes back: a failed review check adds its fix line (`review[].fix`) to the end of the prompt, and you generate again.

<!-- BEGIN PROMPT -->
Make a realistic photograph, a product mock-up: the artwork printed as a menu card on a table, with a cup and a plate nearby.

The attached image is the artwork: {{artwork}}. It is final. Treat it as a fixed print file, not as a sketch to redesign.

Scene: {{setting}}; {{surface}}. Light: {{light}}. Camera: {{angle}}. People: {{people}}.

Rules for the artwork. They protect the brand and are not optional:
1. Reproduce the attached artwork exactly as supplied. Do not redraw, restyle, crop, mirror, recolour, simplify or improve it.
2. Keep every word exactly as it appears in the artwork: the same spelling, case, line breaks and typeface. Do not retype, translate or correct any text. Add no text of your own anywhere in the image.
3. Keep the logo exactly as it appears: its shape, its proportions and its colours.
4. Keep the artwork's colours. Only the scene's light may fall on them, as natural shadow and highlight.
5. Show no other brand, logo, maker mark, label or trademark anywhere in the scene. No watermark, signature, caption or border.
6. Make the material behave like the real thing: the menu is printed paper or card with a soft contact shadow; every line of it stays readable and unchanged; the cup, plate and cutlery are plain and unbranded.
7. Output one image, {{size}}, and nothing else.
<!-- END PROMPT -->
