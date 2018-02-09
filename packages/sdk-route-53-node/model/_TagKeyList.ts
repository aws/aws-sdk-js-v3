import {List as _List_} from '@aws/types';

export const _TagKeyList: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: {
            type: 'string',
        },
        locationName: 'Key',
    },
};