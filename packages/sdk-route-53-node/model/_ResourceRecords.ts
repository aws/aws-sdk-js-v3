import {List as _List_} from '@aws-sdk/types';
import {_ResourceRecord} from './_ResourceRecord';

export const _ResourceRecords: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: _ResourceRecord,
        locationName: 'ResourceRecord',
    },
};