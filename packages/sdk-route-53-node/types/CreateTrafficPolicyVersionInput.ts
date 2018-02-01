import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * <p>A complex type that contains information about the traffic policy that you want to create a new version for.</p>
 */
export interface CreateTrafficPolicyVersionInput {
    /**
     * <p>The ID of the traffic policy for which you want to create a new version.</p>
     */
    Id: string;

    /**
     * <p>The definition of this version of the traffic policy, in JSON format. You specified the JSON in the <code>CreateTrafficPolicyVersion</code> request. For more information about the JSON format, see <a>CreateTrafficPolicy</a>.</p>
     */
    Document: string;

    /**
     * <p>The comment that you specified in the <code>CreateTrafficPolicyVersion</code> request, if any.</p>
     */
    Comment?: string;

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