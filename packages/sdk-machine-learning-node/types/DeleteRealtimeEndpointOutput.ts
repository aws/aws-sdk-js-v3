import {_UnmarshalledRealtimeEndpointInfo} from './_RealtimeEndpointInfo';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>
 */
export interface DeleteRealtimeEndpointOutput {
    /**
     * <p>A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelId</code> in the request.</p>
     */
    MLModelId?: string;

    /**
     * <p>The endpoint information of the <code>MLModel</code> </p>
     */
    RealtimeEndpointInfo?: _UnmarshalledRealtimeEndpointInfo;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}