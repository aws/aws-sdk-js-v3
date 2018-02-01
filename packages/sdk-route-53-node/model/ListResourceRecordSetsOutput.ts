import {_ResourceRecordSets} from './_ResourceRecordSets';
import {Structure as _Structure_} from '@aws/types';

export const ListResourceRecordSetsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ResourceRecordSets',
        'IsTruncated',
        'MaxItems',
    ],
    members: {
        ResourceRecordSets: {
            shape: _ResourceRecordSets,
        },
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        NextRecordName: {
            shape: {
                type: 'string',
            },
        },
        NextRecordType: {
            shape: {
                type: 'string',
            },
        },
        NextRecordIdentifier: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        MaxItems: {
            shape: {
                type: 'string',
            },
        },
    },
};