import {OperationMap} from "../lib/OperationMap";
import {ShapeMap} from "../lib/ShapeMap";
import {minimalValidServiceMetadata} from './ServiceMetadata';
import {fromModelJson} from "../lib/TreeModel";

describe('TreeModel', () => {
    it('should throw when input cannot be parsed with JSON.parse', () => {
        expect(() => {
            const api = fromModelJson('foo');
        }).toThrow();
    });

    it('should throw when input has no metadata', () => {
        expect(() => {
            const api = fromModelJson(JSON.stringify({
                operations: {},
                shapes: {},
            }));
        }).toThrow();
    });

    it('should throw when input has no operations', () => {
        expect(() => {
            const api = fromModelJson(JSON.stringify({
                metadata: minimalValidServiceMetadata,
                shapes: {},
            }));
        }).toThrow();
    });

    it('should throw when input has no shapes', () => {
        expect(() => {
            const api = fromModelJson(JSON.stringify({
                metadata: minimalValidServiceMetadata,
                operations: {},
            }));
        }).toThrow();
    });

    it(
        'should throw when input has a "documentation" property that is not a string',
        () => {
            expect(() => {
                const api = fromModelJson(JSON.stringify({
                    metadata: minimalValidServiceMetadata,
                    operations: {},
                    shapes: {},
                    documentation: null,
                }));
            }).toThrow();
        }
    );

    it(
        'should sanitize shape names that clash with JS reserved words or globally-scoped constructors',
        () => {
            const shapes: ShapeMap = {
                GetFooInput: {
                    type: 'structure',
                    members: {
                        createdAt: {shape: 'Date'},
                        object: {shape: 'Object'},
                        reserved: {shape: 'instanceof'},
                    },
                },
                Date: {
                    type: 'timestamp',
                },
                Error: {
                    type: 'structure',
                    exception: true,
                    members: {},
                },
                'instanceof': {
                    type: 'string',
                },
                Object: {
                    type: 'blob',
                },
            };
            const operations: OperationMap = {
                GetFoo: {
                    name: 'GetFoo',
                    http: {
                        method: 'GET',
                        requestUri: '/',
                    },
                    input: {shape: 'GetFooInput'},
                    errors: [{shape: 'Error'}]
                },
            };
            const api = fromModelJson(JSON.stringify({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            }));

            expect(api.operations.GetFoo.input.name).toBe('GetFooInput');
            expect(api.shapes.Date).not.toBeDefined();
            expect(api.shapes._Date).toBeDefined();
            expect(api.shapes.Error).not.toBeDefined();
            expect(api.shapes._Error).toBeDefined();
            expect(api.shapes.instanceof).not.toBeDefined();
            expect(api.shapes._instanceof).toBeDefined();
            expect(api.shapes.Object).not.toBeDefined();
            expect(api.shapes._Object).toBeDefined();
        }
    );
});
