import {_ReplicationRules} from './_ReplicationRules';
import {Structure as _Structure_} from '@aws/types';

export const _ReplicationConfiguration: _Structure_ = {
    type: 'structure',
    required: [
        'Role',
        'Rules',
    ],
    members: {
        Role: {
            shape: {
                type: 'string',
            },
        },
        Rules: {
            shape: _ReplicationRules,
            locationName: 'Rule',
        },
    },
};