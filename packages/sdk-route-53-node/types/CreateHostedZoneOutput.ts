import {_UnmarshalledHostedZone} from './_HostedZone';
import {_UnmarshalledChangeInfo} from './_ChangeInfo';
import {_UnmarshalledDelegationSet} from './_DelegationSet';
import {_UnmarshalledVPC} from './_VPC';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type containing the response information for the hosted zone.</p>
 */
export interface CreateHostedZoneOutput {
    /**
     * <p>A complex type that contains general information about the hosted zone.</p>
     */
    HostedZone: _UnmarshalledHostedZone;

    /**
     * <p>A complex type that contains information about the <code>CreateHostedZone</code> request.</p>
     */
    ChangeInfo: _UnmarshalledChangeInfo;

    /**
     * <p>A complex type that describes the name servers for this hosted zone.</p>
     */
    DelegationSet: _UnmarshalledDelegationSet;

    /**
     * <p>A complex type that contains information about an Amazon VPC that you associated with this hosted zone.</p>
     */
    VPC?: _UnmarshalledVPC;

    /**
     * <p>The unique URL representing the new hosted zone.</p>
     */
    Location: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}