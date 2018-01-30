import {List as _List_} from '@aws/types';
import {_LifecycleRule} from './_LifecycleRule';

export const _LifecycleRules: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _LifecycleRule,
    },
};