import {Structure as _Structure_} from '@aws/types';

export const ListAliasesInput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Limit: {
            shape: {
                type: 'integer',
                min: 1,
            },
        },
        Marker: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};