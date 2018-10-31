import {_EncryptionContextType} from './_EncryptionContextType';
import {_GrantTokenList} from './_GrantTokenList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GenerateDataKeyWithoutPlaintextInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        EncryptionContext: {
            shape: _EncryptionContextType,
        },
        KeySpec: {
            shape: {
                type: 'string',
            },
        },
        NumberOfBytes: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        GrantTokens: {
            shape: _GrantTokenList,
        },
    },
};