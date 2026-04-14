const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const targetDirs = [
  path.join(rootDir, 'apis'),
  path.join(rootDir, 'auth'),
  path.join(rootDir, 'http'),
  path.join(rootDir, 'src', 'api', 'generated', 'apis'),
  path.join(rootDir, 'src', 'api', 'generated', 'auth'),
  path.join(rootDir, 'src', 'api', 'generated', 'http')
];

const replacements = [
  {
    from: /import \* as FormData from "form-data";/g,
    to: 'import FormData from "form-data";'
  },
  {
    from: /import \* as URLParse from "url-parse";/g,
    to: 'import URLParse from "url-parse";'
  },
  {
    from: /\/\/ typings for btoa are incorrect\r?\n\/\/@ts-ignore\r?\nimport \* as btoa from "btoa";\r?\n/g,
    to: ''
  },
  {
    from: /private url: URLParse;/g,
    to: 'private url: InstanceType<typeof URLParse>;'
  }
];

let changedFiles = 0;

for (const targetDir of targetDirs) {
  if (!fs.existsSync(targetDir)) {
    continue;
  }

  for (const entry of fs.readdirSync(targetDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith('.ts')) {
      continue;
    }

    const filePath = path.join(targetDir, entry.name);
    const original = fs.readFileSync(filePath, 'utf8');
    let updated = original;

    for (const replacement of replacements) {
      updated = updated.replace(replacement.from, replacement.to);
    }

    if (updated !== original) {
      fs.writeFileSync(filePath, updated);
      changedFiles += 1;
    }
  }
}

console.log(`Post-processed generated files: ${changedFiles}`);
