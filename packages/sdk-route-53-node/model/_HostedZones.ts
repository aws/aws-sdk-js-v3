import {List as _List_} from '@aws-sdk/types';
import {_HostedZone} from './_HostedZone';

export const _HostedZones: _List_ = {
    type: 'list',
    member: {
        shape: _HostedZone,
        locationName: 'HostedZone',
    },
};