import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateDataSourceInput: _Structure_ = {
    type: 'structure',
    required: [
        'DataSourceId',
        'DataSourceName',
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
    },
};