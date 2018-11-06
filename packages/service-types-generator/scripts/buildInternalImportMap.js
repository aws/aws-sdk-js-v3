const {readdirSync, readFileSync, statSync, writeFileSync} = require('fs');
const {dirname, join} = require('path');

let content = `import {Import} from '@aws-sdk/build-types';

/**
 * @internal
 */
export const IMPORTS: {[key: string]: Import} = {`;

const packageRoot = dirname(__dirname);
const packagesRoot = dirname(packageRoot);

for (const packageName of readdirSync(packagesRoot)) {
    const packageDir = join(packagesRoot, packageName);
    if (statSync(packageDir).isDirectory()) {
        const packageJson = JSON.parse(
            readFileSync(join(packageDir, 'package.json'), 'utf8')
        );
        content += `
    '${packageName}': {
        package: '@aws-sdk/${packageName}',
        version: '^${packageJson.version}',
    },`;
    }
}

content += `
};
`;

writeFileSync(
    join(packageRoot, 'src', 'internalImports.ts'),
    content
);
