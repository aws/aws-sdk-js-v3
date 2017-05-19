import {Import} from "../../lib/Components/Import";

describe('Import', () => {
    it('should create es6 imports', () => {
        expect(new Import('module-name', 'ExportedClass').toString())
            .toBe("import {ExportedClass} from 'module-name';");
    });

    it('should create es6 imports with destructured imports', () => {
        const importInstance = new Import(
            'module-name',
            'ExportedInterface',
            'ExportedType'
        );
        expect(importInstance.toString())
            .toBe("import {ExportedInterface, ExportedType} from 'module-name';");
    });

    it('should deduplicate imported symbols', () => {
        const importInstance = new Import(
            'module-name',
            'ExportedInterface',
            'ExportedInterface',
            'ExportedType',
            'ExportedType'
        );
        expect(importInstance.toString())
            .toBe("import {ExportedInterface, ExportedType} from 'module-name';");
    });

    it('should throw if created with no imported symbols', () => {
        expect(() => new Import('module-name')).toThrow();
    });
});
