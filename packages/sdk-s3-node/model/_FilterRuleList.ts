import {List as _List_} from '@aws/types';
import {_FilterRule} from './_FilterRule';

export const _FilterRuleList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _FilterRule,
    },
};