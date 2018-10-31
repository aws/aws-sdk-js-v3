import {_HealthCheck} from './_HealthCheck';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateHealthCheckOutput: _Structure_ = {
    type: 'structure',
    required: [
        'HealthCheck',
    ],
    members: {
        HealthCheck: {
            shape: _HealthCheck,
        },
    },
};