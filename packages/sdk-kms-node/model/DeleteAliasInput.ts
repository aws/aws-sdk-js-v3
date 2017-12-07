import {Structure as _Structure_} from '@aws/types';

export const DeleteAliasInput: _Structure_ = {
    type: 'structure',
    required: [
        'AliasName',
    ],
    members: {
        AliasName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};