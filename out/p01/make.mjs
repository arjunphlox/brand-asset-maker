// Run p01: make the Kadri pop-up event posts without the engine (skills/poligraf--make-it.md), then measure the checks.
// node out/p01/make.mjs   (from the BAM root; needs the playwright package and a Chromium it can launch)
// Writes out/p01/<post>.html, <post>.png, report.json and report.md. Never edits a PNG or a finished HTML by hand.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
// playwright: the project's own copy if installed, else the global one (npm root -g)
const require = createRequire(import.meta.url);
const { chromium } = (() => { for (const c of ['playwright', '/opt/node-tools/node_modules/playwright', '/opt/node22/lib/node_modules/playwright']) { try { return require(c); } catch {} } throw new Error('playwright not found: npm i -g playwright'); })();

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const RUN = 'p01';
const OUT = path.join(ROOT, 'out', RUN);
const BRAND = path.join(ROOT, 'brand');
const read = (p) => fs.readFileSync(p, 'utf8');
const sha256 = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');

const FRAMES = { '1:1': [1080, 1080], '4:5': [1080, 1350], '9:16': [1080, 1920] };
const SAFE = { '1:1': { top: 72, right: 72, bottom: 72, left: 72 }, '4:5': { top: 250, right: 72, bottom: 250, left: 72 }, '9:16': { top: 250, right: 72, bottom: 340, left: 72 } };
const MIN_TEXT_PX = 28;

