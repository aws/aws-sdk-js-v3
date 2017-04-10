import {ApiDefinition} from "../lib";
import {OperationMap} from "../lib/OperationMap";
import {ShapeMap} from "../lib/ShapeMap";
import {minimalValidServiceMetadata} from './ServiceMetadata';
import {Structure} from "../lib/Shape";

describe('ApiDefinition', () => {
    it('should throw when input cannot be parsed with JSON.parse', () => {
        expect(() => {
            const api: ApiDefinition = new ApiDefinition('foo');
        }).toThrow();
    });

    it('should throw when input has no metadata', () => {
        expect(() => {
            const api: ApiDefinition = new ApiDefinition(JSON.stringify({
                operations: {},
                shapes: {},
            }));
        }).toThrow();
    });

    it('should throw when input has no operations', () => {
        expect(() => {
            const api: ApiDefinition = new ApiDefinition(JSON.stringify({
                metadata: minimalValidServiceMetadata,
                shapes: {},
            }));
        }).toThrow();
    });

    it('should throw when input has no shapes', () => {
        expect(() => {
            const api: ApiDefinition = new ApiDefinition(JSON.stringify({
                metadata: minimalValidServiceMetadata,
                operations: {},
            }));
        }).toThrow();
    });

    it(
        'should throw when input has a "documentation" property that is not a string',
        () => {
            expect(() => {
                const api: ApiDefinition = new ApiDefinition(JSON.stringify({
                    metadata: minimalValidServiceMetadata,
                    operations: {},
                    shapes: {},
                    documentation: null,
                }));
            }).toThrow();
        }
    );

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
        const api = new ApiDefinition(JSON.stringify({
            metadata: minimalValidServiceMetadata,
            shapes,
            operations,
        }));

        expect(api.operations.GetFoo.input.shape).toBe('GetFooInput');
        expect(api.shapes.GetFooInput).toBeDefined();
        expect(api.shapes.GFReq).not.toBeDefined();
        expect(api.operations.GetFoo.output.shape).toBe('GetFooOutput');
        expect(api.shapes.GetFooOutput).toBeDefined();
        expect(api.shapes.GFRes).not.toBeDefined();
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
            const api = new ApiDefinition(JSON.stringify({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            }));

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
            const api = new ApiDefinition(JSON.stringify({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            }));

            expect(api.shapes.GetFooInput).toBeDefined();
            expect(api.shapes.GetBarInput).toBeDefined();
            expect(api.shapes.GetInput).not.toBeDefined();
            expect(api.shapes.GetFooOutput).toBeDefined();
            expect(api.shapes.GetBarOutput).toBeDefined();
            expect(api.shapes.GetOutput).not.toBeDefined();
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
            const api = new ApiDefinition(JSON.stringify({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            }));

            expect(api.shapes.GetInput).not.toBeDefined();
            const output = <Structure>api.shapes.GetFooOutput;
            const nonIoShape = output.members.input.shape;
            expect(api.shapes[nonIoShape]).toBeDefined();
            expect(nonIoShape).not.toBe('GetInput');
            expect(nonIoShape).not.toBe('GetFooInput');
            expect(nonIoShape).not.toBe('GetBarInput');
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
            const api = new ApiDefinition(JSON.stringify({
                metadata: minimalValidServiceMetadata,
                shapes,
                operations,
            }));

            expect(api.operations.GetFoo.input.shape).toBe('GetFooInput');
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
