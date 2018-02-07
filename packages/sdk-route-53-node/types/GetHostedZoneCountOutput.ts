import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type that contains the response to a <code>GetHostedZoneCount</code> request.</p>
 */
export interface GetHostedZoneCountOutput {
    /**
     * <p>The total number of public and private hosted zones that are associated with the current AWS account.</p>
     */
    HostedZoneCount: number;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}