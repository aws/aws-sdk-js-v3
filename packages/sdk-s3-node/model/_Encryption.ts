import {Structure as _Structure_} from '@aws-sdk/types';

export const _Encryption: _Structure_ = {
    type: 'structure',
    required: [
        'EncryptionType',
    ],
    members: {
        EncryptionType: {
            shape: {
                type: 'string',
            },
        },
        KMSKeyId: {
            shape: {
                type: 'string',
                sensitive: true,
            },
        },
        KMSContext: {
            shape: {
                type: 'string',
            },
        },
    },
};