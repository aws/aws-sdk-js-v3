import {Structure as _Structure_} from '@aws/types';

export const CreateDataSourceFromRedshiftOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        DataSourceId: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};