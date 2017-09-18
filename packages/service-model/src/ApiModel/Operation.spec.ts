import {
    isHttpTrait,
    isOperation,
} from "./Operation";

describe('isHttpTraitDefinition', () => {
    it('should reject null', () => {
        expect(isHttpTrait(null)).toBe(false);
    });

    it('should accept objects with "method" and "requestUri" properties', () => {
        expect(isHttpTrait({method: 'string', requestUri: 'string'}))
            .toBe(true);
    });

    it('should reject objects where "method" is not a string', () => {
        expect(isHttpTrait({method: 12, requestUri: 'string'}))
            .toBe(false);
    });

    it('should reject objects with no "method" property', () => {
        expect(isHttpTrait({requestUri: 'string'})).toBe(false);
    });

    it('should reject objects where "requestUri" is not a string', () => {
        expect(isHttpTrait({method: 'string', requestUri: 21}))
            .toBe(false);
    });

    it('should reject objects with no "requestUri" property', () => {
        expect(isHttpTrait({method: 'string'})).toBe(false);
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
            expect(isOperation({...minimalValidOperation, deprecated: 'string'}))
                .toBe(false);
        }
    );

    it(
        'should accept objects where a "deprecated" property is present and a boolean',
        () => {
            expect(isOperation({...minimalValidOperation, deprecated: true}))
                .toBe(true);
        }
    );

    it(
        'should reject objects where a "documentation" property is present and not a string',
        () => {
            expect(isOperation({...minimalValidOperation, documentation: 1}))
                .toBe(false);
        }
    );

    it(
        'should accept objects where a "documentation" property is present and a string',
        () => {
            expect(isOperation({...minimalValidOperation, documentation: 'docs'}))
                .toBe(true);
        }
    );

    it(
        'should reject objects where a "input" property is present and not a StructureMember',
        () => {
            expect(isOperation({...minimalValidOperation, input: 'string'}))
                .toBe(false);
        }
    );

    it(
        'should accept objects where a "input" property is present and a StructureMember',
        () => {
            expect(isOperation(
                {...minimalValidOperation, input: {shape: 'FooShape'}}
            )).toBe(true);
        }
    );

    it(
        'should reject objects where a "output" property is present and not a StructureMember',
        () => {
            expect(isOperation({...minimalValidOperation, output: 'string'}))
                .toBe(false);
        }
    );

    it(
        'should accept objects where a "output" property is present and a StructureMember',
        () => {
            expect(isOperation(
                {...minimalValidOperation, output: {shape: 'FooShape'}}
            )).toBe(true);
        }
    );

    it(
        'should reject objects where a "errors" property is present and not an array of StructureMembers',
        () => {
            expect(isOperation({...minimalValidOperation, errors: ['string']}))
            .toBe(false);
        }
    );

    it(
        'should accept objects where a "errors" property is present and an array of StructureMembers',
        () => {
            expect(isOperation(
                {...minimalValidOperation, errors: [{shape: 'FooException'}]}
            )).toBe(true);
        }
    );
});
