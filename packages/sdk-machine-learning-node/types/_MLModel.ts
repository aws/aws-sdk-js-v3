import {_RealtimeEndpointInfo, _UnmarshalledRealtimeEndpointInfo} from './_RealtimeEndpointInfo';

/**
 * <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>
 */
export interface _MLModel {
    /**
     * <p>The ID assigned to the <code>MLModel</code> at creation.</p>
     */
    MLModelId?: string;

    /**
     * <p>The ID of the training <code>DataSource</code>. The <code>CreateMLModel</code> operation uses the <code>TrainingDataSourceId</code>.</p>
     */
    TrainingDataSourceId?: string;

    /**
     * <p>The AWS user account from which the <code>MLModel</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
     */
    CreatedByIamUser?: string;

    /**
     * <p>The time that the <code>MLModel</code> was created. The time is expressed in epoch time.</p>
     */
    CreatedAt?: Date|string|number;

    /**
     * <p>The time of the most recent edit to the <code>MLModel</code>. The time is expressed in epoch time.</p>
     */
    LastUpdatedAt?: Date|string|number;

    /**
     * <p>A user-supplied name or description of the <code>MLModel</code>.</p>
     */
    Name?: string;

    /**
     * <p>The current status of an <code>MLModel</code>. This element can have one of the following values: </p> <ul> <li> <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to create an <code>MLModel</code>.</li> <li> <code>INPROGRESS</code> - The creation process is underway.</li> <li> <code>FAILED</code> - The request to create an <code>MLModel</code> didn't run to completion. The model isn't usable.</li> <li> <code>COMPLETED</code> - The creation process completed successfully.</li> <li> <code>DELETED</code> - The <code>MLModel</code> is marked as deleted. It isn't usable.</li> </ul>
     */
    Status?: 'PENDING'|'INPROGRESS'|'FAILED'|'COMPLETED'|'DELETED'|string;

    /**
     * <p>Long integer type that is a 64-bit signed number.</p>
     */
    SizeInBytes?: number;

    /**
     * <p>The current endpoint of the <code>MLModel</code>.</p>
     */
    EndpointInfo?: _RealtimeEndpointInfo;

    /**
     * <p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as a map of key-value pairs.</p> <p>The following is the current set of training parameters: </p> <ul> <li> <p><code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.</p> <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p> </li> <li><p><code>sgd.maxPasses</code> - The number of times that the training process traverses the observations to build the <code>MLModel</code>. The value is an integer that ranges from <code>1</code> to <code>10000</code>. The default value is <code>10</code>.</p></li> <li><p><code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are <code>auto</code> and <code>none</code>. The default value is <code>none</code>.</p></li> <li> <p><code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm, which controls overfitting the data by penalizing large coefficients. This parameter tends to drive coefficients to zero, resulting in sparse feature set. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L1 normalization. This parameter can't be used when <code>L2</code> is specified. Use this parameter sparingly.</p> </li> <li> <p><code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm, which controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L2 normalization. This parameter can't be used when <code>L1</code> is specified. Use this parameter sparingly.</p> </li> </ul>
     */
    TrainingParameters?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
     */
    InputDataLocationS3?: string;

    /**
     * <p>The algorithm used to train the <code>MLModel</code>. The following algorithm is supported:</p> <ul> <li> <code>SGD</code> -- Stochastic gradient descent. The goal of <code>SGD</code> is to minimize the gradient of the loss function. </li> </ul>
     */
    Algorithm?: 'sgd'|string;

    /**
     * <p>Identifies the <code>MLModel</code> category. The following are the available types:</p> <ul> <li> <code>REGRESSION</code> - Produces a numeric result. For example, "What price should a house be listed at?"</li> <li> <code>BINARY</code> - Produces one of two possible results. For example, "Is this a child-friendly web site?".</li> <li> <code>MULTICLASS</code> - Produces one of several possible results. For example, "Is this a HIGH-, LOW-, or MEDIUM<?oxy_delete author="annbech" timestamp="20160328T175050-0700" content=" "><?oxy_insert_start author="annbech" timestamp="20160328T175050-0700">-<?oxy_insert_end>risk trade?".</li> </ul>
     */
    MLModelType?: 'REGRESSION'|'BINARY'|'MULTICLASS'|string;

    /**
     * _ScoreThreshold shape
     */
    ScoreThreshold?: number;

    /**
     * <p>The time of the most recent edit to the <code>ScoreThreshold</code>. The time is expressed in epoch time.</p>
     */
    ScoreThresholdLastUpdatedAt?: Date|string|number;

    /**
     * <p>A description of the most recent details about accessing the <code>MLModel</code>.</p>
     */
    Message?: string;

    /**
     * <p>Long integer type that is a 64-bit signed number.</p>
     */
    ComputeTime?: number;

    /**
     * <p>A timestamp represented in epoch time.</p>
     */
    FinishedAt?: Date|string|number;

    /**
     * <p>A timestamp represented in epoch time.</p>
     */
    StartedAt?: Date|string|number;
}

export interface _UnmarshalledMLModel extends _MLModel {
    /**
     * <p>The time that the <code>MLModel</code> was created. The time is expressed in epoch time.</p>
     */
    CreatedAt?: Date;

    /**
     * <p>The time of the most recent edit to the <code>MLModel</code>. The time is expressed in epoch time.</p>
     */
    LastUpdatedAt?: Date;

    /**
     * <p>The current endpoint of the <code>MLModel</code>.</p>
     */
    EndpointInfo?: _UnmarshalledRealtimeEndpointInfo;

    /**
     * <p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as a map of key-value pairs.</p> <p>The following is the current set of training parameters: </p> <ul> <li> <p><code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.</p> <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p> </li> <li><p><code>sgd.maxPasses</code> - The number of times that the training process traverses the observations to build the <code>MLModel</code>. The value is an integer that ranges from <code>1</code> to <code>10000</code>. The default value is <code>10</code>.</p></li> <li><p><code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are <code>auto</code> and <code>none</code>. The default value is <code>none</code>.</p></li> <li> <p><code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm, which controls overfitting the data by penalizing large coefficients. This parameter tends to drive coefficients to zero, resulting in sparse feature set. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L1 normalization. This parameter can't be used when <code>L2</code> is specified. Use this parameter sparingly.</p> </li> <li> <p><code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm, which controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L2 normalization. This parameter can't be used when <code>L1</code> is specified. Use this parameter sparingly.</p> </li> </ul>
     */
    TrainingParameters?: {[key: string]: string};

    /**
     * <p>The time of the most recent edit to the <code>ScoreThreshold</code>. The time is expressed in epoch time.</p>
     */
    ScoreThresholdLastUpdatedAt?: Date;

    /**
     * <p>A timestamp represented in epoch time.</p>
     */
    FinishedAt?: Date;

    /**
     * <p>A timestamp represented in epoch time.</p>
     */
    StartedAt?: Date;
}