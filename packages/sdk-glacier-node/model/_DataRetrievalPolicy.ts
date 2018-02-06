import {_DataRetrievalRulesList} from './_DataRetrievalRulesList';
import {Structure as _Structure_} from '@aws/types';

export const _DataRetrievalPolicy: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Rules: {
            shape: _DataRetrievalRulesList,
        },
    },
};