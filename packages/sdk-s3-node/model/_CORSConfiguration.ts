import {_CORSRules} from './_CORSRules';
import {Structure as _Structure_} from '@aws/types';

export const _CORSConfiguration: _Structure_ = {
    type: 'structure',
    required: [
        'CORSRules',
    ],
    members: {
        CORSRules: {
            shape: _CORSRules,
            locationName: 'CORSRule',
        },
    },
};