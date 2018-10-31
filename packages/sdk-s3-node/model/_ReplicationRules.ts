import {List as _List_} from '@aws-sdk/types';
import {_ReplicationRule} from './_ReplicationRule';

export const _ReplicationRules: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _ReplicationRule,
    },
};