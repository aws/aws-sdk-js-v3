import {List as _List_} from '@aws-sdk/types';
import {_ResourceRecordSet} from './_ResourceRecordSet';

export const _ResourceRecordSets: _List_ = {
    type: 'list',
    member: {
        shape: _ResourceRecordSet,
        locationName: 'ResourceRecordSet',
    },
};