import {_InventoryConfiguration} from './_InventoryConfiguration';
import {Structure as _Structure_} from '@aws/types';

export const GetBucketInventoryConfigurationOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        InventoryConfiguration: {
            shape: _InventoryConfiguration,
        },
    },
    payload: 'InventoryConfiguration',
};