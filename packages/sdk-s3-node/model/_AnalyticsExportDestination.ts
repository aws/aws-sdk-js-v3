import {_AnalyticsS3BucketDestination} from './_AnalyticsS3BucketDestination';
import {Structure as _Structure_} from '@aws/types';

export const _AnalyticsExportDestination: _Structure_ = {
    type: 'structure',
    required: [
        'S3BucketDestination',
    ],
    members: {
        S3BucketDestination: {
            shape: _AnalyticsS3BucketDestination,
        },
    },
};