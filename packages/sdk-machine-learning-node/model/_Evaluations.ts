import {List as _List_} from '@aws-sdk/types';
import {_Evaluation} from './_Evaluation';

export const _Evaluations: _List_ = {
    type: 'list',
    member: {
        shape: _Evaluation,
    },
};