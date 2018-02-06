import {_S3DataSpec} from './_S3DataSpec';
import {Structure as _Structure_} from '@aws/types';

export const CreateDataSourceFromS3Input: _Structure_ = {
    type: 'structure',
    required: [
        'DataSourceId',
        'DataSpec',
    ],
    members: {
        DataSourceId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        DataSourceName: {
            shape: {
                type: 'string',
            },
        },
        DataSpec: {
            shape: _S3DataSpec,
        },
        ComputeStatistics: {
            shape: {
                type: 'boolean',
            },
        },
    },
};