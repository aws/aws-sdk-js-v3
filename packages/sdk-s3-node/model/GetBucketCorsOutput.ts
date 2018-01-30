import {_CORSRules} from './_CORSRules';
import {Structure as _Structure_} from '@aws/types';

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