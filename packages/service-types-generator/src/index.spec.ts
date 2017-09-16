import * as pkg from './';

describe('package index', () => {
    it('should define a model generator', () => {
        expect(pkg.ModelGenerator).toBeDefined();
    });

    it('should define an operation generator', () => {
        expect(pkg.OperationGenerator).toBeDefined();
    });

    it('should define a type generator', () => {
        expect(pkg.TypeGenerator).toBeDefined();
    });
});
