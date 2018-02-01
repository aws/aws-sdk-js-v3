import {_HostedZone} from './_HostedZone';
import {Structure as _Structure_} from '@aws/types';

export const UpdateHostedZoneCommentOutput: _Structure_ = {
    type: 'structure',
    required: [
        'HostedZone',
    ],
    members: {
        HostedZone: {
            shape: _HostedZone,
        },
    },
};