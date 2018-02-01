import {_MetricsFilter} from './_MetricsFilter';
import {Structure as _Structure_} from '@aws/types';

export const _MetricsConfiguration: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
            },
        },
        Filter: {
            shape: _MetricsFilter,
        },
    },
};