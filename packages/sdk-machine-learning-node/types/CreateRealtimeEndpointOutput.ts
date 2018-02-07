import {_UnmarshalledRealtimeEndpointInfo} from './_RealtimeEndpointInfo';
import * as __aws_types from '@aws/types';

/**
 * <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <note> <p>The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p> </note>
 */
export interface CreateRealtimeEndpointOutput {
    /**
     * <p>A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelId</code> in the request.</p>
     */
    MLModelId?: string;

    /**
     * <p>The endpoint information of the <code>MLModel</code> </p>
     */
    RealtimeEndpointInfo?: _UnmarshalledRealtimeEndpointInfo;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
