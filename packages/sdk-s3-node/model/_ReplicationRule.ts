import {_ReplicationRuleFilter} from './_ReplicationRuleFilter';
import {_SourceSelectionCriteria} from './_SourceSelectionCriteria';
import {_Destination} from './_Destination';
import {_DeleteMarkerReplication} from './_DeleteMarkerReplication';
import {Structure as _Structure_} from '@aws/types';

export const _ReplicationRule: _Structure_ = {
    type: 'structure',
    required: [
        'Status',
        'Destination',
    ],
    members: {
        ID: {
            shape: {
                type: 'string',
            },
        },
        Priority: {
            shape: {
                type: 'integer',
            },
        },
        Prefix: {
            shape: {
                type: 'string',
            },
        },
        Filter: {
            shape: _ReplicationRuleFilter,
        },
        Status: {
            shape: {
                type: 'string',
            },
        },
        SourceSelectionCriteria: {
            shape: _SourceSelectionCriteria,
        },
        Destination: {
            shape: _Destination,
        },
        DeleteMarkerReplication: {
            shape: _DeleteMarkerReplication,
        },
    },
};