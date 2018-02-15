import {_UnmarshalledPart} from './_Part';
import {_UnmarshalledInitiator} from './_Initiator';
import {_UnmarshalledOwner} from './_Owner';
import * as __aws_types from '@aws/types';

/**
 * ListPartsOutput shape
 */
export interface ListPartsOutput {
    /**
     * _AbortDate shape
     */
    AbortDate?: Date;

    /**
     * _AbortRuleId shape
     */
    AbortRuleId?: string;

    /**
     * _BucketName shape
     */
    Bucket?: string;

    /**
     * _ObjectKey shape
     */
    Key?: string;

    /**
     * _MultipartUploadId shape
     */
    UploadId?: string;

    /**
     * _PartNumberMarker shape
     */
    PartNumberMarker?: number;

    /**
     * _NextPartNumberMarker shape
     */
    NextPartNumberMarker?: number;

    /**
     * _MaxParts shape
     */
    MaxParts?: number;

    /**
     * _IsTruncated shape
     */
    IsTruncated?: boolean;

    /**
     * _Parts shape
     */
    Parts?: Array<_UnmarshalledPart>;

    /**
     * _Initiator shape
     */
    Initiator?: _UnmarshalledInitiator;

    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;

    /**
     * _StorageClass shape
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;

    /**
     * _RequestCharged shape
     */
    RequestCharged?: 'requester'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
