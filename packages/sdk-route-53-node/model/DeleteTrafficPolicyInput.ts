import {Structure as _Structure_} from '@aws/types';

export const DeleteTrafficPolicyInput: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
        'Version',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Id',
        },
        Version: {
            shape: {
                type: 'integer',
                min: 1,
            },
            location: 'uri',
            locationName: 'Version',
        },
    },
};