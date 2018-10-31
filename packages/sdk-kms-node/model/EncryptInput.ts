import {_EncryptionContextType} from './_EncryptionContextType';
import {_GrantTokenList} from './_GrantTokenList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const EncryptInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
        'Plaintext',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Plaintext: {
            shape: {
                type: 'blob',
                sensitive: true,
            },
        },
        EncryptionContext: {
            shape: _EncryptionContextType,
        },
        GrantTokens: {
            shape: _GrantTokenList,
        },
    },
};