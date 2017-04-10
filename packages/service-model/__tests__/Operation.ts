import {
    isHttpTraitDefinition,
    isOperation,
} from "../lib/Operation";

describe('isHttpTraitDefinition', () => {
    it('should reject null', () => {
        expect(isHttpTraitDefinition(null)).toBe(false);
    });

    it('should accept objects with "method" and "requestUri" properties', () => {
        expect(isHttpTraitDefinition({method: 'string', requestUri: 'string'}))
            .toBe(true);
    });

    it('should reject objects where "method" is not a string', () => {
        expect(isHttpTraitDefinition({method: 12, requestUri: 'string'}))
            .toBe(false);
    });

    it('should reject objects where "requestUri" is not a string', () => {
        expect(isHttpTraitDefinition({method: 'string', requestUri: 21}))
            .toBe(false);
    });
});

describe('isOperation', () => {
    const minimalValidOperation = {
        name: 'string',
        http: {method: 'string', requestUri: 'string'},
    };

    it('should reject null', () => {
        expect(isOperation(null)).toBe(false);
    });

    it('should accept objects with "name" and "http" properties', () => {
        expect(isOperation(minimalValidOperation)).toBe(true);
    });

    it(
        'should reject objects where a "deprecated" property is present and not a boolean',
        () => {
            expect(isOperation(
                Object.assign({}, minimalValidOperation, {deprecated: 'string'})
            )).toBe(false);
        }
    );

    it(
        'should reject objects where a "documentation" property is present and not a boolean',
        () => {
            expect(isOperation(
                Object.assign({}, minimalValidOperation, {documentation: 1})
            )).toBe(false);
        }
    );

    it(
        'should reject objects where a "input" property is present and not a StructureMember',
        () => {
            expect(isOperation(
                Object.assign({}, minimalValidOperation, {input: 'string'})
            )).toBe(false);
        }
    );

    it(
        'should reject objects where a "output" property is present and not a StructureMember',
        () => {
            expect(isOperation(
                Object.assign({}, minimalValidOperation, {output: 'string'})
            )).toBe(false);
        }
    );

    it(
        'should reject objects where a "errors" property is present and not an array of StructureMembers',
        () => {
            expect(isOperation(
                Object.assign({}, minimalValidOperation, {errors: ['string']})
            )).toBe(false);
        }
    );
});
