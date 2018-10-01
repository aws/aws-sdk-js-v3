import {_Parts} from './_Parts';
import {_Initiator} from './_Initiator';
import {_Owner} from './_Owner';
import {Structure as _Structure_} from '@aws/types';

export const ListPartsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        AbortDate: {
            shape: {
                type: 'timestamp',
            },
            location: 'header',
            locationName: 'x-amz-abort-date',
        },
        AbortRuleId: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'x-amz-abort-rule-id',
        },
        Bucket: {
            shape: {
                type: 'string',
            },
        },
        Key: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        UploadId: {
            shape: {
                type: 'string',
            },
        },
        PartNumberMarker: {
            shape: {
                type: 'integer',
            },
        },
        NextPartNumberMarker: {
            shape: {
                type: 'integer',
            },
        },
        MaxParts: {
            shape: {
                type: 'integer',
            },
        },
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        Parts: {
            shape: _Parts,
            locationName: 'Part',
        },
        Initiator: {
            shape: _Initiator,
        },
        Owner: {
            shape: _Owner,
        },
        StorageClass: {
            shape: {
                type: 'string',
            },
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