const schema = JSON.parse(read(path.join(ROOT, 'archetypes/social-post/event/inputs.schema.json')));
const message = JSON.parse(read(path.join(ROOT, 'messages/kadri-popup.json')));
const proposal = JSON.parse(read(path.join(BRAND, 'proposals/social-post--event.json')));
const locked = JSON.parse(read(path.join(BRAND, 'locked.json')));
const brandJson = JSON.parse(read(path.join(BRAND, 'brand.json')));
const tokensCss = read(path.join(BRAND, 'tokens.css'));
const baseCss = read(path.join(ROOT, 'archetypes/_shared/base.css'));
const fontsCss = read(path.join(BRAND, 'fonts.css')).replace(/url\("fonts\//g, 'url("../../brand/fonts/');
const template = read(path.join(ROOT, 'archetypes/social-post/event/template.html'));
const tStyle = template.slice(template.indexOf('<style>') + 7, template.indexOf('</style>'));
const tFragment = template.slice(template.indexOf('</style>') + 8).trim();

// Resolve the row inputs: { fact } references become the message's exact strings; remember which came from it.
const inputs = {}; const factRefs = {};
for (const [slot, v] of Object.entries(proposal.inputs)) {
  if (v && typeof v === 'object' && 'fact' in v) { inputs[slot] = message.facts[v.fact]; factRefs[slot] = v.fact; }
  else inputs[slot] = v;
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// --brand-logo-variant: a :root value is the base; a .pg-frame[data-scheme="X"] rule for this scheme replaces it.
function logoVariant(scheme) {
  let v = 'default';
  const root = tokensCss.match(/:root\s*{([^}]*)}/s);
  const m0 = root && root[1].match(/--brand-logo-variant\s*:\s*(\w+)/); if (m0) v = m0[1];
  const re = new RegExp(`\\.pg-frame\\[data-scheme="${scheme}"\\]\\s*{([^}]*)}`, 'gs'); let m;
  while ((m = re.exec(tokensCss))) { const mm = m[1].match(/--brand-logo-variant\s*:\s*(\w+)/); if (mm) v = mm[1]; }
  return v;
}

function buildHtml({ ratio, scheme, variation }) {
  let frag = tFragment.replace(/<!--[\s\S]*?-->/g, '');
  const vars = { ...variation, scheme };
  const dataAttrs = Object.entries(variation).map(([k, v]) => ` data-${k}="${v}"`).join('');
  const style = Object.keys(vars).sort().map((k) => `--v-${k}: ${vars[k]}`).join('; ');
  frag = frag.replace('<div class="pg-frame" data-archetype="social-post/event">',
    `<div class="pg-frame" data-archetype="social-post/event" data-ratio="${ratio}" data-scheme="${scheme}"${dataAttrs} style="${style}">`);
  // Text slots: fill and stamp data-role; delete empty optional slots (and the wordmark: brand.json has none).
  for (const [slot, def] of Object.entries(schema.slots)) {
    if (def.kind === 'asset') continue;
    const re = new RegExp(`<div class="pg-[a-z0-9]+" data-slot="${slot}"( data-slot-optional)?></div>`);
    if (inputs[slot]) frag = frag.replace(re, (m) => m.replace('></div>', ` data-role="${def.role}">${esc(inputs[slot])}</div>`));
    else frag = frag.replace(re, '');
  }
  if (!brandJson.wordmark) frag = frag.replace('<span data-slot="wordmark" data-slot-optional></span>', '');
  const variant = logoVariant(scheme);
  const logoFile = variant === 'reversed' ? brandJson.logoReversed : brandJson.logo; // paths from the BAM root
  if (variant === 'reversed' && !brandJson.logoReversed) throw new Error(`scheme ${scheme} asks for the reversed logo and the brand has none`);
  frag = frag.replace('<img data-slot="logo" alt="">', `<img data-slot="logo" alt="" src="../../${logoFile}">`);
  const html = `<!doctype html>\n<html data-ratio="${ratio}" data-scheme="${scheme}"><head><meta charset="utf-8"><style>\n/* fonts */\n${fontsCss}\n/* base */\n${baseCss}\n/* tokens */\n${tokensCss}\n</style>\n<style>${tStyle}</style>\n</head><body>\n${frag}\n</body></html>\n`;
  return { html, logoFile, variant };
}

const hex = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const [r, g, b, a = 1] = m[1].split(',').map((x) => parseFloat(x)); return { r, g, b, a }; };
const lum = ({ r, g, b }) => { const f = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
const contrast = (a, b) => { const la = lum(a), lb = lum(b); return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); };
const toHex = ({ r, g, b }) => '#' + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, '0')).join('');
const tokenColours = Object.fromEntries([...tokensCss.matchAll(/(--brand-[a-z-]+):\s*(#[0-9a-fA-F]{6})/g)].map((m) => [m[1], m[2].toLowerCase()]));

const samples = [];
for (const ratio of proposal.ratios) for (const scheme of proposal.schemes) {
  if (ratio !== '1:1' && scheme !== 'paper') continue; // 4:5 and 9:16 on paper only (the owner's Instagram set)
  samples.push({ id: `event--${ratio.replace(':', 'x')}--${scheme}`, ratio, scheme, variation: proposal.variation });
}

const browser = await chromium.launch();
const report = { contractVersion: '1.5', run: RUN, generatedAt: new Date().toISOString(), brand: { tokensHash: sha256(path.join(BRAND, 'tokens.css')), logoHash: locked.assets['logo.svg'].sha256, logoReversedHash: locked.assets['logo-reversed.svg'].sha256 }, message: { name: message.name, facts: message.facts }, samples: [], summary: {}, note: 'Made without the engine (skills/poligraf--make-it.md) by out/p01/make.mjs: HTML filled from the template, PNG by Playwright/Chromium at 1x, checks measured in the same browser. Kadri Coffee is fictional teaching material.' };

for (const s of samples) {
  const [w, h] = FRAMES[s.ratio];
  const { html, logoFile, variant } = buildHtml(s);
  const htmlPath = path.join(OUT, `${s.id}.html`); const pngPath = path.join(OUT, `${s.id}.png`);
  fs.writeFileSync(htmlPath, html);
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await page.goto('file://' + htmlPath);
  await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(500);
  await page.screenshot({ path: pngPath, clip: { x: 0, y: 0, width: w, height: h } });
  const logoSvg = fs.readFileSync(path.join(ROOT, logoFile), 'utf8');
  const m = await page.evaluate(async ({ logoSvg }) => {
    const frame = document.querySelector('.pg-frame'); const safe = frame.querySelector('.pg-safe');
    const rect = (el) => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height, right: r.right, bottom: r.bottom }; };
    const bg = (el) => { for (let e = el; e; e = e.parentElement) { const c = getComputedStyle(e).backgroundColor; if (c && !/rgba\(\s*0,\s*0,\s*0,\s*0\)/.test(c) && c !== 'transparent') return c; } return null; };
    const textRect = (el) => { const r = document.createRange(); r.selectNodeContents(el); const b = r.getBoundingClientRect(); return { x: b.x, y: b.y, w: b.width, h: b.height, right: b.right, bottom: b.bottom }; };
    const slots = [...frame.querySelectorAll('[data-slot]')].map((el) => { const cs = getComputedStyle(el); return { slot: el.dataset.slot, textRect: el.tagName === 'IMG' ? null : textRect(el), role: el.dataset.role || null, tag: el.tagName, cls: el.className, text: el.textContent, rect: rect(el), fontSize: parseFloat(cs.fontSize), fontFamily: cs.fontFamily, fontWeight: cs.fontWeight, color: cs.color, background: bg(el), overflow: { sw: el.scrollWidth, cw: el.clientWidth, sh: el.scrollHeight, ch: el.clientHeight } }; });
    const allColours = new Set(); for (const el of frame.querySelectorAll('*')) { const cs = getComputedStyle(el); for (const p of ['color', 'backgroundColor', 'borderTopColor']) { const v = cs[p]; if (v && !/rgba\(\s*0,\s*0,\s*0,\s*0\)/.test(v)) allColours.add(v); } }
    allColours.add(getComputedStyle(frame).backgroundColor);
    const fonts = [...document.fonts].map((f) => ({ family: f.family, weight: f.weight, status: f.status }));
    const fontChecks = { display500: document.fonts.check('500 100px "Mona Sans"'), body400: document.fonts.check('400 50px "Mona Sans"') };
    // logo-visible: draw the rendered logo into a canvas at its rendered size, take opaque pixels, contrast vs its ground.
    const img = frame.querySelector('img[data-slot="logo"]'); const ir = img.getBoundingClientRect();
    const cw = Math.max(1, Math.round(ir.width)), ch = Math.max(1, Math.round(ir.height));
    const im = new Image(); im.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(logoSvg)));
    await new Promise((res, rej) => { im.onload = res; im.onerror = rej; });
    const cv = document.createElement('canvas'); cv.width = cw; cv.height = ch; const cx = cv.getContext('2d'); cx.drawImage(im, 0, 0, cw, ch);
    const d = cx.getImageData(0, 0, cw, ch).data; const ground = bg(img); const gm = ground.match(/[\d.]+/g).map(Number);
    const lum = (r, g, b) => { const f = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
    const lg = lum(gm[0], gm[1], gm[2]); let opaque = 0, clear15 = 0, clear3 = 0;
    for (let i = 0; i < d.length; i += 4) { if (d[i + 3] >= 128) { opaque++; const l = lum(d[i], d[i + 1], d[i + 2]); const c = (Math.max(l, lg) + 0.05) / (Math.min(l, lg) + 0.05); if (c >= 1.5) clear15++; if (c >= 3) clear3++; } }
    return { frame: rect(frame), safe: rect(safe), slots, allColours: [...allColours], fonts, fontChecks, elementCount: frame.querySelectorAll('*').length, logo: { rendered: { w: ir.width, h: ir.height }, ground, opaque, clear15, clear3 }, blockRect: rect(frame.querySelector('.pg-block')) };
  }, { logoSvg });
  await page.close();

  // Checks
  const checks = []; const fail = (id, detail, plain) => checks.push({ id, pass: false, detail, plain }); const ok = (id, detail, plain) => checks.push({ id, pass: true, detail, plain });
  // budget
  const budget = []; let budgetOk = true;
  for (const [slot, def] of Object.entries(schema.slots)) { if (def.kind === 'asset' || !inputs[slot]) continue; const words = inputs[slot].trim().split(/\s+/).length, chars = inputs[slot].length; const over = (def.maxWords && words > def.maxWords) || (def.maxChars && chars > def.maxChars); if (over) budgetOk = false; budget.push(`${slot}: ${words} of ${def.maxWords} words, ${chars} of ${def.maxChars} chars${over ? ' OVER' : ''}`); }
  (budgetOk ? ok : fail)('budget', budget.join('; '), budgetOk ? 'every slot is within its word and character budget' : 'too many words or characters');
  // contrast
  const cres = []; let cOk = true;
  for (const sl of m.slots.filter((x) => x.role)) { const fg = hex(sl.color), bgc = hex(sl.background); const r = contrast(fg, bgc); const need = sl.fontSize >= 36 ? 3 : 4.5; if (r < need) cOk = false; cres.push(`${sl.slot} ${toHex(fg)} on ${toHex(bgc)} at ${sl.fontSize.toFixed(1)}px: ${r.toFixed(2)}:1 (needs ${need})`); }
  (cOk ? ok : fail)('contrast', cres.join('; '), cOk ? 'every text colour is readable on its surface' : 'too light to read');
  // min-text
  const small = m.slots.filter((x) => x.role && x.fontSize < MIN_TEXT_PX);
  (small.length ? fail : ok)('min-text', m.slots.filter((x) => x.role).map((x) => `${x.slot} ${x.fontSize.toFixed(2)}px`).join('; ') + ` (floor ${MIN_TEXT_PX}px)`, small.length ? 'too small to read' : `the smallest text is ${Math.min(...m.slots.filter((x) => x.role).map((x) => x.fontSize)).toFixed(1)}px, above the ${MIN_TEXT_PX}px floor`);
  // safe-zone: every slot box inside the safe box; the safe box matches the config px
  const sz = SAFE[s.ratio]; const safeExpected = { x: sz.left, y: sz.top, right: w - sz.right, bottom: h - sz.bottom };
  const safeBoxOk = Math.abs(m.safe.x - safeExpected.x) < 1 && Math.abs(m.safe.y - safeExpected.y) < 1 && Math.abs(m.safe.right - safeExpected.right) < 1 && Math.abs(m.safe.bottom - safeExpected.bottom) < 1;
  const box = (x) => x.textRect || x.rect; // text slots: the glyph box (a Range over the text), the logo: its element box
  const outside = m.slots.filter((x) => box(x).x < m.safe.x - 0.5 || box(x).y < m.safe.y - 0.5 || box(x).right > m.safe.right + 0.5 || box(x).bottom > m.safe.bottom + 0.5);
  (safeBoxOk && !outside.length ? ok : fail)('safe-zone', `safe box ${Math.round(m.safe.x)},${Math.round(m.safe.y)} to ${Math.round(m.safe.right)},${Math.round(m.safe.bottom)} (config ${sz.left}/${sz.top}/${sz.right}/${sz.bottom}); ` + m.slots.map((x) => `${x.slot} ${Math.round(box(x).x)},${Math.round(box(x).y)}-${Math.round(box(x).right)},${Math.round(box(x).bottom)}`).join('; ') + (outside.length ? `; OUTSIDE: ${outside.map((x) => x.slot).join(', ')}` : ''), outside.length || !safeBoxOk ? 'too close to the edge' : 'everything sits inside the safe zone');
  // overflow
  const ov = m.slots.filter((x) => x.role && (x.overflow.sw > x.overflow.cw + 1 || x.textRect.right > m.frame.right + 0.5 || x.textRect.bottom > m.frame.bottom + 0.5 || x.textRect.x < m.frame.x - 0.5 || x.textRect.y < m.frame.y - 0.5));
  const blockOut = m.blockRect.right > m.safe.right + 0.5 || m.blockRect.bottom > m.safe.bottom + 0.5 || m.blockRect.y < m.safe.y - 0.5;
  (ov.length || blockOut ? fail : ok)('overflow', m.slots.filter((x) => x.role).map((x) => `${x.slot} scroll width ${x.overflow.sw} in ${x.overflow.cw}, glyph box ${Math.round(x.textRect.x)},${Math.round(x.textRect.y)}-${Math.round(x.textRect.right)},${Math.round(x.textRect.bottom)}`).join('; ') + `; block ${Math.round(m.blockRect.y)}-${Math.round(m.blockRect.bottom)}`, ov.length || blockOut ? 'spills out of its space' : 'nothing spills out of its space');
  // element-count: the frame holds the template's elements minus the removed optional slots, nothing more
  const TEMPLATE_ELEMENTS = 18; // elements inside .pg-frame in archetypes/social-post/event/template.html
  const expected = TEMPLATE_ELEMENTS - ['wordmark', 'series', 'speaker', 'speakerRole'].filter((k) => !inputs[k] && !(k === 'wordmark' && brandJson.wordmark)).length;
  (m.elementCount === expected ? ok : fail)('element-count', `${m.elementCount} elements inside the frame; template ${TEMPLATE_ELEMENTS}, ${TEMPLATE_ELEMENTS - expected} empty optional slots removed`, m.elementCount === expected ? 'no extra thing on the post' : 'an extra thing on the post');
  // token-colors
  const allowed = new Set(Object.values(tokenColours)); const used = m.allColours.map((c) => toHex(hex(c))); const stray = used.filter((c) => !allowed.has(c));
  (stray.length ? fail : ok)('token-colors', `colours rendered: ${[...new Set(used)].join(', ')}; tokens: ${[...allowed].join(', ')}`, stray.length ? 'a colour that is not yours' : 'every colour is one of yours');
  // logo-integrity
  const lockedEntry = locked.assets[path.basename(logoFile)]; const liveHash = sha256(path.join(ROOT, logoFile));
  (lockedEntry && lockedEntry.sha256 === liveHash ? ok : fail)('logo-integrity', `${logoFile} sha256 ${liveHash}; locked.json ${lockedEntry ? lockedEntry.sha256 : 'no entry'}; variant ${variant}`, lockedEntry && lockedEntry.sha256 === liveHash ? 'the logo file is the one you handed in' : 'the logo file changed');
  // logo-visible
  const frac = m.logo.clear15 / m.logo.opaque; const frac3 = m.logo.clear3 / m.logo.opaque;
  (frac >= 0.4 ? ok : fail)('logo-visible', `${m.logo.opaque} opaque pixels at ${m.logo.rendered.w.toFixed(1)}x${m.logo.rendered.h.toFixed(1)}px; ${(frac * 100).toFixed(1)}% reach 1.5:1 on ${toHex(hex(m.logo.ground))} (${(frac3 * 100).toFixed(1)}% reach 3:1)${frac3 < 1 ? '; low contrast, a brand call' : ''}`, frac >= 0.4 ? 'the logo shows' : 'the logo disappears');
  // font-loaded
  const loaded = m.fonts.filter((f) => f.status === 'loaded').map((f) => f.family.replace(/"/g, ''));
  const fontOk = m.fontChecks.display500 && m.fontChecks.body400 && loaded.includes('Mona Sans');
  (fontOk ? ok : fail)('font-loaded', `document.fonts loaded: ${[...new Set(loaded)].join(', ') || 'none'}; check(500 Mona Sans)=${m.fontChecks.display500}, check(400 Mona Sans)=${m.fontChecks.body400}`, fontOk ? 'your font loaded' : 'your font did not load');
  // role-face
  const display = tokensCss.match(/--brand-font-display:\s*"([^"]+)"/)[1], body = tokensCss.match(/--brand-font-body:\s*"([^"]+)"/)[1];
  const rf = []; let rfOk = true;
  for (const sl of m.slots.filter((x) => x.role)) { const first = sl.fontFamily.split(',')[0].replace(/"/g, '').trim(); const want = ['h1', 'h2', 'h3', 'data-snippet'].includes(sl.role) ? display : body; const roleOk = schema.slots[sl.slot].role === sl.role; if (first !== want || !roleOk) rfOk = false; rf.push(`${sl.slot} role=${sl.role} face=${first} weight=${sl.fontWeight}${first === want && roleOk ? '' : ' WRONG'}`); }
  (rfOk ? ok : fail)('role-face', rf.join('; '), rfOk ? 'every slot uses the right typeface for its job' : 'the wrong typeface for the job');
  // facts-consistent
  const fc = []; let fcOk = true;
  for (const [slot, key] of Object.entries(factRefs)) { const sl = m.slots.find((x) => x.slot === slot); const exact = sl && sl.text === message.facts[key]; if (!exact) fcOk = false; fc.push(`${slot}: "${sl ? sl.text : ''}" vs ${key} "${message.facts[key]}" ${exact ? 'exact' : 'DIFFERS'}`); }
  for (const sl of m.slots.filter((x) => x.role && !factRefs[x.slot])) for (const [key, val] of Object.entries(message.facts)) { const words = val.toLowerCase().split(/\s+/); const t = sl.text.toLowerCase(); if (!t.includes(val.toLowerCase()) && words.every((wd) => t.includes(wd))) { fcOk = false; fc.push(`${slot}: states ${key} in another form`); } }
  (fcOk ? ok : fail)('facts-consistent', fc.join('; '), fcOk ? 'every fact matches the message' : 'a detail does not match the other posts');

  const pass = checks.every((c) => c.pass);
  const derived = Object.entries(locked.tokens).filter(([, v]) => v.status === 'derived').map(([k]) => k).filter((k) => k !== '--brand-logo-variant' || variant === 'reversed');
  report.samples.push({ id: s.id, archetype: 'social-post/event', ratio: s.ratio, scheme: s.scheme, ...(variant !== 'default' ? { logoVariant: variant } : {}), variation: { ...s.variation, scheme: s.scheme }, inputs, factRefs, html: `out/${RUN}/${s.id}.html`, png: `out/${RUN}/${s.id}.png`, pngSha256: sha256(pngPath), checks, pass, derivedDependencies: derived, measured: { logoRenderedPx: m.logo.rendered, safeBox: m.safe, slots: m.slots.map((x) => ({ slot: x.slot, px: x.fontSize, rect: x.rect })) } });
  console.log(`${s.id}: ${pass ? 'PASS' : 'FAIL'} ${checks.filter((c) => !c.pass).map((c) => c.id).join(' ')}`);
}
await browser.close();
report.summary = { total: report.samples.length, passed: report.samples.filter((x) => x.pass).length, failed: report.samples.filter((x) => !x.pass).length };
fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));

// report.md: the contact sheet in words
let md = `# Run ${RUN}: the Kadri pop-up event post (proposal)\n\nMade ${report.generatedAt} without the engine, by \`out/${RUN}/make.mjs\` (template filled as the renderer does, PNG by Playwright/Chromium at 1x, checks measured in the browser). Message \`messages/kadri-popup.json\`: ${Object.entries(message.facts).map(([k, v]) => `${k} = "${v}"`).join(' · ')}. Variation: ${Object.entries(proposal.variation).map(([k, v]) => `${k}: ${v}`).join(', ')}. Kadri Coffee is fictional teaching material by Madhuri Maram.\n\n| Sample | Format | Scheme | Result | Failed checks |\n|---|---|---|---|---|\n`;
for (const sm of report.samples) md += `| \`${sm.id}\` | ${sm.ratio} | ${sm.scheme}${sm.logoVariant ? ` (logo ${sm.logoVariant})` : ''} | ${sm.pass ? 'pass' : 'FAIL'} | ${sm.checks.filter((c) => !c.pass).map((c) => c.id).join(', ') || 'none'} |\n`;
md += `\nEvery check below was measured; none is "not measured". Thresholds: contrast 4.5:1 under 36px and 3:1 at 36px and above (WCAG); text 28px or larger; safe zone 72px all round at 1:1, 250 top and bottom at 4:5, 250 top and 340 bottom at 9:16 (the 9:16 numbers are an estimate, to re-measure); the logo shows when at least 40% of its opaque pixels reach 1.5:1 on their ground.\n`;
for (const sm of report.samples) {
  md += `\n## ${sm.id}\n\n`;
  for (const c of sm.checks) md += `- \`${c.id}\` ${c.pass ? 'pass' : '**FAIL**'}: ${c.detail}\n`;
  md += `- Approving this locks: ${sm.derivedDependencies.join(', ') || 'nothing (every value it depends on is already locked)'}\n`;
}
fs.writeFileSync(path.join(OUT, 'report.md'), md);
console.log(`${report.summary.passed}/${report.summary.total} passed`);
