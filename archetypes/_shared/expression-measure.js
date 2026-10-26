/*
 * author: HueGrid Studio · license: CC-BY-NC-SA-4.0 · Brand Asset Maker (BAM)
 * Expression measurements (contract 1.6). Run inside a rendered post: the page that holds one .pg-frame.
 * Plain script, no imports, so the same file serves the engine (page.addScriptTag) and an agent without it
 * (paste into the browser console, or Playwright page.addScriptTag({ path })), then:
 *
 *   await document.fonts.ready;
 *   pgMeasureExpression({ displayFamily, bodyFamily })   // -> the raw facts below, as JSON
 *   (the two families are the first names in --brand-font-display / --brand-font-body; used when no slot has that role)
 *
 * It measures; it does not judge. Reading the numbers through the expression map
 * (docs/design/system/visual/expression.md) is a separate step. Every value is a measured proxy:
 *   frame        { w, h }
 *   ink          share of the frame covered by glyph boxes, images, the logo and painted shapes (0..1);
 *                whiteSpace = 1 - ink
 *   elements     visible filled slots (the logo included)
 *   paints       [{ color, area, kind: surface|shape|text }]: every colour the post paints, with the share of the
 *                frame it covers (text ink is counted at 35% of its line boxes, the part glyphs fill)
 *   fontSizes    [px] of every text element
 *   displayWeight  heaviest weight among display roles (h1, h2, h3, data-snippet); bodyWeight the same for body/label
 *   upper        share of letters shown in capitals (text-transform included)
 *   tracking     widest letter-spacing in em among display roles, and among all text (trackingAll)
 *   radius       largest corner radius (px) on a painted shape; null when no shape is painted
 *   shapes       how many painted shapes (bars, panels, chips) the post has besides its text
 *   displaySize  the largest font size as a share of the frame width, in % (cqi)
 *   centred      share of the text slots set centred (text-align: center)
 *   spread       horizontal distance between the outer text slot centres, as a share of the width
 *   lines        thin painted shapes (one side at least 8 times the other): rules, the HueGrid lines
 *   texts        each filled text slot: { slot, role, text } (how considered the content is: detail, specifics)
 *   massY        where the ink sits, top (0) to bottom (1): the centre of mass of the covered cells
 *   faces        { display, body }: per family, measured glyph traits from a canvas:
 *                  roundness   ink width / height of "o" (1.0 is a circle)
 *                  contrast    thickest / thinnest stroke of "o" (side vs top)
 *                  foot        width of "I" at its foot / at its middle (above ~1.5: serifs)
 *                  loaded      document.fonts.check() for that family
 *
 * Also: pgGlyphTraits(family, weight) for a brand's faces on their own, and pgImageColours(src) for a past post
 * (an image): its colours and the share of pixels each covers.
 */
