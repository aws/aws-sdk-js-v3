import {_MultipartUploadList} from './_MultipartUploadList';
import {_CommonPrefixList} from './_CommonPrefixList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListMultipartUploadsOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Bucket: {
            shape: {
                type: 'string',
            },
        },
        KeyMarker: {
            shape: {
                type: 'string',
            },
        },
        UploadIdMarker: {
            shape: {
                type: 'string',
            },
        },
        NextKeyMarker: {
            shape: {
                type: 'string',
            },
        },
        Prefix: {
            shape: {
                type: 'string',
            },
        },
        Delimiter: {
            shape: {
                type: 'string',
            },
        },
        NextUploadIdMarker: {
            shape: {
                type: 'string',
            },
        },
        MaxUploads: {
            shape: {
                type: 'integer',
            },
        },
        IsTruncated: {
            shape: {
                type: 'boolean',
            },
        },
        Uploads: {
            shape: _MultipartUploadList,
            locationName: 'Upload',
        },
        CommonPrefixes: {
            shape: _CommonPrefixList,
        },
        EncodingType: {
            shape: {
                type: 'string',
            },
        },
    },
};