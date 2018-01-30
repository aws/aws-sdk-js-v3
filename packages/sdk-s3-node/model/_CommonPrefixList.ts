import {List as _List_} from '@aws/types';
import {_CommonPrefix} from './_CommonPrefix';

export const _CommonPrefixList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _CommonPrefix,
    },
};