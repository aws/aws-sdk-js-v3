import {List as _List_} from '@aws/types';
import {_DeletedObject} from './_DeletedObject';

export const _DeletedObjects: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _DeletedObject,
    },
};