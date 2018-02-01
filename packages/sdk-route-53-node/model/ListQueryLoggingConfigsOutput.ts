import {_QueryLoggingConfigs} from './_QueryLoggingConfigs';
import {Structure as _Structure_} from '@aws/types';

export const ListQueryLoggingConfigsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'QueryLoggingConfigs',
    ],
    members: {
        QueryLoggingConfigs: {
            shape: _QueryLoggingConfigs,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};