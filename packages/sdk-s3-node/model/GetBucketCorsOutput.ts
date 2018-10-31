import {_CORSRules} from './_CORSRules';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetBucketCorsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        CORSRules: {
            shape: _CORSRules,
            locationName: 'CORSRule',
        },
    },
};