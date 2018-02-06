import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * CreateMLModelInput shape
 */
export interface CreateMLModelInput {
    /**
     * <p>A user-supplied ID that uniquely identifies the <code>MLModel</code>.</p>
     */
    MLModelId: string;

    /**
     * <p>A user-supplied name or description of the <code>MLModel</code>.</p>
     */
    MLModelName?: string;

    /**
     * <p>The category of supervised learning that this <code>MLModel</code> will address. Choose from the following types:</p> <ul> <li>Choose <code>REGRESSION</code> if the <code>MLModel</code> will be used to predict a numeric value.</li> <li>Choose <code>BINARY</code> if the <code>MLModel</code> result has two possible values.</li> <li>Choose <code>MULTICLASS</code> if the <code>MLModel</code> result has a limited number of values. </li> </ul> <p> For more information, see the <a href="http://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>.</p>
     */
    MLModelType: 'REGRESSION'|'BINARY'|'MULTICLASS'|string;

    /**
     * <p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as a map of key-value pairs.</p> <p>The following is the current set of training parameters: </p> <ul> <li> <p><code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.</p> <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p> </li> <li><p><code>sgd.maxPasses</code> - The number of times that the training process traverses the observations to build the <code>MLModel</code>. The value is an integer that ranges from <code>1</code> to <code>10000</code>. The default value is <code>10</code>.</p></li> <li> <p><code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are <code>auto</code> and <code>none</code>. The default value is <code>none</code>. We <?oxy_insert_start author="laurama" timestamp="20160329T131121-0700">strongly recommend that you shuffle your data.<?oxy_insert_end></p> </li> <li> <p><code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L1 normalization. This parameter can't be used when <code>L2</code> is specified. Use this parameter sparingly.</p> </li> <li> <p><code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p> <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>. The default is to not use L2 normalization. This parameter can't be used when <code>L1</code> is specified. Use this parameter sparingly.</p> </li> </ul>
     */
    Parameters?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>The <code>DataSource</code> that points to the training data.</p>
     */
    TrainingDataSourceId: string;

    /**
     * <p>The data recipe for creating the <code>MLModel</code>. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.</p>
     */
    Recipe?: string;

    /**
     * <p>The Amazon Simple Storage Service (Amazon S3) location and file name that contains the <code>MLModel</code> recipe. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.</p>
     */
    RecipeUri?: string;

    /**
     * The maximum number of times this operation should be retried. If set, this
     * value will override the `maxRetries` configuration set on the client for
     * this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __AbortSignal__

    /**
     * Per-request HTTP configuration options. If set, any options specified will
     * override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__
}