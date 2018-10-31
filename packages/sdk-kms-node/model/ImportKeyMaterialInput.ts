import {Structure as _Structure_} from '@aws-sdk/types';

export const ImportKeyMaterialInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
        'ImportToken',
        'EncryptedKeyMaterial',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ImportToken: {
            shape: {
                type: 'blob',
            },
        },
        EncryptedKeyMaterial: {
            shape: {
                type: 'blob',
            },
        },
        ValidTo: {
            shape: {
                type: 'timestamp',
            },
        },
        ExpirationModel: {
            shape: {
                type: 'string',
            },
        },
    },
};