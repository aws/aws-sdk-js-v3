import {_MetricsConfigurationList} from './_MetricsConfigurationList';
import {Structure as _Structure_} from '@aws/types';

export const ListBucketMetricsConfigurationsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        ContinuationToken: {
            shape: {
                type: 'string',
            },
        },
        NextContinuationToken: {
            shape: {
                type: 'string',
            },
        },
        MetricsConfigurationList: {
            shape: _MetricsConfigurationList,
            locationName: 'MetricsConfiguration',
        },
    },
};