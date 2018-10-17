import {_UnmarshalledTrafficPolicy} from './_TrafficPolicy';
import * as __aws_types from '@aws/types';

/**
 * <p>A complex type that contains the response information for the traffic policy.</p>
 */
export interface UpdateTrafficPolicyCommentOutput {
    /**
     * <p>A complex type that contains settings for the specified traffic policy.</p>
     */
    TrafficPolicy: _UnmarshalledTrafficPolicy;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
