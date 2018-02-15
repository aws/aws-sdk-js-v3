import {_S3KeyFilter, _UnmarshalledS3KeyFilter} from './_S3KeyFilter';

/**
 * _NotificationConfigurationFilter shape
 */
export interface _NotificationConfigurationFilter {
    /**
     * _S3KeyFilter shape
     */
    Key?: _S3KeyFilter;
}

export interface _UnmarshalledNotificationConfigurationFilter extends _NotificationConfigurationFilter {
    /**
     * _S3KeyFilter shape
     */
    Key?: _UnmarshalledS3KeyFilter;
}