#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Typograf = require('typograf');

const tp = new Typograf({ locale: ['ru', 'en-US'] });
tp.enableRule('common/nbsp/afterNumber');
tp.enableRule('common/nbsp/shortLastWord');
tp.enableRule('ru/mdash');
tp.enableRule('ru/nbsp/afterNumberSign');

function walk(dir, exts, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, exts, files);
    } else if (exts.includes(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

function processFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const isHtml = filePath.endsWith('.html');
  const result = tp.execute(source, { htmlEntity: { type: 'name' } });
  if (result !== source) {
    fs.writeFileSync(filePath, result, 'utf8');
    console.log(`Typograf: updated ${filePath}${isHtml ? ' (HTML)' : ''}`);
  } else {
    console.log(`Typograf: no changes ${filePath}`);
  }
}

const docsDir = path.resolve(__dirname, '..', 'docs');
const targets = walk(docsDir, ['.md', '.html']);
targets.forEach(processFile);


