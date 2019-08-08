const glob = require("glob");
const { readFileSync, statSync, writeFileSync } = require("fs");
const { dirname, join, basename } = require("path");
const prettier = require("prettier");

let content = `import {Import} from '@aws-sdk/build-types';

/**
 * @internal
 */
export const IMPORTS: {[key: string]: Import} = {`;

const packageRoot = dirname(__dirname);
const projectRoot = dirname(dirname(packageRoot));
const { packages: packagesFolders } = JSON.parse(
  readFileSync(join(projectRoot, "lerna.json"))
);
const packages = [];
for (const folderPattern of packagesFolders) {
  packages.push(...glob.sync(join(projectRoot, folderPattern)));
}
for (const packageDir of packages) {
  if (statSync(packageDir).isDirectory()) {
    const packageJson = JSON.parse(
      readFileSync(join(packageDir, "package.json"), "utf8")
    );
    const packageName = basename(packageDir);
    content += `
    "${packageName}": {
      package: "@aws-sdk/${packageName}",
      version: "^${packageJson.version}"
    },`;
  }
}

content += `
};
`;

writeFileSync(
  join(packageRoot, "src", "internalImports.ts"),
  prettier.format(content, { parser: "typescript" })
);
