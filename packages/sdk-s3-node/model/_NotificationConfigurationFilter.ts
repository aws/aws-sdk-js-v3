import {_S3KeyFilter} from './_S3KeyFilter';
import {Structure as _Structure_} from '@aws/types';

export const _NotificationConfigurationFilter: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Key: {
            shape: _S3KeyFilter,
            locationName: 'S3Key',
        },
    },
};