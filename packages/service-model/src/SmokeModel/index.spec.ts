import {SmokeTestModel} from '@aws/build-types';
import {
    fromSmokeTestModelJson,
    isSmokeTestModel
} from './index';

const minimalValidSmokeTestModel: SmokeTestModel = {
    version: 1,
    defaultRegion: 'us-west-2',
    testCases: [
        {
            errorExpectedFromService: false,
            input: {},
            operationName: 'Foo'
        }
    ]
};

describe('isSmokeTestModel', () => {
    it('should accept a valid SmokeTestModel', () => {
        expect(isSmokeTestModel(minimalValidSmokeTestModel)).toBe(true);
    });

    it ('should reject objects where version is not a number', () => {
        expect(isSmokeTestModel({
            ...minimalValidSmokeTestModel,
            version: 'foo'
        })).toBe(false);
    });

    it ('should reject objects where defaultRegion is not a string', () => {
        expect(isSmokeTestModel({
            ...minimalValidSmokeTestModel,
            defaultRegion: false
        })).toBe(false);
    });

    it ('should reject objects where testCases is not an array', () => {
        expect(isSmokeTestModel({
            ...minimalValidSmokeTestModel,
            testCases: null
        })).toBe(false);
    });

    it ('should reject objects where testCases has no elements', () => {
        expect(isSmokeTestModel({
            ...minimalValidSmokeTestModel,
            testCases: []
        })).toBe(false);
    });

    it ('should reject objects where a test case has no input', () => {
        expect(isSmokeTestModel({
            ...minimalValidSmokeTestModel,
            testCases: [{
                ...minimalValidSmokeTestModel.testCases[0],
                input: null
            }]
        })).toBe(false);
    });

    it (`should reject objects where a test case's operation name is not a string`, () => {
        expect(isSmokeTestModel({
            ...minimalValidSmokeTestModel,
            testCases: [{
                ...minimalValidSmokeTestModel.testCases[0],
                operationName: 500
            }]
        })).toBe(false);
    });

    it (
        `should reject objects where a test case's errorExpectedFromService is not a boolean`,
        () => {
            expect(isSmokeTestModel({
                ...minimalValidSmokeTestModel,
                testCases: [{
                    ...minimalValidSmokeTestModel.testCases[0],
                    errorExpectedFromService: 'cat'
                }]
            })).toBe(false);
        }
    );
});

describe('fromSmokeTestModel', () => {
    it('should parse a smoke test model', () => {
        const model = fromSmokeTestModelJson(JSON.stringify(minimalValidSmokeTestModel));
        expect(model).toEqual(minimalValidSmokeTestModel);
    });

    it('should throw when input cannot be parsed with JSON.parse', () => {
        expect(() => {
            const model = fromSmokeTestModelJson('foo');
        }).toThrow();
    });

    it ('should throw when version is not a number', () => {
        expect(() => {
            const model = fromSmokeTestModelJson(JSON.stringify({
                ...minimalValidSmokeTestModel,
                version: 'foo'
            }));
        }).toThrow();
    });

    it ('should throw when defaultRegion is not a string', () => {
        expect(() => {
            const model = fromSmokeTestModelJson(JSON.stringify({
                ...minimalValidSmokeTestModel,
                defaultRegion: false
            }));
        }).toThrow();
    });

    it ('should throw when testCases is not an array', () => {
        expect(() => {
            const model = fromSmokeTestModelJson(JSON.stringify({
                ...minimalValidSmokeTestModel,
                testCases: null
            }));
        }).toThrow();
    });

    it ('should throw when testCases has no elements', () => {
        expect(() => {
            const model = fromSmokeTestModelJson(JSON.stringify({
                ...minimalValidSmokeTestModel,
                testCases: []
            }));
        }).toThrow();
    });

    it ('should throw when a test case has no input', () => {
        expect(() => {
            const model = fromSmokeTestModelJson(JSON.stringify({
                ...minimalValidSmokeTestModel,
                testCases: [{
                    ...minimalValidSmokeTestModel.testCases[0],
                    input: null
                }]
            }));
        }).toThrow();
    });

    it (`should throw when a test case's operation name is not a string`, () => {
        expect(() => {
            const model = fromSmokeTestModelJson(JSON.stringify({
                ...minimalValidSmokeTestModel,
                testCases: [{
                    ...minimalValidSmokeTestModel.testCases[0],
                    operationName: 500
                }]
            }));
        }).toThrow();
    });

    it (
        `should throw when a test case's errorExpectedFromService is not a boolean`,
        () => {
            expect(() => {
                const model = fromSmokeTestModelJson(JSON.stringify({
                    ...minimalValidSmokeTestModel,
                    testCases: [{
                        ...minimalValidSmokeTestModel.testCases[0],
                        errorExpectedFromService: 'cat'
                    }]
                }));
            }).toThrow();
        }
    );
});