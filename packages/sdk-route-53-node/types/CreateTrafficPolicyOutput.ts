import {_UnmarshalledTrafficPolicy} from './_TrafficPolicy';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type that contains the response information for the <code>CreateTrafficPolicy</code> request.</p>
 */
export interface CreateTrafficPolicyOutput {
    /**
     * <p>A complex type that contains settings for the new traffic policy.</p>
     */
    TrafficPolicy: _UnmarshalledTrafficPolicy;

    /**
     * <p>A unique URL that represents a new traffic policy.</p>
     */
    Location: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}