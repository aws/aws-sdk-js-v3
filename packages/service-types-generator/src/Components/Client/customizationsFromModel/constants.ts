import {Import} from '@aws/build-types';
import {readdirSync, readFileSync, statSync} from 'fs';
import {dirname, join} from 'path';

/**
 * @internal
 */
export const IMPORTS: {[key: string]: Import} = {};

const packagesRoot = dirname(dirname(dirname(dirname(dirname(__dirname)))));
for (const packageName of readdirSync(packagesRoot)) {
    const packageDir = join(packagesRoot, packageName);
    if (statSync(packageDir).isDirectory()) {
        const packageJson = JSON.parse(
            readFileSync(join(packageDir, 'package.json'), 'utf8')
        );
        IMPORTS[packageName] = {
            package: `@aws/${packageName}`,
            version: `^${packageJson.version}`,
        };
    }
}
