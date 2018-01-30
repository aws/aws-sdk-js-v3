import {_InventoryEncryption} from './_InventoryEncryption';
import {Structure as _Structure_} from '@aws/types';

export const _InventoryS3BucketDestination: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
        'Format',
    ],
    members: {
        AccountId: {
            shape: {
                type: 'string',
            },
        },
        Bucket: {
            shape: {
                type: 'string',
            },
        },
        Format: {
            shape: {
                type: 'string',
            },
        },
        Prefix: {
            shape: {
                type: 'string',
            },
        },
        Encryption: {
            shape: _InventoryEncryption,
        },
    },
};