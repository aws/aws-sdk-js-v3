import {List as _List_} from '@aws/types';
import {_ObjectIdentifier} from './_ObjectIdentifier';

export const _ObjectIdentifierList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _ObjectIdentifier,
    },
};