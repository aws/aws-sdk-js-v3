import {_ChangeInfo} from './_ChangeInfo';
import {Structure as _Structure_} from '@aws/types';

export const AssociateVPCWithHostedZoneOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ChangeInfo',
    ],
    members: {
        ChangeInfo: {
            shape: _ChangeInfo,
        },
    },
};