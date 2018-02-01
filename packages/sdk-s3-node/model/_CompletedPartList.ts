import {List as _List_} from '@aws/types';
import {_CompletedPart} from './_CompletedPart';

export const _CompletedPartList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _CompletedPart,
    },
};