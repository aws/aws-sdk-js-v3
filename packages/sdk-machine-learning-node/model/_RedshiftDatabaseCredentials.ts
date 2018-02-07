import {Structure as _Structure_} from '@aws/types';

export const _RedshiftDatabaseCredentials: _Structure_ = {
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