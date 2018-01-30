import {_Condition} from './_Condition';
import {_Redirect} from './_Redirect';
import {Structure as _Structure_} from '@aws/types';

export const _RoutingRule: _Structure_ = {
    type: 'structure',
    required: [
        'Redirect',
    ],
    members: {
        Condition: {
            shape: _Condition,
        },
        Redirect: {
            shape: _Redirect,
        },
    },
};