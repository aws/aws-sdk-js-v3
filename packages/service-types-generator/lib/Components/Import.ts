export class Import {
    private readonly importedSymbols: Array<string>;

    constructor(
        private readonly path: string,
        ...importedSymbols: Array<string>
    ) {
        if (importedSymbols.length === 0) {
            throw new Error('Cannot create an import that defines no symbols');
        }

        this.importedSymbols = [...new Set(importedSymbols)];
    }

    toString(): string {
        return `import {${this.importedSymbols.join(', ')}} from '${this.path}';`;
    }
}
