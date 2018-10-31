import {_VPC} from './_VPC';
import {_HostedZoneConfig} from './_HostedZoneConfig';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateHostedZoneInput: _Structure_ = {
    type: 'structure',
    required: [
        'Name',
        'CallerReference',
    ],
    members: {
        Name: {
            shape: {
                type: 'string',
            },
        },
        VPC: {
            shape: _VPC,
        },
        CallerReference: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        HostedZoneConfig: {
            shape: _HostedZoneConfig,
        },
        DelegationSetId: {
            shape: {
                type: 'string',
            },
        },
    },
};