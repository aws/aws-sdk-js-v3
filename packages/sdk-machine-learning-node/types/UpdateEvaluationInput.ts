import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * UpdateEvaluationInput shape
 */
export interface UpdateEvaluationInput {
    /**
     * <p>The ID assigned to the <code>Evaluation</code> during creation.</p>
     */
    EvaluationId: string;

    /**
     * <p>A new user-supplied name or description of the <code>Evaluation</code> that will replace the current content. </p>
     */
    EvaluationName: string;

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