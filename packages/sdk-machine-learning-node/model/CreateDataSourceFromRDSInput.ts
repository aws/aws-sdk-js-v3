import {_RDSDataSpec} from './_RDSDataSpec';
import {Structure as _Structure_} from '@aws/types';

export const CreateDataSourceFromRDSInput: _Structure_ = {
    type: 'structure',
    required: [
        'DataSourceId',
        'RDSData',
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
        RDSData: {
            shape: _RDSDataSpec,
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