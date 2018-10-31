import {Structure as _Structure_} from '@aws-sdk/types';

export const _Error: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        VersionId: {
            shape: {
                type: 'string',
            },
        },
        Code: {
            shape: {
                type: 'string',
            },
        },
        Message: {
            shape: {
                type: 'string',
            },
        },
    },
};