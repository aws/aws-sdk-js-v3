import * as __aws_types from '@aws/types';

/**
 * GetBucketVersioningOutput shape
 */
export interface GetBucketVersioningOutput {
    /**
     * The versioning state of the bucket.
     */
    Status?: 'Enabled'|'Suspended'|string;

    /**
     * Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.
     */
    MFADelete?: 'Enabled'|'Disabled'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
