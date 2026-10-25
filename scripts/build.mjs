import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { content } from '../src/content.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = (path) => readFile(resolve(root, path), 'utf8');
const encode = async (path) => (await readFile(resolve(root, path))).toString('base64');
const [template, styles, app, portrait, resumeEn, resumeZh] = await Promise.all([
  read('src/index.html'), read('src/styles.css'), read('src/app.js'),
  encode('assets/portrait.jpg'), encode('assets/resume-en.pdf'), encode('assets/resume-zh.pdf'),
]);

for (const key of Object.keys(content.en)) {
  if (!content.zh[key]) throw new Error(`Missing Chinese translation: ${key}`);
}
let html = template.replace(/\{\{([\w]+)\}\}/g, (_, key) => {
  if (!(key in content.en)) throw new Error(`Unknown content key: ${key}`);
  return `<span data-i18n="${key}">${content.en[key]}</span>`;
});
html = html.replace('/* STYLES */', styles)
  .replace('__PORTRAIT__', `data:image/jpeg;base64,${portrait}`)
  .replace('__RESUME_EN__', `data:application/pdf;base64,${resumeEn}`)
  .replace('__RESUME_ZH__', `data:application/pdf;base64,${resumeZh}`)
  .replace('/* CONTENT */', `const content = ${JSON.stringify(content).replace(/</g, '\\u003c')};`)
  .replace('/* APP */', app);
await mkdir(resolve(root, 'docs'), { recursive: true });
await writeFile(resolve(root, 'docs/index.html'), html);
await writeFile(resolve(root, 'docs/.nojekyll'), '');
console.log(`Built docs/index.html (${Math.round(Buffer.byteLength(html) / 1024)} KiB). All runtime assets embedded.`);
