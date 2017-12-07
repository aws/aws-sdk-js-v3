import {List as _List_} from '@aws/types';
import {_GrantListEntry} from './_GrantListEntry';

export const _GrantList: _List_ = {
    type: 'list',
    member: {
        shape: _GrantListEntry,
    },
};