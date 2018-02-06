import {List as _List_} from '@aws/types';
import {_BatchPrediction} from './_BatchPrediction';

export const _BatchPredictions: _List_ = {
    type: 'list',
    member: {
        shape: _BatchPrediction,
    },
};