import {OperationModel} from '@aws/types';
export const minimalOperation: OperationModel = {
    http: {
        method: 'GET',
        requestUri: '/'
    },
    name: 'test',
    metadata: {
        apiVersion: '2017-06-28',
        endpointPrefix: 'foo',
        protocol: 'ec2',
        serviceFullName: 'AWS Foo Service',
        signatureVersion: 'v4',
        uid: 'foo-2017-09-22',
    },
    input: {
        shape: {
            type: 'structure',
            required: [],
            members: {},
        }
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {},
        }
    },
    errors: [{
        shape: {
            type: 'structure',
            required: ['Type'],
            members: {
                Type: {shape: {type: 'string'}},
            },
            exceptionType: 'ConfigurationSetDoesNotExist'
        },
    }],
};
