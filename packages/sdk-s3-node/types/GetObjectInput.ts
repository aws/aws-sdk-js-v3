import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * GetObjectInput shape
 */
export interface GetObjectInput {
    /**
     * _BucketName shape
     */
    Bucket: string;

    /**
     * Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed).
     */
    IfMatch?: string;

    /**
     * Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified).
     */
    IfModifiedSince?: Date|string|number;

    /**
     * Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified).
     */
    IfNoneMatch?: string;

    /**
     * Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed).
     */
    IfUnmodifiedSince?: Date|string|number;

    /**
     * _ObjectKey shape
     */
    Key: string;

    /**
     * Downloads the specified range bytes of an object. For more information about the HTTP Range header, go to http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.
     */
    Range?: string;

    /**
     * Sets the Cache-Control header of the response.
     */
    ResponseCacheControl?: string;

    /**
     * Sets the Content-Disposition header of the response
     */
    ResponseContentDisposition?: string;

    /**
     * Sets the Content-Encoding header of the response.
     */
    ResponseContentEncoding?: string;

    /**
     * Sets the Content-Language header of the response.
     */
    ResponseContentLanguage?: string;

    /**
     * Sets the Content-Type header of the response.
     */
    ResponseContentType?: string;

    /**
     * Sets the Expires header of the response.
     */
    ResponseExpires?: Date|string|number;

    /**
     * VersionId used to reference a specific version of the object.
     */
    VersionId?: string;

    /**
     * Specifies the algorithm to use to when encrypting the object (e.g., AES256).
     */
    SSECustomerAlgorithm?: string;

    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side​-encryption​-customer-algorithm header.
     */
    SSECustomerKey?: string;

    /**
     * Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure the encryption key was transmitted without error.
     */
    SSECustomerKeyMD5?: string;

    /**
     * Confirms that the requester knows that she or he will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html
     */
    RequestPayer?: 'requester'|string;

    /**
     * Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' GET request for the part specified. Useful for downloading just a part of an object.
     */
    PartNumber?: number;

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