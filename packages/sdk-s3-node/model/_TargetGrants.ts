import {List as _List_} from '@aws/types';
import {_TargetGrant} from './_TargetGrant';

export const _TargetGrants: _List_ = {
    type: 'list',
    member: {
        shape: _TargetGrant,
        locationName: 'Grant',
    },
};