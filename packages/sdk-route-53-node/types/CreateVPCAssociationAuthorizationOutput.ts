import {_UnmarshalledVPC} from './_VPC';
import * as __aws_types from '@aws/types';

/**
 * <p>A complex type that contains the response information from a <code>CreateVPCAssociationAuthorization</code> request.</p>
 */
export interface CreateVPCAssociationAuthorizationOutput {
    /**
     * <p>The ID of the hosted zone that you authorized associating a VPC with.</p>
     */
    HostedZoneId: string;

    /**
     * <p>The VPC that you authorized associating with a hosted zone.</p>
     */
    VPC: _UnmarshalledVPC;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
