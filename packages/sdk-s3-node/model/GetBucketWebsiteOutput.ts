import {_RedirectAllRequestsTo} from './_RedirectAllRequestsTo';
import {_IndexDocument} from './_IndexDocument';
import {_ErrorDocument} from './_ErrorDocument';
import {_RoutingRules} from './_RoutingRules';
import {Structure as _Structure_} from '@aws/types';

export const GetBucketWebsiteOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        RedirectAllRequestsTo: {
            shape: _RedirectAllRequestsTo,
        },
        IndexDocument: {
            shape: _IndexDocument,
        },
        ErrorDocument: {
            shape: _ErrorDocument,
        },
        RoutingRules: {
            shape: _RoutingRules,
        },
    },
};