import {_UnmarshalledMultipartUpload} from './_MultipartUpload';
import {_UnmarshalledCommonPrefix} from './_CommonPrefix';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * ListMultipartUploadsOutput shape
 */
export interface ListMultipartUploadsOutput {
    /**
     * Name of the bucket to which the multipart upload was initiated.
     */
    Bucket?: string;

    /**
     * The key at or after which the listing began.
     */
    KeyMarker?: string;

    /**
     * Upload ID after which listing began.
     */
    UploadIdMarker?: string;

    /**
     * When a list is truncated, this element specifies the value that should be used for the key-marker request parameter in a subsequent request.
     */
    NextKeyMarker?: string;

    /**
     * When a prefix is provided in the request, this field contains the specified prefix. The result contains only keys starting with the specified prefix.
     */
    Prefix?: string;

    /**
     * _Delimiter shape
     */
    Delimiter?: string;

    /**
     * When a list is truncated, this element specifies the value that should be used for the upload-id-marker request parameter in a subsequent request.
     */
    NextUploadIdMarker?: string;

    /**
     * Maximum number of multipart uploads that could have been included in the response.
     */
    MaxUploads?: number;

    /**
     * Indicates whether the returned list of multipart uploads is truncated. A value of true indicates that the list was truncated. The list can be truncated if the number of multipart uploads exceeds the limit allowed or specified by max uploads.
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
     * Encoding type used by Amazon S3 to encode object keys in the response.
     */
    EncodingType?: 'url'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}