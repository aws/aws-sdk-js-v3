import * as __aws_types from '@aws/types';

/**
 * HeadObjectOutput shape
 */
export interface HeadObjectOutput {
    /**
     * Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.
     */
    DeleteMarker?: boolean;

    /**
     * _AcceptRanges shape
     */
    AcceptRanges?: string;

    /**
     * If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key value pairs providing object expiration information. The value of the rule-id is URL encoded.
     */
    Expiration?: string;

    /**
     * Provides information about object restoration operation and expiration time of the restored object copy.
     */
    Restore?: string;

    /**
     * Last modified date of the object
     */
    LastModified?: Date;

    /**
     * Size of the body in bytes.
     */
    ContentLength?: number;

    /**
     * An ETag is an opaque identifier assigned by a web server to a specific version of a resource found at a URL
     */
    ETag?: string;

    /**
     * This is set to the number of metadata entries not returned in x-amz-meta headers. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.
     */
    MissingMeta?: number;

    /**
     * Version of the object.
     */
    VersionId?: string;

    /**
     * Specifies caching behavior along the request/reply chain.
     */
    CacheControl?: string;

    /**
     * Specifies presentational information for the object.
     */
    ContentDisposition?: string;

    /**
     * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
     */
    ContentEncoding?: string;

    /**
     * The language the content is in.
     */
    ContentLanguage?: string;

    /**
     * A standard MIME type describing the format of the object data.
     */
    ContentType?: string;

    /**
     * The date and time at which the object is no longer cacheable.
     */
    Expires?: Date;

    /**
     * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
     */
    WebsiteRedirectLocation?: string;

    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: 'AES256'|'aws:kms'|string;

    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: {[key: string]: string};

    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
     */
    SSECustomerAlgorithm?: string;

    /**
     * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round trip message integrity verification of the customer-provided encryption key.
     */
    SSECustomerKeyMD5?: string;

    /**
     * If present, specifies the ID of the AWS Key Management Service (KMS) master encryption key that was used for the object.
     */
    SSEKMSKeyId?: string;

    /**
     * _StorageClass shape
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;

    /**
     * If present, indicates that the requester was successfully charged for the request.
     */
    RequestCharged?: 'requester'|string;

    /**
     * _ReplicationStatus shape
     */
    ReplicationStatus?: 'COMPLETE'|'PENDING'|'FAILED'|'REPLICA'|string;

    /**
     * The count of parts this object has.
     */
    PartsCount?: number;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
