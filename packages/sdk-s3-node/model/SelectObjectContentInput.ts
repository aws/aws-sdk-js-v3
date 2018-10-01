import {_RequestProgress} from './_RequestProgress';
import {_InputSerialization} from './_InputSerialization';
import {_OutputSerialization} from './_OutputSerialization';
import {Structure as _Structure_} from '@aws/types';

export const SelectObjectContentInput: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Key',
        'Expression',
        'ExpressionType',
        'InputSerialization',
        'OutputSerialization',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Bucket',
        },
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Key',
        },
        SSECustomerAlgorithm: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-customer-algorithm',
        },
        SSECustomerKey: {
            shape: {
                type: 'string',
                sensitive: true,
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-customer-key',
        },
        SSECustomerKeyMD5: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-server-side-encryption-customer-key-MD5',
        },
        Expression: {
            shape: {
                type: 'string',
            },
        },
        ExpressionType: {
            shape: {
                type: 'string',
            },
        },
        RequestProgress: {
            shape: _RequestProgress,
        },
        InputSerialization: {
            shape: _InputSerialization,
        },
        OutputSerialization: {
            shape: _OutputSerialization,
        },
    },
};