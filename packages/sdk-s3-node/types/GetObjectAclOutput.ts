import {_UnmarshalledOwner} from './_Owner';
import {_UnmarshalledGrant} from './_Grant';
import * as __aws_types from '@aws/types';

/**
 * GetObjectAclOutput shape
 */
export interface GetObjectAclOutput {
    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;

    /**
     * A list of grants.
     */
    Grants?: Array<_UnmarshalledGrant>;

    /**
     * If present, indicates that the requester was successfully charged for the request.
     */
    RequestCharged?: 'requester'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata?: __aws_types.ResponseMetadata;
}
