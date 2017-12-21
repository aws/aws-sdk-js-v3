import {Structure as _Structure_} from '@aws/types';

export const _AliasListEntry: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        AliasName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        AliasArn: {
            shape: {
                type: 'string',
                min: 20,
            },
        },
        TargetKeyId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};