function pgMeasureExpression(opts) {
  opts = opts || {};
  var frame = document.querySelector('.pg-frame');
  if (!frame) return { error: 'no .pg-frame element in the document' };
  var fr = frame.getBoundingClientRect();
  var W = fr.width, H = fr.height, area = W * H;
  var CELL = opts.cell || 6;
  var cols = Math.ceil(W / CELL), rows = Math.ceil(H / CELL);
  var grid = new Uint8Array(cols * rows);
  var mark = function (r) {
    var x0 = Math.max(0, Math.floor((r.left - fr.left) / CELL)), y0 = Math.max(0, Math.floor((r.top - fr.top) / CELL));
    var x1 = Math.min(cols, Math.ceil((r.right - fr.left) / CELL)), y1 = Math.min(rows, Math.ceil((r.bottom - fr.top) / CELL));
    for (var y = y0; y < y1; y++) for (var x = x0; x < x1; x++) grid[y * cols + x] = 1;
  };
  var visible = function (el) {
    var cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return false;
    var r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };
  var opaque = function (c) { var m = /rgba?\(([^)]+)\)/.exec(c || ''); if (!m) return false; var p = m[1].split(/[ ,/]+/).filter(Boolean); return p.length < 4 || parseFloat(p[3]) > 0.05; };
  var DISPLAY = ['h1', 'h2', 'h3', 'data-snippet'];
  var surface = getComputedStyle(frame).backgroundColor;
  var lines = 0, paints = [], fontSizes = [], dW = 0, bW = 0, letters = 0, caps = 0, track = 0, trackAll = 0, radius = null, painted = 0;
  var all = frame.querySelectorAll('*');
  for (var i = 0; i < all.length; i++) {
    var el = all[i];
    if (el.tagName === 'STYLE' || el.tagName === 'SCRIPT' || !visible(el)) continue;
    var cs = getComputedStyle(el), r = el.getBoundingClientRect();
    if (el.tagName === 'IMG' || el.tagName === 'svg' || el.tagName === 'SVG' || el.tagName === 'VIDEO' || el.tagName === 'CANVAS') { mark(r); continue; }
    var big = r.width * r.height >= 0.9 * area;
    if (opaque(cs.backgroundColor) && cs.backgroundColor !== surface && !big) {
      mark(r); paints.push({ color: cs.backgroundColor, area: (r.width * r.height) / area, kind: 'shape' }); painted += (r.width * r.height) / area;
      if (Math.max(r.width, r.height) >= 8 * Math.max(1, Math.min(r.width, r.height))) lines++; // a thin rule or line
      var rad = Math.max(parseFloat(cs.borderTopLeftRadius) || 0, parseFloat(cs.borderTopRightRadius) || 0, parseFloat(cs.borderBottomLeftRadius) || 0, parseFloat(cs.borderBottomRightRadius) || 0);
      radius = Math.max(radius || 0, Math.min(rad, Math.min(r.width, r.height) / 2));
    } else if (big && opaque(cs.backgroundColor) && cs.backgroundColor !== surface) {
      surface = cs.backgroundColor; // an inner plate that covers the frame is the surface
    }
    var own = '';
    for (var k = 0; k < el.childNodes.length; k++) if (el.childNodes[k].nodeType === 3) own += el.childNodes[k].textContent;
    if (own.trim()) {
      var lineArea = 0;
      for (var k2 = 0; k2 < el.childNodes.length; k2++) {
        var n = el.childNodes[k2];
        if (n.nodeType !== 3 || !n.textContent.trim()) continue;
        var range = document.createRange(); range.selectNodeContents(n);
        var rects = range.getClientRects();
        for (var q = 0; q < rects.length; q++) { mark(rects[q]); lineArea += rects[q].width * rects[q].height; }
      }
      var fs = parseFloat(cs.fontSize);
      fontSizes.push(fs);
      paints.push({ color: cs.color, area: (0.35 * lineArea) / area, kind: 'text' });
      var slot = el.closest('[data-slot]');
      var role = slot ? slot.getAttribute('data-role') : null;
      var w = parseInt(cs.fontWeight, 10) || 400;
      var ls = cs.letterSpacing === 'normal' ? 0 : (parseFloat(cs.letterSpacing) || 0) / fs;
      if (role && DISPLAY.indexOf(role) >= 0) { dW = Math.max(dW, w); track = Math.max(track, ls); } else bW = Math.max(bW, w);
      trackAll = Math.max(trackAll, ls);
      var shown = cs.textTransform === 'uppercase' ? own.toUpperCase() : cs.textTransform === 'lowercase' ? own.toLowerCase() : own;
      for (var c = 0; c < shown.length; c++) { var ch = shown[c]; if (ch.toLowerCase() !== ch.toUpperCase()) { letters++; if (ch === ch.toUpperCase()) caps++; } }
    }
  }
  var inked = 0, ys = 0;
  for (var g = 0; g < grid.length; g++) if (grid[g]) { inked++; ys += (Math.floor(g / cols) + 0.5) / rows; }
  paints.unshift({ color: surface, area: Math.max(0, 1 - painted), kind: 'surface' });
  var elements = 0, textSlots = 0, centred = 0, texts = [];
  var slots = frame.querySelectorAll('[data-slot]');
  for (var s = 0; s < slots.length; s++) {
    var se = slots[s];
    if (!visible(se) || se.parentElement.closest('[data-slot]')) continue;
    if (se.tagName === 'IMG' || se.textContent.trim()) elements++;
    if (se.tagName !== 'IMG' && se.textContent.trim()) {
      textSlots++; if (getComputedStyle(se).textAlign === 'center') centred++;
      texts.push({ slot: se.getAttribute('data-slot'), role: se.getAttribute('data-role'), text: se.textContent.trim().replace(/\s+/g, ' ') });
    }
  }
  var slotEls = frame.querySelectorAll('[data-slot]');
  // Text spread across the frame: the horizontal distance between the left-most and right-most text slot
  // centres, as a share of the width (one block reads near 0; a label set apart in a column reads high).
  var cxs = [];
  for (var q2 = 0; q2 < slotEls.length; q2++) {
    var sl = slotEls[q2];
    if (sl.tagName === 'IMG' || !sl.textContent.trim() || !visible(sl) || sl.closest('.pg-logo')) continue;
    var rr = sl.getBoundingClientRect(); cxs.push((rr.left + rr.right) / 2);
  }
  var spread = cxs.length > 1 ? (Math.max.apply(null, cxs) - Math.min.apply(null, cxs)) / W : 0;
  var shapes = 0;
  for (var pi = 0; pi < paints.length; pi++) if (paints[pi].kind === 'shape') shapes++;
  var first = function (fam) { return String(fam || '').split(',')[0].trim().replace(/^["']|["']$/g, ''); };
  var famOf = function (roles) {
    for (var t = 0; t < slots.length; t++) { var role2 = slots[t].getAttribute('data-role'); if (role2 && roles.indexOf(role2) >= 0) return first(getComputedStyle(slots[t]).fontFamily); }
    return null;
  };
  var display = famOf(DISPLAY) || opts.displayFamily || null, body = famOf(['body', 'label']) || opts.bodyFamily || null;
  var faces = {};
  if (display) faces.display = pgGlyphTraits(display, dW || 400);
  if (body) faces.body = pgGlyphTraits(body, bW || 400);
  return {
    frame: { w: W, h: H }, ink: inked / grid.length, elements: elements, paints: paints, fontSizes: fontSizes,
    displayWeight: dW || null, bodyWeight: bW || null, upper: letters ? caps / letters : 0,
    tracking: track, trackingAll: trackAll, radius: radius, faces: faces,
    shapes: shapes, displaySize: fontSizes.length ? (100 * Math.max.apply(null, fontSizes)) / W : null,
    centred: textSlots ? centred / textSlots : 0, massY: inked ? ys / inked : null, texts: texts,
    spread: spread, lines: lines,
  };
}

// Glyph traits of one family, from a canvas. Draws "o" and "I" at 200px and measures the ink.
function pgGlyphTraits(family, weight) {
  var S = 200, cv = document.createElement('canvas');
  cv.width = 3 * S; cv.height = 2 * S;
  var c = cv.getContext('2d', { willReadFrequently: true });
  var font = (weight || 400) + ' ' + S + 'px "' + family + '"';
  var ink = function (glyph) {
    c.fillStyle = '#fff'; c.fillRect(0, 0, cv.width, cv.height);
    c.fillStyle = '#000'; c.font = font; c.textBaseline = 'alphabetic';
    c.fillText(glyph, S / 2, 1.5 * S);
    var d = c.getImageData(0, 0, cv.width, cv.height).data, w = cv.width, h = cv.height;
    var on = function (x, y) { return d[(y * w + x) * 4] < 128; };
    var x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) if (on(x, y)) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    return { on: on, box: x1 < 0 ? null : { x0: x0, y0: y0, x1: x1, y1: y1 } };
  };
  var runAt = function (g, horizontal, at, from, to) {
    var len = 0, started = false;
    for (var p = from; p <= to; p++) {
      var hit = horizontal ? g.on(p, at) : g.on(at, p);
      if (hit) { started = true; len++; } else if (started) break;
    }
    return len;
  };
  var widthAt = function (g, y) { var n = 0; for (var x = g.box.x0; x <= g.box.x1; x++) if (g.on(x, y)) n++; return n; };
  var out = { family: family, weight: weight, loaded: document.fonts.check(font) };
  var o = ink('o');
  if (o.box) {
    var bw = o.box.x1 - o.box.x0 + 1, bh = o.box.y1 - o.box.y0 + 1;
    var midY = Math.round((o.box.y0 + o.box.y1) / 2), midX = Math.round((o.box.x0 + o.box.x1) / 2);
    var side = runAt(o, true, midY, o.box.x0, o.box.x1), top = runAt(o, false, midX, o.box.y0, o.box.y1);
    out.roundness = bw / bh;
    out.contrast = Math.max(side, top) / Math.max(1, Math.min(side, top));
  }
  var I = ink('I');
  if (I.box) {
    var ih = I.box.y1 - I.box.y0;
    var stem = widthAt(I, Math.round(I.box.y0 + ih / 2)), foot = widthAt(I, Math.round(I.box.y1 - Math.max(1, ih * 0.03)));
    out.foot = foot / Math.max(1, stem);
  }
  return out;
}

// A past post (any image the page can load, e.g. a data: URL): its colours, quantised to 4 bits a channel, with the
// share of pixels each covers, largest first. The largest share is the white-space proxy (the post's ground).
async function pgImageColours(src) {
  var im = new Image(); im.src = src; await im.decode();
  var k = Math.max(1, Math.ceil(Math.max(im.naturalWidth, im.naturalHeight) / 240));
  var w = Math.max(1, Math.round(im.naturalWidth / k)), h = Math.max(1, Math.round(im.naturalHeight / k));
  var cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  var c = cv.getContext('2d', { willReadFrequently: true }); c.drawImage(im, 0, 0, w, h);
  var d = c.getImageData(0, 0, w, h).data, hist = {}, n = 0;
  for (var i = 0; i < d.length; i += 4) {
    if (d[i + 3] < 128) continue;
    var key = 'rgb(' + ((d[i] >> 4) * 17) + ',' + ((d[i + 1] >> 4) * 17) + ',' + ((d[i + 2] >> 4) * 17) + ')';
    hist[key] = (hist[key] || 0) + 1; n++;
  }
  return { width: im.naturalWidth, height: im.naturalHeight, clusters: Object.keys(hist).map(function (k2) { return { color: k2, share: hist[k2] / n }; }).sort(function (a, b) { return b.share - a.share; }).filter(function (x) { return x.share >= 0.001; }) };
}

if (typeof window !== 'undefined') { window.pgMeasureExpression = pgMeasureExpression; window.pgGlyphTraits = pgGlyphTraits; window.pgImageColours = pgImageColours; }
