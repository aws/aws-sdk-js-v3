import {List as _List_} from '@aws/types';

export const _HealthCheckRegionList: _List_ = {
    type: 'list',
    min: 3,
    member: {
        shape: {
            type: 'string',
            min: 1,
        },
        locationName: 'Region',
    },
};