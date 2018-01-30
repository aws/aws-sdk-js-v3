import {List as _List_} from '@aws/types';
import {_NoncurrentVersionTransition} from './_NoncurrentVersionTransition';

export const _NoncurrentVersionTransitionList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _NoncurrentVersionTransition,
    },
};