import {_ProvisionedCapacityList} from './_ProvisionedCapacityList';
import {Structure as _Structure_} from '@aws/types';

export const ListProvisionedCapacityOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ProvisionedCapacityList: {
            shape: _ProvisionedCapacityList,
        },
    },
};