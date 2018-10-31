import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateDataSourceFromS3Output: _Structure_ = {
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