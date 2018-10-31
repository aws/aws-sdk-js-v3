import {_UnmarshalledVPC} from './_VPC';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListVPCAssociationAuthorizationsOutput {
    /**
     * <p>The ID of the hosted zone that you can associate the listed VPCs with.</p>
     */
    HostedZoneId: string;

    /**
     * <p>When the response includes a <code>NextToken</code> element, there are more VPCs that can be associated with the specified hosted zone. To get the next page of VPCs, submit another <code>ListVPCAssociationAuthorizations</code> request, and include the value of the <code>NextToken</code> element from the response in the <code>nexttoken</code> request parameter.</p>
     */
    NextToken?: string;

    /**
     * <p>The list of VPCs that are authorized to be associated with the specified hosted zone.</p>
     */
    VPCs: Array<_UnmarshalledVPC>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
