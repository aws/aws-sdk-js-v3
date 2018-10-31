import {_ErrorDocument} from './_ErrorDocument';
import {_IndexDocument} from './_IndexDocument';
import {_RedirectAllRequestsTo} from './_RedirectAllRequestsTo';
import {_RoutingRules} from './_RoutingRules';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _WebsiteConfiguration: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ErrorDocument: {
            shape: _ErrorDocument,
        },
        IndexDocument: {
            shape: _IndexDocument,
        },
        RedirectAllRequestsTo: {
            shape: _RedirectAllRequestsTo,
        },
        RoutingRules: {
            shape: _RoutingRules,
        },
    },
};