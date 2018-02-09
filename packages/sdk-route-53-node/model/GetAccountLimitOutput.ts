import {_AccountLimit} from './_AccountLimit';
import {Structure as _Structure_} from '@aws/types';

export const GetAccountLimitOutput: _Structure_ = {
    type: 'structure',
    required: [
        'Limit',
        'Count',
    ],
    members: {
        Limit: {
            shape: _AccountLimit,
        },
        Count: {
            shape: {
                type: 'integer',
            },
        },
    },
};