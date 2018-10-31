import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains information about the traffic policy that you want to update the comment for.</p>
 */
export interface UpdateTrafficPolicyCommentInput {
    /**
     * <p>The value of <code>Id</code> for the traffic policy that you want to update the comment for.</p>
     */
    Id: string;

    /**
     * <p>The value of <code>Version</code> for the traffic policy that you want to update the comment for.</p>
     */
    Version: number;

    /**
     * <p>The new comment for the specified traffic policy and version.</p>
     */
    Comment: string;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}