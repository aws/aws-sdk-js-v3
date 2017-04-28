import {join} from 'path';
import {Options} from 'typescript-formatter/lib';

export const FORMATTER_OPTIONS: Options = Object.freeze({
    editorconfig: false,
    replace: false,
    tsconfig: false,
    tsconfigFile: null,
    tsfmt: true,
    tsfmtFile: join(__dirname, 'tsfmt.json'),
    tslint: false,
    tslintFile: null,
    verify: false,
    vscode: false,
});
