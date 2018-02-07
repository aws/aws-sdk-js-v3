import {List as _List_} from '@aws/types';
import {_HealthCheck} from './_HealthCheck';

export const _HealthChecks: _List_ = {
    type: 'list',
    member: {
        shape: _HealthCheck,
        locationName: 'HealthCheck',
    },
};