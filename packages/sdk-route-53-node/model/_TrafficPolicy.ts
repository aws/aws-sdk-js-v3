import {Structure as _Structure_} from '@aws-sdk/types';

export const _TrafficPolicy: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
        'Version',
        'Name',
        'Type',
        'Document',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Version: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        Name: {
            shape: {
                type: 'string',
            },
        },
        Type: {
            shape: {
                type: 'string',
            },
        },
        Document: {
            shape: {
                type: 'string',
            },
        },
        Comment: {
            shape: {
                type: 'string',
            },
        },
    },
};