export class Import {
    private importedSymbols: Array<string>;

    constructor(
        readonly path: string,
        ...importedSymbols: Array<string>
    ) {
        if (importedSymbols.length === 0) {
            throw new Error('Cannot create an import that defines no symbols');
        }

        this.importedSymbols = [...new Set(importedSymbols)];
    }

    addSymbols(symbols: Array<string>) {
        this.importedSymbols = [...new Set([...this.importedSymbols, ...symbols])];
    }

    toString(): string {
        return `import {${this.importedSymbols.join(', ')}} from '${this.path}';`;
    }
}
