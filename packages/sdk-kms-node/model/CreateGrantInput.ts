import {_GrantOperationList} from './_GrantOperationList';
import {_GrantConstraints} from './_GrantConstraints';
import {_GrantTokenList} from './_GrantTokenList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateGrantInput: _Structure_ = {
    type: 'structure',
    required: [
        'KeyId',
        'GranteePrincipal',
        'Operations',
    ],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        GranteePrincipal: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        RetiringPrincipal: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Operations: {
            shape: _GrantOperationList,
        },
        Constraints: {
            shape: _GrantConstraints,
        },
        GrantTokens: {
            shape: _GrantTokenList,
        },
        Name: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};