import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>&gt;GetBatchPrediction</code> operation and checking the <code>Status</code> parameter of the result. </p>
 */
export interface CreateBatchPredictionOutput {
    /**
     * <p>A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>. This value is identical to the value of the <code>BatchPredictionId</code> in the request.</p>
     */
    BatchPredictionId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}