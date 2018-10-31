import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains information about the request to create a hosted zone.</p>
 */
export interface GetReusableDelegationSetLimitInput {
    /**
     * <p>Specify <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code> to get the maximum number of hosted zones that you can associate with the specified reusable delegation set.</p>
     */
    Type: 'MAX_ZONES_BY_REUSABLE_DELEGATION_SET'|string;

    /**
     * <p>The ID of the delegation set that you want to get the limit for.</p>
     */
    DelegationSetId: string;

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