import {Structure as _Structure_} from '@aws-sdk/types';

export const _RDSDatabaseCredentials: _Structure_ = {
    type: 'structure',
    required: [
        'Username',
        'Password',
    ],
    members: {
        Username: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Password: {
            shape: {
                type: 'string',
                min: 8,
            },
        },
    },
};