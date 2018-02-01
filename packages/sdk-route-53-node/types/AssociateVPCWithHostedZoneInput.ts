import {_VPC} from './_VPC';
import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * <p>A complex type that contains information about the request to associate a VPC with a private hosted zone.</p>
 */
export interface AssociateVPCWithHostedZoneInput {
    /**
     * <p>The ID of the private hosted zone that you want to associate an Amazon VPC with.</p> <p>Note that you can't associate a VPC with a hosted zone that doesn't have an existing VPC association.</p>
     */
    HostedZoneId: string;

    /**
     * <p>A complex type that contains information about the VPC that you want to associate with a private hosted zone.</p>
     */
    VPC: _VPC;

    /**
     * <p> <i>Optional:</i> A comment about the association request.</p>
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