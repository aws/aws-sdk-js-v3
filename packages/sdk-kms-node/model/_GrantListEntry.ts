import {_GrantOperationList} from './_GrantOperationList';
import {_GrantConstraints} from './_GrantConstraints';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _GrantListEntry: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        KeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        GrantId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Name: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        CreationDate: {
            shape: {
                type: 'timestamp',
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
        IssuingAccount: {
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
    },
};