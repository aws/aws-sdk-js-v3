import {List as _List_} from '@aws/types';
import {_DelegationSet} from './_DelegationSet';

export const _DelegationSets: _List_ = {
    type: 'list',
    member: {
        shape: _DelegationSet,
        locationName: 'DelegationSet',
    },
};