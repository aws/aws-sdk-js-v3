import {Structure as _Structure_} from '@aws/types';

export const UpdateDataSourceOutput: _Structure_ = {
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