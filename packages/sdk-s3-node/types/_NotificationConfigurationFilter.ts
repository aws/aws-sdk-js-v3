import {_S3KeyFilter, _UnmarshalledS3KeyFilter} from './_S3KeyFilter';

/**
 * <p>Container for object key name filtering rules. For information about key name filtering, go to <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the Amazon Simple Storage Service Developer Guide.</p>
 */
export interface _NotificationConfigurationFilter {
    /**
     * <p>Container for object key name prefix and suffix filtering rules.</p>
     */
    Key?: _S3KeyFilter;
}

export interface _UnmarshalledNotificationConfigurationFilter extends _NotificationConfigurationFilter {
    /**
     * <p>Container for object key name prefix and suffix filtering rules.</p>
     */
    Key?: _UnmarshalledS3KeyFilter;
}