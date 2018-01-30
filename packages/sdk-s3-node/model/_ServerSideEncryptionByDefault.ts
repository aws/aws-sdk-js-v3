import {Structure as _Structure_} from '@aws/types';

export const _ServerSideEncryptionByDefault: _Structure_ = {
    type: 'structure',
    required: [
        'SSEAlgorithm',
    ],
    members: {
        SSEAlgorithm: {
            shape: {
                type: 'string',
            },
        },
        KMSMasterKeyID: {
            shape: {
                type: 'string',
                sensitive: true,
            },
        },
    },
};