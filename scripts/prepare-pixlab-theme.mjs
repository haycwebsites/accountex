import * as fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const srcPath = 'c:/Users/chris/Downloads/style (9).css';
const outPath = path.join(root, 'src/styles/pixlab-theme.css');

let css = fs.readFileSync(srcPath, 'utf8');

css = css
  .split('\n')
  .filter((line) => !/@import\s+url\(\s*\.\.\//.test(line))
  .join('\n');

css = css.replace(/url\(\.\.\/images\/[^)]+\)/g, 'none');

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, css, 'utf8');
console.log('Wrote', outPath, '(' + Math.round(css.length / 1024) + ' KB)');
