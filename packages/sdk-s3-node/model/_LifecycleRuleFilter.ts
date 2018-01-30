import {_Tag} from './_Tag';
import {_LifecycleRuleAndOperator} from './_LifecycleRuleAndOperator';
import {Structure as _Structure_} from '@aws/types';

export const _LifecycleRuleFilter: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Prefix: {
            shape: {
                type: 'string',
            },
        },
        Tag: {
            shape: _Tag,
        },
        And: {
            shape: _LifecycleRuleAndOperator,
        },
    },
};