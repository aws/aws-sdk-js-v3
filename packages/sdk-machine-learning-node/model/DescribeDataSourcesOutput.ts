import {_DataSources} from './_DataSources';
import {Structure as _Structure_} from '@aws-sdk/types';

export const DescribeDataSourcesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Results: {
            shape: _DataSources,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};