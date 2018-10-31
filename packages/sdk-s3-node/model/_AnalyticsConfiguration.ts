import {_AnalyticsFilter} from './_AnalyticsFilter';
import {_StorageClassAnalysis} from './_StorageClassAnalysis';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _AnalyticsConfiguration: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
        'StorageClassAnalysis',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        Filter: {
            shape: _AnalyticsFilter,
        },
        StorageClassAnalysis: {
            shape: _StorageClassAnalysis,
        },
    },
};