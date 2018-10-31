import {_HostedZone} from './_HostedZone';
import {_ChangeInfo} from './_ChangeInfo';
import {_DelegationSet} from './_DelegationSet';
import {_VPC} from './_VPC';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateHostedZoneOutput: _Structure_ = {
    type: 'structure',
    required: [
        'HostedZone',
        'ChangeInfo',
        'DelegationSet',
        'Location',
    ],
    members: {
        HostedZone: {
            shape: _HostedZone,
        },
        ChangeInfo: {
            shape: _ChangeInfo,
        },
        DelegationSet: {
            shape: _DelegationSet,
        },
        VPC: {
            shape: _VPC,
        },
        Location: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Location',
        },
    },
};