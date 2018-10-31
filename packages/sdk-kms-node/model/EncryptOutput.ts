import {Structure as _Structure_} from '@aws-sdk/types';

export const EncryptOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        CiphertextBlob: {
            shape: {
                type: 'blob',
            },
        },
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};