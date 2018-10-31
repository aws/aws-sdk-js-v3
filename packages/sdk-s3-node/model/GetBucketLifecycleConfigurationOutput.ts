import {_LifecycleRules} from './_LifecycleRules';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetBucketLifecycleConfigurationOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Rules: {
            shape: _LifecycleRules,
            locationName: 'Rule',
        },
    },
};