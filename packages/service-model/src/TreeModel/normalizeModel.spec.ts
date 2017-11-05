import {normalizeModel} from "./normalizeModel";
import {minimalValidServiceMetadata} from "../ApiModel/serviceMetadata.fixture";
import {OperationMap, ShapeMap} from '@aws/build-types';

describe('normalizeModel', () => {
    describe('standardizes metadata by', () => {
        it('removing undefined fields', () => {
            const api = normalizeModel({
                metadata: {
                    ...minimalValidServiceMetadata,
                    targetPrefix: undefined
                },
                shapes: {},
                operations: {}
            });
            expect(api.metadata).toEqual(minimalValidServiceMetadata);
        });

        it('removing unrecognized fields', () => {
            const api = normalizeModel({
                metadata: {
                    ...minimalValidServiceMetadata,
                    foo: 'bar'
                } as any,
                shapes: {},
                operations: {}
            });
            expect(api.metadata).toEqual(minimalValidServiceMetadata);
        });
    });

    it('should standardize input and output names', () => {
        const shapes: ShapeMap = {
            GFReq: {
                type: 'structure',
                members: {},
            },
            GFRes: {
                type: 'structure',
                members: {},
            },
        };
        const operations: OperationMap = {
            GetFoo: {
                name: 'GetFoo',
                http: {
                    method: 'GET',
                    requestUri: '/',
                },
                input: {shape: 'GFReq'},
                output: {shape: 'GFRes'},
            },
        };
        const api = normalizeModel({
            metadata: minimalValidServiceMetadata,
            shapes,
            operations,
        });

        expect(api.operations.GetFoo.input.shape).toBe('GetFooInput');
        expect(api.shapes.GetFooInput).toBeDefined();
        expect(api.operations.GetFoo.output.shape).toBe('GetFooOutput');
        expect(api.shapes.GetFooOutput).toBeDefined();
    });

    it('should remove replaced input and output names', () => {
        const shapes: ShapeMap = {
            GFReq: {
                type: 'structure',
                members: {},
            },
            GFRes: {
                type: 'structure',
                members: {},
            },
        };
        const operations: OperationMap = {
            GetFoo: {
                name: 'GetFoo',
                http: {
                    method: 'GET',
                    requestUri: '/',
                },
                input: {shape: 'GFReq'},
                output: {shape: 'GFRes'},
            },
        };
        const api = normalizeModel({
            metadata: minimalValidServiceMetadata,
            shapes,
            operations,
        });

        expect(Object.keys(api.shapes)).toEqual([
            'GetFooInput',
            'GetFooOutput',
        ]);
    });

    it(
        'should create input and output shapes for each operation if not provided in model',
        () => {
            const shapes: ShapeMap = {
                GetFooOutput: {
                    type: 'structure',
                    members: {},
                },
                PutFooInput: {
                    type: 'structure',
                    members: {},
                },
            };
            const operations: OperationMap = {
                GetFoo: {
                    name: 'GetFoo',
                    http: {
                        method: 'GET',
                        requestUri: '/',
                    },
                    output: {shape: 'GetFooOutput'},
                },
                PutFoo: {
                    name: 'PutFoo',
                    http: {
                        method: 'PUT',
                        requestUri: '/',
                    },
                    input: {shape: 'PutFooInput'},
                },
            };
            const api = normalizeModel({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            });

            expect(api.operations.GetFoo.input).toBeDefined();
            expect(api.operations.PutFoo.output).toBeDefined();
        }
    );

    it(
        'should create input and output shapes for each operation if IO shapes are shared',
        () => {
            const shapes: ShapeMap = {
                GetInput: {
                    type: 'structure',
                    members: {},
                },
                GetOutput: {
                    type: 'structure',
                    members: {
                        input: {shape: 'GetInput'}
                    },
                },
            };
            const operations: OperationMap = {
                GetFoo: {
                    name: 'GetFoo',
                    http: {
                        method: 'GET',
                        requestUri: '/',
                    },
                    input: {shape: 'GetInput'},
                    output: {shape: 'GetOutput'},
                },
                GetBar: {
                    name: 'GetBar',
                    http: {
                        method: 'GET',
                        requestUri: '/',
                    },
                    input: {shape: 'GetInput'},
                    output: {shape: 'GetOutput'},
                },
            };
            const api = normalizeModel({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            });

            expect(api.shapes.GetFooInput).toBeDefined();
            expect(api.shapes.GetBarInput).toBeDefined();
            expect(api.shapes.GetFooOutput).toBeDefined();
            expect(api.shapes.GetBarOutput).toBeDefined();
        }
    );

    it(
        'should preserve non-IO shape if IO shape used as a member of another shape',
        () => {
            const shapes: ShapeMap = {
                GetInput: {
                    type: 'structure',
                    members: {},
                },
                GetOutput: {
                    type: 'structure',
                    members: {
                        input: {shape: 'GetInput'}
                    },
                },
            };
            const operations: OperationMap = {
                GetFoo: {
                    name: 'GetFoo',
                    http: {
                        method: 'GET',
                        requestUri: '/',
                    },
                    input: {shape: 'GetInput'},
                    output: {shape: 'GetOutput'},
                },
            };
            const api = normalizeModel({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            });


            const outputShape = api.shapes[api.operations.GetFoo.output.shape];
            if (outputShape.type !== 'structure') {
                throw new Error('IO shapes should be structures');
            }

            const {shape} = outputShape.members.input;
            expect(Object.keys(api.shapes).sort()).toEqual([
                'GetFooInput',
                'GetFooOutput',
                shape,
            ].sort());
            expect(api.operations.GetFoo.input.shape).toBe('GetFooInput');
            expect(api.operations.GetFoo.output.shape).toBe('GetFooOutput');
            expect(shape).not.toBe(api.operations.GetFoo.input.shape);
        }
    );

    it('should rename each shape to begin with an underscore', () => {
        const shapes: ShapeMap = {
            GetFooInput: {
                type: 'structure',
                members: {
                    createdAt: {shape: 'Date'},
                    object: {shape: 'Object'},
                    reserved: {shape: 'instanceof'},
                    error: {shape: 'Error'},
                },
            },
            Date: {
                type: 'timestamp',
            },
            Error: {
                type: 'structure',
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
                input: {shape: 'GetFooInput'}
            },
        };
        const api = normalizeModel({
            metadata: minimalValidServiceMetadata,
            shapes,
            operations,
        });

        expect(api.shapes.Date).not.toBeDefined();
        expect(api.shapes._Date).toBeDefined();
        expect(api.shapes.Error).not.toBeDefined();
        expect(api.shapes._Error).toBeDefined();
        expect(api.shapes.instanceof).not.toBeDefined();
        expect(api.shapes._instanceof).toBeDefined();
        expect(api.shapes.Object).not.toBeDefined();
        expect(api.shapes._Object).toBeDefined();
    });

    it(
        'should sanitize shape names that clash with JS reserved words or globally-scoped constructors',
        () => {
            (global as any)._Date = {};
            (global as any)._Object = {};
            (global as any)._Error = {};
            (global as any)._instanceof = {};

            const shapes: ShapeMap = {
                GetFooInput: {
                    type: 'structure',
                    members: {
                        createdAt: {shape: 'Date'},
                        object: {shape: 'Object'},
                        reserved: {shape: 'instanceof'},
                        error: {shape: 'Error'}
                    },
                },
                Date: {
                    type: 'timestamp',
                },
                Error: {
                    type: 'structure',
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
                    input: {shape: 'GetFooInput'}
                },
            };
            const api = normalizeModel({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            });

            expect(api.operations.GetFoo.input.shape).toBe('GetFooInput');
            expect(api.shapes.Date).not.toBeDefined();
            expect(api.shapes._Date).not.toBeDefined();
            expect(api.shapes.__Date).toBeDefined();
            expect(api.shapes.Error).not.toBeDefined();
            expect(api.shapes._Error).not.toBeDefined();
            expect(api.shapes.__Error).toBeDefined();
            expect(api.shapes.instanceof).not.toBeDefined();
            expect(api.shapes._instanceof).not.toBeDefined();
            expect(api.shapes.__instanceof).toBeDefined();
            expect(api.shapes.Object).not.toBeDefined();
            expect(api.shapes._Object).not.toBeDefined();
            expect(api.shapes.__Object).toBeDefined();
        }
    );

    it('should preserve error names as defined in model', () => {
        const shapes: ShapeMap = {
            GetFooException: {
                type: 'structure',
                exception: true,
                members: {},
            },
        };
        const operations: OperationMap = {
            GetFoo: {
                name: 'GetFoo',
                http: {
                    method: 'GET',
                    requestUri: '/',
                },
                errors: [{shape: 'GetFooException'}],
            },
        };
        const api = normalizeModel({
            metadata: minimalValidServiceMetadata,
            shapes,
            operations,
        });

        expect(api.shapes.GetFooException).toBeDefined();
        expect(api.operations.GetFoo.errors[0].shape).toBe('GetFooException');
    });
});
