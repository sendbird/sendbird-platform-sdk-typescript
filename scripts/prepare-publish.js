const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const publishDir = path.join(rootDir, 'dist');
const pkg = require('../package.json');
const publishPkg = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'package.publish.json'), 'utf8')
);

if (!fs.existsSync(publishDir)) {
  throw new Error('dist directory does not exist. Run `npm run build` first.');
}

publishPkg.version = pkg.version;

for (const fileName of ['README.md', 'CHANGELOG']) {
  const sourcePath = path.join(rootDir, fileName);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, path.join(publishDir, fileName));
  }
}

for (const entry of fs.readdirSync(rootDir, { withFileTypes: true })) {
  if (
    entry.isFile() &&
    (entry.name.startsWith('LICENSE') || entry.name.startsWith('NOTICE'))
  ) {
    fs.copyFileSync(path.join(rootDir, entry.name), path.join(publishDir, entry.name));
  }
}

fs.writeFileSync(
  path.join(publishDir, 'package.json'),
  JSON.stringify(publishPkg, null, 2) + '\n'
);

console.log('Created dist package for publishing');
