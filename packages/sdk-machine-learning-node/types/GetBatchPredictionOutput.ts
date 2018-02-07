import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>.</p>
 */
export interface GetBatchPredictionOutput {
    /**
     * <p>An ID assigned to the <code>BatchPrediction</code> at creation. This value should be identical to the value of the <code>BatchPredictionID</code> in the request.</p>
     */
    BatchPredictionId?: string;

    /**
     * <p>The ID of the <code>MLModel</code> that generated predictions for the <code>BatchPrediction</code> request.</p>
     */
    MLModelId?: string;

    /**
     * <p>The ID of the <code>DataSource</code> that was used to create the <code>BatchPrediction</code>. </p>
     */
    BatchPredictionDataSourceId?: string;

    /**
     * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
     */
    InputDataLocationS3?: string;

    /**
     * <p>The AWS user account that invoked the <code>BatchPrediction</code>. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
     */
    CreatedByIamUser?: string;

    /**
     * <p>The time when the <code>BatchPrediction</code> was created. The time is expressed in epoch time.</p>
     */
    CreatedAt?: Date;

    /**
     * <p>The time of the most recent edit to <code>BatchPrediction</code>. The time is expressed in epoch time.</p>
     */
    LastUpdatedAt?: Date;

    /**
     * <p>A user-supplied name or description of the <code>BatchPrediction</code>.</p>
     */
    Name?: string;

    /**
     * <p>The status of the <code>BatchPrediction</code>, which can be one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to generate batch predictions.</li> <li> <code>INPROGRESS</code> - The batch predictions are in progress.</li> <li> <code>FAILED</code> - The request to perform a batch prediction did not run to completion. It is not usable.</li> <li> <code>COMPLETED</code> - The batch prediction process completed successfully.</li> <li> <code>DELETED</code> - The <code>BatchPrediction</code> is marked as deleted. It is not usable.</li> </ul>
     */
    Status?: 'PENDING'|'INPROGRESS'|'FAILED'|'COMPLETED'|'DELETED'|string;

    /**
     * <p>The location of an Amazon S3 bucket or directory to receive the operation results.</p>
     */
    OutputUri?: string;

    /**
     * <p>A link to the file that contains logs of the <code>CreateBatchPrediction</code> operation.</p>
     */
    LogUri?: string;

    /**
     * <p>A description of the most recent details about processing the batch prediction request.</p>
     */
    Message?: string;

    /**
     * <p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>BatchPrediction</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>BatchPrediction</code> is in the <code>COMPLETED</code> state.</p>
     */
    ComputeTime?: number;

    /**
     * <p>The epoch time when Amazon Machine Learning marked the <code>BatchPrediction</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>BatchPrediction</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>
     */
    FinishedAt?: Date;

    /**
     * <p>The epoch time when Amazon Machine Learning marked the <code>BatchPrediction</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>BatchPrediction</code> is in the <code>PENDING</code> state.</p>
     */
    StartedAt?: Date;

    /**
     * <p>The number of total records that Amazon Machine Learning saw while processing the <code>BatchPrediction</code>.</p>
     */
    TotalRecordCount?: number;

    /**
     * <p>The number of invalid records that Amazon Machine Learning saw while processing the <code>BatchPrediction</code>.</p>
     */
    InvalidRecordCount?: number;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}