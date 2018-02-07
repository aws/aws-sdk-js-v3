import {_UnmarshalledHostedZone} from './_HostedZone';
import {_UnmarshalledDelegationSet} from './_DelegationSet';
import {_UnmarshalledVPC} from './_VPC';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type that contain the response to a <code>GetHostedZone</code> request.</p>
 */
export interface GetHostedZoneOutput {
    /**
     * <p>A complex type that contains general information about the specified hosted zone.</p>
     */
    HostedZone: _UnmarshalledHostedZone;

    /**
     * <p>A complex type that lists the Amazon Route 53 name servers for the specified hosted zone.</p>
     */
    DelegationSet?: _UnmarshalledDelegationSet;

    /**
     * <p>A complex type that contains information about the VPCs that are associated with the specified hosted zone.</p>
     */
    VPCs?: Array<_UnmarshalledVPC>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}