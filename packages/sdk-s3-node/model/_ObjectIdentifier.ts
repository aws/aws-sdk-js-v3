import {Structure as _Structure_} from '@aws/types';

export const _ObjectIdentifier: _Structure_ = {
    type: 'structure',
    required: [
        'Key',
    ],
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
    },
};