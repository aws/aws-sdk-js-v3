import {_DelegationSet} from './_DelegationSet';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateReusableDelegationSetOutput: _Structure_ = {
    type: 'structure',
    required: [
        'DelegationSet',
        'Location',
    ],
    members: {
        DelegationSet: {
            shape: _DelegationSet,
        },
        Location: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Location',
        },
    },
};