import {Structure as _Structure_} from '@aws/types';

export const _Grantee: _Structure_ = {
    type: 'structure',
    required: [
        'Type',
    ],
    members: {
        DisplayName: {
            shape: {
                type: 'string',
            },
        },
        EmailAddress: {
            shape: {
                type: 'string',
            },
        },
        ID: {
            shape: {
                type: 'string',
            },
        },
        Type: {
            shape: {
                type: 'string',
            },
            locationName: 'xsi:type',
            xmlAttribute: true,
        },
        URI: {
            shape: {
                type: 'string',
            },
        },
    },
};