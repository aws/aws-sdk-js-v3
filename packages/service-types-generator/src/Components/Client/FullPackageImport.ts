import {packageNameToVariable} from './packageNameToVariable';

export class FullPackageImport {
    constructor(private readonly packageName: string) {}

    toString(): string {
        return `import * as ${packageNameToVariable(this.packageName)} from '${this.packageName}';`;
    }
}
