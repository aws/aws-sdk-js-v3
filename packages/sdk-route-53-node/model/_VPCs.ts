import {List as _List_} from '@aws/types';
import {_VPC} from './_VPC';

export const _VPCs: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: _VPC,
        locationName: 'VPC',
    },
};