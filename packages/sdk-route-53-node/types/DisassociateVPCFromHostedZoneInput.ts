import {_VPC} from './_VPC';
import {NodeHttpOptions as __HttpOptions__} from '@aws/types';
import * as __aws_types from '@aws/types';

/**
 * <p>A complex type that contains information about the VPC that you want to disassociate from a specified private hosted zone.</p>
 */
export interface DisassociateVPCFromHostedZoneInput {
    /**
     * <p>The ID of the private hosted zone that you want to disassociate a VPC from.</p>
     */
    HostedZoneId: string;

    /**
     * <p>A complex type that contains information about the VPC that you're disassociating from the specified hosted zone.</p>
     */
    VPC: _VPC;

    /**
     * <p> <i>Optional:</i> A comment about the disassociation request.</p>
     */
    Comment?: string;

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