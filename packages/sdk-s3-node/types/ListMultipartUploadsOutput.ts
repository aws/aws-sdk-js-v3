import {_UnmarshalledMultipartUpload} from './_MultipartUpload';
import {_UnmarshalledCommonPrefix} from './_CommonPrefix';
import * as __aws_types from '@aws/types';

/**
 * ListMultipartUploadsOutput shape
 */
export interface ListMultipartUploadsOutput {
    /**
     * _BucketName shape
     */
    Bucket?: string;

    /**
     * _KeyMarker shape
     */
    KeyMarker?: string;

    /**
     * _UploadIdMarker shape
     */
    UploadIdMarker?: string;

    /**
     * _NextKeyMarker shape
     */
    NextKeyMarker?: string;

    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _Delimiter shape
     */
    Delimiter?: string;

    /**
     * _NextUploadIdMarker shape
     */
    NextUploadIdMarker?: string;

    /**
     * _MaxUploads shape
     */
    MaxUploads?: number;

    /**
     * _IsTruncated shape
     */
    IsTruncated?: boolean;

    /**
     * _MultipartUploadList shape
     */
    Uploads?: Array<_UnmarshalledMultipartUpload>;

    /**
     * _CommonPrefixList shape
     */
    CommonPrefixes?: Array<_UnmarshalledCommonPrefix>;

    /**
     * _EncodingType shape
     */
    EncodingType?: 'url'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
