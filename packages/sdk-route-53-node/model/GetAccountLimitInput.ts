import {Structure as _Structure_} from '@aws/types';

export const GetAccountLimitInput: _Structure_ = {
    type: 'structure',
    required: [
        'Type',
    ],
    members: {
        Type: {
            shape: {
                type: 'string',
            },
            location: 'uri',
            locationName: 'Type',
        },
    },
};