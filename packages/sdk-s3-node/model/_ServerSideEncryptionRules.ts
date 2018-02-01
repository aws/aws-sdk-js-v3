import {List as _List_} from '@aws/types';
import {_ServerSideEncryptionRule} from './_ServerSideEncryptionRule';

export const _ServerSideEncryptionRules: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _ServerSideEncryptionRule,
    },
};