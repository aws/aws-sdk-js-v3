import {_StatusReport} from './_StatusReport';
import {Structure as _Structure_} from '@aws/types';

export const _HealthCheckObservation: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Region: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        IPAddress: {
            shape: {
                type: 'string',
            },
        },
        StatusReport: {
            shape: _StatusReport,
        },
    },
};