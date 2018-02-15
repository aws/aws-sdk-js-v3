import * as __aws_types from '@aws/types';

/**
 * GetBucketVersioningOutput shape
 */
export interface GetBucketVersioningOutput {
    /**
     * _BucketVersioningStatus shape
     */
    Status?: 'Enabled'|'Suspended'|string;

    /**
     * _MFADeleteStatus shape
     */
    MFADelete?: 'Enabled'|'Disabled'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
