import {_SourceSelectionCriteria} from './_SourceSelectionCriteria';
import {_Destination} from './_Destination';
import {Structure as _Structure_} from '@aws/types';

export const _ReplicationRule: _Structure_ = {
    type: 'structure',
    required: [
        'Prefix',
        'Status',
        'Destination',
    ],
    members: {
        ID: {
            shape: {
                type: 'string',
            },
        },
        Prefix: {
            shape: {
                type: 'string',
            },
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
    },
};