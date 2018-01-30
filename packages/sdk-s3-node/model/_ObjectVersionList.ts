import {List as _List_} from '@aws/types';
import {_ObjectVersion} from './_ObjectVersion';

export const _ObjectVersionList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _ObjectVersion,
    },
};