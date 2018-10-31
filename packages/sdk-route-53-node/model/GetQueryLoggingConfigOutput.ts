import {_QueryLoggingConfig} from './_QueryLoggingConfig';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetQueryLoggingConfigOutput: _Structure_ = {
    type: 'structure',
    required: [
        'QueryLoggingConfig',
    ],
    members: {
        QueryLoggingConfig: {
            shape: _QueryLoggingConfig,
        },
    },
};