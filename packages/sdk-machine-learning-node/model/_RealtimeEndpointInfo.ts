import {Structure as _Structure_} from '@aws/types';

export const _RealtimeEndpointInfo: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        PeakRequestsPerSecond: {
            shape: {
                type: 'integer',
            },
        },
        CreatedAt: {
            shape: {
                type: 'timestamp',
            },
        },
        EndpointUrl: {
            shape: {
                type: 'string',
            },
        },
        EndpointStatus: {
            shape: {
                type: 'string',
            },
        },
    },
};