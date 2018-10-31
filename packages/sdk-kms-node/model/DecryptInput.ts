import {_EncryptionContextType} from './_EncryptionContextType';
import {_GrantTokenList} from './_GrantTokenList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DecryptInput: _Structure_ = {
    type: 'structure',
    required: [
        'CiphertextBlob',
    ],
    members: {
        CiphertextBlob: {
            shape: {
                type: 'blob',
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