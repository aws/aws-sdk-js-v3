import {List as _List_} from '@aws/types';
import {_InventoryConfiguration} from './_InventoryConfiguration';

export const _InventoryConfigurationList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: _InventoryConfiguration,
    },
};