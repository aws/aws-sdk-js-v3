import {List as _List_} from '@aws/types';
import {_TrafficPolicyInstance} from './_TrafficPolicyInstance';

export const _TrafficPolicyInstances: _List_ = {
    type: 'list',
    member: {
        shape: _TrafficPolicyInstance,
        locationName: 'TrafficPolicyInstance',
    },
};