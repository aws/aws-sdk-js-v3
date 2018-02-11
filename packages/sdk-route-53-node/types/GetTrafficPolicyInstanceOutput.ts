import {_UnmarshalledTrafficPolicyInstance} from './_TrafficPolicyInstance';
import * as __aws_types from '@aws/types';

/**
 * <p>A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.</p>
 */
export interface GetTrafficPolicyInstanceOutput {
    /**
     * <p>A complex type that contains settings for the traffic policy instance.</p>
     */
    TrafficPolicyInstance: _UnmarshalledTrafficPolicyInstance;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
