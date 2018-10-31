import * as __aws_types from '@aws-sdk/types';

/**
 * GetBucketAccelerateConfigurationOutput shape
 */
export interface GetBucketAccelerateConfigurationOutput {
    /**
     * <p>The accelerate configuration of the bucket.</p>
     */
    Status?: 'Enabled'|'Suspended'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
