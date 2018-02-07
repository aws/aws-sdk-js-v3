import {NodeHttpOptions as __HttpOptions__} from '@aws/types';
import * as __aws_types from '@aws/types';

/**
 * <p>This action deletes a health check.</p>
 */
export interface DeleteHealthCheckInput {
    /**
     * <p>The ID of the health check that you want to delete.</p>
     */
    HealthCheckId: string;

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