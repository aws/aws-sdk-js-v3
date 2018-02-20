import {Structure as _Structure_} from '@aws/types';

export const _InventoryRetrievalJobDescription: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Format: {
            shape: {
                type: 'string',
            },
        },
        StartDate: {
            shape: {
                type: 'string',
            },
        },
        EndDate: {
            shape: {
                type: 'string',
            },
        },
        Limit: {
            shape: {
                type: 'string',
            },
        },
        Marker: {
            shape: {
                type: 'string',
            },
        },
    },
};