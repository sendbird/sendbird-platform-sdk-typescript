const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');

const publishPkg = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  author: pkg.author,
  license: pkg.license,
  main: "./index.js",
  typings: "./index.d.ts",
  exports: { ".": "./index.js" },
  type: pkg.type,
  repository: pkg.repository,
  keywords: pkg.keywords,
  dependencies: pkg.dependencies,
  publishConfig: pkg.publishConfig
};

fs.writeFileSync(
  path.join(__dirname, '../dist/package.json'),
  JSON.stringify(publishPkg, null, 2) + '\n'
);

console.log('Created dist/package.json for publishing');
