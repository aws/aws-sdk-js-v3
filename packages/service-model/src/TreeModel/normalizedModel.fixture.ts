import {NormalizedModel} from '@aws-sdk/build-types';

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
