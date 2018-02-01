import {_Owner} from './_Owner';
import {_Grants} from './_Grants';
import {Structure as _Structure_} from '@aws/types';

export const GetObjectAclOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Owner: {
            shape: _Owner,
        },
        Grants: {
            shape: _Grants,
            locationName: 'AccessControlList',
        },
        RequestCharged: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-request-charged',
        },
    },
};