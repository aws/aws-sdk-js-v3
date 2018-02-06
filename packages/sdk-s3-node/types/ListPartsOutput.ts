import {_UnmarshalledPart} from './_Part';
import {_UnmarshalledInitiator} from './_Initiator';
import {_UnmarshalledOwner} from './_Owner';
import * as __aws_types from '@aws/types';

/**
 * ListPartsOutput shape
 */
export interface ListPartsOutput {
    /**
     * Date when multipart upload will become eligible for abort operation by lifecycle.
     */
    AbortDate?: Date;

    /**
     * Id of the lifecycle rule that makes a multipart upload eligible for abort operation.
     */
    AbortRuleId?: string;

    /**
     * Name of the bucket to which the multipart upload was initiated.
     */
    Bucket?: string;

    /**
     * Object key for which the multipart upload was initiated.
     */
    Key?: string;

    /**
     * Upload ID identifying the multipart upload whose parts are being listed.
     */
    UploadId?: string;

    /**
     * Part number after which listing begins.
     */
    PartNumberMarker?: number;

    /**
     * When a list is truncated, this element specifies the last part in the list, as well as the value to use for the part-number-marker request parameter in a subsequent request.
     */
    NextPartNumberMarker?: number;

    /**
     * Maximum number of parts that were allowed in the response.
     */
    MaxParts?: number;

    /**
     * Indicates whether the returned list of parts is truncated.
     */
    IsTruncated?: boolean;

    /**
     * _Parts shape
     */
    Parts?: Array<_UnmarshalledPart>;

    /**
     * Identifies who initiated the multipart upload.
     */
    Initiator?: _UnmarshalledInitiator;

    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;

    /**
     * The class of storage used to store the object.
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;

    /**
     * If present, indicates that the requester was successfully charged for the request.
     */
    RequestCharged?: 'requester'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata?: __aws_types.ResponseMetadata;
}
