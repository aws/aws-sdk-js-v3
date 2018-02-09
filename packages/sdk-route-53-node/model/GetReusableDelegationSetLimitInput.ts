import {Structure as _Structure_} from '@aws/types';

export const GetReusableDelegationSetLimitInput: _Structure_ = {
    type: 'structure',
    required: [
        'Type',
        'DelegationSetId',
    ],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Type',
        },
        DelegationSetId: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Id',
        },
    },
};