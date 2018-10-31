import {_RedshiftDataSpec} from './_RedshiftDataSpec';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateDataSourceFromRedshiftInput: _Structure_ = {
    type: 'structure',
    required: [
        'DataSourceId',
        'DataSpec',
        'RoleARN',
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
            shape: _RedshiftDataSpec,
        },
        RoleARN: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        ComputeStatistics: {
            shape: {
                type: 'boolean',
            },
        },
    },
};