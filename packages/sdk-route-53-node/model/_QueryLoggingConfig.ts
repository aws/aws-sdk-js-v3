import {Structure as _Structure_} from '@aws-sdk/types';

export const _QueryLoggingConfig: _Structure_ = {
    type: 'structure',
    required: [
        'Id',
        'HostedZoneId',
        'CloudWatchLogsLogGroupArn',
    ],
    members: {
        Id: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        HostedZoneId: {
            shape: {
                type: 'string',
            },
        },
        CloudWatchLogsLogGroupArn: {
            shape: {
                type: 'string',
            },
        },
    },
};