import {_Grants} from './_Grants';
import {_Owner} from './_Owner';
import {Structure as _Structure_} from '@aws/types';

export const _AccessControlPolicy: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Grants: {
            shape: _Grants,
            locationName: 'AccessControlList',
        },
        Owner: {
            shape: _Owner,
        },
    },
};