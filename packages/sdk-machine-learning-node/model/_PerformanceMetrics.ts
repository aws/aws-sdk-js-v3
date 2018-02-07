import {_PerformanceMetricsProperties} from './_PerformanceMetricsProperties';
import {Structure as _Structure_} from '@aws/types';

export const _PerformanceMetrics: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Properties: {
            shape: _PerformanceMetricsProperties,
        },
    },
};