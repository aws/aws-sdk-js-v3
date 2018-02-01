import {_InventoryDestination} from './_InventoryDestination';
import {_InventoryFilter} from './_InventoryFilter';
import {_InventoryOptionalFields} from './_InventoryOptionalFields';
import {_InventorySchedule} from './_InventorySchedule';
import {Structure as _Structure_} from '@aws/types';

export const _InventoryConfiguration: _Structure_ = {
    type: 'structure',
    required: [
        'Destination',
        'IsEnabled',
        'Id',
        'IncludedObjectVersions',
        'Schedule',
    ],
    members: {
        Destination: {
            shape: _InventoryDestination,
        },
        IsEnabled: {
            shape: {
                type: 'boolean',
            },
        },
        Filter: {
            shape: _InventoryFilter,
        },
        Id: {
            shape: {
                type: 'string',
            },
        },
        IncludedObjectVersions: {
            shape: {
                type: 'string',
            },
        },
        OptionalFields: {
            shape: _InventoryOptionalFields,
        },
        Schedule: {
            shape: _InventorySchedule,
        },
    },
};