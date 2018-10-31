import {_ReusableDelegationSetLimit} from './_ReusableDelegationSetLimit';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetReusableDelegationSetLimitOutput: _Structure_ = {
    type: 'structure',
    required: [
        'Limit',
        'Count',
    ],
    members: {
        Limit: {
            shape: _ReusableDelegationSetLimit,
        },
        Count: {
            shape: {
                type: 'integer',
            },
        },
    },
};