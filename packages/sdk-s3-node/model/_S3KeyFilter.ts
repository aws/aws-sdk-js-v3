import {_FilterRuleList} from './_FilterRuleList';
import {Structure as _Structure_} from '@aws/types';

export const _S3KeyFilter: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        FilterRules: {
            shape: _FilterRuleList,
            locationName: 'FilterRule',
        },
    },
};