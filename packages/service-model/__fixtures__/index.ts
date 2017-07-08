import {ShapeMap} from "../lib/ApiModel/ShapeMap";
import {Shape, Type} from "../lib/ApiModel/Shape";
import {NormalizedModel} from "../lib/TreeModel/types";
import {ServiceMetadata} from "@aws/types";

export const minimalValidServiceMetadata: ServiceMetadata = {
    apiVersion: 'string',
    endpointPrefix: 'string',
    protocol: 'json',
    serviceFullName: 'string',
    signatureVersion: 'v4',
    uid: 'string',
};

export const minimalShapeMap: ShapeMap & {[key in Type]: Shape} = {
    blob: {type: 'blob'},
    boolean: {type: 'boolean'},
    byte: {type: 'byte'},
    character: {type: 'character'},
    double: {type: 'double'},
    float: {type: 'float'},
    integer: {type: 'integer'},
    list: {
        type: 'list',
        member: {shape: 'boolean'},
    },
    long: {type: 'long'},
    map: {
        type: 'map',
        key: {shape: 'string'},
        value: {shape: 'blob'},
    },
    short: {type: 'short'},
    string: {type: 'string'},
    structure: {
        type: 'structure',
        members: {},
    },
    timestamp: {type: 'timestamp'},
};

export const stringTypes = new Set<Type>([
    'character',
    'string',
]);

export const numericTypes = new Set<Type>([
    'byte',
    'double',
    'float',
    'integer',
    'long',
    'short',
]);

export const scalarTypes = new Set<Type>([
    ...numericTypes,
    ...stringTypes,
    'blob',
    'boolean',
    'timestamp',
]);

export const model: NormalizedModel = {
    metadata: {
        apiVersion: '2017-04-30',
        endpointPrefix: 'endpoint',
        protocol: 'rest-json',
        serviceFullName: 'AWS Fake Service',
        signatureVersion: 'v4',
        uid: 'fake-2017-04-30',
    },
    operations: {
        DeleteResource: {
            name: 'DeleteResource',
            http: {
                method: 'DELETE',
                requestUri: '/resources/{resourceId}'
            },
            input: {shape: 'DeleteResourceInput'},
            output: {shape: 'DeleteResourceOutput'},
            errors: [],
        },
        GetResource: {
            name: 'GetResource',
            http: {
                method: 'GET',
                requestUri: '/resources/{resourceId}'
            },
            input: {shape: 'GetResourceInput'},
            output: {shape: 'GetResourceOutput'},
            errors: [
                {shape: 'ResourceNotFoundException'},
            ],
        },
        PutResource: {
            name: 'PutResource',
            http: {
                method: 'PUT',
                requestUri: '/resources/{resourceId}'
            },
            input: {shape: 'PutResourceInput'},
            output: {shape: 'PutResourceOutput'},
            errors: [
                {shape: 'ValidationException'},
            ],
        },
    },
    shapes: {
        ConsumedCapacity: {
            type: 'structure',
            members: {},
        },
        DeleteResourceInput: {
            type: 'structure',
            required: ['resourceId'],
            members: {
                resourceId: {shape: 'ResourceId'}
            },
            topLevel: 'input',
        },
        DeleteResourceOutput: {
            type: 'structure',
            required: [],
            members: {},
            topLevel: 'output',
        },
        GetResourceInput: {
            type: 'structure',
            required: ['resourceId'],
            members: {
                resourceId: {shape: 'ResourceId'}
            },
            topLevel: 'input',
        },
        GetResourceOutput: {
            type: 'structure',
            required: [],
            members: {
                data: {shape: 'StreamingBlob'},
            },
            payload: 'data',
            topLevel: 'output',
        },
        NodeId: {type: 'string'},
        NodeList: {
            type: 'list',
            member: {shape: 'NodeId'},
        },
        PrimaryLocationMap: {
            type: 'map',
            key: {shape: 'ResourceId'},
            value: {shape: 'NodeId'},
        },
        PutResourceInput: {
            type: 'structure',
            required: ['resourceId', 'data'],
            members: {
                resourceId: {shape: 'ResourceId'},
                data: {shape: 'StreamingBlob'},
            },
            topLevel: 'input',
        },
        PutResourceOutput: {
            type: 'structure',
            required: [],
            members: {
                replicatedToNodes: {shape: 'NodeList'},
                resourcePrimaries: {shape: 'PrimaryLocationMap'},
                consumedCapacity: {shape: 'ConsumedCapacity'},
            },
            topLevel: 'output',
        },
        ResourceId: {type: 'string'},
        ResourceNotFoundException: {
            type: 'structure',
            required: [],
            members: {},
            exception: true,
        },
        StreamingBlob: {
            type: 'blob',
            streaming: true,
        },
        ValidationException: {
            type: 'structure',
            required: [],
            members: {},
            exception: true,
        },
    },
};

// Copies objects and arrays. Only own enumerable properties are preserved.
export function deepCopy<T>(arg: T): T {
    if (!arg) {
        return arg;
    }

    if (Array.isArray(arg)) {
        return <T><any>arg.map(element => deepCopy(element));
    }

    if (typeof arg === 'object') {
        return <T>Object.keys(arg).reduce((
            carry: object,
            item: keyof T
        ) => ({...carry, [item]: deepCopy(arg[item])}), {});
    }

    return arg;
}
