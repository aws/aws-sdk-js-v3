import {List as _List_} from '@aws/types';
import {_Bucket} from './_Bucket';

export const _Buckets: _List_ = {
    type: 'list',
    member: {
        shape: _Bucket,
        locationName: 'Bucket',
    },
};