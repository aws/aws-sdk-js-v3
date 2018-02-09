import {List as _List_} from '@aws/types';
import {_Dimension} from './_Dimension';

export const _DimensionList: _List_ = {
    type: 'list',
    member: {
        shape: _Dimension,
        locationName: 'Dimension',
    },
};