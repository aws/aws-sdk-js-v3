import {List as _List_} from '@aws/types';
import {_KeyListEntry} from './_KeyListEntry';

export const _KeyList: _List_ = {
    type: 'list',
    member: {
        shape: _KeyListEntry,
    },
};