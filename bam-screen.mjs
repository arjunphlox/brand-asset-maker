#!/usr/bin/env node
// Loads this repo into the BAM screen (operate.html): writes bam-data.js beside this file. Node 18 or newer, no packages.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const ROOT = dirname(fileURLToPath(import.meta.url));
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
const tryGit = (...args) => { try { return git(...args); } catch { return null; } };

// repo: the origin as a github.com https URL, or null (not a repo, no origin, or not GitHub)
function repoInfo() {
  const raw = tryGit('remote', 'get-url', 'origin');
  const m = raw && /^(?:git@github\.com:|ssh:\/\/git@github\.com\/|https?:\/\/(?:[^@/]+@)?github\.com\/)([^/]+)\/(.+?)(?:\.git)?\/?$/.exec(raw);
  if (!m) return null;
  return { url: `https://github.com/${m[1]}/${m[2]}`, branch: tryGit('rev-parse', '--abbrev-ref', 'HEAD') || 'main' };
}

// every committed file, or (not a git repo) every file but .git, node_modules, out/ and dist/
function walk(dir = '') {
  const out = [];
  for (const name of readdirSync(join(ROOT, dir)).sort()) {
    const rel = dir ? `${dir}/${name}` : name;
    if (['.git', 'node_modules', 'out', 'dist'].includes(name)) continue;
    if (statSync(join(ROOT, rel)).isDirectory()) out.push(...walk(rel)); else out.push(rel);
  }
  return out;
}
const listed = tryGit('ls-files');
const inGit = listed !== null;
const tree = (inGit ? listed.split('\n').filter(Boolean) : walk()).sort();

// Contents go to the screen only for the brand layer and the owner's own layouts (a layout not marked "tier": "sample").
const isOwnLayout = (path) => {
  const m = /^(archetypes\/[^/]+\/[^/]+)\//.exec(path);
  if (!m || m[1].split('/')[1].startsWith('_')) return false;
  try { return JSON.parse(readFileSync(join(ROOT, m[1], 'inputs.schema.json'), 'utf8')).tier !== 'sample'; } catch { return false; }
};
const wanted = (path) => /^(brand|generators|messages|rules)\//.test(path) || isOwnLayout(path);

const TEXT = ['.css', '.md', '.json', '.svg', '.txt', '.html'];
const MIME = { '.ttf': 'font/ttf', '.otf': 'font/otf', '.woff': 'font/woff', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.avif': 'image/avif' };
const isLicence = (path) => /(^|\/)(licen[cs]e|ofl|copying|notice)[^/]*$/i.test(path);

// brand files on disk (committed or not), so a brand written a minute ago shows up
const onDisk = walk().filter(wanted);
// ...and in the tree too, so a generator saved a minute ago shows before it is committed
for (const p of onDisk) if (!tree.includes(p)) tree.push(p);
tree.sort();
const files = {};
for (const path of onDisk) {
  const ext = extname(path).toLowerCase();
  const buf = readFileSync(join(ROOT, path));
  if (TEXT.includes(ext) || isLicence(path)) files[path] = { text: buf.toString('utf8') };
  else if (MIME[ext]) files[path] = { dataUrl: `data:${MIME[ext]};base64,${buf.toString('base64')}` };
}

// The text of every other text file in the tree (skills, layouts, docs), for previews in the screen's Editor only.
const texts = {};
for (const path of tree) {
  if (files[path] || ['operate.html', 'bam-data.js'].includes(path) || !TEXT.concat(['.js']).includes(extname(path).toLowerCase())) continue;
  try { const buf = readFileSync(join(ROOT, path)); if (buf.length <= 200000) texts[path] = buf.toString('utf8'); } catch { /* listed but not on disk */ }
}

const body = { repo: repoInfo(), tree, files, texts };
// stamp: changes whenever the content does, so an open screen redraws on its own (it rereads this file every 2 seconds)
const data = { contract: 1, stamp: createHash('sha1').update(JSON.stringify(body)).digest('hex').slice(0, 12), ...body };
writeFileSync(join(ROOT, 'bam-data.js'), `window.BAM_DATA = ${JSON.stringify(data)};\n`);

const committed = new Set(inGit ? listed.split('\n') : []);
const notCommitted = inGit ? onDisk.filter((p) => !committed.has(p)) : [];
if (notCommitted.length) console.warn(`Not committed yet (links to these will 404 on GitHub): ${notCommitted.join(', ')}`);
if (!inGit) console.warn('Not a git repo: the tree lists every file here, and the screen has no GitHub links.');
console.log(`Wrote bam-data.js: ${tree.length} files in the tree, ${Object.keys(files).length} with contents${data.repo ? ` (${data.repo.url}, ${data.repo.branch})` : ''}. Open operate.html in Chrome; an open screen updates by itself.`);
if (!existsSync(join(ROOT, 'operate.html'))) console.warn('operate.html is not beside this script.');
