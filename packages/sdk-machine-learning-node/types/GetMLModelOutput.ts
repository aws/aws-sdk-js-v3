import {_UnmarshalledRealtimeEndpointInfo} from './_RealtimeEndpointInfo';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.</p>
 */
export interface GetMLModelOutput {
    /**
     * <p>The MLModel ID<?oxy_insert_start author="annbech" timestamp="20160328T151251-0700">,<?oxy_insert_end> which is same as the <code>MLModelId</code> in the request.</p>
     */
    MLModelId?: string;

    /**
     * <p>The ID of the training <code>DataSource</code>.</p>
     */
    TrainingDataSourceId?: string;

    /**
     * <p>The AWS user account from which the <code>MLModel</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
     */
    CreatedByIamUser?: string;

    /**
     * <p>The time that the <code>MLModel</code> was created. The time is expressed in epoch time.</p>
     */
    CreatedAt?: Date;

    /**
     * <p>The time of the most recent edit to the <code>MLModel</code>. The time is expressed in epoch time.</p>
     */
    LastUpdatedAt?: Date;

    /**
     * <p>A user-supplied name or description of the <code>MLModel</code>.</p>
     */
    Name?: string;

    /**
     * <p>The current status of the <code>MLModel</code>. This element can have one of the following values:</p> <ul> <li> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to describe a <code>MLModel</code>.</li> <li> <code>INPROGRESS</code> - The request is processing.</li> <li> <code>FAILED</code> - The request did not run to completion. The ML model isn't usable.</li> <li> <code>COMPLETED</code> - The request completed successfully.</li> <li> <code>DELETED</code> - The <code>MLModel</code> is marked as deleted. It isn't usable.</li> </ul>
     */
    Status?: 'PENDING'|'INPROGRESS'|'FAILED'|'COMPLETED'|'DELETED'|string;

    /**
     * <p>Long integer type that is a 64-bit signed number.</p>
     */
    SizeInBytes?: number;

    /**
     * <p>The current endpoint of the <code>MLModel</code></p>
     */
    EndpointInfo?: _UnmarshalledRealtimeEndpointInfo;

    /**
     * <p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as a map of key-value pairs.</p> <p>The following is the current set of training parameters: </p> <ul> <li> <p><code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.</p> <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p> </li> <li><p><code>sgd.maxPasses</code> - The number of times that the training process traverses the observations to build the <code>MLModel</code>. The value is an integer that ranges from <code>1</code> to <code>10000</code>. The default value is <code>10</code>.</p></li> <li><p><code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling data improves a model's ability to find the optimal solution for a variety of data types. The valid values are <code>auto</code> and <code>none</code>. The default value is <code>none</code>. We strongly recommend that you shuffle your data.</p></li> <li> <p><code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L1 normalization. This parameter can't be used when <code>L2</code> is specified. Use this parameter sparingly.</p> </li> <li> <p><code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L2 normalization. This parameter can't be used when <code>L1</code> is specified. Use this parameter sparingly.</p> </li> </ul>
     */
    TrainingParameters?: {[key: string]: string};

    /**
     * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
     */
    InputDataLocationS3?: string;

    /**
     * <p>Identifies the <code>MLModel</code> category. The following are the available types: </p> <ul> <li>REGRESSION -- Produces a numeric result. For example, "What price should a house be listed at?"</li> <li>BINARY -- Produces one of two possible results. For example, "Is this an e-commerce website?"</li> <li>MULTICLASS -- Produces one of several possible results. For example, "Is this a HIGH, LOW or MEDIUM risk trade?"</li> </ul>
     */
    MLModelType?: 'REGRESSION'|'BINARY'|'MULTICLASS'|string;

    /**
     * <p>The scoring threshold is used in binary classification <code>MLModel</code><?oxy_insert_start author="laurama" timestamp="20160329T114851-0700"> <?oxy_insert_end>models. It marks the boundary between a positive prediction and a negative prediction.</p> <p>Output values greater than or equal to the threshold receive a positive result from the MLModel, such as <code>true</code>. Output values less than the threshold receive a negative response from the MLModel, such as <code>false</code>.</p>
     */
    ScoreThreshold?: number;

    /**
     * <p>The time of the most recent edit to the <code>ScoreThreshold</code>. The time is expressed in epoch time.</p>
     */
    ScoreThresholdLastUpdatedAt?: Date;

    /**
     * <p>A link to the file that contains logs of the <code>CreateMLModel</code> operation.</p>
     */
    LogUri?: string;

    /**
     * <p>A description of the most recent details about accessing the <code>MLModel</code>.</p>
     */
    Message?: string;

    /**
     * <p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>MLModel</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>MLModel</code> is in the <code>COMPLETED</code> state.</p>
     */
    ComputeTime?: number;

    /**
     * <p>The epoch time when Amazon Machine Learning marked the <code>MLModel</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>MLModel</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>
     */
    FinishedAt?: Date;

    /**
     * <p>The epoch time when Amazon Machine Learning marked the <code>MLModel</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>MLModel</code> is in the <code>PENDING</code> state.</p>
     */
    StartedAt?: Date;

    /**
     * <p>The recipe to use when training the <code>MLModel</code>. The <code>Recipe</code> provides detailed information about the observation data to use during training, and manipulations to perform on the observation data during training.</p> <note><title>Note</title> <p>This parameter is provided as part of the verbose format.</p></note>
     */
    Recipe?: string;

    /**
     * <p>The schema used by all of the data files referenced by the <code>DataSource</code>.</p> <note><title>Note</title> <p>This parameter is provided as part of the verbose format.</p></note>
     */
    Schema?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}