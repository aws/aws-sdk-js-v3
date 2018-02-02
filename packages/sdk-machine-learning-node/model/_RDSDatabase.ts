import {Structure as _Structure_} from '@aws/types';

export const _RDSDatabase: _Structure_ = {
    type: 'structure',
    required: [
        'InstanceIdentifier',
        'DatabaseName',
    ],
    members: {
        InstanceIdentifier: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DatabaseName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};