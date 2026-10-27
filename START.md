# Start here

Paste the block below into your own AI agent (Claude Code, Codex, Cursor or another). It sets up Brand Asset Maker (BAM) for your brand. You need a GitHub account and your brand files, folders or links to hand.

```
You are setting up Brand Asset Maker (BAM) for me, so you can make on-brand posts for my brand.

1. Fork https://github.com/huegrid/brand-asset-maker into my GitHub account and clone the fork. If I opened this prompt from inside a BAM folder, use that folder instead.

2. Ask me for my brand files, folders and links (brand guide, logos, fonts, past posts, website, social pages, a Figma file), unless I already gave them. Copy the files into brand/sources/ and list every link in brand/sources.md, one per line with a short note on what it is. Read all of it; read a Figma link with your Figma tools if you have them, otherwise ask me to export the logo, colours and type styles into brand/sources/.

3. Read AGENTS.md and SPEC.md. Then follow skills/bam--intake.md and skills/bam--encode.md and write my brand/ folder: BRAND.md, tokens.css, locked.json, fonts.md, fonts.css (and fonts/ if I own the font files), voice.md, brand.json, assets/logo.svg (and logo-reversed.svg if there is one), and coverage.md if I brought layouts. Every value must cite its source:
   - CSS: a comment on the line, /* source: brand/sources/<file> p.N */ or /* source: <url> */
   - JSON: a "source" field (locked.json already has one per token)
   - Markdown: a line like Source: [name](sources/<file>)
   If something is not in my sources, ask me, and mark the answer "we guessed" (derived) until I confirm it. Never invent a brand value.

4. Commit the brand/ folder and push it to my fork.

5. Run: node bam-screen.mjs
   Then tell me to open operate.html in Chrome. It shows my repo, every post drawn and checked, and which file each step makes.

6. From then on, use the screen to look, and the skills to make: skills/bam--make-it.md to make a post, then approve, generate and feedback as I ask. Run node bam-screen.mjs again whenever brand/ changes.
```

Nothing here depends on HueGrid: your agent, your GitHub, your files.
