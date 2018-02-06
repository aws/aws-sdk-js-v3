import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * CopyObjectInput shape
 */
export interface CopyObjectInput {
    /**
     * The canned ACL to apply to the object.
     */
    ACL?: 'private'|'public-read'|'public-read-write'|'authenticated-read'|'aws-exec-read'|'bucket-owner-read'|'bucket-owner-full-control'|string;

    /**
     * _BucketName shape
     */
    Bucket: string;

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
     * The name of the source bucket and key name of the source object, separated by a slash (/). Must be URL-encoded.
     */
    CopySource: string;

    /**
     * Copies the object if its entity tag (ETag) matches the specified tag.
     */
    CopySourceIfMatch?: string;

    /**
     * Copies the object if it has been modified since the specified time.
     */
    CopySourceIfModifiedSince?: Date|string|number;

    /**
     * Copies the object if its entity tag (ETag) is different than the specified ETag.
     */
    CopySourceIfNoneMatch?: string;

    /**
     * Copies the object if it hasn't been modified since the specified time.
     */
    CopySourceIfUnmodifiedSince?: Date|string|number;

    /**
     * The date and time at which the object is no longer cacheable.
     */
    Expires?: Date|string|number;

    /**
     * Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.
     */
    GrantFullControl?: string;

    /**
     * Allows grantee to read the object data and its metadata.
     */
    GrantRead?: string;

    /**
     * Allows grantee to read the object ACL.
     */
    GrantReadACP?: string;

    /**
     * Allows grantee to write the ACL for the applicable object.
     */
    GrantWriteACP?: string;

    /**
     * _ObjectKey shape
     */
    Key: string;

    /**
     * A map of metadata to store with the object in S3.
     */
    Metadata?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.
     */
    MetadataDirective?: 'COPY'|'REPLACE'|string;

    /**
     * Specifies whether the object tag-set are copied from the source object or replaced with tag-set provided in the request.
     */
    TaggingDirective?: 'COPY'|'REPLACE'|string;

    /**
     * The Server-side encryption algorithm used when storing this object in S3 (e.g., AES256, aws:kms).
     */
    ServerSideEncryption?: 'AES256'|'aws:kms'|string;

    /**
     * The type of storage to use for the object. Defaults to 'STANDARD'.
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;

    /**
     * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
     */
    WebsiteRedirectLocation?: string;

    /**
     * Specifies the algorithm to use to when encrypting the object (e.g., AES256).
     */
    SSECustomerAlgorithm?: string;

    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side​-encryption​-customer-algorithm header.
     */
    SSECustomerKey?: ArrayBuffer|ArrayBufferView|string;

    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: string;

    /**
     * Specifies the AWS KMS key ID to use for object encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not made via SSL or using SigV4. Documentation on configuring any of the officially supported AWS SDKs and CLI can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version
     */
    SSEKMSKeyId?: string;

    /**
     * Specifies the algorithm to use when decrypting the source object (e.g., AES256).
     */
    CopySourceSSECustomerAlgorithm?: string;

    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
     */
    CopySourceSSECustomerKey?: ArrayBuffer|ArrayBufferView|string;

    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    CopySourceSSECustomerKeyMD5?: string;

    /**
     * Confirms that the requester knows that she or he will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html
     */
    RequestPayer?: 'requester'|string;

    /**
     * The tag-set for the object destination object this value must be used in conjunction with the TaggingDirective. The tag-set must be encoded as URL Query parameters
     */
    Tagging?: string;

    /**
     * Whether to use the bucket name as the endpoint for this request. The bucket
    name must be a domain name with a CNAME record alias to an appropriate virtual
    hosted-style S3 hostname, e.g. a bucket of `images.johnsmith.net` and a DNS
    record of:

    ```
    images.johnsmith.net CNAME 			images.johnsmith.net.s3.amazonaws.com.
    ```

    @see https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs
     */
    $bucketEndpoint?: string;

    /**
     * Whether to force path style URLs for S3 objects (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of https://<bucketName>.s3.amazonaws.com/<key>
     */
    $forcePathStyle?: boolean;

    /**
     * Whether to use the S3 Transfer Acceleration endpoint by default
     */
    $useAccelerateEndpoint?: boolean;

    /**
     * Enables IPv6/IPv4 dualstack endpoint. When a DNS lookup is performed on an endpoint of this type, it returns an “A” record with an IPv4 address and an “AAAA” record with an IPv6 address. In most cases the network stack in the client environment will automatically prefer the AAAA record and make a connection using the IPv6 address. Note, however, that currently on Windows, the IPv4 address will be preferred.
     */
    $useDualstackEndpoint?: boolean;

    /**
     * The maximum number of times this operation should be retried. If set, this
     * value will override the `maxRetries` configuration set on the client for
     * this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __AbortSignal__

    /**
     * Per-request HTTP configuration options. If set, any options specified will
     * override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__
}