import {_AccessControlTranslation} from './_AccessControlTranslation';
import {_EncryptionConfiguration} from './_EncryptionConfiguration';
import {Structure as _Structure_} from '@aws/types';

export const _Destination: _Structure_ = {
    type: 'structure',
    required: [
        'Bucket',
    ],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
        },
        Account: {
            shape: {
                type: 'string',
            },
        },
        StorageClass: {
            shape: {
                type: 'string',
            },
        },
        AccessControlTranslation: {
            shape: _AccessControlTranslation,
        },
        EncryptionConfiguration: {
            shape: _EncryptionConfiguration,
        },
    },
};